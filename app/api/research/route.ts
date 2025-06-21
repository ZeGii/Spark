
import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

export const dynamic = "force-dynamic"

const prisma = new PrismaClient()

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const industry = searchParams.get('industry')
    const region = searchParams.get('region')
    const search = searchParams.get('search')
    const sortBy = searchParams.get('sortBy') || 'newest'

    const where: any = {}
    
    if (industry && industry !== 'all') {
      where.topic = {
        industry: industry
      }
    }
    
    if (region && region !== 'all') {
      where.geographicFocus = region
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
        // In a real app, you'd track views
        orderBy = { createdAt: 'desc' }
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
            industry: true
          }
        }
      },
      orderBy
    })

    return NextResponse.json(research)
  } catch (error) {
    console.error('Error fetching research:', error)
    return NextResponse.json({ error: 'Failed to fetch research' }, { status: 500 })
  }
}
