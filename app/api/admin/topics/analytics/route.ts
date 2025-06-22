
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

    const { searchParams } = new URL(request.url)
    const startDate = searchParams.get('startDate')
    const endDate = searchParams.get('endDate')
    
    // Build date filter if provided
    let dateFilter = {}
    if (startDate && endDate) {
      dateFilter = {
        createdAt: {
          gte: new Date(startDate),
          lte: new Date(endDate)
        }
      }
    }

    // Get status distribution
    const [pendingCount, approvedCount, qualifiedCount, rejectedCount] = await Promise.all([
      prisma.topic.count({ where: { ...dateFilter, status: 'PENDING' } }),
      prisma.topic.count({ where: { ...dateFilter, status: 'APPROVED' } }),
      prisma.topic.count({ where: { ...dateFilter, status: 'QUALIFIED' } }),
      prisma.topic.count({ where: { ...dateFilter, status: 'REJECTED' } })
    ])

    const statusDistribution = [
      { name: 'Pending', value: pendingCount, color: '#f59e0b' },
      { name: 'Active', value: approvedCount, color: '#3b82f6' },
      { name: 'Qualified', value: qualifiedCount, color: '#10b981' },
      { name: 'Rejected', value: rejectedCount, color: '#ef4444' }
    ]

    // Get category performance
    const categoryData = await prisma.topic.groupBy({
      by: ['industry'],
      where: dateFilter,
      _count: {
        id: true
      }
    })

    const categoryPerformance = await Promise.all(
      categoryData.map(async (cat: any) => {
        const qualifiedInCategory = await prisma.topic.count({
          where: {
            ...dateFilter,
            industry: cat.industry,
            status: 'QUALIFIED'
          }
        })

        return {
          category: cat.industry || 'Unknown',
          total: cat._count.id,
          qualified: qualifiedInCategory
        }
      })
    )

    const now = new Date()
    
    // Generate workflow progress data for last 30 days (keep existing logic)
    const workflowProgress = []
    for (let i = 29; i >= 0; i--) {
      const date = new Date(now.getTime() - i * 24 * 60 * 60 * 1000)
      const dayStart = new Date(date.getFullYear(), date.getMonth(), date.getDate())
      const dayEnd = new Date(dayStart.getTime() + 24 * 60 * 60 * 1000)
      
      const [submitted, approved, qualified] = await Promise.all([
        prisma.topic.count({
          where: {
            createdAt: {
              gte: dayStart,
              lt: dayEnd
            }
          }
        }),
        prisma.topic.count({
          where: {
            approvalDate: {
              gte: dayStart,
              lt: dayEnd
            }
          }
        }),
        prisma.topic.count({
          where: {
            status: 'QUALIFIED',
            updatedAt: {
              gte: dayStart,
              lt: dayEnd
            }
          }
        })
      ])
      
      workflowProgress.push({
        date: dayStart.toISOString().split('T')[0],
        submitted,
        approved,
        qualified
      })
    }

    // Generate vote performance data
    const votePerformance = []
    for (let i = 29; i >= 0; i--) {
      const date = new Date(now.getTime() - i * 24 * 60 * 60 * 1000)
      const dayStart = new Date(date.getFullYear(), date.getMonth(), date.getDate())
      const dayEnd = new Date(dayStart.getTime() + 24 * 60 * 60 * 1000)
      
      const votesOnDay = await prisma.vote.count({
        where: {
          votedAt: {
            gte: dayStart,
            lt: dayEnd
          }
        }
      })

      const topicsOnDay = await prisma.topic.count({
        where: {
          createdAt: { lte: dayEnd }
        }
      })
      
      const avgVotes = topicsOnDay > 0 ? votesOnDay / topicsOnDay : 0
      
      votePerformance.push({
        date: dayStart.toISOString().split('T')[0],
        avgVotes
      })
    }

    return NextResponse.json({
      statusDistribution,
      categoryPerformance,
      workflowProgress,
      votePerformance
    })

  } catch (error) {
    console.error('Topic analytics API error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch topic analytics' },
      { status: 500 }
    )
  }
}
