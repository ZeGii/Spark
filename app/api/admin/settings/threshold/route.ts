
import { NextRequest, NextResponse } from 'next/server'
import { verifyAdminAuth } from '@/lib/auth-utils'
import { prisma } from '@/lib/db'

export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  try {
    const authResult = await verifyAdminAuth(request)
    if (!authResult.success) {
      return NextResponse.json({ error: authResult.error }, { status: 401 })
    }

    const thresholdSetting = await prisma.adminSettings.findUnique({
      where: { key: 'default_vote_threshold' }
    })

    const threshold = thresholdSetting ? parseInt(thresholdSetting.value) : 50

    return NextResponse.json({ 
      threshold,
      description: thresholdSetting?.description || 'Default vote threshold for topic qualification'
    })
  } catch (error) {
    console.error('Error fetching vote threshold:', error)
    return NextResponse.json(
      { error: 'Failed to fetch vote threshold' },
      { status: 500 }
    )
  }
}

export async function PUT(request: NextRequest) {
  try {
    const authResult = await verifyAdminAuth(request)
    if (!authResult.success) {
      return NextResponse.json({ error: authResult.error }, { status: 401 })
    }

    const body = await request.json()
    const { threshold } = body

    if (!threshold || threshold < 1 || threshold > 1000) {
      return NextResponse.json(
        { error: 'Threshold must be between 1 and 1000' },
        { status: 400 }
      )
    }

    const setting = await prisma.adminSettings.upsert({
      where: { key: 'default_vote_threshold' },
      update: {
        value: threshold.toString(),
        description: 'Default vote threshold for topic qualification'
      },
      create: {
        key: 'default_vote_threshold',
        value: threshold.toString(),
        description: 'Default vote threshold for topic qualification'
      }
    })

    return NextResponse.json({ 
      success: true,
      threshold: parseInt(setting.value),
      message: 'Vote threshold updated successfully'
    })
  } catch (error) {
    console.error('Error updating vote threshold:', error)
    return NextResponse.json(
      { error: 'Failed to update vote threshold' },
      { status: 500 }
    )
  }
}
