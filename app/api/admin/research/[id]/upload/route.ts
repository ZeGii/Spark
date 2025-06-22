
export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import path from 'path';
import { writeFile, mkdir } from 'fs/promises';

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const researchId = params.id;
    const formData = await request.formData();
    
    const file = formData.get('file') as File;
    const type = formData.get('type') as string;

    if (!file || !type) {
      return NextResponse.json(
        { error: 'File and type are required' },
        { status: 400 }
      );
    }

    // Verify research exists
    const research = await prisma.research.findUnique({
      where: { id: researchId }
    });

    if (!research) {
      return NextResponse.json(
        { error: 'Research not found' },
        { status: 404 }
      );
    }

    // Create upload directory if it doesn't exist
    const uploadDir = path.join(process.cwd(), 'uploads', 'research');
    await mkdir(uploadDir, { recursive: true });

    // Generate unique filename
    const timestamp = Date.now();
    const extension = path.extname(file.name);
    const filename = `${timestamp}-${type.replace(/[^a-z0-9]/gi, '_')}${extension}`;
    const filepath = path.join(uploadDir, filename);

    // Save file
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    await writeFile(filepath, buffer);

    // Save document record to database
    const document = await prisma.researchDocument.create({
      data: {
        researchId,
        documentType: type as any,
        originalName: file.name,
        filename,
        filePath: filepath,
        fileSize: file.size,
        mimeType: file.type,
        aiProcessingStatus: 'PENDING',
        uploadedAt: new Date()
      }
    });

    // Update research AI processing status
    await prisma.research.update({
      where: { id: researchId },
      data: {
        aiProcessingStatus: 'PENDING',
        updatedAt: new Date()
      }
    });

    return NextResponse.json({
      success: true,
      document,
      message: 'Document uploaded successfully'
    });

  } catch (error) {
    console.error('Document upload error:', error);
    return NextResponse.json(
      { error: 'Failed to upload document' },
      { status: 500 }
    );
  }
}
