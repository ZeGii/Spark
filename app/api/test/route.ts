
export const dynamic = "force-dynamic";

import { NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function GET() {
  try {
    // Simple test to see if database connection works
    const userCount = await db.user.count()
    return NextResponse.json({ 
      message: 'Database connection successful',
      userCount 
    })
  } catch (error) {
    console.error('Database test error:', error)
    return NextResponse.json(
      { error: 'Database connection failed', details: error },
      { status: 500 }
    )
  }
}
