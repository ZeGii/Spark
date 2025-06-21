
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Only handle user route redirects for admin users
  // Admin routes are protected client-side for better reliability
  if (pathname.startsWith('/dashboard') || pathname.startsWith('/profile')) {
    try {
      const token = request.cookies.get('auth-token')?.value
      
      if (token) {
        // Simple JWT decode to check role without database call
        const payload = JSON.parse(atob(token.split('.')[1]))
        const response = await fetch(`${request.nextUrl.origin}/api/auth/me`, {
          headers: {
            'Cookie': `auth-token=${token}`
          }
        })
        
        if (response.ok) {
          const data = await response.json()
          if (data.user?.role === 'admin') {
            // Admin trying to access user routes, redirect to admin dashboard
            return NextResponse.redirect(new URL('/admin', request.url))
          }
        }
      }
      
      // Regular user or no token - allow
      return NextResponse.next()
      
    } catch (error) {
      console.error('User middleware error:', error)
      return NextResponse.next()
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/profile/:path*'
  ]
}
