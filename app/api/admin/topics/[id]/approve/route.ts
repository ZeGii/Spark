
import { NextRequest, NextResponse } from 'next/server'
import { verifyAdminAuth } from '@/lib/auth-utils'
import { prisma } from '@/lib/db'
import { calculateDeadline } from '@/lib/workflow-utils'

export const dynamic = 'force-dynamic'

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const authResult = await verifyAdminAuth(request)
    if (!authResult.success) {
      return NextResponse.json({ error: authResult.error }, { status: 401 })
    }

    const topicId = params.id
    const body = await request.json()
    const { voteThreshold } = body

    // Get default vote threshold if not provided
    let threshold = voteThreshold
    if (!threshold) {
      const defaultThresholdSetting = await prisma.adminSettings.findUnique({
        where: { key: 'default_vote_threshold' }
      })
      threshold = defaultThresholdSetting ? parseInt(defaultThresholdSetting.value) : 50
    }

    const approvalDate = new Date()
    const deadline = calculateDeadline(approvalDate)

    // Get topic details for notification
    const topic = await prisma.topic.findUnique({
      where: { id: topicId },
      include: {
        proposedBy: {
          select: { id: true, name: true, email: true }
        }
      }
    })

    if (!topic) {
      return NextResponse.json({ error: 'Topic not found' }, { status: 404 })
    }

    // Update topic status with approval details
    const updatedTopic = await prisma.topic.update({
      where: { id: topicId },
      data: { 
        status: 'APPROVED',
        voteThreshold: threshold,
        approvalDate,
        deadline,
        approvedById: authResult.user!.id,
        updatedAt: new Date()
      }
    })

    // Create notification for topic owner
    await prisma.notification.create({
      data: {
        title: 'Topic Approved!',
        message: `Great news! Your topic "${topic.title}" has been approved and is now open for voting. It needs ${threshold} votes within 15 days to qualify for research.`,
        userId: topic.proposedById,
        topicId: topic.id
      }
    })

    return NextResponse.json({ 
      success: true, 
      topic: updatedTopic,
      message: 'Topic approved successfully'
    })
  } catch (error) {
    console.error('Topic approve error:', error)
    return NextResponse.json(
      { error: 'Failed to approve topic' },
      { status: 500 }
    )
  }
}
