
import { ResearchDocument, Research, Opportunity } from '@prisma/client';

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
  constructor() {}

  async extractTextFromPDF(filePath: string): Promise<string> {
    try {
      // For demo purposes, return sample text from our market discovery report
      return `Market Discovery Report: Global Fresh and Frozen Fruits and Vegetables Export Opportunities for Egyptian Startup Company

A. Executive Summary
The global fresh and frozen fruits and vegetables import market presents exceptional opportunities for Egyptian exporters, with the market valued between USD 733.87 billion to USD 1.38 trillion in 2024 and projected growth of 3.3-8.7% CAGR through 2030.

Most Critical POU Points Identified:
High-Priority Problems:
- Quality degradation during transit affecting 15-20% of imported produce
- Winter supply gaps in European markets (November-April) creating 25-40% price premiums
- Organic market supply constraints despite 20-40% price premiums and 9.9% CAGR growth

Immediate Opportunities:
- Seasonal arbitrage leveraging Egypt's November-April citrus season against European winter demand
- Direct distributor relationships enabling 50-70% wholesale margins
- Asian market expansion, particularly China's 12.5% import growth rate

B. Methodology
This comprehensive market discovery analysis employed a multi-phase research methodology combining quantitative market data analysis, competitive landscape assessment, and consumer behavior investigation.

C. POU Findings
POU Point 1: Cold Chain Management Failures Creating Quality Loss
Problem Statement: Improper cold chain management affects 25-30% of perishable shipments, with temperature excursions during transport leading to accelerated spoilage and 15-20% quality degradation in imported produce.

Target Audience Profile:
- Primary: European premium distributors (Genuport Trade GmbH, Kühne + Heitz, Swiss Chalet Fine Foods)
- Demographics: B2B importers handling USD 10-50 million annual volumes
- Geography: Germany (USD 28B imports), Netherlands (USD 16B), UK (USD 22B)

Market Evidence:
- Cold chain costs increased 25-30% post-pandemic
- Premium distributors willing to pay 15-25% more for guaranteed quality delivery

Geographic Focus:
- Primary: Germany, Netherlands, Belgium (major distribution hubs)
- Secondary: UK, France (high-value retail markets)
- Tertiary: Scandinavia (premium positioning opportunities)

Severity & Urgency: CRITICAL - Immediate revenue opportunity with established demand and willing buyers.

Creativity Note: Partnership with modular cold chain providers (KryoTrans, LCX Fresh) enables low-capital entry with superior quality delivery.`;
    } catch (error) {
      console.error('Error extracting PDF text:', error);
      throw new Error('Failed to extract text from PDF');
    }
  }

  async processDocument(text: string): Promise<ExtractedContent> {
    try {
      // Parse the document structure based on the sample format
      const sections = this.parseDocumentSections(text);
      
      return {
        title: this.extractTitle(text),
        executiveSummary: sections.executiveSummary || '',
        methodology: sections.methodology || '',
        keyFindings: this.extractKeyFindings(sections),
        marketSize: this.extractMarketSize(text),
        growthRate: this.extractGrowthRate(text),
        competitorCount: this.extractCompetitorCount(text),
        opportunities: this.extractOpportunities(sections)
      };
    } catch (error) {
      console.error('Error processing document:', error);
      throw new Error('Failed to process document content');
    }
  }

  private parseDocumentSections(text: string): Record<string, string> {
    const sections: Record<string, string> = {};
    
    // Extract Executive Summary
    const execSummaryMatch = text.match(/A\.\s*Executive Summary(.*?)(?=B\.|$)/s);
    if (execSummaryMatch) {
      sections.executiveSummary = execSummaryMatch[1].trim();
    }

    // Extract Methodology
    const methodologyMatch = text.match(/B\.\s*Methodology(.*?)(?=C\.|$)/s);
    if (methodologyMatch) {
      sections.methodology = methodologyMatch[1].trim();
    }

    // Extract POU Findings
    const pouMatch = text.match(/C\.\s*POU Findings(.*?)(?=D\.|$)/s);
    if (pouMatch) {
      sections.pouFindings = pouMatch[1].trim();
    }

    return sections;
  }

  private extractTitle(text: string): string {
    // Extract title from the first few lines
    const lines = text.split('\n').slice(0, 5);
    for (const line of lines) {
      if (line.includes('Market Discovery Report') || line.includes('Report:')) {
        return line.replace(/Market Discovery Report:?\s*/i, '').trim();
      }
    }
    return 'Market Research Report';
  }

  private extractKeyFindings(sections: Record<string, string>): string[] {
    const findings: string[] = [];
    
    if (sections.executiveSummary) {
      // Extract bullet points and key insights
      const bulletPoints = sections.executiveSummary.match(/[-•]\s*([^-•\n]+)/g);
      if (bulletPoints) {
        findings.push(...bulletPoints.map(point => point.replace(/^[-•]\s*/, '').trim()));
      }
    }

    if (sections.pouFindings) {
      // Extract POU points as findings
      const pouPoints = sections.pouFindings.match(/POU Point \d+:([^P]+)/g);
      if (pouPoints) {
        findings.push(...pouPoints.map(point => point.replace(/POU Point \d+:\s*/, '').trim().substring(0, 200)));
      }
    }

    return findings.length > 0 ? findings : ['Market analysis completed', 'Opportunities identified', 'Strategic recommendations provided'];
  }

  private extractMarketSize(text: string): string | undefined {
    // Look for market size patterns
    const patterns = [
      /market.*?valued.*?(USD\s*[\d.,]+\s*(?:billion|trillion|million))/i,
      /market size.*?(USD\s*[\d.,]+\s*(?:billion|trillion|million))/i,
      /(USD\s*[\d.,]+\s*(?:billion|trillion|million)).*?market/i
    ];

    for (const pattern of patterns) {
      const match = text.match(pattern);
      if (match) {
        return match[1];
      }
    }

    return undefined;
  }

  private extractGrowthRate(text: string): string | undefined {
    // Look for CAGR patterns
    const patterns = [
      /(\d+\.?\d*%)\s*CAGR/i,
      /CAGR.*?(\d+\.?\d*%)/i,
      /growth.*?(\d+\.?\d*%)/i
    ];

    for (const pattern of patterns) {
      const match = text.match(pattern);
      if (match) {
        return match[1];
      }
    }

    return undefined;
  }

  private extractCompetitorCount(text: string): number | undefined {
    // Look for competitor mentions
    const competitorMatches = text.match(/competitor/gi);
    return competitorMatches ? competitorMatches.length : undefined;
  }

  private extractOpportunities(sections: Record<string, string>): OpportunityData[] {
    const opportunities: OpportunityData[] = [];
    
    if (!sections.pouFindings) {
      return opportunities;
    }

    // Extract POU points
    const pouPointPattern = /POU Point (\d+):(.*?)(?=POU Point \d+:|$)/gs;
    let match;

    while ((match = pouPointPattern.exec(sections.pouFindings)) !== null) {
      const pouContent = match[2];
      const opportunity = this.parsePOUPoint(pouContent);
      if (opportunity) {
        opportunities.push(opportunity);
      }
    }

    return opportunities;
  }

  private parsePOUPoint(content: string): OpportunityData | null {
    try {
      // Extract title
      const titleMatch = content.match(/^([^\n]+)/);
      const title = titleMatch ? titleMatch[1].trim() : 'Market Opportunity';

      // Extract problem statement
      const problemMatch = content.match(/Problem Statement:\s*([^T]+?)(?=Target|$)/s);
      const problemStatement = problemMatch ? problemMatch[1].trim() : '';

      // Extract target audience
      const audienceMatch = content.match(/Target Audience Profile:\s*([^M]+?)(?=Market Evidence|$)/s);
      const targetAudience = audienceMatch ? audienceMatch[1].trim() : '';

      // Extract market evidence
      const evidenceMatch = content.match(/Market Evidence:\s*([^G]+?)(?=Geographic Focus|$)/s);
      const marketEvidence = evidenceMatch ? evidenceMatch[1].trim() : '';

      // Extract geographic focus
      const geoMatch = content.match(/Geographic Focus:\s*([^S]+?)(?=Severity|$)/s);
      const geoText = geoMatch ? geoMatch[1] : '';
      const geographicFocus = this.parseGeographicFocus(geoText);

      // Extract market size
      const marketSizeMatch = content.match(/market.*?(USD\s*[\d.,]+\s*(?:billion|trillion|million))/i);
      const marketSize = marketSizeMatch ? marketSizeMatch[1] : 'Market size data available';

      // Extract growth rate
      const growthMatch = content.match(/(\d+\.?\d*%)\s*(?:CAGR|growth)/i);
      const growthRate = growthMatch ? growthMatch[1] : undefined;

      // Extract severity and urgency
      const severityMatch = content.match(/Severity & Urgency:\s*([^C]+?)(?=Creativity|$)/s);
      const severityText = severityMatch ? severityMatch[1] : '';
      const { severity, urgency } = this.parseSeverityUrgency(severityText);

      // Extract opportunity statement
      const opportunityStatement = problemStatement || 'Strategic market opportunity identified';

      // Extract creativity note
      const creativityMatch = content.match(/Creativity Note:\s*([^\n]+)/);
      const creativityNote = creativityMatch ? creativityMatch[1].trim() : undefined;

      return {
        title,
        problemStatement,
        targetAudience,
        marketEvidence,
        geographicFocus,
        marketSize,
        growthRate,
        severity,
        urgency,
        opportunityStatement,
        creativityNote
      };
    } catch (error) {
      console.error('Error parsing POU point:', error);
      return null;
    }
  }

  private parseGeographicFocus(text: string): { primary: string[]; secondary: string[]; tertiary: string[] } {
    const result: { primary: string[]; secondary: string[]; tertiary: string[] } = { primary: [], secondary: [], tertiary: [] };
    
    const primaryMatch = text.match(/Primary:\s*([^S]+?)(?=Secondary|$)/s);
    if (primaryMatch) {
      result.primary = this.extractCountries(primaryMatch[1]);
    }

    const secondaryMatch = text.match(/Secondary:\s*([^T]+?)(?=Tertiary|$)/s);
    if (secondaryMatch) {
      result.secondary = this.extractCountries(secondaryMatch[1]);
    }

    const tertiaryMatch = text.match(/Tertiary:\s*([^\n]+)/s);
    if (tertiaryMatch) {
      result.tertiary = this.extractCountries(tertiaryMatch[1]);
    }

    return result;
  }

  private extractCountries(text: string): string[] {
    // Extract country/region names
    const countries = text.match(/[A-Z][a-z]+(?:\s+[A-Z][a-z]+)*/g) || [];
    return countries.filter(country => 
      country.length > 2 && 
      !['Primary', 'Secondary', 'Tertiary', 'Market', 'Evidence'].includes(country)
    );
  }

  private parseSeverityUrgency(text: string): { severity: number; urgency: number } {
    let severity = 5; // Default medium
    let urgency = 5; // Default medium

    if (text.includes('CRITICAL') || text.includes('HIGH')) {
      severity = 8;
      urgency = 8;
    } else if (text.includes('MEDIUM')) {
      severity = 5;
      urgency = 5;
    } else if (text.includes('LOW')) {
      severity = 3;
      urgency = 3;
    }

    return { severity, urgency };
  }
}

export const aiDocumentProcessor = new AIDocumentProcessor();
