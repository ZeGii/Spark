
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

    const qualifiedTopics = await prisma.topic.findMany({
      where: {
        status: 'QUALIFIED'
      },
      include: {
        proposedBy: {
          select: {
            id: true,
            name: true,
            username: true,
            email: true
          }
        },
        approvedBy: {
          select: {
            id: true,
            name: true,
            username: true
          }
        }
      },
      orderBy: {
        updatedAt: 'asc' // Oldest qualified first
      }
    })

    return NextResponse.json({
      topics: qualifiedTopics,
      count: qualifiedTopics.length
    })
  } catch (error) {
    console.error('Error fetching qualified topics:', error)
    return NextResponse.json(
      { error: 'Failed to fetch qualified topics' },
      { status: 500 }
    )
  }
}
