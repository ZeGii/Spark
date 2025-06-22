
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
    const range = searchParams.get('range') || '30d'

    // Calculate date range
    const now = new Date()
    let startDate: Date
    
    switch (range) {
      case '7d':
        startDate = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000)
        break
      case '90d':
        startDate = new Date(now.getTime() - 90 * 24 * 60 * 60 * 1000)
        break
      case '1y':
        startDate = new Date(now.getTime() - 365 * 24 * 60 * 60 * 1000)
        break
      default: // 30d
        startDate = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000)
    }

    // Get overview stats
    const [
      totalUsers,
      activeUsers,
      totalTopics,
      totalVotes,
      newUsers,
      previousPeriodUsers
    ] = await Promise.all([
      prisma.user.count(),
      prisma.user.count({
        where: {
          updatedAt: { gte: startDate }
        }
      }),
      prisma.topic.count(),
      prisma.vote.count(),
      prisma.user.count({
        where: {
          createdAt: { gte: startDate }
        }
      }),
      prisma.user.count({
        where: {
          createdAt: {
            gte: new Date(startDate.getTime() - (now.getTime() - startDate.getTime())),
            lt: startDate
          }
        }
      })
    ])

    const avgVotesPerTopic = totalTopics > 0 ? totalVotes / totalTopics : 0
    const conversionRate = totalTopics > 0 ? (await prisma.topic.count({ where: { status: 'QUALIFIED' } }) / totalTopics) * 100 : 0
    const userGrowthRate = previousPeriodUsers > 0 ? ((newUsers - previousPeriodUsers) / previousPeriodUsers) * 100 : 0
    const engagementRate = totalUsers > 0 ? (activeUsers / totalUsers) * 100 : 0

    // Generate user growth chart data
    const userGrowth = []
    const days = range === '7d' ? 7 : range === '90d' ? 90 : range === '1y' ? 365 : 30
    
    for (let i = days - 1; i >= 0; i--) {
      const date = new Date(now.getTime() - i * 24 * 60 * 60 * 1000)
      const dayStart = new Date(date.getFullYear(), date.getMonth(), date.getDate())
      const dayEnd = new Date(dayStart.getTime() + 24 * 60 * 60 * 1000)
      
      const [newUsers, totalUsers] = await Promise.all([
        prisma.user.count({
          where: {
            createdAt: {
              gte: dayStart,
              lt: dayEnd
            }
          }
        }),
        prisma.user.count({
          where: {
            createdAt: { lt: dayEnd }
          }
        })
      ])
      
      userGrowth.push({
        date: dayStart.toISOString().split('T')[0],
        newUsers,
        totalUsers
      })
    }

    // Generate topic performance data
    const topicPerformance = []
    for (let i = days - 1; i >= 0; i--) {
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
      
      topicPerformance.push({
        date: dayStart.toISOString().split('T')[0],
        submitted,
        approved,
        qualified
      })
    }

    // Generate voting activity data
    const votingActivity = []
    for (let i = days - 1; i >= 0; i--) {
      const date = new Date(now.getTime() - i * 24 * 60 * 60 * 1000)
      const dayStart = new Date(date.getFullYear(), date.getMonth(), date.getDate())
      const dayEnd = new Date(dayStart.getTime() + 24 * 60 * 60 * 1000)
      
      const [votes, uniqueVoters] = await Promise.all([
        prisma.vote.count({
          where: {
            votedAt: {
              gte: dayStart,
              lt: dayEnd
            }
          }
        }),
        prisma.vote.groupBy({
          by: ['userId'],
          where: {
            votedAt: {
              gte: dayStart,
              lt: dayEnd
            }
          }
        }).then((result: any) => result.length)
      ])
      
      votingActivity.push({
        date: dayStart.toISOString().split('T')[0],
        votes,
        uniqueVoters
      })
    }

    // Get industry distribution
    const industryData = await prisma.topic.groupBy({
      by: ['industry'],
      _count: {
        industry: true
      },
      where: {
        createdAt: { gte: startDate }
      }
    })

    const totalIndustryTopics = industryData.reduce((sum: number, item: any) => sum + item._count.industry, 0)
    const industryDistribution = industryData.map((item: any) => ({
      industry: item.industry,
      count: item._count.industry,
      percentage: totalIndustryTopics > 0 ? Math.round((item._count.industry / totalIndustryTopics) * 100) : 0
    }))

    // Get country distribution
    const countryData = await prisma.user.groupBy({
      by: ['country'],
      _count: {
        country: true
      },
      where: {
        createdAt: { gte: startDate }
      }
    })

    const countryTopicsData = await prisma.topic.groupBy({
      by: ['country'],
      _count: {
        country: true
      },
      where: {
        createdAt: { gte: startDate }
      }
    })

    const countryDistribution = countryData.map((userItem: any) => {
      const topicItem = countryTopicsData.find((t: any) => t.country === userItem.country)
      return {
        country: userItem.country,
        users: userItem._count.country,
        topics: topicItem?._count.country || 0
      }
    })

    // Generate engagement metrics
    const engagementMetrics = []
    for (let i = days - 1; i >= 0; i--) {
      const date = new Date(now.getTime() - i * 24 * 60 * 60 * 1000)
      const dayStart = new Date(date.getFullYear(), date.getMonth(), date.getDate())
      const weekStart = new Date(dayStart.getTime() - 7 * 24 * 60 * 60 * 1000)
      const monthStart = new Date(dayStart.getTime() - 30 * 24 * 60 * 60 * 1000)
      
      const [dailyActive, weeklyActive, monthlyActive] = await Promise.all([
        prisma.user.count({
          where: {
            updatedAt: {
              gte: dayStart,
              lt: new Date(dayStart.getTime() + 24 * 60 * 60 * 1000)
            }
          }
        }),
        prisma.user.count({
          where: {
            updatedAt: {
              gte: weekStart,
              lt: dayStart
            }
          }
        }),
        prisma.user.count({
          where: {
            updatedAt: {
              gte: monthStart,
              lt: dayStart
            }
          }
        })
      ])
      
      engagementMetrics.push({
        date: dayStart.toISOString().split('T')[0],
        dailyActive,
        weeklyActive,
        monthlyActive
      })
    }

    // Generate insights
    const insights = []
    
    if (userGrowthRate > 20) {
      insights.push({
        title: 'Strong User Growth',
        description: `User registrations increased by ${userGrowthRate.toFixed(1)}% compared to the previous period`,
        type: 'positive' as const,
        value: `+${userGrowthRate.toFixed(1)}%`
      })
    }
    
    if (engagementRate > 60) {
      insights.push({
        title: 'High Engagement',
        description: `${engagementRate.toFixed(1)}% of users are actively participating`,
        type: 'positive' as const,
        value: `${engagementRate.toFixed(1)}%`
      })
    }
    
    if (conversionRate < 10) {
      insights.push({
        title: 'Low Topic Conversion',
        description: 'Few topics are reaching the qualification threshold',
        type: 'negative' as const,
        value: `${conversionRate.toFixed(1)}%`
      })
    }

    const overview = {
      totalUsers,
      activeUsers,
      totalTopics,
      totalVotes,
      avgVotesPerTopic,
      conversionRate,
      userGrowthRate,
      engagementRate
    }

    const charts = {
      userGrowth,
      topicPerformance,
      votingActivity,
      industryDistribution,
      countryDistribution,
      engagementMetrics
    }

    return NextResponse.json({
      overview,
      charts,
      insights
    })

  } catch (error) {
    console.error('Analytics API error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch analytics data' },
      { status: 500 }
    )
  }
}
