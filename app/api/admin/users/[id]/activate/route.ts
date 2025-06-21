
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

    const userId = params.id

    // Check if user exists
    const existingUser = await prisma.user.findUnique({
      where: { id: userId }
    })

    if (!existingUser) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    if (existingUser.status === 'ACTIVE') {
      return NextResponse.json({ error: 'User is already active' }, { status: 400 })
    }

    // Update user status to active
    await prisma.user.update({
      where: { id: userId },
      data: { 
        status: 'ACTIVE',
        updatedAt: new Date()
      }
    })

    console.log(`User ${userId} activated successfully`)

    return NextResponse.json({ 
      success: true, 
      message: 'User activated successfully' 
    })

  } catch (error) {
    console.error('User activate API error:', error)
    return NextResponse.json(
      { error: 'Failed to activate user' },
      { status: 500 }
    )
  }
}
