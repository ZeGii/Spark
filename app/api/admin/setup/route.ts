
import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import bcrypt from 'bcryptjs';

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  try {
    // Update admin user role
    const admin = await db.user.upsert({
      where: { email: 'admin@spark.com' },
      update: { role: 'admin' },
      create: {
        email: 'admin@spark.com',
        username: 'admin',
        name: 'Admin User',
        password: await bcrypt.hash('admin123', 10),
        profileType: 'BUSINESS_ANALYST',
        industry: 'Technology',
        country: 'United States',
        role: 'admin'
      }
    });

    return NextResponse.json({ 
      success: true, 
      message: 'Admin user setup complete',
      admin: {
        email: admin.email,
        role: admin.role
      }
    });

  } catch (error) {
    console.error('Admin setup error:', error);
    return NextResponse.json(
      { error: 'Failed to setup admin user' },
      { status: 500 }
    );
  }
}
