
'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { 
  MoreVertical, 
  UserX, 
  Shield, 
  UserCheck
} from 'lucide-react'
import { toast } from 'sonner'

interface User {
  id: string
  name: string
  email: string
  role: 'user' | 'admin'
  status: 'active' | 'suspended' | 'banned'
}

interface UserActionsDropdownProps {
  user: User
  currentUserEmail: string
  onActionComplete: () => void
}

export function UserActionsDropdown({ 
  user, 
  currentUserEmail, 
  onActionComplete 
}: UserActionsDropdownProps) {
  const [isLoading, setIsLoading] = useState(false)
  const isSuperAdmin = currentUserEmail === 'admin@spark.com'
  const canPromote = isSuperAdmin && user.role !== 'admin'

  const handleUserAction = async (action: string) => {
    setIsLoading(true)
    try {
      const response = await fetch(`/api/admin/users/${user.id}/${action}`, {
        method: 'POST'
      })
      
      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || `Failed to ${action} user`)
      }

      const result = await response.json()
      toast.success(result.message || `User ${action}ed successfully`)
      onActionComplete()
    } catch (error) {
      console.error(`Error ${action}ing user:`, error)
      toast.error(error instanceof Error ? error.message : `Failed to ${action} user`)
    } finally {
      setIsLoading(false)
    }
  }

  const handleSuspend = () => {
    if (user.status === 'suspended') {
      toast.info('User is already suspended')
      return
    }
    handleUserAction('suspend')
  }

  const handleActivate = () => {
    if (user.status === 'active') {
      toast.info('User is already active')
      return
    }
    handleUserAction('activate')
  }

  const handlePromote = () => {
    if (user.role === 'admin') {
      toast.info('User is already an admin')
      return
    }
    handleUserAction('promote')
  }



  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="sm" 
          className="h-8 w-8 p-0 text-[#CCCCCC] hover:text-white hover:bg-white/10"
          disabled={isLoading}
        >
          <MoreVertical className="w-4 h-4" />
          <span className="sr-only">Open user actions menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="w-48 bg-[#1A1A1A] border-white/20"
      >
        {user.status === 'active' ? (
          <DropdownMenuItem 
            onClick={handleSuspend}
            className="text-yellow-400 hover:text-yellow-300 hover:bg-yellow-400/10 cursor-pointer"
            disabled={isLoading}
          >
            <UserX className="w-4 h-4 mr-2" />
            Suspend User
          </DropdownMenuItem>
        ) : user.status === 'suspended' ? (
          <DropdownMenuItem 
            onClick={handleActivate}
            className="text-green-400 hover:text-green-300 hover:bg-green-400/10 cursor-pointer"
            disabled={isLoading}
          >
            <UserCheck className="w-4 h-4 mr-2" />
            Activate User
          </DropdownMenuItem>
        ) : null}

        {canPromote && (
          <>
            <DropdownMenuSeparator className="bg-white/20" />
            <DropdownMenuItem 
              onClick={handlePromote}
              className="text-blue-400 hover:text-blue-300 hover:bg-blue-400/10 cursor-pointer"
              disabled={isLoading}
            >
              <Shield className="w-4 h-4 mr-2" />
              Promote to Admin
            </DropdownMenuItem>
          </>
        )}


      </DropdownMenuContent>
    </DropdownMenu>
  )
}
