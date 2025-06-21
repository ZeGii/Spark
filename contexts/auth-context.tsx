
'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

interface User {
  id: string
  email: string
  username: string
  name: string
  profileType: string
  industry: string
  country: string
  subscription: string
  role?: string
}

interface AuthContextType {
  user: User | null
  loading: boolean
  login: (email: string, password: string) => Promise<void>
  signup: (userData: SignupData) => Promise<void>
  logout: () => Promise<void>
  refreshUser: () => Promise<void>
}

interface SignupData {
  email: string
  username: string
  password: string
  name: string
  profileType: string
  industry: string
  country: string
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  const checkAuth = async () => {
    try {
      const response = await fetch('/api/auth/me')
      if (response.ok) {
        const data = await response.json()
        setUser(data.user)
      } else {
        setUser(null)
      }
    } catch (error) {
      console.error('Auth check failed:', error)
      setUser(null)
    } finally {
      setLoading(false)
    }
  }

  const login = async (email: string, password: string) => {
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      })

      if (!response.ok) {
        let errorMessage = 'Login failed'
        
        try {
          const errorData = await response.json()
          errorMessage = errorData.error || errorMessage
        } catch (parseError) {
          console.error('Failed to parse error response:', parseError)
          // If we can't parse the error response, it might be HTML (like the original issue)
          if (response.status === 500) {
            errorMessage = 'Server error. Please try again later.'
          } else if (response.status === 401) {
            errorMessage = 'Invalid email or password'
          } else if (response.status === 400) {
            errorMessage = 'Please provide valid email and password'
          }
        }
        
        throw new Error(errorMessage)
      }

      const data = await response.json()
      setUser(data.user)
      console.log('Login successful:', data.user.email)
      
      // Role-based redirect after login
      if (data.user?.role === 'admin') {
        window.location.href = '/admin'
      } else {
        window.location.href = '/dashboard'
      }
    } catch (error) {
      console.error('Login error:', error)
      throw error
    }
  }

  const signup = async (userData: SignupData) => {
    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData)
      })

      if (!response.ok) {
        let errorMessage = 'Signup failed'
        
        try {
          const errorData = await response.json()
          errorMessage = errorData.error || errorMessage
        } catch (parseError) {
          console.error('Failed to parse error response:', parseError)
          if (response.status === 500) {
            errorMessage = 'Server error. Please try again later.'
          } else if (response.status === 400) {
            errorMessage = 'Please provide valid information'
          } else if (response.status === 409) {
            errorMessage = 'Email or username already exists'
          }
        }
        
        throw new Error(errorMessage)
      }

      const data = await response.json()
      setUser(data.user)
      console.log('Signup successful:', data.user.email)
    } catch (error) {
      console.error('Signup error:', error)
      throw error
    }
  }

  const logout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' })
    } catch (error) {
      console.error('Logout error:', error)
    } finally {
      setUser(null)
    }
  }

  const refreshUser = async () => {
    await checkAuth()
  }

  useEffect(() => {
    checkAuth()
  }, [])

  return (
    <AuthContext.Provider value={{ 
      user, 
      loading, 
      login, 
      signup, 
      logout, 
      refreshUser
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
