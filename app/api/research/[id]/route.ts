
import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

export const dynamic = "force-dynamic"

const prisma = new PrismaClient()

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // First try to find research by ID
    let research = await prisma.research.findUnique({
      where: { id: params.id },
      include: {
        topic: {
          select: {
            title: true,
            industry: true
          }
        },
        competitiveAnalysis: true,
        pouAnalysis: true
      }
    })

    // If not found by research ID, try to find by topic ID
    if (!research) {
      research = await prisma.research.findUnique({
        where: { topicId: params.id },
        include: {
          topic: {
            select: {
              title: true,
              industry: true
            }
          },
          competitiveAnalysis: true,
          pouAnalysis: true
        }
      })
    }

    if (!research) {
      // Check if topic exists but no research yet
      const topic = await prisma.topic.findUnique({
        where: { id: params.id },
        select: {
          id: true,
          title: true,
          status: true,
          industry: true
        }
      })

      if (topic) {
        return NextResponse.json({ 
          error: 'Research not available yet',
          topic,
          message: `Research for "${topic.title}" is not available yet. Current status: ${topic.status}`
        }, { status: 404 })
      }

      return NextResponse.json({ error: 'Research not found' }, { status: 404 })
    }

    return NextResponse.json(research)
  } catch (error) {
    console.error('Error fetching research:', error)
    return NextResponse.json({ error: 'Failed to fetch research' }, { status: 500 })
  }
}
