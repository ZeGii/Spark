
import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export const dynamic = 'force-dynamic'

export async function POST(request: NextRequest) {
  try {
    const { topicIds } = await request.json()

    if (!Array.isArray(topicIds) || topicIds.length === 0) {
      return NextResponse.json(
        { error: 'Invalid topic IDs provided' },
        { status: 400 }
      )
    }

    // Validate that all topics exist
    const existingTopics = await prisma.topic.findMany({
      where: {
        id: { in: topicIds }
      },
      select: { id: true, title: true }
    })

    if (existingTopics.length !== topicIds.length) {
      const foundIds = existingTopics.map(t => t.id)
      const missingIds = topicIds.filter(id => !foundIds.includes(id))
      return NextResponse.json(
        { error: `Topics not found: ${missingIds.join(', ')}` },
        { status: 404 }
      )
    }

    // Use transaction to ensure data consistency
    const result = await prisma.$transaction(async (tx) => {
      // Delete related votes first
      await tx.vote.deleteMany({
        where: {
          topicId: { in: topicIds }
        }
      })

      // Delete related notifications
      await tx.notification.deleteMany({
        where: {
          topicId: { in: topicIds }
        }
      })

      // Delete related research (if any)
      const research = await tx.research.findMany({
        where: {
          topicId: { in: topicIds }
        },
        select: { id: true }
      })

      if (research.length > 0) {
        const researchIds = research.map(r => r.id)
        
        // Delete related research documents
        await tx.researchDocument.deleteMany({
          where: {
            researchId: { in: researchIds }
          }
        })

        // Delete related opportunities and their sparks
        await tx.opportunitySpark.deleteMany({
          where: {
            opportunity: {
              researchId: { in: researchIds }
            }
          }
        })

        await tx.opportunity.deleteMany({
          where: {
            researchId: { in: researchIds }
          }
        })

        // Delete related POU analysis and sparks
        await tx.spark.deleteMany({
          where: {
            pou: {
              researchId: { in: researchIds }
            }
          }
        })

        await tx.pOUAnalysis.deleteMany({
          where: {
            researchId: { in: researchIds }
          }
        })

        // Delete competitive analysis
        await tx.competitiveAnalysis.deleteMany({
          where: {
            researchId: { in: researchIds }
          }
        })

        // Delete research
        await tx.research.deleteMany({
          where: {
            topicId: { in: topicIds }
          }
        })
      }

      // Finally delete the topics
      const deletedTopics = await tx.topic.deleteMany({
        where: {
          id: { in: topicIds }
        }
      })

      return {
        deletedCount: deletedTopics.count,
        deletedTopics: existingTopics
      }
    })

    return NextResponse.json({
      success: true,
      message: `Successfully deleted ${result.deletedCount} topics`,
      deletedCount: result.deletedCount,
      deletedTopics: result.deletedTopics
    })

  } catch (error) {
    console.error('Bulk delete error:', error)
    return NextResponse.json(
      { error: 'Failed to delete topics', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}
