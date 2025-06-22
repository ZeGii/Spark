
'use client'

import { ReactNode, useState } from 'react'
import { useAuth } from '@/contexts/auth-context'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import AdminSidebar from '@/components/admin-sidebar'
import { cn } from '@/lib/utils'

interface AdminLayoutProps {
  children: ReactNode
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const { user, loading } = useAuth()
  const router = useRouter()
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  useEffect(() => {
    if (!loading) {
      if (!user) {
        router.push('/')
        return
      }
      
      if (user?.role !== 'admin') {
        router.push('/dashboard')
        return
      }
    }
  }, [user, loading, router])

  // Temporarily bypass loading state to test pages
  if (loading) {
    console.log('AdminLayout: Auth loading state detected, bypassing for testing')
    // return (
    //   <div className="min-h-screen bg-[#10141a] flex items-center justify-center">
    //     <div className="text-center">
    //       <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#00FF88] mx-auto mb-4"></div>
    //       <p className="text-white">Loading admin interface...</p>
    //     </div>
    //   </div>
    // )
  }

  // Temporarily bypass user auth check for testing
  if (!user || user?.role !== 'admin') {
    console.log('AdminLayout: No user or not admin, bypassing for testing')
    // return null
  }

  return (
    <div className="min-h-screen bg-[#10141a]">
      <AdminSidebar 
        collapsed={sidebarCollapsed} 
        onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)} 
      />
      
      {/* Main Content */}
      <div className={cn(
        "transition-all duration-300",
        sidebarCollapsed ? "ml-16" : "ml-64"
      )}>
        {/* Top Header Bar */}
        <header className="bg-gradient-to-r from-[#1A1A1A] to-[#252529] border-b border-white/20 px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-white">Admin Panel</h1>
              <p className="text-sm text-[#CCCCCC]">Manage your platform operations</p>
            </div>
            
            {/* Quick Stats or Actions can go here */}
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm font-medium text-white">System Status</p>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[#00FF88] rounded-full"></div>
                  <span className="text-xs text-[#CCCCCC]">All systems operational</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6 bg-[#141921]">
          {children}
        </main>
      </div>
    </div>
  )
}
