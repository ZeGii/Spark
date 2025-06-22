
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

    // Check if all users exist and get current status
    const existingUsers = await prisma.user.findMany({
      where: { 
        id: { in: userIds }
      },
      select: { id: true, status: true, email: true }
    })

    if (existingUsers.length !== userIds.length) {
      const foundIds = existingUsers.map(u => u.id)
      const missingIds = userIds.filter(id => !foundIds.includes(id))
      return NextResponse.json({ 
        error: `Some users not found: ${missingIds.join(', ')}` 
      }, { status: 404 })
    }

    // Filter out users that are already suspended
    const usersToSuspend = existingUsers.filter(user => user.status !== 'SUSPENDED')
    
    if (usersToSuspend.length === 0) {
      return NextResponse.json({ 
        error: 'All selected users are already suspended' 
      }, { status: 400 })
    }

    // Update user status to suspended for all eligible users
    const result = await prisma.user.updateMany({
      where: { 
        id: { in: usersToSuspend.map(u => u.id) }
      },
      data: { 
        status: 'SUSPENDED',
        updatedAt: new Date()
      }
    })

    console.log(`Bulk suspended ${result.count} users successfully`)

    return NextResponse.json({ 
      success: true, 
      message: `Successfully suspended ${result.count} users`,
      suspendedCount: result.count,
      alreadySuspended: existingUsers.length - usersToSuspend.length
    })

  } catch (error) {
    console.error('Bulk user suspend API error:', error)
    return NextResponse.json(
      { error: 'Failed to suspend users' },
      { status: 500 }
    )
  }
}
