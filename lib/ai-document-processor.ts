
import { ResearchDocument, Research, Opportunity } from '@prisma/client';
import { readFile } from 'fs/promises';

export interface ExtractedContent {
  title: string;
  executiveSummary: string;
  methodology: string;
  keyFindings: string[];
  marketSize?: string;
  growthRate?: string;
  competitorCount?: number;
  opportunities: OpportunityData[];
}

export interface OpportunityData {
  title: string;
  problemStatement: string;
  targetAudience: string;
  marketEvidence: string;
  geographicFocus: {
    primary: string[];
    secondary: string[];
    tertiary: string[];
  };
  marketSize: string;
  growthRate?: string;
  severity: number;
  urgency: number;
  opportunityStatement: string;
  creativityNote?: string;
}

export class AIDocumentProcessor {
  private apiKey: string;
  private baseUrl = 'https://apps.abacus.ai';

  constructor() {
    this.apiKey = process.env.ABACUSAI_API_KEY || '';
    if (!this.apiKey) {
      throw new Error('ABACUSAI_API_KEY is not configured');
    }
  }

  async extractTextFromPDF(filePath: string): Promise<string> {
    try {
      // Read PDF file as base64
      const fileBuffer = await readFile(filePath);
      const base64Data = fileBuffer.toString('base64');
      const dataUri = `data:application/pdf;base64,${base64Data}`;
      
      const response = await fetch(`${this.baseUrl}/v1/chat/completions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`
        },
        body: JSON.stringify({
          model: 'gpt-4.1-mini',
          messages: [{
            role: 'user',
            content: [{
              type: 'file',
              file: {
                filename: 'research-document.pdf',
                file_data: dataUri
              }
            }, {
              type: 'text',
              text: 'Please extract all text content from this PDF document. Return only the raw text content without any formatting or additional commentary.'
            }]
          }],
          max_tokens: 8000
        })
      });

      if (!response.ok) {
        throw new Error(`AI API error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      const extractedText = data.choices[0]?.message?.content || '';
      
      if (!extractedText) {
        throw new Error('No text content extracted from PDF');
      }

      return extractedText;
    } catch (error) {
      console.error('Error extracting PDF text:', error);
      throw new Error('Failed to extract text from PDF');
    }
  }

  async processDocument(text: string): Promise<ExtractedContent> {
    try {
      // First, extract basic research information
      const researchInfo = await this.extractResearchInfo(text);
      
      // Then, extract market opportunities
      const opportunities = await this.extractMarketOpportunities(text);
      
      return {
        ...researchInfo,
        opportunities
      };
    } catch (error) {
      console.error('Error processing document:', error);
      throw new Error('Failed to process document content');
    }
  }

  private async extractResearchInfo(text: string): Promise<Omit<ExtractedContent, 'opportunities'>> {
    try {
      const response = await fetch(`${this.baseUrl}/v1/chat/completions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`
        },
        body: JSON.stringify({
          model: 'gpt-4.1-mini',
          messages: [{
            role: 'user',
            content: `Analyze this market research document and extract the following information in JSON format:

{
  "title": "Main title or topic of the research",
  "executiveSummary": "Executive summary or main overview (2-3 paragraphs)",
  "methodology": "Research methodology description",
  "keyFindings": ["Array of 3-5 key findings or insights"],
  "marketSize": "Market size if mentioned (e.g., '$12.5B', 'USD 1.2 trillion')",
  "growthRate": "Growth rate if mentioned (e.g., '15.3%', '+8.7% CAGR')",
  "competitorCount": "Number of competitors mentioned (as integer)"
}

Document content:
${text}

Respond with raw JSON only. Do not include code blocks, markdown, or any other formatting.`
          }],
          response_format: { type: "json_object" },
          max_tokens: 2000
        })
      });

      if (!response.ok) {
        throw new Error(`AI API error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      const rawContent = data.choices[0]?.message?.content || '{}';
      
      // Clean and parse JSON response
      const cleanContent = rawContent.replace(/```json\s*|\s*```/g, '').trim();
      const researchInfo = JSON.parse(cleanContent);

      return {
        title: researchInfo.title || 'Market Research Report',
        executiveSummary: researchInfo.executiveSummary || '',
        methodology: researchInfo.methodology || '',
        keyFindings: Array.isArray(researchInfo.keyFindings) ? researchInfo.keyFindings : [],
        marketSize: researchInfo.marketSize || undefined,
        growthRate: researchInfo.growthRate || undefined,
        competitorCount: typeof researchInfo.competitorCount === 'number' ? researchInfo.competitorCount : undefined
      };
    } catch (error) {
      console.error('Error extracting research info:', error);
      throw new Error('Failed to extract research information');
    }
  }

  private async extractMarketOpportunities(text: string): Promise<OpportunityData[]> {
    try {
      const response = await fetch(`${this.baseUrl}/v1/chat/completions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`
        },
        body: JSON.stringify({
          model: 'gpt-4.1-mini',
          messages: [{
            role: 'user',
            content: `Analyze this market research document and identify 2-4 specific market opportunities. For each opportunity, extract information in this JSON format:

{
  "opportunities": [
    {
      "title": "Short descriptive title of the opportunity",
      "problemStatement": "Clear description of the problem or gap in the market",
      "targetAudience": "Specific target audience or customer segment",
      "marketEvidence": "Evidence supporting this market opportunity",
      "geographicFocus": {
        "primary": ["List of primary target countries/regions"],
        "secondary": ["List of secondary markets"],
        "tertiary": ["List of tertiary markets or expansion opportunities"]
      },
      "marketSize": "Estimated market size or opportunity value",
      "growthRate": "Growth rate if available (optional)",
      "severity": 7, // Scale 1-10 (how severe/critical is the problem)
      "urgency": 8, // Scale 1-10 (how urgent is addressing this opportunity)
      "opportunityStatement": "One sentence opportunity statement",
      "creativityNote": "Creative approach or unique angle (optional)"
    }
  ]
}

Look for:
- Market gaps or unmet needs
- Pain points mentioned by consumers or businesses  
- Emerging trends or growth areas
- Competitive weaknesses to exploit
- Geographic expansion opportunities
- Technology or innovation opportunities

Document content:
${text}

Respond with raw JSON only. Do not include code blocks, markdown, or any other formatting.`
          }],
          response_format: { type: "json_object" },
          max_tokens: 3000
        })
      });

      if (!response.ok) {
        throw new Error(`AI API error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      const rawContent = data.choices[0]?.message?.content || '{"opportunities": []}';
      
      // Clean and parse JSON response
      const cleanContent = rawContent.replace(/```json\s*|\s*```/g, '').trim();
      const result = JSON.parse(cleanContent);

      return Array.isArray(result.opportunities) ? result.opportunities : [];
    } catch (error) {
      console.error('Error extracting opportunities:', error);
      throw new Error('Failed to extract market opportunities');
    }
  }


}

export const aiDocumentProcessor = new AIDocumentProcessor();
