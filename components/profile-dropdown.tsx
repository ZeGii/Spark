
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  User, 
  Settings, 
  Crown, 
  LogOut,
  ChevronDown,
  Bell,
  LayoutDashboard
} from 'lucide-react'
import { useAuth } from '@/contexts/auth-context'

const ProfileDropdown = () => {
  const { user, logout } = useAuth()
  const [isOpen, setIsOpen] = useState(false)

  if (!user) return null

  const handleLogout = async () => {
    await logout()
    setIsOpen(false)
  }

  const profileTypes = {
    'ENTREPRENEUR': 'Entrepreneur',
    'INVESTOR': 'Investor', 
    'PRODUCT_MANAGER': 'Product Manager',
    'BUSINESS_ANALYST': 'Business Analyst'
  }

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 hover:bg-transparent"
      >
        <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/60 rounded-full flex items-center justify-center">
          <User className="w-4 h-4 text-white" />
        </div>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </Button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <div 
              className="fixed inset-0 z-40" 
              onClick={() => setIsOpen(false)}
            />
            
            {/* Dropdown */}
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 top-full mt-2 w-72 bg-background border border-border rounded-lg shadow-lg z-50"
            >
              {/* User Info */}
              <div className="p-4 border-b border-border">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/60 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold truncate">{user.name}</p>
                    <p className="text-sm text-muted-foreground truncate">@{user.username}</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <Badge variant={user.subscription === 'PRO' ? 'default' : 'secondary'} className="text-xs">
                        {user.subscription === 'PRO' ? (
                          <>
                            <Crown className="w-3 h-3 mr-1" />
                            Pro
                          </>
                        ) : (
                          'Free'
                        )}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {profileTypes[user.profileType as keyof typeof profileTypes]}
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>

              {/* Menu Items */}
              <div className="p-2">
                <Link href="/dashboard" onClick={() => setIsOpen(false)}>
                  <div className="flex items-center space-x-3 px-3 py-2 rounded-md hover:bg-accent transition-colors cursor-pointer">
                    <LayoutDashboard className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">My Dashboard</span>
                  </div>
                </Link>

                <Link href="/profile" onClick={() => setIsOpen(false)}>
                  <div className="flex items-center space-x-3 px-3 py-2 rounded-md hover:bg-accent transition-colors cursor-pointer">
                    <Settings className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">Profile Settings</span>
                  </div>
                </Link>

                <div className="flex items-center space-x-3 px-3 py-2 rounded-md hover:bg-accent transition-colors cursor-pointer">
                  <Bell className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">Notifications</span>
                  <Badge className="ml-auto text-xs">3</Badge>
                </div>

                {user.subscription === 'FREE' && (
                  <div className="flex items-center space-x-3 px-3 py-2 rounded-md hover:bg-accent transition-colors cursor-pointer">
                    <Crown className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">Upgrade to Pro</span>
                  </div>
                )}
              </div>

              {/* Logout */}
              <div className="p-2 border-t border-border">
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-3 px-3 py-2 rounded-md hover:bg-accent transition-colors cursor-pointer w-full text-left"
                >
                  <LogOut className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">Sign Out</span>
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

export default ProfileDropdown
