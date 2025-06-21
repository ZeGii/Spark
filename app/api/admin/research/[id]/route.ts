
export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const researchId = params.id;

    const research = await prisma.research.findUnique({
      where: { id: researchId },
      include: {
        topic: true,
        opportunities: true,
        researchDocuments: true,
        competitiveAnalysis: true,
        pouAnalysis: true
      }
    });

    if (!research) {
      return NextResponse.json(
        { error: 'Research not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ research });

  } catch (error) {
    console.error('Research fetch error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch research' },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const researchId = params.id;
    const updateData = await request.json();

    const research = await prisma.research.update({
      where: { id: researchId },
      data: {
        ...updateData,
        status: 'IN_REVIEW', // Update status when content is edited
        updatedAt: new Date()
      }
    });

    return NextResponse.json({
      success: true,
      research,
      message: 'Research updated successfully'
    });

  } catch (error) {
    console.error('Research update error:', error);
    return NextResponse.json(
      { error: 'Failed to update research' },
      { status: 500 }
    );
  }
}
