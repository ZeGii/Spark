
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
      const foundIds = existingUsers.map((u: any) => u.id)
      const missingIds = userIds.filter(id => !foundIds.includes(id))
      return NextResponse.json({ 
        error: `Some users not found: ${missingIds.join(', ')}` 
      }, { status: 404 })
    }

    // Filter out users that are already active
    const usersToActivate = existingUsers.filter(user => user.status !== 'ACTIVE')
    
    if (usersToActivate.length === 0) {
      return NextResponse.json({ 
        error: 'All selected users are already active' 
      }, { status: 400 })
    }

    // Update user status to active for all eligible users
    const result = await prisma.user.updateMany({
      where: { 
        id: { in: usersToActivate.map(u => u.id) }
      },
      data: { 
        status: 'ACTIVE',
        updatedAt: new Date()
      }
    })

    console.log(`Bulk activated ${result.count} users successfully`)

    return NextResponse.json({ 
      success: true, 
      message: `Successfully activated ${result.count} users`,
      activatedCount: result.count,
      alreadyActive: existingUsers.length - usersToActivate.length
    })

  } catch (error) {
    console.error('Bulk user activate API error:', error)
    return NextResponse.json(
      { error: 'Failed to activate users' },
      { status: 500 }
    )
  }
}
