
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

    const opportunityId = params.id;

    // Check if opportunity exists and is published
    const opportunity = await prisma.opportunity.findUnique({
      where: { 
        id: opportunityId,
        isPublished: true 
      }
    });

    if (!opportunity) {
      return NextResponse.json(
        { error: 'Opportunity not found' },
        { status: 404 }
      );
    }

    // Check if user already sparked this opportunity
    const existingSpark = await prisma.opportunitySpark.findUnique({
      where: {
        userId_opportunityId: {
          userId: user.id,
          opportunityId
        }
      }
    });

    if (existingSpark) {
      // Remove spark
      await prisma.opportunitySpark.delete({
        where: { id: existingSpark.id }
      });

      // Update spark count
      await prisma.opportunity.update({
        where: { id: opportunityId },
        data: {
          sparkCount: {
            decrement: 1
          }
        }
      });

      return NextResponse.json({
        success: true,
        sparked: false,
        message: 'Opportunity removed from sparks'
      });
    } else {
      // Add spark
      await prisma.opportunitySpark.create({
        data: {
          userId: user.id,
          opportunityId
        }
      });

      // Update spark count
      await prisma.opportunity.update({
        where: { id: opportunityId },
        data: {
          sparkCount: {
            increment: 1
          }
        }
      });

      return NextResponse.json({
        success: true,
        sparked: true,
        message: 'Opportunity added to sparks'
      });
    }

  } catch (error) {
    console.error('Spark error:', error);
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

    const opportunityId = params.id;

    const spark = await prisma.opportunitySpark.findUnique({
      where: {
        userId_opportunityId: {
          userId: user.id,
          opportunityId
        }
      }
    });

    return NextResponse.json({
      sparked: !!spark
    });

  } catch (error) {
    console.error('Spark status error:', error);
    return NextResponse.json({ sparked: false });
  }
}
