
export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { verifyAuth } from '@/lib/auth-utils';

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const user = await verifyAuth(request);
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const researchId = params.id;

    // Check if research exists and is published
    const research = await prisma.research.findUnique({
      where: { 
        id: researchId,
        isPublished: true 
      }
    });

    if (!research) {
      return NextResponse.json(
        { error: 'Research not found' },
        { status: 404 }
      );
    }

    // Check if user already sparked this research
    const existingSpark = await prisma.researchSpark.findUnique({
      where: {
        userId_researchId: {
          userId: user.id,
          researchId
        }
      }
    });

    if (existingSpark) {
      // Remove spark
      await prisma.researchSpark.delete({
        where: { id: existingSpark.id }
      });

      return NextResponse.json({
        success: true,
        sparked: false,
        message: 'Research removed from sparks'
      });
    } else {
      // Add spark
      await prisma.researchSpark.create({
        data: {
          userId: user.id,
          researchId
        }
      });

      return NextResponse.json({
        success: true,
        sparked: true,
        message: 'Research added to sparks'
      });
    }

  } catch (error) {
    console.error('Research spark error:', error);
    return NextResponse.json(
      { error: 'Failed to update spark status' },
      { status: 500 }
    );
  }
}

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const user = await verifyAuth(request);
    if (!user) {
      return NextResponse.json({ sparked: false });
    }

    const researchId = params.id;

    const spark = await prisma.researchSpark.findUnique({
      where: {
        userId_researchId: {
          userId: user.id,
          researchId
        }
      }
    });

    return NextResponse.json({
      sparked: !!spark
    });

  } catch (error) {
    console.error('Research spark status error:', error);
    return NextResponse.json({ sparked: false });
  }
}
