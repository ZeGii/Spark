
import { NextRequest, NextResponse } from 'next/server'
import { verifyAdminAuth } from '@/lib/auth-utils'
import { prisma } from '@/lib/db'

export const dynamic = 'force-dynamic'

export async function POST(request: NextRequest) {
  try {
    const authResult = await verifyAdminAuth(request)
    if (!authResult.success) {
      return NextResponse.json({ error: authResult.error }, { status: 401 })
    }

    const { userIds } = await request.json()

    if (!userIds || !Array.isArray(userIds) || userIds.length === 0) {
      return NextResponse.json({ error: 'User IDs are required' }, { status: 400 })
    }

    // Check if all users exist
    const existingUsers = await prisma.user.findMany({
      where: { 
        id: { in: userIds }
      },
      select: { id: true, email: true }
    })

    if (existingUsers.length !== userIds.length) {
      const foundIds = existingUsers.map(u => u.id)
      const missingIds = userIds.filter(id => !foundIds.includes(id))
      return NextResponse.json({ 
        error: `Some users not found: ${missingIds.join(', ')}` 
      }, { status: 404 })
    }

    // Delete users and related data in transaction
    const deletedCount = await prisma.$transaction(async (tx) => {
      // Delete user votes
      await tx.vote.deleteMany({
        where: { userId: { in: userIds } }
      })

      // Delete user notifications
      await tx.notification.deleteMany({
        where: { userId: { in: userIds } }
      })

      // Delete user subscriptions
      await tx.subscription.deleteMany({
        where: { userId: { in: userIds } }
      })

      // Mark user topics as rejected (don't actually delete to preserve data integrity)
      await tx.topic.updateMany({
        where: { proposedById: { in: userIds } },
        data: { 
          status: 'REJECTED',
          rejectionReason: 'User account deleted',
          updatedAt: new Date()
        }
      })

      // Finally delete the users
      const result = await tx.user.deleteMany({
        where: { id: { in: userIds } }
      })

      return result.count
    })

    console.log(`Bulk deleted ${deletedCount} users successfully`)

    return NextResponse.json({ 
      success: true, 
      message: `Successfully deleted ${deletedCount} users`,
      deletedCount
    })

  } catch (error) {
    console.error('Bulk user delete API error:', error)
    return NextResponse.json(
      { error: 'Failed to delete users' },
      { status: 500 }
    )
  }
}
