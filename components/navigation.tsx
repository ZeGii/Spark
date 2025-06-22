
'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Menu,
  X,
  Bell,
  Shield
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { useAuth } from '@/contexts/auth-context'
import AuthModal from '@/components/auth-modal'
import ProfileDropdown from '@/components/profile-dropdown'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
  const pathname = usePathname()
  const { user, loading } = useAuth()
  
  // Check if we're in admin area
  const isAdminArea = pathname.startsWith('/admin')

  const navItems = [
    { href: '/trending', label: 'Trending Topics' },
    { href: '/opportunities', label: 'Opportunities' },
    { href: '/research', label: 'Research' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-xl border-b border-border/50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Hidden in admin areas */}
          {!isAdminArea && (
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-200">
                <Image
                  src="/images/Spark icon logo.png"
                  alt="Spark Icon"
                  width={40}
                  height={40}
                  className="w-10 h-10 object-contain"
                />
              </div>
              <div className="flex items-center">
                <Image
                  src="/images/Spark logo text.png"
                  alt="Spark"
                  width={80}
                  height={32}
                  className="h-8 w-auto object-contain"
                />
              </div>
            </Link>
          )}
          
          {/* Spacer for admin areas to maintain layout */}
          {isAdminArea && <div></div>}

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105",
                    isActive 
                      ? "bg-primary text-primary-foreground shadow-md" 
                      : "text-foreground/70 hover:text-foreground hover:bg-card hover:shadow-md"
                  )}
                >
                  {item.label}
                </Link>
              )
            })}
          </div>

          {/* Right side actions */}
          <div className="hidden md:flex items-center space-x-4">
            {user?.role === 'admin' && (
              <Link href="/admin">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="relative hover:bg-orange-100 hover:text-orange-700 bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-200 hover:border-orange-300 transition-all duration-200 hover:scale-105 hover:shadow-md"
                >
                  <Shield className="w-5 h-5 text-orange-600" />
                  <span className="ml-2 text-sm font-medium text-orange-700">Admin</span>
                </Button>
              </Link>
            )}
            {user && (
              <Button variant="ghost" size="sm" className="relative hover:bg-card hover:shadow-md">
                <Bell className="w-5 h-5" />
                <Badge className="absolute -top-1 -right-1 w-5 h-5 p-0 flex items-center justify-center text-xs bg-secondary text-secondary-foreground">
                  3
                </Badge>
              </Button>
            )}
            
            {!loading && (
              user ? (
                <ProfileDropdown />
              ) : (
                <Button 
                  size="sm" 
                  variant="gradient"
                  className="px-6"
                  onClick={() => setIsAuthModalOpen(true)}
                >
                  Login / Sign Up
                </Button>
              )
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              className="hover:bg-card hover:shadow-md"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-4 pt-4 pb-6 space-y-3 border-t border-border/50 bg-background/95 backdrop-blur-xl">
              {navItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200",
                      isActive 
                        ? "bg-primary text-primary-foreground shadow-md" 
                        : "text-foreground/70 hover:text-foreground hover:bg-card hover:shadow-md"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
              })}
              <div className="pt-4 space-y-3 border-t border-border/50">
                {user?.role === 'admin' && (
                  <Link href="/admin" onClick={() => setIsOpen(false)}>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="w-full justify-start hover:bg-orange-100 hover:text-orange-700 bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-200"
                    >
                      <Shield className="w-5 h-5 mr-3 text-orange-600" />
                      <span className="text-orange-700 font-medium">Admin Dashboard</span>
                    </Button>
                  </Link>
                )}
                {user && (
                  <Button variant="ghost" size="sm" className="w-full justify-start hover:bg-card hover:shadow-md">
                    <Bell className="w-5 h-5 mr-3" />
                    Notifications
                    <Badge className="ml-auto bg-secondary text-secondary-foreground">3</Badge>
                  </Button>
                )}
                
                {!loading && (
                  user ? (
                    <Link href="/profile" onClick={() => setIsOpen(false)}>
                      <Button variant="ghost" size="sm" className="w-full justify-start hover:bg-card hover:shadow-md">
                        Profile Settings
                      </Button>
                    </Link>
                  ) : (
                    <Button 
                      size="sm" 
                      variant="gradient"
                      className="w-full"
                      onClick={() => {
                        setIsAuthModalOpen(true)
                        setIsOpen(false)
                      }}
                    >
                      Login / Sign Up
                    </Button>
                  )
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      <AuthModal 
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
    </nav>
  )
}

export default Navigation
