
'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Separator } from '@/components/ui/separator'
import { toast } from 'sonner'
import { 
  User, 
  Mail, 
  MapPin, 
  Briefcase,
  Calendar,
  ArrowLeft,
  Shield,
  TrendingUp,
  FileText,
  Crown,
  Activity
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
  createdAt: string
  updatedAt: string
  topicsCount: number
  votesCount: number
  subscriptionPlan: string
}

export default function AdminUserProfile({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [user, setUser] = useState<UserProfile | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchUserProfile()
  }, [params.id])

  const fetchUserProfile = async () => {
    try {
      const response = await fetch(`/api/admin/users/${params.id}`)
      if (!response.ok) {
        if (response.status === 404) {
          toast.error('User not found')
          router.push('/admin/users')
          return
        }
        throw new Error('Failed to fetch user profile')
      }
      
      const userData = await response.json()
      setUser(userData.user)
    } catch (error) {
      console.error('Error fetching user profile:', error)
      toast.error('Failed to load user profile')
      router.push('/admin/users')
    } finally {
      setLoading(false)
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <div className="text-[#CCCCCC]">Loading user profile...</div>
        </div>
      </div>
    )
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <User className="w-16 h-16 text-[#CCCCCC] mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-white">User Not Found</h3>
          <p className="text-[#CCCCCC] mb-4">
            The requested user profile could not be found.
          </p>
          <Button onClick={() => router.push('/admin/users')} variant="outline">
            Back to Users
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => router.push('/admin/users')}
            className="border-white/20 text-white hover:bg-white/10"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Users
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-white">User Profile</h1>
            <p className="text-[#CCCCCC] mt-1">View user details and activity</p>
          </div>
        </div>
      </div>

      {/* User Profile Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Card className="bg-gradient-to-br from-[#1A1A1A] to-[#252529] border border-white/20">
          <CardHeader>
            <div className="flex items-center space-x-4">
              <Avatar className="w-16 h-16">
                <AvatarImage src="" />
                <AvatarFallback className="bg-gradient-to-br from-[#00FF88] to-[#10B981] text-black text-lg font-medium">
                  {user.name?.charAt(0)?.toUpperCase() || 'U'}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h2 className="text-2xl font-bold text-white">{user.name}</h2>
                  <Badge variant={user.role === 'admin' ? 'default' : 'secondary'} className="capitalize">
                    {user.role === 'admin' && <Shield className="w-3 h-3 mr-1" />}
                    {user.role}
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
              <div className="flex items-center space-x-2">
                <Badge 
                  variant={user.subscriptionPlan === 'PRO' ? 'default' : 'outline'}
                  className="capitalize"
                >
                  {user.subscriptionPlan === 'PRO' && <Crown className="w-3 h-3 mr-1" />}
                  {user.subscriptionPlan} Plan
                </Badge>
              </div>
            </div>
          </CardHeader>
        </Card>
      </motion.div>

      {/* Profile Details */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Personal Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-2"
        >
          <Card className="bg-gradient-to-br from-[#1A1A1A] to-[#252529] border border-white/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <User className="h-5 w-5 text-[#00FF88]" />
                Personal Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label className="text-sm font-medium text-[#CCCCCC]">Profile Type</Label>
                  <div className="flex items-center space-x-2 mt-1">
                    <Briefcase className="w-4 h-4 text-[#CCCCCC]" />
                    <span className="text-white">{user.profileType}</span>
                  </div>
                </div>
                <div>
                  <Label className="text-sm font-medium text-[#CCCCCC]">Industry</Label>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className="text-white">{user.industry}</span>
                  </div>
                </div>
                <div>
                  <Label className="text-sm font-medium text-[#CCCCCC]">Country</Label>
                  <div className="flex items-center space-x-2 mt-1">
                    <MapPin className="w-4 h-4 text-[#CCCCCC]" />
                    <span className="text-white">{user.country}</span>
                  </div>
                </div>
                <div>
                  <Label className="text-sm font-medium text-[#CCCCCC]">Last Active</Label>
                  <div className="flex items-center space-x-2 mt-1">
                    <Activity className="w-4 h-4 text-[#CCCCCC]" />
                    <span className="text-white">{formatDate(user.updatedAt)}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Activity Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4"
        >
          <Card className="bg-gradient-to-br from-[#1A1A1A] to-[#252529] border border-white/20">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center space-x-2 text-white">
                <TrendingUp className="w-5 h-5 text-blue-400" />
                <span>Topics Voted</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-400 mb-2">{user.votesCount}</div>
              <p className="text-sm text-[#CCCCCC]">Community contributions</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-[#1A1A1A] to-[#252529] border border-white/20">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center space-x-2 text-white">
                <FileText className="w-5 h-5 text-green-400" />
                <span>Topics Proposed</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-400 mb-2">{user.topicsCount}</div>
              <p className="text-sm text-[#CCCCCC]">Research ideas shared</p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

// Helper component for labels
function Label({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={className}>{children}</div>
}
