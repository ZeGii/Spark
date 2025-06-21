
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

    if (existingUser.status === 'SUSPENDED') {
      return NextResponse.json({ error: 'User is already suspended' }, { status: 400 })
    }

    // Update user status to suspended
    await prisma.user.update({
      where: { id: userId },
      data: { 
        status: 'SUSPENDED',
        updatedAt: new Date()
      }
    })

    console.log(`User ${userId} suspended successfully`)

    return NextResponse.json({ 
      success: true, 
      message: 'User suspended successfully' 
    })

  } catch (error) {
    console.error('User suspend API error:', error)
    return NextResponse.json(
      { error: 'Failed to suspend user' },
      { status: 500 }
    )
  }
}
