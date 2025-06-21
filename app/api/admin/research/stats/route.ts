
import { NextRequest, NextResponse } from 'next/server'
import { verifyAdminAuth } from '@/lib/auth-utils'

export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  try {
    const authResult = await verifyAdminAuth(request)
    if (!authResult.success) {
      return NextResponse.json({ error: authResult.error }, { status: 401 })
    }

    // Mock research stats
    const stats = {
      totalResearch: 24,
      activeResearch: 8,
      completedResearch: 12,
      pendingResearch: 4,
      averageCompletionTime: 28,
      completionRate: 85,
      researchGrowth: 15
    }

    return NextResponse.json(stats)
  } catch (error) {
    console.error('Research stats API error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch research stats' },
      { status: 500 }
    )
  }
}
