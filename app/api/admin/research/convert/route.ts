
export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    const { topicId } = await request.json();

    if (!topicId) {
      return NextResponse.json({ error: 'Topic ID required' }, { status: 400 });
    }

    // Get the topic
    const topic = await prisma.topic.findUnique({
      where: { id: topicId }
    });

    if (!topic) {
      return NextResponse.json({ error: 'Topic not found' }, { status: 404 });
    }

    if (topic.status !== 'QUALIFIED') {
      return NextResponse.json({ error: 'Topic is not qualified for research' }, { status: 400 });
    }

    // Check if research already exists
    const existingResearch = await prisma.research.findUnique({
      where: { topicId }
    });

    if (existingResearch) {
      return NextResponse.json({ error: 'Research already exists for this topic' }, { status: 400 });
    }

    // Create research record with QUEUED status as per workflow
    const research = await prisma.research.create({
      data: {
        title: topic.title,
        brief: topic.description,
        executiveSummary: `Research analysis for ${topic.title} in the ${topic.industry} industry.`,
        methodology: 'Comprehensive market analysis and opportunity identification.',
        keyFindings: [`Market opportunity identified in ${topic.industry}`, `Geographic focus: ${topic.country}`],
        country: topic.country,
        industry: topic.industry,
        releaseDate: new Date(),
        topicId: topic.id,
        status: 'QUEUED', // Set to QUEUED as per workflow specification
        isPublished: false, // Starts unpublished
        aiProcessingStatus: 'PENDING'
      }
    });

    // Update topic status
    await prisma.topic.update({
      where: { id: topicId },
      data: {
        status: 'CONVERTED',
        convertedAt: new Date()
      }
    });

    return NextResponse.json({
      success: true,
      research,
      message: 'Topic successfully converted to research'
    });

  } catch (error) {
    console.error('Convert error:', error);
    return NextResponse.json(
      { error: 'Failed to convert topic to research' },
      { status: 500 }
    );
  }
}
