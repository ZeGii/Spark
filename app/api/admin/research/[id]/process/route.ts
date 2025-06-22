
export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { readFile } from 'fs/promises';
import path from 'path';

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const researchId = params.id;

    // Get research with documents and topic
    const research = await prisma.research.findUnique({
      where: { id: researchId },
      include: {
        topic: true,
        researchDocuments: true,
        opportunities: true
      }
    });

    if (!research) {
      return NextResponse.json(
        { error: 'Research not found' },
        { status: 404 }
      );
    }

    if (research.researchDocuments.length === 0) {
      return NextResponse.json(
        { error: 'No documents available for processing' },
        { status: 400 }
      );
    }

    // Update status to processing
    await prisma.research.update({
      where: { id: researchId },
      data: { aiProcessingStatus: 'PROCESSING' }
    });

    // Process each document and extract content
    const documentContents: { [key: string]: string } = {};
    
    for (const doc of research.researchDocuments) {
      try {
        const filePath = path.resolve(doc.filePath);
        const fileBuffer = await readFile(filePath);
        
        if (doc.mimeType === 'application/pdf') {
          // For PDF files, use LLM API with base64 encoding
          const base64Content = fileBuffer.toString('base64');
          const dataUri = `data:application/pdf;base64,${base64Content}`;
          
          const response = await fetch('https://apps.abacus.ai/v1/chat/completions', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${process.env.ABACUSAI_API_KEY}`
            },
            body: JSON.stringify({
              model: 'gpt-4.1-mini',
              messages: [{
                role: 'user',
                content: [
                  {
                    type: 'file',
                    file: {
                      filename: doc.originalName,
                      file_data: dataUri
                    }
                  },
                  {
                    type: 'text',
                    text: `Extract all key information from this ${doc.documentType} document. Focus on market data, competitive insights, opportunities, and key findings. Provide a comprehensive summary of the content.`
                  }
                ]
              }]
            })
          });

          if (response.ok) {
            const result = await response.json();
            documentContents[doc.documentType || 'unknown'] = result.choices[0]?.message?.content || '';
          }
        }
        
        // Update document processing status
        await prisma.researchDocument.update({
          where: { id: doc.id },
          data: { aiProcessingStatus: 'COMPLETED' }
        });
        
      } catch (error) {
        console.error(`Error processing document ${doc.id}:`, error);
        await prisma.researchDocument.update({
          where: { id: doc.id },
          data: { aiProcessingStatus: 'FAILED' }
        });
      }
    }

    // Generate research content using AI with improved prompt
    const contentGenerationPrompt = `
You are a professional market research analyst. Based on the following research documents for "${research.topic?.title || 'Market Research'}" in the ${research.topic?.industry || 'Technology'} industry in ${research.topic?.country || 'Global'}, generate comprehensive research content.

DOCUMENT CONTENT:
${Object.entries(documentContents).map(([type, content]) => `
--- ${type.toUpperCase().replace('_', ' ')} ---
${content.substring(0, 3000)}${content.length > 3000 ? '...' : ''}
`).join('\n')}

Generate research content in the following JSON format. Ensure all fields are properly filled with realistic and professional content:

{
  "title": "Professional research title that captures the essence of the market analysis",
  "brief": "Clear 2-3 sentence description summarizing the key findings and market opportunity",
  "executiveSummary": "Comprehensive executive summary covering market size, growth trends, key players, opportunities, and strategic recommendations (minimum 200 words)",
  "methodology": "Detailed description of research methodology including data sources, analysis techniques, and validation methods",
  "keyFindings": [
    "Key market insight #1 with specific data or trends",
    "Key competitive landscape finding #2",
    "Key opportunity or challenge #3",
    "Key consumer behavior or demand pattern #4",
    "Key growth driver or market dynamic #5"
  ],
  "marketSize": "Market size with currency and time period (e.g., USD 2.1B in 2024)",
  "growthRate": "Annual growth rate with timeframe (e.g., 15.3% CAGR 2024-2029)",
  "competitorCount": 12,
  "opportunities": [
    {
      "title": "Specific opportunity title that is actionable",
      "description": "Detailed description of the opportunity, target market, and potential impact (minimum 100 words)",
      "severity": 7,
      "urgency": 6,
      "marketSize": "USD 150M",
      "impact": "High"
    }
  ]
}

Important: Respond with raw JSON only. Do not include code blocks, markdown formatting, or any text before or after the JSON object.
    `;

    const contentResponse = await fetch('https://apps.abacus.ai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.ABACUSAI_API_KEY}`
      },
      body: JSON.stringify({
        model: 'gpt-4.1-mini',
        messages: [{
          role: 'user',
          content: contentGenerationPrompt
        }],
        response_format: { type: "json_object" }
      })
    });

    let generatedContent: any = {};
    if (contentResponse.ok) {
      const result = await contentResponse.json();
      const rawContent = result.choices[0]?.message?.content || '{}';
      
      let cleanedContent = '';
      try {
        // Comprehensive JSON cleaning and parsing
        cleanedContent = rawContent
          .replace(/```json|```/g, '')  // Remove markdown code blocks
          .replace(/^[^{]*{/, '{')       // Remove any text before first {
          .replace(/}[^}]*$/, '}')       // Remove any text after last }
          .trim();
        
        // Fix common JSON issues
        cleanedContent = cleanedContent
          .replace(/,(\s*[}\]])/g, '$1')    // Remove trailing commas
          .replace(/([{,]\s*)(\w+):/g, '$1"$2":')  // Quote unquoted keys
          .replace(/:\s*'([^']*?)'/g, ': "$1"')    // Replace single quotes with double quotes
          .replace(/\n/g, ' ')             // Remove newlines
          .replace(/\s+/g, ' ');           // Normalize whitespace
        
        generatedContent = JSON.parse(cleanedContent);
        
        // Validate required fields
        if (!generatedContent.title) generatedContent.title = 'AI-Generated Market Research';
        if (!generatedContent.brief) generatedContent.brief = 'Comprehensive market analysis and insights';
        if (!generatedContent.marketSize) generatedContent.marketSize = 'TBD';
        if (!generatedContent.growthRate) generatedContent.growthRate = 'TBD';
        if (!generatedContent.opportunities) generatedContent.opportunities = [];
        
        console.log('Successfully parsed AI-generated content:', Object.keys(generatedContent));
        
      } catch (parseError) {
        console.error('JSON parsing error:', parseError);
        console.log('Raw content (first 500 chars):', rawContent.substring(0, 500));
        console.log('Cleaned content:', cleanedContent.substring(0, 500));
        
        // Fallback content with some extracted info
        generatedContent = {
          title: 'AI-Generated Market Research',
          brief: 'Market analysis based on uploaded documents',
          executiveSummary: rawContent.substring(0, 500) + '...',
          marketSize: 'TBD',
          growthRate: 'TBD',
          opportunities: []
        };
      }
    } else {
      console.error('AI API response error:', contentResponse.status, contentResponse.statusText);
      const errorText = await contentResponse.text();
      console.error('Error response:', errorText);
    }

    // Update research with generated content
    const updateData: any = {
      aiProcessingStatus: 'COMPLETED',
      updatedAt: new Date()
    };

    // Only update fields that were successfully generated
    if (generatedContent.title) updateData.title = generatedContent.title;
    if (generatedContent.brief) updateData.brief = generatedContent.brief;
    if (generatedContent.executiveSummary) updateData.executiveSummary = generatedContent.executiveSummary;
    if (generatedContent.methodology) updateData.methodology = generatedContent.methodology;
    if (generatedContent.keyFindings && Array.isArray(generatedContent.keyFindings)) {
      updateData.keyFindings = generatedContent.keyFindings;
    }
    if (generatedContent.marketSize) updateData.marketSize = generatedContent.marketSize;
    if (generatedContent.growthRate) updateData.growthRate = generatedContent.growthRate;
    if (generatedContent.competitorCount && typeof generatedContent.competitorCount === 'number') {
      updateData.competitorCount = generatedContent.competitorCount;
    }

    const updatedResearch = await prisma.research.update({
      where: { id: researchId },
      data: updateData
    });

    // Create opportunities if generated
    if (generatedContent.opportunities && Array.isArray(generatedContent.opportunities)) {
      // Delete existing opportunities for this research
      await prisma.opportunity.deleteMany({
        where: { researchId }
      });

      // Create new opportunities
      const opportunityPromises = generatedContent.opportunities.map((opp: any) => 
        prisma.opportunity.create({
          data: {
            researchId,
            title: opp.title || 'Untitled Opportunity',
            problemStatement: opp.description || 'No problem statement available',
            targetAudience: opp.targetAudience || 'General market',
            marketEvidence: opp.marketEvidence || 'Market analysis required',
            geographicFocus: { primary: [research.topic.country], secondary: [], tertiary: [] },
            marketSize: opp.marketSize || 'Unknown',
            growthRate: opp.growthRate || null,
            severity: Math.min(Math.max(opp.severity || 3, 1), 10),
            urgency: Math.min(Math.max(opp.urgency || 3, 1), 10),
            opportunityStatement: opp.description || 'Opportunity analysis required',
            creativityNote: opp.impact || null,
            isPublished: false
          }
        })
      );

      await Promise.all(opportunityPromises);
    }

    return NextResponse.json({
      success: true,
      message: 'AI processing completed successfully',
      updates: generatedContent,
      research: updatedResearch
    });

  } catch (error) {
    console.error('AI processing error:', error);
    
    // Update status to failed
    await prisma.research.update({
      where: { id: params.id },
      data: { aiProcessingStatus: 'FAILED' }
    }).catch(console.error);

    return NextResponse.json(
      { error: 'AI processing failed' },
      { status: 500 }
    );
  }
}
