
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { getUserFromRequest, requireAuth } from '@/lib/auth-utils';
import { shouldAutoQualify, isTopicExpired } from '@/lib/workflow-utils';

export const dynamic = 'force-dynamic';

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const user = await getUserFromRequest(request);
    requireAuth(user);

    const topicId = params.id;
    const userId = user!.id;

    // Get topic details
    const topic = await prisma.topic.findUnique({
      where: { id: topicId },
      include: {
        proposedBy: {
          select: { id: true, name: true, email: true }
        }
      }
    });

    if (!topic) {
      return NextResponse.json({ error: 'Topic not found' }, { status: 404 });
    }

    // Check if topic is approved and open for voting
    if (topic.status !== 'APPROVED') {
      return NextResponse.json(
        { error: 'Topic is not open for voting' },
        { status: 400 }
      );
    }

    // Check if voting period has expired
    if (isTopicExpired(topic.deadline)) {
      return NextResponse.json(
        { error: 'Voting period has expired' },
        { status: 400 }
      );
    }

    // Check if user already voted
    const existingVote = await prisma.vote.findUnique({
      where: {
        topicId_userId: {
          topicId,
          userId
        }
      }
    });

    if (existingVote) {
      return NextResponse.json({ error: 'Already voted' }, { status: 400 });
    }

    // Create vote and update topic vote count
    const result = await prisma.$transaction(async (tx) => {
      // Create the vote
      await tx.vote.create({
        data: {
          topicId,
          userId
        }
      });

      // Update topic vote count
      const updatedTopic = await tx.topic.update({
        where: { id: topicId },
        data: {
          voteCount: {
            increment: 1
          }
        }
      });

      // Check if topic should be auto-qualified
      if (shouldAutoQualify(updatedTopic.voteCount, updatedTopic.voteThreshold)) {
        const qualifiedTopic = await tx.topic.update({
          where: { id: topicId },
          data: {
            status: 'QUALIFIED'
          }
        });

        // Create notification for topic owner
        await tx.notification.create({
          data: {
            title: 'Topic Qualified!',
            message: `Congratulations! Your topic "${topic.title}" has reached the vote threshold and is now qualified for research.`,
            userId: topic.proposedById,
            topicId: topic.id
          }
        });

        return { topic: qualifiedTopic, qualified: true };
      }

      return { topic: updatedTopic, qualified: false };
    });

    return NextResponse.json({
      success: true,
      voteCount: result.topic.voteCount,
      qualified: result.qualified,
      status: result.topic.status
    });
  } catch (error: any) {
    console.error('Error voting on topic:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to vote' },
      { status: error.message?.includes('required') ? 403 : 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const user = await getUserFromRequest(request);
    requireAuth(user);

    const topicId = params.id;
    const userId = user!.id;

    // Get topic details
    const topic = await prisma.topic.findUnique({
      where: { id: topicId }
    });

    if (!topic) {
      return NextResponse.json({ error: 'Topic not found' }, { status: 404 });
    }

    // Check if user has voted
    const existingVote = await prisma.vote.findUnique({
      where: {
        topicId_userId: {
          topicId,
          userId
        }
      }
    });

    if (!existingVote) {
      return NextResponse.json({ error: 'You have not voted on this topic' }, { status: 400 });
    }

    // Remove vote and update topic vote count
    const result = await prisma.$transaction(async (tx) => {
      // Remove the vote
      await tx.vote.delete({
        where: {
          topicId_userId: {
            topicId,
            userId
          }
        }
      });

      // Update topic vote count
      const updatedTopic = await tx.topic.update({
        where: { id: topicId },
        data: {
          voteCount: {
            decrement: 1
          }
        }
      });

      return { topic: updatedTopic };
    });

    return NextResponse.json({
      success: true,
      voteCount: result.topic.voteCount,
      status: result.topic.status
    });
  } catch (error: any) {
    console.error('Error removing vote:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to remove vote' },
      { status: error.message?.includes('required') ? 403 : 500 }
    );
  }
}
