
export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';
import { prisma } from '@/lib/db';
import { aiDocumentProcessor } from '@/lib/ai-document-processor';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    const researchId = formData.get('researchId') as string;
    const documentType = formData.get('documentType') as string;

    // Enhanced validation with detailed error messages
    if (!file) {
      return NextResponse.json({ 
        error: 'No file uploaded',
        details: 'Please select a file to upload'
      }, { status: 400 });
    }

    if (!researchId) {
      return NextResponse.json({ 
        error: 'Research ID required',
        details: 'Research ID is missing from the request'
      }, { status: 400 });
    }

    if (!documentType) {
      return NextResponse.json({ 
        error: 'Document type required',
        details: 'Please select a document type'
      }, { status: 400 });
    }

    // Validate document type
    const validDocumentTypes = [
      'MARKET_DATA', 
      'COMPETITIVE_ANALYSIS', 
      'POU_ANALYSIS', 
      'MARKET_DISCOVERY_REPORT', 
      'PRESENTATION_PDF',
      'FINANCIAL_PROJECTIONS'
    ];
    
    if (!validDocumentTypes.includes(documentType)) {
      return NextResponse.json({ 
        error: 'Invalid document type',
        details: `Allowed types: ${validDocumentTypes.join(', ')}`
      }, { status: 400 });
    }

    // Enhanced file validation
    const maxFileSize = 50 * 1024 * 1024; // 50MB
    if (file.size > maxFileSize) {
      return NextResponse.json({ 
        error: 'File too large',
        details: 'Maximum file size is 50MB'
      }, { status: 400 });
    }

    // Allow multiple file types
    const allowedTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'application/vnd.ms-excel',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      'text/csv'
    ];

    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json({ 
        error: 'Unsupported file type',
        details: 'Supported formats: PDF, DOC, DOCX, XLS, XLSX, CSV'
      }, { status: 400 });
    }

    // Verify research exists
    const research = await prisma.research.findUnique({
      where: { id: researchId }
    });

    if (!research) {
      return NextResponse.json({ 
        error: 'Research not found',
        details: 'The specified research project does not exist'
      }, { status: 404 });
    }

    // Create uploads directory if it doesn't exist
    const uploadsDir = join(process.cwd(), 'uploads', 'research');
    try {
      await mkdir(uploadsDir, { recursive: true });
    } catch (dirError) {
      console.error('Error creating upload directory:', dirError);
      return NextResponse.json({ 
        error: 'Upload directory creation failed',
        details: 'Unable to create the upload directory'
      }, { status: 500 });
    }

    // Generate unique filename with better sanitization
    const timestamp = Date.now();
    const randomId = Math.random().toString(36).substring(2, 8);
    const sanitizedName = file.name
      .replace(/[^a-zA-Z0-9.-]/g, '_')
      .replace(/_{2,}/g, '_')
      .toLowerCase();
    const filename = `${timestamp}-${randomId}-${sanitizedName}`;
    const filePath = join(uploadsDir, filename);

    // Save file with error handling
    try {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);
      await writeFile(filePath, buffer);
      console.log(`File saved successfully: ${filename}`);
    } catch (writeError) {
      console.error('Error writing file:', writeError);
      return NextResponse.json({ 
        error: 'File write failed',
        details: 'Unable to save the uploaded file to disk'
      }, { status: 500 });
    }

    // Create document record with error handling
    let document;
    try {
      document = await prisma.researchDocument.create({
        data: {
          filename,
          originalName: file.name,
          fileSize: file.size,
          mimeType: file.type,
          filePath,
          documentType: documentType as any, // Cast to enum type
          researchId,
          aiProcessingStatus: 'PENDING'
        }
      });
      console.log(`Document record created: ${document.id}`);
    } catch (dbError) {
      console.error('Error creating document record:', dbError);
      // Try to clean up the uploaded file
      try {
        const fs = require('fs').promises;
        await fs.unlink(filePath);
      } catch (cleanupError) {
        console.error('Error cleaning up file after DB failure:', cleanupError);
      }
      return NextResponse.json({ 
        error: 'Database operation failed',
        details: 'Unable to save document information to database'
      }, { status: 500 });
    }

    return NextResponse.json({
      success: true,
      document: {
        id: document.id,
        filename: document.filename,
        originalName: document.originalName,
        fileSize: document.fileSize,
        uploadedAt: document.uploadedAt,
        aiProcessingStatus: document.aiProcessingStatus
      }
    });

  } catch (error) {
    console.error('Unexpected upload error:', error);
    
    // Provide more specific error information
    let errorMessage = 'Failed to upload file';
    let errorDetails = 'An unexpected error occurred during file upload';
    
    if (error instanceof Error) {
      errorMessage = error.message;
      errorDetails = error.stack || error.message;
    }
    
    return NextResponse.json(
      { 
        error: errorMessage,
        details: errorDetails,
        timestamp: new Date().toISOString()
      },
      { status: 500 }
    );
  }
}
