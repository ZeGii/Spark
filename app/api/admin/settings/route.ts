
import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    const settings = await prisma.adminSettings.findMany({
      select: {
        key: true,
        value: true,
        description: true,
        updatedAt: true
      }
    })

    // Convert to key-value object for easier frontend consumption
    const settingsObject = settings.reduce((acc, setting) => {
      acc[setting.key] = {
        value: setting.value,
        description: setting.description,
        updatedAt: setting.updatedAt
      }
      return acc
    }, {} as Record<string, any>)

    // Ensure default settings exist
    const defaultSettings: Record<string, { value: string; description: string }> = {
      topic_title_max_length: { value: '100', description: 'Maximum character limit for topic titles' },
      topic_description_max_length: { value: '500', description: 'Maximum character limit for topic descriptions' }
    }

    // Merge with defaults for any missing settings
    Object.keys(defaultSettings).forEach(key => {
      if (!settingsObject[key]) {
        settingsObject[key] = defaultSettings[key]
      }
    })

    return NextResponse.json({
      success: true,
      settings: settingsObject
    })

  } catch (error) {
    console.error('Get settings error:', error)
    return NextResponse.json(
      { error: 'Failed to retrieve settings', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}

export async function PUT(request: NextRequest) {
  try {
    const { settings } = await request.json()

    if (!settings || typeof settings !== 'object') {
      return NextResponse.json(
        { error: 'Invalid settings provided' },
        { status: 400 }
      )
    }

    // Validate settings
    const validSettings = ['topic_title_max_length', 'topic_description_max_length']
    const invalidSettings = Object.keys(settings).filter(key => !validSettings.includes(key))
    
    if (invalidSettings.length > 0) {
      return NextResponse.json(
        { error: `Invalid setting keys: ${invalidSettings.join(', ')}` },
        { status: 400 }
      )
    }

    // Validate values
    for (const [key, value] of Object.entries(settings)) {
      if (key.includes('max_length')) {
        const numValue = parseInt(value as string)
        if (isNaN(numValue) || numValue < 10 || numValue > 2000) {
          return NextResponse.json(
            { error: `Invalid value for ${key}: must be a number between 10 and 2000` },
            { status: 400 }
          )
        }
      }
    }

    // Use transaction to update all settings atomically
    const result = await prisma.$transaction(async (tx) => {
      const updatedSettings = []

      for (const [key, value] of Object.entries(settings)) {
        const setting = await tx.adminSettings.upsert({
          where: { key },
          update: {
            value: String(value),
            updatedAt: new Date()
          },
          create: {
            key,
            value: String(value),
            description: getSettingDescription(key),
            createdAt: new Date(),
            updatedAt: new Date()
          }
        })
        updatedSettings.push(setting)
      }

      return updatedSettings
    })

    return NextResponse.json({
      success: true,
      message: 'Settings updated successfully',
      updatedSettings: result
    })

  } catch (error) {
    console.error('Update settings error:', error)
    return NextResponse.json(
      { error: 'Failed to update settings', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}

function getSettingDescription(key: string): string {
  const descriptions: Record<string, string> = {
    topic_title_max_length: 'Maximum character limit for topic titles',
    topic_description_max_length: 'Maximum character limit for topic descriptions'
  }
  return descriptions[key] || 'Admin setting'
}
