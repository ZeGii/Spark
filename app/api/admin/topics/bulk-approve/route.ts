
import { NextRequest, NextResponse } from 'next/server'
import { verifyAdminAuth } from '@/lib/auth-utils'
import { prisma } from '@/lib/db'
import { calculateDeadline } from '@/lib/workflow-utils'

export const dynamic = 'force-dynamic'

export async function POST(request: NextRequest) {
  try {
    // Verify admin authentication - matches individual approve
    const authResult = await verifyAdminAuth(request)
    if (!authResult.success) {
      return NextResponse.json({ error: authResult.error }, { status: 401 })
    }

    const body = await request.json()
    const { topicIds, voteThreshold } = body

    if (!Array.isArray(topicIds) || topicIds.length === 0) {
      return NextResponse.json(
        { error: 'Invalid topic IDs provided' },
        { status: 400 }
      )
    }

    // Get default vote threshold if not provided - matches individual approve
    let threshold = voteThreshold
    if (!threshold) {
      const defaultThresholdSetting = await prisma.adminSettings.findUnique({
        where: { key: 'default_vote_threshold' }
      })
      threshold = defaultThresholdSetting ? parseInt(defaultThresholdSetting.value) : 50
    }

    if (typeof threshold !== 'number' || threshold < 1) {
      return NextResponse.json(
        { error: 'Invalid vote threshold provided' },
        { status: 400 }
      )
    }

    // Validate that all topics exist and are in PENDING status
    const existingTopics = await prisma.topic.findMany({
      where: {
        id: { in: topicIds }
      },
      select: { 
        id: true, 
        title: true, 
        status: true,
        proposedBy: {
          select: {
            id: true,
            name: true,
            email: true
          }
        }
      }
    })

    if (existingTopics.length !== topicIds.length) {
      const foundIds = existingTopics.map((t: any) => t.id)
      const missingIds = topicIds.filter(id => !foundIds.includes(id))
      return NextResponse.json(
        { error: `Topics not found: ${missingIds.join(', ')}` },
        { status: 404 }
      )
    }

    // Check if any topics are not in PENDING status
    const nonPendingTopics = existingTopics.filter((t: any) => t.status !== 'PENDING')
    if (nonPendingTopics.length > 0) {
      return NextResponse.json(
        { 
          error: `Cannot approve topics that are not pending: ${nonPendingTopics.map((t: any) => t.title).join(', ')}` 
        },
        { status: 400 }
      )
    }

    // Use transaction to ensure data consistency
    const result = await prisma.$transaction(async (tx: any) => {
      const approvalDate = new Date()
      const deadline = calculateDeadline(approvalDate) // Use same function as individual approve

      // Update all topics to APPROVED status - matches individual approve exactly
      const updatedTopics = await tx.topic.updateMany({
        where: {
          id: { in: topicIds }
        },
        data: {
          status: 'APPROVED',
          voteThreshold: threshold,
          approvalDate,
          deadline,
          approvedById: authResult.user!.id, // Use actual admin user ID
          updatedAt: new Date()
        }
      })

      // Create notifications for topic submitters - matches individual approve message
      const notifications = existingTopics.map((topic: any) => ({
        userId: topic.proposedBy.id,
        topicId: topic.id,
        title: 'Topic Approved!',
        message: `Great news! Your topic "${topic.title}" has been approved and is now open for voting. It needs ${threshold} votes within 15 days to qualify for research.`,
        createdAt: new Date()
      }))

      await tx.notification.createMany({
        data: notifications
      })

      return {
        updatedCount: updatedTopics.count,
        updatedTopics: existingTopics,
        voteThreshold: threshold,
        deadline
      }
    })

    return NextResponse.json({
      success: true,
      message: `Successfully approved ${result.updatedCount} topics`,
      approvedCount: result.updatedCount,
      approvedTopics: result.updatedTopics,
      voteThreshold: result.voteThreshold,
      deadline: result.deadline
    })

  } catch (error) {
    console.error('Bulk approve error:', error)
    return NextResponse.json(
      { error: 'Failed to approve topics' },
      { status: 500 }
    )
  }
}
