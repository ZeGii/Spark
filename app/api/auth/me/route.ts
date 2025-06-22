
import { NextRequest, NextResponse } from 'next/server'
import { validateSession } from '@/lib/auth'

export const dynamic = "force-dynamic"

export async function GET(request: NextRequest) {
  try {
    const token = request.cookies.get('auth-token')?.value

    if (!token) {
      return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })
    }

    const user = await validateSession(token)

    if (!user) {
      const response = NextResponse.json({ error: 'Invalid session' }, { status: 401 })
      response.cookies.delete('auth-token')
      return response
    }

    return NextResponse.json({ user })
  } catch (error) {
    console.error('Auth check error:', error)
    return NextResponse.json({ error: 'Failed to check authentication' }, { status: 500 })
  }
}
