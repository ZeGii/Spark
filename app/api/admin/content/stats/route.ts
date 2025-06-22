
import { NextRequest, NextResponse } from 'next/server'
import { verifyAdminAuth } from '@/lib/auth-utils'

export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  try {
    const authResult = await verifyAdminAuth(request)
    if (!authResult.success) {
      return NextResponse.json({ error: authResult.error }, { status: 401 })
    }

    // Mock content stats
    const stats = {
      totalContent: 156,
      pendingReview: 12,
      approvedContent: 128,
      rejectedContent: 11,
      flaggedContent: 5,
      contentGrowth: 18,
      approvalRate: 82
    }

    return NextResponse.json(stats)
  } catch (error) {
    console.error('Content stats API error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch content stats' },
      { status: 500 }
    )
  }
}
