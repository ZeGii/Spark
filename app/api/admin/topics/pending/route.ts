
import { NextRequest, NextResponse } from 'next/server'
import { verifyAdminAuth } from '@/lib/auth-utils'
import { prisma } from '@/lib/db'

export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  try {
    const authResult = await verifyAdminAuth(request)
    if (!authResult.success) {
      return NextResponse.json({ error: authResult.error }, { status: 401 })
    }

    const pendingTopics = await prisma.topic.findMany({
      where: {
        status: 'PENDING'
      },
      include: {
        proposedBy: {
          select: {
            id: true,
            name: true,
            username: true,
            email: true
          }
        }
      },
      orderBy: {
        createdAt: 'asc' // Oldest first for FIFO processing
      }
    })

    return NextResponse.json({
      topics: pendingTopics,
      count: pendingTopics.length
    })
  } catch (error) {
    console.error('Error fetching pending topics:', error)
    return NextResponse.json(
      { error: 'Failed to fetch pending topics' },
      { status: 500 }
    )
  }
}
