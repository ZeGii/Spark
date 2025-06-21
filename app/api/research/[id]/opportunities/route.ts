
export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const researchId = params.id;

    const opportunities = await prisma.opportunity.findMany({
      where: {
        researchId,
        isPublished: true
      },
      include: {
        _count: {
          select: {
            opportunitySparks: true
          }
        }
      },
      orderBy: {
        severity: 'desc'
      }
    });

    return NextResponse.json({
      opportunities: opportunities.map(opp => ({
        id: opp.id,
        title: opp.title,
        problemStatement: opp.problemStatement,
        targetAudience: opp.targetAudience,
        geographicFocus: opp.geographicFocus,
        marketSize: opp.marketSize,
        growthRate: opp.growthRate,
        severity: opp.severity,
        urgency: opp.urgency,
        sparkCount: opp._count.opportunitySparks,
        releaseDate: opp.releaseDate
      }))
    });

  } catch (error) {
    console.error('Research opportunities fetch error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch research opportunities' },
      { status: 500 }
    );
  }
}
