
'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useAuth } from '@/contexts/auth-context'
import { 
  User, 
  Mail, 
  MapPin, 
  Briefcase,
  Bell,
  CreditCard,
  Settings,
  TrendingUp,
  FileText,
  Crown,
  Calendar,
  LogIn
} from 'lucide-react'
import SubscriptionModal from '@/components/subscription-modal'

interface UserProfile {
  id: string
  username: string
  email: string
  name: string
  profileType: 'ENTREPRENEUR' | 'INVESTOR' | 'PRODUCT_MANAGER' | 'BUSINESS_ANALYST'
  industry: string
  country: string
  subscription: 'FREE' | 'PRO'
  joinDate: string
  votedTopics: number
  proposedTopics: number
  savedResearch: number
}

const ProfilePage = () => {
  const { user, loading } = useAuth()
  const [mounted, setMounted] = useState(false)
  const [profile, setProfile] = useState<UserProfile | null>(null)
  const [isEditing, setIsEditing] = useState(false)
  const [isSubscriptionModalOpen, setIsSubscriptionModalOpen] = useState(false)
  const [editForm, setEditForm] = useState({
    name: '',
    username: '',
    email: '',
    profileType: '',
    industry: '',
    country: ''
  })

  useEffect(() => {
    setMounted(true)
  }, [])

  // Load user data from auth context
  useEffect(() => {
    if (user) {
      const userProfile: UserProfile = {
        id: user.id,
        username: user.username,
        email: user.email,
        name: user.name,
        profileType: user.profileType as 'ENTREPRENEUR' | 'INVESTOR' | 'PRODUCT_MANAGER' | 'BUSINESS_ANALYST',
        industry: user.industry,
        country: user.country,
        subscription: user.subscription as 'FREE' | 'PRO',
        joinDate: '2024-01-15', // This would come from user.createdAt in real implementation
        votedTopics: 23, // These would come from actual database queries
        proposedTopics: 4,
        savedResearch: 12
      }
      setProfile(userProfile)
      setEditForm({
        name: userProfile.name,
        username: userProfile.username,
        email: userProfile.email,
        profileType: userProfile.profileType,
        industry: userProfile.industry,
        country: userProfile.country
      })
    }
  }, [user])

  const handleSave = () => {
    if (profile) {
      setProfile({
        ...profile,
        ...editForm,
        profileType: editForm.profileType as 'ENTREPRENEUR' | 'INVESTOR' | 'PRODUCT_MANAGER' | 'BUSINESS_ANALYST'
      })
    }
    setIsEditing(false)
  }

  const handleCancel = () => {
    if (profile) {
      setEditForm({
        name: profile.name,
        username: profile.username,
        email: profile.email,
        profileType: profile.profileType,
        industry: profile.industry,
        country: profile.country
      })
    }
    setIsEditing(false)
  }

  const profileTypes = [
    { value: 'ENTREPRENEUR', label: 'Entrepreneur' },
    { value: 'INVESTOR', label: 'Investor' },
    { value: 'PRODUCT_MANAGER', label: 'Product Manager' },
    { value: 'BUSINESS_ANALYST', label: 'Business Analyst' }
  ]

  const industries = [
    'FinTech', 'Fashion', 'SaaS', 'Food & Beverage', 'HealthTech', 
    'Automotive', 'EdTech', 'Gaming', 'Real Estate', 'Travel', 'Other'
  ]

  const countries = [
    'United States', 'Canada', 'United Kingdom', 'Germany', 'France',
    'Australia', 'Japan', 'Singapore', 'India', 'Brazil', 'Other'
  ]

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <div className="text-muted-foreground">Loading profile...</div>
        </div>
      </div>
    )
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <LogIn className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Authentication Required</h3>
          <p className="text-muted-foreground mb-4">
            Please log in to view your profile.
          </p>
          <Button onClick={() => window.location.href = '/'} className="gradient-bg">
            Go to Home
          </Button>
        </div>
      </div>
    )
  }

  if (!profile) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <div className="text-muted-foreground">Loading profile...</div>
        </div>
      </div>
    )
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  if (!mounted) {
    return (
      <div className="min-h-screen py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="flex items-center space-x-4 mb-4 md:mb-0">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/60 rounded-full flex items-center justify-center">
                  <User className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold">Loading...</h1>
                  <p className="text-muted-foreground">@loading</p>
                </div>
              </div>
            </div>
          </div>
          <div className="py-16">Loading profile...</div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/60 rounded-full flex items-center justify-center">
                <User className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">{profile.name}</h1>
                <p className="text-muted-foreground">@{profile.username}</p>
                <div className="flex items-center space-x-2 mt-1">
                  <Badge variant={profile.subscription === 'PRO' ? 'default' : 'secondary'}>
                    {profile.subscription === 'PRO' ? (
                      <>
                        <Crown className="w-3 h-3 mr-1" />
                        Pro Member
                      </>
                    ) : (
                      'Free Member'
                    )}
                  </Badge>
                  <Badge variant="outline">{profileTypes.find(t => t.value === profile.profileType)?.label}</Badge>
                </div>
              </div>
            </div>
            <div className="flex space-x-2">
              {profile.subscription === 'FREE' && (
                <Button 
                  onClick={() => setIsSubscriptionModalOpen(true)}
                  className="gradient-bg"
                >
                  <Crown className="w-4 h-4 mr-2" />
                  Upgrade to Pro
                </Button>
              )}
              <Button
                variant="outline"
                onClick={() => setIsEditing(!isEditing)}
              >
                <Settings className="w-4 h-4 mr-2" />
                {isEditing ? 'Cancel' : 'Edit Profile'}
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Tabs defaultValue="profile" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="profile">Profile</TabsTrigger>
              <TabsTrigger value="activity">Activity</TabsTrigger>
              <TabsTrigger value="subscription">Subscription</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
            </TabsList>

            <TabsContent value="profile" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Profile Information</CardTitle>
                  <CardDescription>
                    Manage your account details and preferences
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      {isEditing ? (
                        <Input
                          id="name"
                          value={editForm.name}
                          onChange={(e) => setEditForm(prev => ({ ...prev, name: e.target.value }))}
                        />
                      ) : (
                        <div className="flex items-center space-x-2 p-2 bg-muted/30 rounded-md">
                          <User className="w-4 h-4 text-muted-foreground" />
                          <span>{profile.name}</span>
                        </div>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="username">Username</Label>
                      {isEditing ? (
                        <Input
                          id="username"
                          value={editForm.username}
                          onChange={(e) => setEditForm(prev => ({ ...prev, username: e.target.value }))}
                        />
                      ) : (
                        <div className="flex items-center space-x-2 p-2 bg-muted/30 rounded-md">
                          <span>@{profile.username}</span>
                        </div>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      {isEditing ? (
                        <Input
                          id="email"
                          type="email"
                          value={editForm.email}
                          onChange={(e) => setEditForm(prev => ({ ...prev, email: e.target.value }))}
                        />
                      ) : (
                        <div className="flex items-center space-x-2 p-2 bg-muted/30 rounded-md">
                          <Mail className="w-4 h-4 text-muted-foreground" />
                          <span>{profile.email}</span>
                        </div>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="profileType">Profile Type</Label>
                      {isEditing ? (
                        <Select 
                          value={editForm.profileType} 
                          onValueChange={(value) => setEditForm(prev => ({ ...prev, profileType: value }))}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {profileTypes.map(type => (
                              <SelectItem key={type.value} value={type.value}>
                                {type.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      ) : (
                        <div className="flex items-center space-x-2 p-2 bg-muted/30 rounded-md">
                          <Briefcase className="w-4 h-4 text-muted-foreground" />
                          <span>{profileTypes.find(t => t.value === profile.profileType)?.label}</span>
                        </div>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="industry">Industry</Label>
                      {isEditing ? (
                        <Select 
                          value={editForm.industry} 
                          onValueChange={(value) => setEditForm(prev => ({ ...prev, industry: value }))}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {industries.map(industry => (
                              <SelectItem key={industry} value={industry}>
                                {industry}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      ) : (
                        <div className="flex items-center space-x-2 p-2 bg-muted/30 rounded-md">
                          <span>{profile.industry}</span>
                        </div>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="country">Country</Label>
                      {isEditing ? (
                        <Select 
                          value={editForm.country} 
                          onValueChange={(value) => setEditForm(prev => ({ ...prev, country: value }))}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {countries.map(country => (
                              <SelectItem key={country} value={country}>
                                {country}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      ) : (
                        <div className="flex items-center space-x-2 p-2 bg-muted/30 rounded-md">
                          <MapPin className="w-4 h-4 text-muted-foreground" />
                          <span>{profile.country}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {isEditing && (
                    <div className="flex space-x-4 pt-4">
                      <Button onClick={handleSave} className="gradient-bg">
                        Save Changes
                      </Button>
                      <Button variant="outline" onClick={handleCancel}>
                        Cancel
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="activity" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg flex items-center space-x-2">
                      <TrendingUp className="w-5 h-5 text-blue-500" />
                      <span>Topics Voted</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-blue-500 mb-2">{profile.votedTopics}</div>
                    <p className="text-sm text-muted-foreground">Community contributions</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg flex items-center space-x-2">
                      <FileText className="w-5 h-5 text-green-500" />
                      <span>Topics Proposed</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-green-500 mb-2">{profile.proposedTopics}</div>
                    <p className="text-sm text-muted-foreground">Research ideas shared</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg flex items-center space-x-2">
                      <FileText className="w-5 h-5 text-purple-500" />
                      <span>Saved Research</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-purple-500 mb-2">{profile.savedResearch}</div>
                    <p className="text-sm text-muted-foreground">Reports bookmarked</p>
                  </CardContent>
                </Card>
              </div>

              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Account Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>Member since {formatDate(profile.joinDate)}</span>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="subscription" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <CreditCard className="w-5 h-5" />
                    <span>Subscription Plan</span>
                  </CardTitle>
                  <CardDescription>
                    Manage your subscription and billing
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h3 className="font-semibold">
                          {profile.subscription === 'PRO' ? 'Pro Plan' : 'Free Plan'}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {profile.subscription === 'PRO' 
                            ? 'Full access to all research reports and features'
                            : 'Limited access to research reports'
                          }
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold">
                          {profile.subscription === 'PRO' ? '$60/month' : 'Free'}
                        </div>
                        {profile.subscription === 'FREE' && (
                          <Button 
                            size="sm" 
                            className="mt-2 gradient-bg"
                            onClick={() => setIsSubscriptionModalOpen(true)}
                          >
                            Upgrade
                          </Button>
                        )}
                      </div>
                    </div>

                    {profile.subscription === 'PRO' && (
                      <div className="space-y-4">
                        <h4 className="font-medium">Pro Features</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• Unlimited access to all research reports</li>
                          <li>• Priority support and expert consultations</li>
                          <li>• Advanced filtering and analytics</li>
                          <li>• Early access to new research</li>
                          <li>• Custom research request discounts</li>
                        </ul>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="notifications" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Bell className="w-5 h-5" />
                    <span>Notification Preferences</span>
                  </CardTitle>
                  <CardDescription>
                    Choose what notifications you want to receive
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Topic Updates</h4>
                        <p className="text-sm text-muted-foreground">
                          Get notified when topics you voted on get selected for research
                        </p>
                      </div>
                      <Button variant="outline" size="sm">
                        Enabled
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">New Research</h4>
                        <p className="text-sm text-muted-foreground">
                          Be the first to know when new research reports are published
                        </p>
                      </div>
                      <Button variant="outline" size="sm">
                        Enabled
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Weekly Digest</h4>
                        <p className="text-sm text-muted-foreground">
                          Weekly summary of trending topics and new research
                        </p>
                      </div>
                      <Button variant="outline" size="sm">
                        Disabled
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>

      <SubscriptionModal 
        isOpen={isSubscriptionModalOpen}
        onClose={() => setIsSubscriptionModalOpen(false)}
        onSubscribe={(plan) => {
          setProfile(prev => prev ? { ...prev, subscription: plan } : null)
          setIsSubscriptionModalOpen(false)
        }}
      />
    </div>
  )
}

export default ProfilePage
