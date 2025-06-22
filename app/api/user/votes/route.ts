
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { getUserFromRequest, requireAuth } from '@/lib/auth-utils';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  try {
    const user = await getUserFromRequest(request);
    requireAuth(user);

    const userVotes = await prisma.vote.findMany({
      where: {
        userId: user!.id
      },
      select: {
        topicId: true,
        votedAt: true
      },
      orderBy: {
        votedAt: 'desc'
      }
    });

    return NextResponse.json(userVotes);
  } catch (error: any) {
    console.error('Error fetching user votes:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to fetch user votes' },
      { status: error.message?.includes('required') ? 403 : 500 }
    );
  }
}
