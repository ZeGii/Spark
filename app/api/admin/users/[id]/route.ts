
import { NextRequest, NextResponse } from 'next/server'
import { verifyAdminAuth } from '@/lib/auth-utils'
import { prisma } from '@/lib/db'

export const dynamic = 'force-dynamic'

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const authResult = await verifyAdminAuth(request)
    if (!authResult.success) {
      return NextResponse.json({ error: authResult.error }, { status: 401 })
    }

    const userId = params.id

    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        email: true,
        username: true,
        name: true,
        profileType: true,
        industry: true,
        country: true,
        role: true,
        status: true,
        createdAt: true,
        updatedAt: true,
        topics: {
          select: { id: true }
        },
        votes: {
          select: { id: true }
        },
        subscriptions: {
          select: { plan: true, status: true },
          where: { status: 'active' },
          take: 1
        }
      }
    })

    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      )
    }

    const formattedUser = {
      id: user.id,
      email: user.email,
      username: user.username,
      name: user.name,
      profileType: user.profileType,
      industry: user.industry,
      country: user.country,
      role: user.role,
      status: user.status,
      createdAt: user.createdAt.toISOString(),
      updatedAt: user.updatedAt.toISOString(),
      topicsCount: user.topics.length,
      votesCount: user.votes.length,
      subscriptionPlan: user.subscriptions[0]?.plan || 'FREE'
    }

    return NextResponse.json({ user: formattedUser })

  } catch (error) {
    console.error('User profile API error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch user profile' },
      { status: 500 }
    )
  }
}
