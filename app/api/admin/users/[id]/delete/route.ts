
import { NextRequest, NextResponse } from 'next/server'
import { verifyAdminAuth } from '@/lib/auth-utils'
import { prisma } from '@/lib/db'

export const dynamic = 'force-dynamic'

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const authResult = await verifyAdminAuth(request)
    if (!authResult.success) {
      return NextResponse.json({ error: authResult.error }, { status: 401 })
    }

    const userId = params.id

    // Check if user exists
    const existingUser = await prisma.user.findUnique({
      where: { id: userId }
    })

    if (!existingUser) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    // Delete user and related data
    await prisma.$transaction(async (tx: any) => {
      // Delete user's votes
      await tx.vote.deleteMany({
        where: { userId: userId }
      })

      // Delete user's notifications
      await tx.notification.deleteMany({
        where: { userId: userId }
      })

      // Delete user's subscriptions
      await tx.subscription.deleteMany({
        where: { userId: userId }
      })

      // Delete or reassign user's topics (mark as rejected)
      await tx.topic.updateMany({
        where: { proposedById: userId },
        data: { 
          status: 'REJECTED',
          rejectionReason: 'User account deleted',
          updatedAt: new Date()
        }
      })

      // Finally delete the user
      await tx.user.delete({
        where: { id: userId }
      })
    })

    console.log(`User ${userId} deleted successfully`)

    return NextResponse.json({ 
      success: true, 
      message: 'User deleted successfully' 
    })

  } catch (error) {
    console.error('User delete API error:', error)
    return NextResponse.json(
      { error: 'Failed to delete user' },
      { status: 500 }
    )
  }
}
