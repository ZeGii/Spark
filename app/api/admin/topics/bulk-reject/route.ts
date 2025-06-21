
import { NextRequest, NextResponse } from 'next/server'
import { verifyAdminAuth } from '@/lib/auth-utils'
import { prisma } from '@/lib/db'

export const dynamic = 'force-dynamic'

export async function POST(request: NextRequest) {
  try {
    // Verify admin authentication - matches individual reject
    const authResult = await verifyAdminAuth(request)
    if (!authResult.success) {
      return NextResponse.json({ error: authResult.error }, { status: 401 })
    }

    const { topicIds, rejectionReason } = await request.json()

    if (!Array.isArray(topicIds) || topicIds.length === 0) {
      return NextResponse.json(
        { error: 'Invalid topic IDs provided' },
        { status: 400 }
      )
    }

    // Validate rejection reason - matches individual reject validation exactly
    if (!rejectionReason || rejectionReason.trim() === '') {
      return NextResponse.json(
        { error: 'Rejection reason is required' },
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
      const foundIds = existingTopics.map(t => t.id)
      const missingIds = topicIds.filter(id => !foundIds.includes(id))
      return NextResponse.json(
        { error: `Topics not found: ${missingIds.join(', ')}` },
        { status: 404 }
      )
    }

    // Check if any topics are not in PENDING status
    const nonPendingTopics = existingTopics.filter(t => t.status !== 'PENDING')
    if (nonPendingTopics.length > 0) {
      return NextResponse.json(
        { 
          error: `Cannot reject topics that are not pending: ${nonPendingTopics.map(t => t.title).join(', ')}` 
        },
        { status: 400 }
      )
    }

    // Use transaction to ensure data consistency
    const result = await prisma.$transaction(async (tx) => {
      // Update all topics to REJECTED status - matches individual reject exactly
      const updatedTopics = await tx.topic.updateMany({
        where: {
          id: { in: topicIds }
        },
        data: {
          status: 'REJECTED',
          rejectionReason: rejectionReason.trim(),
          updatedAt: new Date()
          // Note: approvedById is NOT set for rejections, only for approvals
        }
      })

      // Create notifications for topic submitters - matches individual reject message exactly
      const notifications = existingTopics.map(topic => ({
        userId: topic.proposedBy.id,
        topicId: topic.id,
        title: 'Topic Rejected',
        message: `Unfortunately, your topic "${topic.title}" has been rejected. Reason: ${rejectionReason.trim()}. You can submit a new topic with improvements.`,
        createdAt: new Date()
      }))

      await tx.notification.createMany({
        data: notifications
      })

      return {
        updatedCount: updatedTopics.count,
        updatedTopics: existingTopics,
        rejectionReason: rejectionReason.trim()
      }
    })

    return NextResponse.json({
      success: true,
      message: `Successfully rejected ${result.updatedCount} topics`,
      rejectedCount: result.updatedCount,
      rejectedTopics: result.updatedTopics,
      rejectionReason: result.rejectionReason
    })

  } catch (error) {
    console.error('Bulk reject error:', error)
    return NextResponse.json(
      { error: 'Failed to reject topics' },
      { status: 500 }
    )
  }
}
