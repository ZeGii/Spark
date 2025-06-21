
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

    const now = new Date()
    
    // Generate production data for last 30 days
    const production = []
    for (let i = 29; i >= 0; i--) {
      const date = new Date(now.getTime() - i * 24 * 60 * 60 * 1000)
      const dayStart = new Date(date.getFullYear(), date.getMonth(), date.getDate())
      const dayEnd = new Date(dayStart.getTime() + 24 * 60 * 60 * 1000)
      
      const completed = await prisma.research.count({
        where: {
          createdAt: {
            gte: dayStart,
            lt: dayEnd
          }
        }
      })
      
      production.push({
        date: dayStart.toISOString().split('T')[0],
        completed,
        published: completed // Mock data
      })
    }

    // Mock quality distribution data
    const qualityDistribution = [
      { range: '90-100', count: 15 },
      { range: '80-89', count: 25 },
      { range: '70-79', count: 20 },
      { range: '60-69', count: 10 },
      { range: '50-59', count: 5 }
    ]

    // Get industry performance
    const industryData = await prisma.topic.groupBy({
      by: ['industry'],
      _count: {
        industry: true
      },
      where: {
        status: 'COMPLETED'
      }
    })

    const industryPerformance = industryData.map(item => ({
      industry: item.industry,
      count: item._count.industry,
      percentage: Math.round((item._count.industry / industryData.reduce((sum, i) => sum + i._count.industry, 0)) * 100)
    }))

    // Mock engagement data
    const engagement = []
    for (let i = 29; i >= 0; i--) {
      const date = new Date(now.getTime() - i * 24 * 60 * 60 * 1000)
      engagement.push({
        date: date.toISOString().split('T')[0],
        views: Math.floor(Math.random() * 100) + 50,
        downloads: Math.floor(Math.random() * 20) + 5
      })
    }

    return NextResponse.json({
      production,
      qualityDistribution,
      industryPerformance,
      engagement
    })

  } catch (error) {
    console.error('Research analytics API error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch research analytics' },
      { status: 500 }
    )
  }
}
