
export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { isPublished } = await request.json();
    const researchId = params.id;

    if (typeof isPublished !== 'boolean') {
      return NextResponse.json({ error: 'isPublished must be a boolean' }, { status: 400 });
    }

    // Get the research record
    const research = await prisma.research.findUnique({
      where: { id: researchId },
      include: {
        opportunities: true
      }
    });

    if (!research) {
      return NextResponse.json({ error: 'Research not found' }, { status: 404 });
    }

    // Update research publication status
    const updatedResearch = await prisma.research.update({
      where: { id: researchId },
      data: {
        isPublished,
        publishedAt: isPublished ? new Date() : null,
        status: isPublished ? 'PUBLISHED' : 'DRAFT'
      }
    });

    // Update opportunities publication status
    if (research.opportunities.length > 0) {
      await prisma.opportunity.updateMany({
        where: { researchId },
        data: {
          isPublished,
          publishedAt: isPublished ? new Date() : null
        }
      });
    }

    return NextResponse.json({
      success: true,
      research: updatedResearch,
      message: `Research ${isPublished ? 'published' : 'unpublished'} successfully`
    });

  } catch (error) {
    console.error('Publish/unpublish error:', error);
    return NextResponse.json(
      { error: 'Failed to update publication status' },
      { status: 500 }
    );
  }
}
