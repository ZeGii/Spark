
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

    // Check if current user is super admin (admin@spark.com)
    if (authResult.user?.email !== 'admin@spark.com') {
      return NextResponse.json(
        { error: 'Only super admin can promote users to admin' },
        { status: 403 }
      )
    }

    const userId = params.id

    // Check if user exists
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { id: true, email: true, name: true, role: true }
    })

    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      )
    }

    // Check if user is already an admin
    if (user.role === 'admin') {
      return NextResponse.json(
        { error: 'User is already an admin' },
        { status: 400 }
      )
    }

    // Update user role to admin
    await prisma.user.update({
      where: { id: userId },
      data: { role: 'admin' }
    })

    console.log(`User ${user.email} promoted to admin by ${authResult.user?.email}`)

    return NextResponse.json({ 
      success: true,
      message: `${user.name} has been promoted to admin`
    })

  } catch (error) {
    console.error('User promote API error:', error)
    return NextResponse.json(
      { error: 'Failed to promote user' },
      { status: 500 }
    )
  }
}
