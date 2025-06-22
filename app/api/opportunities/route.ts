
export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '12');
    const search = searchParams.get('search') || '';
    const industry = searchParams.get('industry') || '';
    const country = searchParams.get('country') || '';
    const minSeverity = searchParams.get('minSeverity') ? parseInt(searchParams.get('minSeverity')!) : undefined;
    const sortBy = searchParams.get('sortBy') || 'releaseDate';
    const sortOrder = searchParams.get('sortOrder') || 'desc';

    const skip = (page - 1) * limit;

    // Build where clause
    const where: any = {
      isPublished: true
    };

    if (search) {
      where.OR = [
        { title: { contains: search, mode: 'insensitive' } },
        { problemStatement: { contains: search, mode: 'insensitive' } },
        { targetAudience: { contains: search, mode: 'insensitive' } }
      ];
    }

    if (industry) {
      where.research = {
        topic: {
          industry: { contains: industry, mode: 'insensitive' }
        }
      };
    }

    if (country) {
      where.OR = [
        ...(where.OR || []),
        { geographicFocus: { path: ['primary'], array_contains: [country] } },
        { geographicFocus: { path: ['secondary'], array_contains: [country] } },
        { geographicFocus: { path: ['tertiary'], array_contains: [country] } }
      ];
    }

    if (minSeverity) {
      where.severity = { gte: minSeverity };
    }

    // Build orderBy
    const orderBy: any = {};
    if (sortBy === 'releaseDate') {
      orderBy.releaseDate = sortOrder;
    } else if (sortBy === 'severity') {
      orderBy.severity = sortOrder;
    } else if (sortBy === 'urgency') {
      orderBy.urgency = sortOrder;
    } else if (sortBy === 'sparkCount') {
      orderBy.sparkCount = sortOrder;
    }

    const [opportunities, total] = await Promise.all([
      prisma.opportunity.findMany({
        where,
        include: {
          research: {
            include: {
              topic: {
                select: {
                  industry: true,
                  country: true
                }
              }
            }
          },
          _count: {
            select: {
              opportunitySparks: true
            }
          }
        },
        orderBy,
        skip,
        take: limit
      }),
      prisma.opportunity.count({ where })
    ]);

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
        releaseDate: opp.releaseDate,
        research: {
          title: opp.research.title,
          industry: opp.research.topic?.industry,
          country: opp.research.topic?.country
        }
      })),
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    });

  } catch (error) {
    console.error('Opportunities fetch error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch opportunities' },
      { status: 500 }
    );
  }
}
