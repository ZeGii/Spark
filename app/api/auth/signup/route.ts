
import { NextRequest, NextResponse } from 'next/server'
import { hashPassword, createSession } from '@/lib/auth'
import { prisma } from '@/lib/db'

export const dynamic = "force-dynamic"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, username, password, name, profileType, industry, country } = body

    // Validate required fields
    if (!email || !username || !password || !name || !profileType || !industry || !country) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 })
    }

    // Check if user already exists
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [
          { email },
          { username }
        ]
      }
    })

    if (existingUser) {
      return NextResponse.json({ 
        error: existingUser.email === email ? 'Email already exists' : 'Username already exists' 
      }, { status: 400 })
    }

    // Hash password
    const hashedPassword = await hashPassword(password)

    // Create user
    const user = await prisma.user.create({
      data: {
        email,
        username,
        password: hashedPassword,
        name,
        profileType,
        industry,
        country
      }
    })

    // Create default subscription
    await prisma.subscription.create({
      data: {
        userId: user.id,
        plan: 'FREE'
      }
    })

    // Create session
    const token = await createSession(user.id)

    // Set cookie
    const response = NextResponse.json({
      user: {
        id: user.id,
        email: user.email,
        username: user.username,
        name: user.name,
        profileType: user.profileType,
        industry: user.industry,
        country: user.country,
        subscription: 'FREE'
      }
    }, { status: 201 })

    response.cookies.set('auth-token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 7 * 24 * 60 * 60 // 7 days
    })

    return response
  } catch (error) {
    console.error('Signup error:', error)
    return NextResponse.json({ error: 'Failed to create account' }, { status: 500 })
  }
}
