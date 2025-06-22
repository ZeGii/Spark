
import { NextRequest, NextResponse } from 'next/server'
import { verifyAdminAuth } from '@/lib/auth-utils'
import { prisma } from '@/lib/db'
import { isTopicExpired } from '@/lib/workflow-utils'

export const dynamic = 'force-dynamic'

export async function POST(request: NextRequest) {
  try {
    const authResult = await verifyAdminAuth(request)
    if (!authResult.success) {
      return NextResponse.json({ error: authResult.error }, { status: 401 })
    }

    // Find all approved topics that have expired deadlines
    const expiredTopics = await prisma.topic.findMany({
      where: {
        status: 'APPROVED',
        deadline: {
          not: null,
          lt: new Date()
        }
      },
      include: {
        proposedBy: {
          select: { id: true, name: true, email: true }
        }
      }
    })

    let processedCount = 0
    let qualifiedCount = 0

    for (const topic of expiredTopics) {
      // Check if topic reached threshold despite expiring
      if (topic.voteThreshold && topic.voteCount >= topic.voteThreshold) {
        // Qualify the topic
        await prisma.topic.update({
          where: { id: topic.id },
          data: { status: 'QUALIFIED' }
        })

        // Create notification
        await prisma.notification.create({
          data: {
            title: 'Topic Qualified!',
            message: `Congratulations! Your topic "${topic.title}" reached the vote threshold and is now qualified for research.`,
            userId: topic.proposedById,
            topicId: topic.id
          }
        })

        qualifiedCount++
      } else {
        // Topic expired without reaching threshold - keep as APPROVED but mark as expired
        await prisma.notification.create({
          data: {
            title: 'Topic Voting Period Ended',
            message: `The voting period for your topic "${topic.title}" has ended. It received ${topic.voteCount} votes but needed ${topic.voteThreshold || 50} to qualify for research.`,
            userId: topic.proposedById,
            topicId: topic.id
          }
        })
      }

      processedCount++
    }

    return NextResponse.json({
      success: true,
      processedCount,
      qualifiedCount,
      message: `Processed ${processedCount} expired topics, ${qualifiedCount} qualified for research`
    })
  } catch (error) {
    console.error('Error processing deadlines:', error)
    return NextResponse.json(
      { error: 'Failed to process deadlines' },
      { status: 500 }
    )
  }
}
