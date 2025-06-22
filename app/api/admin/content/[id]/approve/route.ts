
import { NextRequest, NextResponse } from 'next/server'
import { verifyAdminAuth } from '@/lib/auth-utils'

export const dynamic = 'force-dynamic'

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const authResult = await verifyAdminAuth(request)
    if (!authResult.success) {
      return NextResponse.json({ error: authResult.error }, { status: 401 })
    }

    // Mock approval - in real implementation, update database
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Content approve error:', error)
    return NextResponse.json(
      { error: 'Failed to approve content' },
      { status: 500 }
    )
  }
}
