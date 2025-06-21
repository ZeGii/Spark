
export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { aiDocumentProcessor } from '@/lib/ai-document-processor';

export async function POST(request: NextRequest) {
  try {
    const { documentId } = await request.json();

    if (!documentId) {
      return NextResponse.json({ error: 'Document ID required' }, { status: 400 });
    }

    // Get document
    const document = await prisma.researchDocument.findUnique({
      where: { id: documentId },
      include: { research: true }
    });

    if (!document) {
      return NextResponse.json({ error: 'Document not found' }, { status: 404 });
    }

    // Update processing status
    await prisma.researchDocument.update({
      where: { id: documentId },
      data: { aiProcessingStatus: 'PROCESSING' }
    });

    try {
      // Extract text from PDF
      const extractedText = await aiDocumentProcessor.extractTextFromPDF(document.filePath);
      
      // Process document content
      const processedContent = await aiDocumentProcessor.processDocument(extractedText);

      // Update research record with AI-processed content
      const updatedResearch = await prisma.research.update({
        where: { id: document.researchId },
        data: {
          title: processedContent.title,
          executiveSummary: processedContent.executiveSummary,
          methodology: processedContent.methodology,
          keyFindings: processedContent.keyFindings,
          marketSize: processedContent.marketSize,
          growthRate: processedContent.growthRate,
          competitorCount: processedContent.competitorCount,
          aiProcessingStatus: 'COMPLETED',
          aiProcessingMetadata: {
            processedAt: new Date().toISOString(),
            documentId: documentId,
            opportunitiesGenerated: processedContent.opportunities.length
          }
        }
      });

      // Create opportunity records
      const opportunities = await Promise.all(
        processedContent.opportunities.map(opp => 
          prisma.opportunity.create({
            data: {
              title: opp.title,
              problemStatement: opp.problemStatement,
              targetAudience: opp.targetAudience,
              marketEvidence: opp.marketEvidence,
              geographicFocus: opp.geographicFocus,
              marketSize: opp.marketSize,
              growthRate: opp.growthRate,
              severity: opp.severity,
              urgency: opp.urgency,
              opportunityStatement: opp.opportunityStatement,
              creativityNote: opp.creativityNote,
              researchId: document.researchId,
              releaseDate: updatedResearch.releaseDate
            }
          })
        )
      );

      // Update document processing status
      await prisma.researchDocument.update({
        where: { id: documentId },
        data: {
          aiProcessingStatus: 'COMPLETED',
          processedAt: new Date(),
          extractedContent: extractedText,
          aiProcessingMetadata: {
            opportunitiesCreated: opportunities.length,
            processedAt: new Date().toISOString()
          }
        }
      });

      return NextResponse.json({
        success: true,
        research: updatedResearch,
        opportunities: opportunities.map(opp => ({
          id: opp.id,
          title: opp.title,
          problemStatement: opp.problemStatement,
          severity: opp.severity,
          urgency: opp.urgency
        })),
        message: `Successfully processed document and created ${opportunities.length} opportunities`
      });

    } catch (processingError) {
      console.error('Processing error:', processingError);
      
      // Update document with failed status
      await prisma.researchDocument.update({
        where: { id: documentId },
        data: {
          aiProcessingStatus: 'FAILED',
          aiProcessingMetadata: {
            error: processingError instanceof Error ? processingError.message : 'Processing failed',
            failedAt: new Date().toISOString()
          }
        }
      });

      return NextResponse.json(
        { error: 'Failed to process document content' },
        { status: 500 }
      );
    }

  } catch (error) {
    console.error('Process error:', error);
    return NextResponse.json(
      { error: 'Failed to process document' },
      { status: 500 }
    );
  }
}
