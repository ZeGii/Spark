
export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const opportunityId = params.id;

    const opportunity = await prisma.opportunity.findUnique({
      where: { 
        id: opportunityId,
        isPublished: true 
      },
      include: {
        research: {
          include: {
            topic: true
          }
        },
        _count: {
          select: {
            opportunitySparks: true
          }
        }
      }
    });

    if (!opportunity) {
      return NextResponse.json(
        { error: 'Opportunity not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      id: opportunity.id,
      title: opportunity.title,
      problemStatement: opportunity.problemStatement,
      targetAudience: opportunity.targetAudience,
      marketEvidence: opportunity.marketEvidence,
      geographicFocus: opportunity.geographicFocus,
      marketSize: opportunity.marketSize,
      growthRate: opportunity.growthRate,
      severity: opportunity.severity,
      urgency: opportunity.urgency,
      opportunityStatement: opportunity.opportunityStatement,
      creativityNote: opportunity.creativityNote,
      sparkCount: opportunity._count.opportunitySparks,
      releaseDate: opportunity.releaseDate,
      research: {
        id: opportunity.research.id,
        title: opportunity.research.title,
        brief: opportunity.research.brief,
        releaseDate: opportunity.research.releaseDate,
        topic: {
          industry: opportunity.research.topic.industry,
          country: opportunity.research.topic.country
        }
      }
    });

  } catch (error) {
    console.error('Opportunity fetch error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch opportunity' },
      { status: 500 }
    );
  }
}
