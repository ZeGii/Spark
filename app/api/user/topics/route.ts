
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { getUserFromRequest, requireAuth } from '@/lib/auth-utils';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  try {
    const user = await getUserFromRequest(request);
    requireAuth(user);

    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');

    const where: any = {
      proposedById: user!.id
    };

    if (status && status !== 'all') {
      where.status = status;
    }

    const topics = await prisma.topic.findMany({
      where,
      include: {
        proposedBy: {
          select: {
            name: true,
            username: true
          }
        },
        approvedBy: {
          select: {
            name: true,
            username: true
          }
        },
        _count: {
          select: {
            votes: true
          }
        }
      },
      orderBy: [
        { createdAt: 'desc' }
      ]
    });

    // Get user's topic statistics
    const stats = await prisma.topic.groupBy({
      by: ['status'],
      where: {
        proposedById: user!.id
      },
      _count: {
        status: true
      }
    });

    const statsMap = stats.reduce((acc, stat) => {
      acc[stat.status.toLowerCase()] = stat._count.status;
      return acc;
    }, {} as Record<string, number>);

    const totalTopics = await prisma.topic.count({
      where: { proposedById: user!.id }
    });

    return NextResponse.json({
      topics,
      stats: {
        totalTopics,
        pendingTopics: statsMap.pending || 0,
        approvedTopics: statsMap.approved || 0,
        qualifiedTopics: statsMap.qualified || 0,
        convertedTopics: statsMap.converted || 0,
        completedTopics: statsMap.completed || 0,
        rejectedTopics: statsMap.rejected || 0
      }
    });
  } catch (error: any) {
    console.error('Error fetching user topics:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to fetch topics' },
      { status: error.message?.includes('required') ? 403 : 500 }
    );
  }
}
