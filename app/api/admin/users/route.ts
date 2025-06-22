
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

    // Extract parameters from query
    const { searchParams } = new URL(request.url)
    const startDate = searchParams.get('startDate')
    const endDate = searchParams.get('endDate')
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '50')
    const search = searchParams.get('search')
    const sortBy = searchParams.get('sortBy') || 'createdAt'
    const sortOrder = searchParams.get('sortOrder') || 'desc'

    // New filter parameters
    const status = searchParams.get('status')
    const role = searchParams.get('role')
    const profileType = searchParams.get('profileType')
    const subscriptionPlan = searchParams.get('subscriptionPlan')
    const industry = searchParams.get('industry')
    const country = searchParams.get('country')
    const dateRangeStart = searchParams.get('dateRangeStart')
    const dateRangeEnd = searchParams.get('dateRangeEnd')

    // Validate pagination parameters
    const validPage = Math.max(1, page)
    const validLimit = Math.min(Math.max(1, limit), 100) // Max 100 records per page
    const skip = (validPage - 1) * validLimit

    // Build date filter conditions (legacy support)
    const dateFilter: any = {}
    if (startDate && endDate) {
      const start = new Date(startDate)
      const end = new Date(endDate)
      
      // Validate dates
      if (!isNaN(start.getTime()) && !isNaN(end.getTime())) {
        dateFilter.createdAt = {
          gte: start,
          lte: end
        }
      }
    }

    // Build new date range filter (from filter system)
    if (dateRangeStart && dateRangeEnd) {
      const start = new Date(dateRangeStart)
      const end = new Date(dateRangeEnd)
      
      if (!isNaN(start.getTime()) && !isNaN(end.getTime())) {
        dateFilter.createdAt = {
          gte: start,
          lte: end
        }
      }
    }

    // Build search filter
    const searchFilter: any = {}
    if (search && search.trim()) {
      searchFilter.OR = [
        { name: { contains: search, mode: 'insensitive' } },
        { email: { contains: search, mode: 'insensitive' } },
        { username: { contains: search, mode: 'insensitive' } },
        { industry: { contains: search, mode: 'insensitive' } },
        { country: { contains: search, mode: 'insensitive' } }
      ]
    }

    // Build status filter
    const statusFilter: any = {}
    if (status && status !== 'all') {
      statusFilter.status = status
    }

    // Build role filter
    const roleFilter: any = {}
    if (role && role !== 'all') {
      roleFilter.role = role
    }

    // Build profile type filter
    const profileTypeFilter: any = {}
    if (profileType && profileType !== 'all') {
      profileTypeFilter.profileType = profileType
    }

    // Build industry filter (support multiple values)
    const industryFilter: any = {}
    if (industry && industry !== 'all') {
      const industries = industry.split(',').filter(i => i.trim())
      if (industries.length > 0) {
        industryFilter.industry = {
          in: industries
        }
      }
    }

    // Build country filter (support multiple values)
    const countryFilter: any = {}
    if (country && country !== 'all') {
      const countries = country.split(',').filter(c => c.trim())
      if (countries.length > 0) {
        countryFilter.country = {
          in: countries
        }
      }
    }

    // Build subscription plan filter
    const subscriptionFilter: any = {}
    if (subscriptionPlan && subscriptionPlan !== 'all') {
      subscriptionFilter.subscriptions = {
        some: {
          plan: subscriptionPlan,
          status: 'active'
        }
      }
    }

    // Combine filters
    const whereClause = {
      ...dateFilter,
      ...searchFilter,
      ...statusFilter,
      ...roleFilter,
      ...profileTypeFilter,
      ...industryFilter,
      ...countryFilter,
      ...subscriptionFilter
    }

    // Build sort order
    const orderBy: any = {}
    const validSortFields = ['createdAt', 'updatedAt', 'name', 'email', 'status', 'role']
    const sortField = validSortFields.includes(sortBy) ? sortBy : 'createdAt'
    const sortDirection = sortOrder === 'asc' ? 'asc' : 'desc'
    orderBy[sortField] = sortDirection

    // Execute query for users and count
    const [users, totalCount] = await Promise.all([
      prisma.user.findMany({
        where: whereClause,
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
            select: { id: true },
            ...(startDate && endDate ? {
              where: {
                createdAt: {
                  gte: new Date(startDate),
                  lte: new Date(endDate)
                }
              }
            } : {})
          },
          votes: {
            select: { id: true },
            ...(startDate && endDate ? {
              where: {
                votedAt: {
                  gte: new Date(startDate),
                  lte: new Date(endDate)
                }
              }
            } : {})
          },
          subscriptions: {
            select: { plan: true },
            where: { status: 'active' },
            take: 1
          }
        },
        orderBy,
        skip,
        take: validLimit
      }),
      prisma.user.count({ where: whereClause })
    ])

    // Format users for response
    const formattedUsers = users.map(user => ({
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
      lastActive: user.updatedAt.toISOString(),
      topicsCount: user.topics.length,
      votesCount: user.votes.length,
      subscriptionPlan: user.subscriptions[0]?.plan || 'FREE'
    }))

    // Calculate pagination metadata
    const totalPages = Math.ceil(totalCount / validLimit)
    const hasNextPage = validPage < totalPages
    const hasPreviousPage = validPage > 1

    return NextResponse.json({ 
      users: formattedUsers,
      pagination: {
        currentPage: validPage,
        totalPages,
        totalRecords: totalCount,
        recordsPerPage: validLimit,
        hasNextPage,
        hasPreviousPage,
        // Legacy support
        page: validPage,
        pageSize: validLimit,
        total: totalCount
      }
    })

  } catch (error) {
    console.error('Users API error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch users' },
      { status: 500 }
    )
  }
}
