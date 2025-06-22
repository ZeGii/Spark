
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { getUserFromRequest, requireAdmin } from '@/lib/auth-utils';

export const dynamic = 'force-dynamic';

// POST /api/admin/topics/[id]/convert
export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const user = await getUserFromRequest(request);
    requireAdmin(user);

    const topic = await prisma.topic.findUnique({
      where: { id: params.id },
      include: {
        proposedBy: {
          select: { id: true, name: true, email: true }
        }
      }
    });

    if (!topic) {
      return NextResponse.json(
        { error: 'Topic not found' },
        { status: 404 }
      );
    }

    if (topic.status !== 'QUALIFIED') {
      return NextResponse.json(
        { error: 'Only qualified topics can be converted to research' },
        { status: 400 }
      );
    }

    // Start a transaction to create research record and update topic
    const result = await prisma.$transaction(async (tx: any) => {
      // Create research record
      const research = await tx.research.create({
        data: {
          title: topic.title,
          brief: topic.description,
          executiveSummary: 'Research in progress...',
          methodology: 'To be determined',
          keyFindings: [],
          releaseDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days from now
          topicId: topic.id
        }
      });

      // Update topic status
      const updatedTopic = await tx.topic.update({
        where: { id: params.id },
        data: {
          status: 'CONVERTED',
          convertedAt: new Date()
        }
      });

      return { research, topic: updatedTopic };
    });

    // Create notification for topic owner
    await prisma.notification.create({
      data: {
        title: 'Topic Converted to Research',
        message: `Great news! Your topic "${topic.title}" has been converted to a research project and is now in production.`,
        userId: topic.proposedById,
        topicId: topic.id
      }
    });

    return NextResponse.json({
      message: 'Topic converted to research successfully',
      research: result.research,
      topic: result.topic
    });
  } catch (error: any) {
    console.error('Topic conversion error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to convert topic to research' },
      { status: error.message?.includes('required') ? 403 : 500 }
    );
  }
}
