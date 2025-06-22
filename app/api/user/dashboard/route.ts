
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { getUserFromRequest, requireAuth } from '@/lib/auth-utils';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  try {
    const user = await getUserFromRequest(request);
    requireAuth(user);

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

    // Get recent topics (last 5)
    const recentTopics = await prisma.topic.findMany({
      where: {
        proposedById: user!.id
      },
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
      orderBy: {
        createdAt: 'desc'
      },
      take: 5
    });

    // Get unread notifications
    const unreadNotifications = await prisma.notification.findMany({
      where: {
        userId: user!.id,
        read: false
      },
      orderBy: {
        createdAt: 'desc'
      },
      take: 10
    });

    return NextResponse.json({
      stats: {
        totalTopics,
        pendingTopics: statsMap.pending || 0,
        approvedTopics: statsMap.approved || 0,
        qualifiedTopics: statsMap.qualified || 0,
        convertedTopics: statsMap.converted || 0,
        completedTopics: statsMap.completed || 0,
        rejectedTopics: statsMap.rejected || 0
      },
      recentTopics,
      unreadNotifications
    });
  } catch (error: any) {
    console.error('Error fetching user dashboard:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to fetch dashboard data' },
      { status: error.message?.includes('required') ? 403 : 500 }
    );
  }
}
