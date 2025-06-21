
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { getUserFromRequest, requireAdmin } from '@/lib/auth-utils';

export const dynamic = 'force-dynamic';

// GET /api/admin/topics - Get all topics for admin dashboard
export async function GET(request: NextRequest) {
  try {
    const user = await getUserFromRequest(request);
    requireAdmin(user);

    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');
    const filter = searchParams.get('filter');
    const startDate = searchParams.get('startDate');
    const endDate = searchParams.get('endDate');
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '50');
    const search = searchParams.get('search');
    const sortBy = searchParams.get('sortBy') || 'createdAt';
    const sortOrder = searchParams.get('sortOrder') || 'desc';

    // New filter parameters
    const industry = searchParams.get('industry');
    const country = searchParams.get('country');
    const voteThreshold = searchParams.get('voteThreshold');
    const priority = searchParams.get('priority');
    const dateRangeStart = searchParams.get('dateRangeStart');
    const dateRangeEnd = searchParams.get('dateRangeEnd');

    // Validate pagination parameters
    const validPage = Math.max(1, page);
    const validLimit = Math.min(Math.max(1, limit), 100); // Max 100 records per page
    const skip = (validPage - 1) * validLimit;

    let where: any = {};

    // Status filter (for legacy support)
    if (status) {
      where.status = status as any;
    }

    // Filter parameter (replaces status for new usage)
    if (filter && filter !== 'all') {
      where.status = filter as any;
    }

    // Date range filter (legacy support)
    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      
      // Validate dates
      if (!isNaN(start.getTime()) && !isNaN(end.getTime())) {
        where.createdAt = {
          gte: start,
          lte: end
        };
      }
    }

    // New date range filter (from filter system)
    if (dateRangeStart && dateRangeEnd) {
      const start = new Date(dateRangeStart);
      const end = new Date(dateRangeEnd);
      
      if (!isNaN(start.getTime()) && !isNaN(end.getTime())) {
        where.createdAt = {
          gte: start,
          lte: end
        };
      }
    }

    // Search filter
    if (search && search.trim()) {
      where.OR = [
        { title: { contains: search, mode: 'insensitive' } },
        { description: { contains: search, mode: 'insensitive' } },
        { industry: { contains: search, mode: 'insensitive' } },
        { country: { contains: search, mode: 'insensitive' } },
        { proposedBy: { 
          OR: [
            { name: { contains: search, mode: 'insensitive' } },
            { email: { contains: search, mode: 'insensitive' } },
            { username: { contains: search, mode: 'insensitive' } }
          ]
        }}
      ];
    }

    // Industry filter (support multiple values)
    if (industry && industry !== 'all') {
      const industries = industry.split(',').filter(i => i.trim());
      if (industries.length > 0) {
        where.industry = {
          in: industries
        };
      }
    }

    // Country filter (support multiple values)
    if (country && country !== 'all') {
      const countries = country.split(',').filter(c => c.trim());
      if (countries.length > 0) {
        where.country = {
          in: countries
        };
      }
    }

    // Vote threshold filter
    if (voteThreshold && voteThreshold !== 'all') {
      switch (voteThreshold) {
        case '1-25':
          where.voteCount = { gte: 1, lte: 25 };
          break;
        case '26-50':
          where.voteCount = { gte: 26, lte: 50 };
          break;
        case '51-100':
          where.voteCount = { gte: 51, lte: 100 };
          break;
        case '100+':
          where.voteCount = { gte: 100 };
          break;
      }
    }

    // Priority filter (would need to be calculated based on business logic)
    if (priority && priority !== 'all') {
      // This would need custom logic based on how priority is determined
      // For now, we'll skip this as it requires more complex business logic
      // that might depend on deadline, vote count, status, etc.
    }

    // Build sort order
    const orderBy: any = {};
    const validSortFields = ['createdAt', 'updatedAt', 'title', 'status', 'industry', 'country'];
    const sortField = validSortFields.includes(sortBy) ? sortBy : 'createdAt';
    const sortDirection = sortOrder === 'asc' ? 'asc' : 'desc';
    orderBy[sortField] = sortDirection;

    // Execute query for topics and count
    const [topics, totalCount] = await Promise.all([
      prisma.topic.findMany({
        where,
        include: {
          proposedBy: {
            select: { id: true, name: true, email: true, username: true }
          },
          approvedBy: {
            select: { id: true, name: true, email: true, username: true }
          },
          _count: {
            select: { votes: true }
          }
        },
        orderBy,
        skip,
        take: validLimit
      }),
      prisma.topic.count({ where })
    ]);

    // Calculate pagination metadata
    const totalPages = Math.ceil(totalCount / validLimit);
    const hasNextPage = validPage < totalPages;
    const hasPreviousPage = validPage > 1;

    return NextResponse.json({
      topics,
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
    });
  } catch (error: any) {
    console.error('Admin topics fetch error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to fetch topics' },
      { status: error.message?.includes('required') ? 403 : 500 }
    );
  }
}
