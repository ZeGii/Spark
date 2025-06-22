
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

    // Extract date range parameters from query
    const { searchParams } = new URL(request.url)
    const startDate = searchParams.get('startDate')
    const endDate = searchParams.get('endDate')

    const now = new Date()
    const lastMonth = new Date(now.getFullYear(), now.getMonth() - 1, now.getDate())
    const lastWeek = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000)

    // Build date filter conditions
    let dateFilter: any = {}
    let activityFilter: any = {}
    let previousPeriodFilter: any = {}
    
    if (startDate && endDate) {
      const start = new Date(startDate)
      const end = new Date(endDate)
      
      if (!isNaN(start.getTime()) && !isNaN(end.getTime())) {
        dateFilter = {
          createdAt: {
            gte: start,
            lte: end
          }
        }
        
        activityFilter = {
          updatedAt: {
            gte: start,
            lte: end
          }
        }

        // Calculate previous period for growth comparison
        const periodLength = end.getTime() - start.getTime()
        const previousStart = new Date(start.getTime() - periodLength)
        const previousEnd = new Date(start.getTime() - 1)
        
        previousPeriodFilter = {
          createdAt: {
            gte: previousStart,
            lte: previousEnd
          }
        }
      }
    } else {
      // Default behavior when no date filter is applied
      activityFilter = {
        updatedAt: { gte: lastWeek }
      }
      
      previousPeriodFilter = {
        createdAt: { lt: lastMonth }
      }
    }

    const [
      totalUsers,
      activeUsers,
      newUsersInPeriod,
      suspendedUsers,
      bannedUsers,
      proUsers,
      previousPeriodUsers
    ] = await Promise.all([
      // Total users in the filtered period (or all users if no filter)
      startDate && endDate ? 
        prisma.user.count({ where: dateFilter }) : 
        prisma.user.count(),
      
      // Active users (updated in the period)
      prisma.user.count({ where: activityFilter }),
      
      // New users in the period
      startDate && endDate ? 
        prisma.user.count({ where: dateFilter }) :
        prisma.user.count({ where: { createdAt: { gte: lastMonth } } }),
      
      // Suspended users
      startDate && endDate ?
        prisma.user.count({ 
          where: { 
            ...dateFilter,
            status: 'SUSPENDED'
          } 
        }) :
        prisma.user.count({ where: { status: 'SUSPENDED' } }),
      
      // Count all users with specific status (placeholder for banned - using suspended as fallback)
      startDate && endDate ?
        prisma.user.count({ 
          where: { 
            ...dateFilter,
            status: 'SUSPENDED'
          } 
        }) :
        0, // No separate banned status in schema, return 0
      
      // Premium users
      startDate && endDate ?
        prisma.user.count({
          where: {
            ...dateFilter,
            subscriptions: {
              some: {
                plan: 'PRO',
                status: 'active'
              }
            }
          }
        }) :
        prisma.subscription.count({
          where: {
            plan: 'PRO',
            status: 'active'
          }
        }),
      
      // Previous period users for growth calculation
      prisma.user.count({ where: previousPeriodFilter })
    ])

    // Calculate growth rates
    const userGrowthRate = previousPeriodUsers > 0 ? 
      ((newUsersInPeriod / previousPeriodUsers) * 100) : 0

    // Calculate active growth (active users vs total users in period)
    const activeGrowthRate = totalUsers > 0 ? 
      ((activeUsers / totalUsers) * 100) : 0

    return NextResponse.json({
      totalUsers,
      activeUsers,
      suspendedUsers,
      bannedUsers,
      newUsersThisMonth: newUsersInPeriod,
      premiumUsers: proUsers,
      userGrowth: Number(userGrowthRate.toFixed(1)),
      activeGrowth: Number(activeGrowthRate.toFixed(1)),
      dateFilter: startDate && endDate ? { startDate, endDate } : null
    })

  } catch (error) {
    console.error('User stats API error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch user stats' },
      { status: 500 }
    )
  }
}
