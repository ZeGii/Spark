import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { getUserFromRequest, requireAuth } from '@/lib/auth-utils';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const industry = searchParams.get('industry');
    const country = searchParams.get('country');
    const search = searchParams.get('search');
    const status = searchParams.get('status') || 'APPROVED'; // Default to approved topics only

    const where: any = {
      status: status === 'all' ? undefined : status
    };
    
    if (industry && industry !== 'all') {
      where.industry = industry;
    }
    
    if (country && country !== 'all') {
      where.country = country;
    }
    
    if (search) {
      where.OR = [
        { title: { contains: search, mode: 'insensitive' } },
        { description: { contains: search, mode: 'insensitive' } }
      ];
    }

    // Remove undefined values
    Object.keys(where).forEach(key => where[key] === undefined && delete where[key]);

    const topics = await prisma.topic.findMany({
      where,
      include: {
        proposedBy: {
          select: {
            name: true,
            username: true
          }
        },
        approvedBy: {
          select: {
            name: true,
            username: true
          }
        },
        _count: {
          select: {
            votes: true
          }
        }
      },
      orderBy: [
        { status: 'asc' }, // Prioritize by status
        { voteCount: 'desc' }, // Then by vote count
        { createdAt: 'desc' } // Then by creation date
      ]
    });

    return NextResponse.json(topics);
  } catch (error) {
    console.error('Error fetching topics:', error);
    return NextResponse.json({ error: 'Failed to fetch topics' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const user = await getUserFromRequest(request);
    requireAuth(user);

    const body = await request.json();
    const { title, description, industry, country } = body;

    if (!title || !description || !industry || !country) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    const topic = await prisma.topic.create({
      data: {
        title: title.trim(),
        description: description.trim(),
        industry,
        country,
        proposedById: user!.id,
        status: 'PENDING' // New topics start as pending
      },
      include: {
        proposedBy: {
          select: {
            name: true,
            username: true
          }
        }
      }
    });

    // Create notification for admins (you might want to implement admin notification system)
    // For now, we'll just create a success response

    return NextResponse.json({
      ...topic,
      message: 'Topic submitted successfully and is pending admin approval'
    }, { status: 201 });
  } catch (error: any) {
    console.error('Error creating topic:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to create topic' },
      { status: error.message?.includes('required') ? 403 : 500 }
    );
  }
}
