
'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Separator } from '@/components/ui/separator'
import { UserActionsDropdown } from './user-actions-dropdown'
import { toast } from 'sonner'
import { 
  User, 
  Mail, 
  MapPin, 
  Briefcase,
  Calendar,
  Shield,
  TrendingUp,
  FileText,
  Crown,
  Activity,
  UserX,
  UserCheck,
  Loader2
} from 'lucide-react'

interface UserProfile {
  id: string
  email: string
  username: string
  name: string
  profileType: string
  industry: string
  country: string
  role: 'user' | 'admin'
  status: 'active' | 'suspended'
  createdAt: string
  updatedAt: string
  topicsCount: number
  votesCount: number
  subscriptionPlan: string
}

interface UserProfileModalProps {
  isOpen: boolean
  onClose: () => void
  userId: string | null
  currentUserEmail: string
  onActionComplete: () => void
}

export function UserProfileModal({ 
  isOpen, 
  onClose, 
  userId, 
  currentUserEmail,
  onActionComplete 
}: UserProfileModalProps) {
  const [user, setUser] = useState<UserProfile | null>(null)
  const [loading, setLoading] = useState(false)
  const [actionLoading, setActionLoading] = useState(false)
  const isSuperAdmin = currentUserEmail === 'admin@spark.com'

  useEffect(() => {
    if (isOpen && userId) {
      fetchUserProfile()
    }
  }, [isOpen, userId])

  const fetchUserProfile = async () => {
    if (!userId) return
    
    setLoading(true)
    try {
      const response = await fetch(`/api/admin/users/${userId}`)
      if (!response.ok) {
        if (response.status === 404) {
          toast.error('User not found')
          onClose()
          return
        }
        throw new Error('Failed to fetch user profile')
      }
      
      const userData = await response.json()
      setUser(userData.user)
    } catch (error) {
      console.error('Error fetching user profile:', error)
      toast.error('Failed to load user profile')
      onClose()
    } finally {
      setLoading(false)
    }
  }

  const handleUserAction = async (action: string) => {
    if (!user) return
    
    setActionLoading(true)
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
      
      // Refresh user data and parent list
      await fetchUserProfile()
      onActionComplete()
    } catch (error) {
      console.error(`Error ${action}ing user:`, error)
      toast.error(error instanceof Error ? error.message : `Failed to ${action} user`)
    } finally {
      setActionLoading(false)
    }
  }

  const handleSuspend = () => {
    if (!user) return
    if (user.status === 'suspended') {
      toast.info('User is already suspended')
      return
    }
    handleUserAction('suspend')
  }

  const handleActivate = () => {
    if (!user) return
    if (user.status === 'active') {
      toast.info('User is already active')
      return
    }
    handleUserAction('activate')
  }

  const handlePromote = () => {
    if (!user) return
    if (user.role === 'admin') {
      toast.info('User is already an admin')
      return
    }
    handleUserAction('promote')
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const handleClose = () => {
    onClose()
    setUser(null)
  }

  if (!isOpen) return null

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-4xl bg-gradient-to-br from-[#1A1A1A] to-[#252529] border border-white/20 text-white max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-white">
            User Profile
          </DialogTitle>
        </DialogHeader>

        {loading ? (
          <div className="flex items-center justify-center py-12">
            <div className="text-center">
              <Loader2 className="w-8 h-8 animate-spin text-[#00FF88] mx-auto mb-4" />
              <div className="text-[#CCCCCC]">Loading user profile...</div>
            </div>
          </div>
        ) : !user ? (
          <div className="flex items-center justify-center py-12">
            <div className="text-center">
              <User className="w-16 h-16 text-[#CCCCCC] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">User Not Found</h3>
              <p className="text-[#CCCCCC] mb-4">
                The requested user profile could not be found.
              </p>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {/* User Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-r from-[#252529] to-[#2A2A30] rounded-xl p-6 border border-white/10"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Avatar className="w-16 h-16">
                    <AvatarImage src="" />
                    <AvatarFallback className="bg-gradient-to-br from-[#00FF88] to-[#10B981] text-black text-lg font-medium">
                      {user.name?.charAt(0)?.toUpperCase() || 'U'}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center space-x-3 mb-2">
                      <h2 className="text-2xl font-bold text-white">{user.name}</h2>
                      <Badge variant={user.role === 'admin' ? 'default' : 'secondary'} className="capitalize">
                        {user.role === 'admin' && <Shield className="w-3 h-3 mr-1" />}
                        {user.role}
                      </Badge>
                      <Badge 
                        variant={user.status === 'active' ? 'default' : 'secondary'}
                        className={`capitalize ${user.status === 'suspended' ? 'bg-orange-500/20 text-orange-400 border-orange-500/30' : ''}`}
                      >
                        {user.status}
                      </Badge>
                    </div>
                    <p className="text-[#CCCCCC] mb-2">@{user.username}</p>
                    <div className="flex items-center space-x-4 text-sm text-[#CCCCCC]">
                      <div className="flex items-center space-x-1">
                        <Mail className="w-4 h-4" />
                        <span>{user.email}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>Joined {formatDate(user.createdAt)}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Badge 
                    variant={user.subscriptionPlan === 'PRO' ? 'default' : 'outline'}
                    className="capitalize"
                  >
                    {user.subscriptionPlan === 'PRO' && <Crown className="w-3 h-3 mr-1" />}
                    {user.subscriptionPlan} Plan
                  </Badge>
                </div>
              </div>
            </motion.div>

            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Personal Information */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="lg:col-span-2"
              >
                <div className="bg-gradient-to-br from-[#252529] to-[#2A2A30] rounded-xl p-6 border border-white/10">
                  <h3 className="flex items-center gap-2 text-lg font-semibold text-white mb-4">
                    <User className="h-5 w-5 text-[#00FF88]" />
                    Personal Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-[#CCCCCC]">Profile Type</label>
                      <div className="flex items-center space-x-2 mt-1">
                        <Briefcase className="w-4 h-4 text-[#CCCCCC]" />
                        <span className="text-white">{user.profileType}</span>
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-[#CCCCCC]">Industry</label>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className="text-white">{user.industry}</span>
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-[#CCCCCC]">Country</label>
                      <div className="flex items-center space-x-2 mt-1">
                        <MapPin className="w-4 h-4 text-[#CCCCCC]" />
                        <span className="text-white">{user.country}</span>
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-[#CCCCCC]">Last Active</label>
                      <div className="flex items-center space-x-2 mt-1">
                        <Activity className="w-4 h-4 text-[#CCCCCC]" />
                        <span className="text-white">{formatDate(user.updatedAt)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Activity Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-4"
              >
                <div className="bg-gradient-to-br from-[#252529] to-[#2A2A30] rounded-xl p-6 border border-white/10">
                  <h3 className="text-lg flex items-center space-x-2 text-white mb-4">
                    <TrendingUp className="w-5 h-5 text-blue-400" />
                    <span>Topics Voted</span>
                  </h3>
                  <div className="text-3xl font-bold text-blue-400 mb-2">{user.votesCount}</div>
                  <p className="text-sm text-[#CCCCCC]">Community contributions</p>
                </div>

                <div className="bg-gradient-to-br from-[#252529] to-[#2A2A30] rounded-xl p-6 border border-white/10">
                  <h3 className="text-lg flex items-center space-x-2 text-white mb-4">
                    <FileText className="w-5 h-5 text-green-400" />
                    <span>Topics Proposed</span>
                  </h3>
                  <div className="text-3xl font-bold text-green-400 mb-2">{user.topicsCount}</div>
                  <p className="text-sm text-[#CCCCCC]">Research ideas shared</p>
                </div>
              </motion.div>
            </div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center justify-center space-x-4 pt-4 border-t border-white/10"
            >
              {user.status === 'active' ? (
                <Button 
                  onClick={handleSuspend}
                  disabled={actionLoading}
                  variant="outline"
                  className="border-orange-500/50 text-orange-400 hover:bg-orange-500/10 hover:border-orange-500"
                >
                  {actionLoading ? (
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  ) : (
                    <UserX className="w-4 h-4 mr-2" />
                  )}
                  Suspend User
                </Button>
              ) : (
                <Button 
                  onClick={handleActivate}
                  disabled={actionLoading}
                  variant="outline"
                  className="border-green-500/50 text-green-400 hover:bg-green-500/10 hover:border-green-500"
                >
                  {actionLoading ? (
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  ) : (
                    <UserCheck className="w-4 h-4 mr-2" />
                  )}
                  Activate User
                </Button>
              )}

              {isSuperAdmin && user.role !== 'admin' && (
                <Button 
                  onClick={handlePromote}
                  disabled={actionLoading}
                  variant="outline"
                  className="border-blue-500/50 text-blue-400 hover:bg-blue-500/10 hover:border-blue-500"
                >
                  {actionLoading ? (
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  ) : (
                    <Shield className="w-4 h-4 mr-2" />
                  )}
                  Promote to Admin
                </Button>
              )}
            </motion.div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
