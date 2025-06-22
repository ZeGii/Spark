
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { 
  Shield, 
  Menu,
  X,
  LayoutDashboard,
  Users,
  FileText,
  Lightbulb,
  FlaskConical,
  Settings,
  LogOut,
  Bell,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { useAuth } from '@/contexts/auth-context'

interface AdminSidebarProps {
  collapsed: boolean
  onToggleCollapse: () => void
}

const AdminSidebar = ({ collapsed, onToggleCollapse }: AdminSidebarProps) => {
  const pathname = usePathname()
  const { user, logout } = useAuth()

  const navItems = [
    { href: '/admin', label: 'Dashboard', icon: LayoutDashboard },
    { href: '/admin/users', label: 'Users', icon: Users },
    { href: '/admin/topics', label: 'Topics', icon: Lightbulb },
    { href: '/admin/research', label: 'Research', icon: FlaskConical },
    { href: '/admin/settings', label: 'Settings', icon: Settings },
  ]

  const handleLogout = async () => {
    await logout()
    window.location.href = '/'
  }

  return (
    <div className={cn(
      "fixed left-0 top-0 h-full bg-gradient-to-b from-[#1A1A1A] to-[#10141a] text-white transition-all duration-300 z-50 flex flex-col border-r border-white/20",
      collapsed ? "w-16" : "w-64"
    )}>
      {/* Header */}
      <div className="p-4 border-b border-white/20">
        <div className="flex items-center justify-center">
          <Link href="/admin" className="flex items-center justify-center">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-200">
              <Image
                src="/images/Spark icon logo.png"
                alt="Spark Admin"
                width={40}
                height={40}
                className="w-10 h-10 object-contain"
              />
            </div>
          </Link>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href || (item.href !== '/admin' && pathname.startsWith(item.href))
          const Icon = item.icon
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center space-x-3 px-3 py-3 rounded-lg text-sm font-medium transition-all duration-200 group",
                isActive 
                  ? "bg-gradient-to-r from-[#00FF88] to-[#10B981] text-black shadow-lg hover:shadow-[0_20px_50px_rgba(0,255,136,0.15)]" 
                  : "text-[#CCCCCC] hover:text-white hover:bg-gradient-to-r hover:from-[#00FF88]/20 hover:to-[#10B981]/20 hover:border-[#00FF88]/30"
              )}
              title={collapsed ? item.label : undefined}
            >
              <Icon className={cn("flex-shrink-0", collapsed ? "w-5 h-5" : "w-5 h-5")} />
              {!collapsed && <span className="truncate">{item.label}</span>}
              {collapsed && (
                <div className="absolute left-16 bg-gradient-to-r from-[#1A1A1A] to-[#252529] text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50 border border-white/20">
                  {item.label}
                </div>
              )}
            </Link>
          )
        })}
      </nav>

      {/* User Info & Actions */}
      <div className="p-4 border-t border-white/20">
        {!collapsed ? (
          <div className="space-y-4">
            {/* Notifications */}
            <Button variant="ghost" size="sm" className="w-full justify-start text-[#CCCCCC] hover:text-white hover:bg-gradient-to-r hover:from-[#f5d565]/20 hover:to-[#FCD34D]/20">
              <Bell className="w-4 h-4 mr-3" />
              <span>Notifications</span>
              <span className="ml-auto w-2 h-2 bg-[#f5d565] rounded-full"></span>
            </Button>

            {/* User Profile */}
            <div className="flex items-center space-x-3 p-3 bg-gradient-to-r from-[#1A1A1A] to-[#252529] rounded-lg border border-white/10">
              <Avatar className="w-8 h-8">
                <AvatarImage src="" />
                <AvatarFallback className="bg-gradient-to-br from-[#00FF88] to-[#10B981] text-black text-xs font-medium">
                  {user?.name?.charAt(0)?.toUpperCase() || 'A'}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-white truncate">{user?.name}</p>
                <p className="text-xs text-[#f5d565]">Administrator</p>
              </div>
            </div>

            {/* Logout */}
            <Button 
              variant="ghost" 
              size="sm"
              onClick={handleLogout}
              className="w-full justify-start text-[#CCCCCC] hover:text-white hover:bg-gradient-to-r hover:from-red-500/20 hover:to-red-600/20"
            >
              <LogOut className="w-4 h-4 mr-3" />
              <span>Logout</span>
            </Button>
          </div>
        ) : (
          <div className="space-y-2">
            <Button variant="ghost" size="sm" className="w-full p-2 text-[#CCCCCC] hover:text-white hover:bg-gradient-to-r hover:from-[#f5d565]/20 hover:to-[#FCD34D]/20" title="Notifications">
              <Bell className="w-4 h-4" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-[#f5d565] rounded-full"></span>
            </Button>
            
            <div className="flex justify-center">
              <Avatar className="w-8 h-8">
                <AvatarImage src="" />
                <AvatarFallback className="bg-gradient-to-br from-[#00FF88] to-[#10B981] text-black text-xs font-medium">
                  {user?.name?.charAt(0)?.toUpperCase() || 'A'}
                </AvatarFallback>
              </Avatar>
            </div>
            
            <Button 
              variant="ghost" 
              size="sm"
              onClick={handleLogout}
              className="w-full p-2 text-[#CCCCCC] hover:text-white hover:bg-gradient-to-r hover:from-red-500/20 hover:to-red-600/20"
              title="Logout"
            >
              <LogOut className="w-4 h-4" />
            </Button>
          </div>
        )}
      </div>

      {/* Collapse Toggle */}
      <Button
        variant="ghost"
        size="sm"
        onClick={onToggleCollapse}
        className="absolute -right-3 top-6 w-6 h-6 bg-gradient-to-r from-[#1A1A1A] to-[#252529] border border-white/20 rounded-full text-[#CCCCCC] hover:text-white hover:bg-gradient-to-r hover:from-[#00FF88]/20 hover:to-[#10B981]/20 p-0 shadow-lg"
      >
        {collapsed ? <ChevronRight className="w-3 h-3" /> : <ChevronLeft className="w-3 h-3" />}
      </Button>
    </div>
  )
}

export default AdminSidebar
