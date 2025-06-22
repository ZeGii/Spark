
export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');
    const isPublished = searchParams.get('isPublished');

    const where: any = {};
    
    if (status) {
      where.status = status;
    }
    
    if (isPublished !== null) {
      where.isPublished = isPublished === 'true';
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
          select: {
            id: true,
            title: true,
            severity: true,
            urgency: true
          }
        },
        researchDocuments: {
          select: {
            id: true,
            originalName: true,
            aiProcessingStatus: true,
            uploadedAt: true
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    return NextResponse.json({ research });

  } catch (error) {
    console.error('Research fetch error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch research' },
      { status: 500 }
    );
  }
}
