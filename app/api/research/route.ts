
import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import { verifyAuth } from '@/lib/auth-utils'

export const dynamic = "force-dynamic"

const prisma = new PrismaClient()

export async function GET(request: NextRequest) {
  try {
    // Check if user is authenticated (optional for research listing)
    const user = await verifyAuth(request)
    
    const { searchParams } = new URL(request.url)
    const industry = searchParams.get('industry')
    const region = searchParams.get('region')
    const search = searchParams.get('search')
    const sortBy = searchParams.get('sortBy') || 'newest'
    const status = searchParams.get('status')

    const where: any = {
      // Only show published research to public users
      isPublished: true,
      status: 'PUBLISHED'
    }
    
    if (industry && industry !== 'all') {
      where.industry = industry
    }
    
    if (region && region !== 'all') {
      where.country = region
    }
    
    if (search) {
      where.OR = [
        { title: { contains: search, mode: 'insensitive' } },
        { brief: { contains: search, mode: 'insensitive' } }
      ]
    }

    let orderBy: any = { releaseDate: 'desc' }
    
    switch (sortBy) {
      case 'oldest':
        orderBy = { releaseDate: 'asc' }
        break
      case 'popular':
        // Sort by spark count
        orderBy = { _count: { sparks: 'desc' } }
        break
      case 'market-size':
        // This would need a numeric field for proper sorting
        orderBy = { marketSize: 'desc' }
        break
    }

    const research = await prisma.research.findMany({
      where,
      include: {
        topic: {
          select: {
            title: true,
            industry: true,
            country: true
          }
        },
        opportunities: {
          where: {
            isPublished: true
          },
          select: {
            id: true,
            title: true,
            severity: true,
            urgency: true
          }
        },
        sparks: user ? {
          where: {
            userId: user.id
          },
          select: {
            id: true
          }
        } : false,
        _count: {
          select: {
            opportunities: {
              where: {
                isPublished: true
              }
            },
            sparks: true
          }
        }
      },
      orderBy
    })

    // Transform data to include spark information
    const transformedResearch = research.map(item => ({
      ...item,
      sparkCount: item._count.sparks,
      isSparkled: user ? item.sparks.length > 0 : false,
      sparks: undefined, // Remove the sparks array from response
    }))

    return NextResponse.json(transformedResearch)
  } catch (error) {
    console.error('Error fetching research:', error)
    return NextResponse.json({ error: 'Failed to fetch research' }, { status: 500 })
  }
}
