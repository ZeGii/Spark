
import { NextRequest, NextResponse } from 'next/server'
import { verifyAdminAuth } from '@/lib/auth-utils'
import { prisma } from '@/lib/db'

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
    const { rejectionReason } = body

    if (!rejectionReason || rejectionReason.trim() === '') {
      return NextResponse.json(
        { error: 'Rejection reason is required' },
        { status: 400 }
      )
    }

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

    // Update topic status with rejection reason
    const updatedTopic = await prisma.topic.update({
      where: { id: topicId },
      data: { 
        status: 'REJECTED',
        rejectionReason: rejectionReason.trim(),
        updatedAt: new Date()
      }
    })

    // Create notification for topic owner
    await prisma.notification.create({
      data: {
        title: 'Topic Rejected',
        message: `Unfortunately, your topic "${topic.title}" has been rejected. Reason: ${rejectionReason.trim()}. You can submit a new topic with improvements.`,
        userId: topic.proposedById,
        topicId: topic.id
      }
    })

    return NextResponse.json({ 
      success: true, 
      topic: updatedTopic,
      message: 'Topic rejected successfully'
    })
  } catch (error) {
    console.error('Topic reject error:', error)
    return NextResponse.json(
      { error: 'Failed to reject topic' },
      { status: 500 }
    )
  }
}
