
import { NextRequest, NextResponse } from 'next/server'
import { verifyPassword, createSession } from '@/lib/auth'
import { prisma } from '@/lib/db'

export const dynamic = "force-dynamic"

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    let body
    try {
      body = await request.json()
    } catch (parseError) {
      console.error('JSON parse error:', parseError)
      return NextResponse.json({ error: 'Invalid JSON in request body' }, { status: 400 })
    }

    const { email, password } = body

    // Validate input
    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password are required' }, { status: 400 })
    }

    if (typeof email !== 'string' || typeof password !== 'string') {
      return NextResponse.json({ error: 'Email and password must be strings' }, { status: 400 })
    }

    // Normalize email
    const normalizedEmail = email.toLowerCase().trim()

    // Find user
    const user = await prisma.user.findUnique({
      where: { email: normalizedEmail },
      include: {
        subscriptions: {
          where: { status: 'active' },
          orderBy: { createdAt: 'desc' },
          take: 1
        }
      }
    })

    if (!user) {
      console.log(`Login attempt failed: User not found for email ${normalizedEmail}`)
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
    }

    // Check if user is suspended
    if (user.status === 'SUSPENDED') {
      console.log(`Login attempt failed: User ${user.id} is suspended`)
      return NextResponse.json({ 
        error: 'Your account has been suspended. Please contact support for assistance.',
        suspended: true 
      }, { status: 403 })
    }

    // Verify password
    const isValidPassword = await verifyPassword(password, user.password)
    if (!isValidPassword) {
      console.log(`Login attempt failed: Invalid password for user ${user.id}`)
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
    }

    // Create session
    const token = await createSession(user.id)

    console.log(`User ${user.id} logged in successfully`)

    // Set cookie and return user data
    const response = NextResponse.json({
      user: {
        id: user.id,
        email: user.email,
        username: user.username,
        name: user.name,
        profileType: user.profileType,
        industry: user.industry,
        country: user.country,
        subscription: user.subscriptions[0]?.plan || 'FREE',
        role: user.role // Include role for admin redirect logic
      }
    })

    response.cookies.set('auth-token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 7 * 24 * 60 * 60 // 7 days
    })

    return response
  } catch (error) {
    console.error('Login error:', error)
    
    // Handle specific database errors
    if (error instanceof Error) {
      if (error.message.includes('database')) {
        return NextResponse.json({ error: 'Database connection error. Please try again.' }, { status: 503 })
      }
      if (error.message.includes('timeout')) {
        return NextResponse.json({ error: 'Request timeout. Please try again.' }, { status: 408 })
      }
    }
    
    return NextResponse.json({ error: 'An unexpected error occurred. Please try again.' }, { status: 500 })
  }
}
