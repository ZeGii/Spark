
'use client'

import { useEffect, useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { toast } from 'sonner'
import { 
  Settings, 
  Save, 
  RefreshCw,
  Shield,
  Bell,
  Database,
  Mail,
  Globe,
  Users,
  Zap
} from 'lucide-react'

interface SystemSettings {
  general: {
    siteName: string
    siteDescription: string
    contactEmail: string
    maintenanceMode: boolean
    registrationEnabled: boolean
  }
  voting: {
    defaultVoteThreshold: number
    votingPeriodDays: number
    autoApprovalEnabled: boolean
    minimumVotesForQualification: number
  }
  notifications: {
    emailNotifications: boolean
    pushNotifications: boolean
    adminAlerts: boolean
    userWelcomeEmails: boolean
  }
  security: {
    passwordMinLength: number
    sessionTimeoutMinutes: number
    maxLoginAttempts: number
    twoFactorRequired: boolean
  }
  research: {
    autoProcessingEnabled: boolean
    maxDocumentSizeMB: number
    allowedFileTypes: string[]
    aiProcessingTimeout: number
  }
}

const defaultSettings: SystemSettings = {
  general: {
    siteName: 'Spark Research Platform',
    siteDescription: 'Crowdsourced research topic discovery and validation platform',
    contactEmail: 'admin@spark-platform.com',
    maintenanceMode: false,
    registrationEnabled: true
  },
  voting: {
    defaultVoteThreshold: 50,
    votingPeriodDays: 30,
    autoApprovalEnabled: false,
    minimumVotesForQualification: 25
  },
  notifications: {
    emailNotifications: true,
    pushNotifications: false,
    adminAlerts: true,
    userWelcomeEmails: true
  },
  security: {
    passwordMinLength: 8,
    sessionTimeoutMinutes: 60,
    maxLoginAttempts: 5,
    twoFactorRequired: false
  },
  research: {
    autoProcessingEnabled: true,
    maxDocumentSizeMB: 50,
    allowedFileTypes: ['pdf', 'doc', 'docx', 'txt'],
    aiProcessingTimeout: 300
  }
}

export default function AdminSettings() {
  const [settings, setSettings] = useState<SystemSettings>(defaultSettings)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState('general')

  useEffect(() => {
    fetchSettings()
  }, [])

  const fetchSettings = async () => {
    try {
      setLoading(true)
      setError(null)
      const response = await fetch('/api/admin/settings')
      if (!response.ok) throw new Error('Failed to fetch settings')
      
      const settingsData = await response.json()
      
      // Deep merge with proper array handling
      const mergedSettings = {
        ...defaultSettings,
        ...settingsData,
        general: { ...defaultSettings.general, ...(settingsData?.general || {}) },
        voting: { ...defaultSettings.voting, ...(settingsData?.voting || {}) },
        notifications: { ...defaultSettings.notifications, ...(settingsData?.notifications || {}) },
        security: { ...defaultSettings.security, ...(settingsData?.security || {}) },
        research: { 
          ...defaultSettings.research, 
          ...(settingsData?.research || {}),
          allowedFileTypes: settingsData?.research?.allowedFileTypes || defaultSettings.research.allowedFileTypes
        }
      }
      
      setSettings(mergedSettings)
    } catch (error) {
      console.error('Error fetching settings:', error)
      setError(error instanceof Error ? error.message : 'Failed to load settings')
      toast.error('Failed to load settings, using defaults')
      setSettings(defaultSettings)
    } finally {
      setLoading(false)
    }
  }

  const saveSettings = async () => {
    try {
      setSaving(true)
      const response = await fetch('/api/admin/settings', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(settings)
      })

      if (!response.ok) throw new Error('Failed to save settings')
      
      toast.success('Settings saved successfully')
    } catch (error) {
      console.error('Error saving settings:', error)
      toast.error('Failed to save settings')
    } finally {
      setSaving(false)
    }
  }

  const updateSetting = (category: keyof SystemSettings, key: string, value: any) => {
    setSettings(prev => {
      if (!prev || !prev[category]) {
        console.warn(`Invalid settings category: ${category}`)
        return prev
      }
      
      return {
        ...prev,
        [category]: {
          ...prev[category],
          [key]: value
        }
      }
    })
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-64 space-y-4">
        <div className="text-red-500 text-center">
          <h3 className="text-lg font-semibold">Error Loading Settings</h3>
          <p className="text-sm">{error}</p>
        </div>
        <Button onClick={fetchSettings} variant="outline">
          <RefreshCw className="h-4 w-4 mr-2" />
          Retry
        </Button>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">System Settings</h1>
          <p className="text-card-foreground mt-1">Configure platform settings and preferences</p>
        </div>
        
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            onClick={fetchSettings}
            disabled={loading}
            className="flex items-center gap-2"
          >
            <RefreshCw className="h-4 w-4" />
            Refresh
          </Button>
          <Button
            onClick={saveSettings}
            disabled={saving}
            className="flex items-center gap-2"
          >
            <Save className="h-4 w-4" />
            {saving ? 'Saving...' : 'Save Changes'}
          </Button>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="general" className="flex items-center gap-2">
            <Globe className="h-4 w-4" />
            General
          </TabsTrigger>
          <TabsTrigger value="voting" className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            Voting
          </TabsTrigger>
          <TabsTrigger value="notifications" className="flex items-center gap-2">
            <Bell className="h-4 w-4" />
            Notifications
          </TabsTrigger>
          <TabsTrigger value="security" className="flex items-center gap-2">
            <Shield className="h-4 w-4" />
            Security
          </TabsTrigger>
          <TabsTrigger value="research" className="flex items-center gap-2">
            <Zap className="h-4 w-4" />
            Research
          </TabsTrigger>
        </TabsList>

        {/* General Settings */}
        <TabsContent value="general" className="space-y-6">
          <Card className="bg-card">
            <CardHeader>
              <CardTitle className="text-card-foreground">General Settings</CardTitle>
              <CardDescription className="text-card-foreground">Basic platform configuration</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="siteName" className="text-card-foreground">Site Name</Label>
                  <Input
                    id="siteName"
                    value={settings?.general?.siteName || ''}
                    onChange={(e) => updateSetting('general', 'siteName', e.target.value)}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="contactEmail" className="text-card-foreground">Contact Email</Label>
                  <Input
                    id="contactEmail"
                    type="email"
                    value={settings?.general?.contactEmail || ''}
                    onChange={(e) => updateSetting('general', 'contactEmail', e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="siteDescription" className="text-card-foreground">Site Description</Label>
                <Textarea
                  id="siteDescription"
                  value={settings?.general?.siteDescription || ''}
                  onChange={(e) => updateSetting('general', 'siteDescription', e.target.value)}
                  rows={3}
                />
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label className="text-card-foreground">Maintenance Mode</Label>
                    <p className="text-sm text-card-foreground">Temporarily disable public access</p>
                  </div>
                  <Switch
                    checked={settings?.general?.maintenanceMode || false}
                    onCheckedChange={(checked) => updateSetting('general', 'maintenanceMode', checked)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label className="text-card-foreground">User Registration</Label>
                    <p className="text-sm text-card-foreground">Allow new user registrations</p>
                  </div>
                  <Switch
                    checked={settings?.general?.registrationEnabled || false}
                    onCheckedChange={(checked) => updateSetting('general', 'registrationEnabled', checked)}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Voting Settings */}
        <TabsContent value="voting" className="space-y-6">
          <Card className="bg-card">
            <CardHeader>
              <CardTitle className="text-card-foreground">Voting Configuration</CardTitle>
              <CardDescription className="text-card-foreground">Configure voting thresholds and periods</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="defaultVoteThreshold" className="text-card-foreground">Default Vote Threshold</Label>
                  <Input
                    id="defaultVoteThreshold"
                    type="number"
                    value={settings?.voting?.defaultVoteThreshold || 0}
                    onChange={(e) => updateSetting('voting', 'defaultVoteThreshold', parseInt(e.target.value) || 0)}
                  />
                  <p className="text-xs text-card-foreground">Votes needed for topic qualification</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="votingPeriodDays" className="text-card-foreground">Voting Period (Days)</Label>
                  <Input
                    id="votingPeriodDays"
                    type="number"
                    value={settings?.voting?.votingPeriodDays || 0}
                    onChange={(e) => updateSetting('voting', 'votingPeriodDays', parseInt(e.target.value) || 0)}
                  />
                  <p className="text-xs text-card-foreground">How long topics remain open for voting</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="minimumVotesForQualification" className="text-card-foreground">Minimum Votes for Qualification</Label>
                  <Input
                    id="minimumVotesForQualification"
                    type="number"
                    value={settings?.voting?.minimumVotesForQualification || 0}
                    onChange={(e) => updateSetting('voting', 'minimumVotesForQualification', parseInt(e.target.value) || 0)}
                  />
                  <p className="text-xs text-card-foreground">Minimum votes required regardless of threshold</p>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label className="text-card-foreground">Auto-Approval</Label>
                  <p className="text-sm text-card-foreground">Automatically approve topics that reach threshold</p>
                </div>
                <Switch
                  checked={settings?.voting?.autoApprovalEnabled || false}
                  onCheckedChange={(checked) => updateSetting('voting', 'autoApprovalEnabled', checked)}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Notification Settings */}
        <TabsContent value="notifications" className="space-y-6">
          <Card className="bg-card">
            <CardHeader>
              <CardTitle className="text-card-foreground">Notification Settings</CardTitle>
              <CardDescription className="text-card-foreground">Configure notification preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label className="text-card-foreground">Email Notifications</Label>
                    <p className="text-sm text-card-foreground">Send email notifications to users</p>
                  </div>
                  <Switch
                    checked={settings?.notifications?.emailNotifications || false}
                    onCheckedChange={(checked) => updateSetting('notifications', 'emailNotifications', checked)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label className="text-card-foreground">Push Notifications</Label>
                    <p className="text-sm text-card-foreground">Send browser push notifications</p>
                  </div>
                  <Switch
                    checked={settings?.notifications?.pushNotifications || false}
                    onCheckedChange={(checked) => updateSetting('notifications', 'pushNotifications', checked)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label className="text-card-foreground">Admin Alerts</Label>
                    <p className="text-sm text-card-foreground">Send alerts for admin actions needed</p>
                  </div>
                  <Switch
                    checked={settings?.notifications?.adminAlerts || false}
                    onCheckedChange={(checked) => updateSetting('notifications', 'adminAlerts', checked)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label className="text-card-foreground">Welcome Emails</Label>
                    <p className="text-sm text-card-foreground">Send welcome emails to new users</p>
                  </div>
                  <Switch
                    checked={settings?.notifications?.userWelcomeEmails || false}
                    onCheckedChange={(checked) => updateSetting('notifications', 'userWelcomeEmails', checked)}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Security Settings */}
        <TabsContent value="security" className="space-y-6">
          <Card className="bg-card">
            <CardHeader>
              <CardTitle className="text-card-foreground">Security Configuration</CardTitle>
              <CardDescription className="text-card-foreground">Configure security and authentication settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="passwordMinLength" className="text-card-foreground">Minimum Password Length</Label>
                  <Input
                    id="passwordMinLength"
                    type="number"
                    value={settings?.security?.passwordMinLength || 0}
                    onChange={(e) => updateSetting('security', 'passwordMinLength', parseInt(e.target.value) || 0)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="sessionTimeoutMinutes" className="text-card-foreground">Session Timeout (Minutes)</Label>
                  <Input
                    id="sessionTimeoutMinutes"
                    type="number"
                    value={settings?.security?.sessionTimeoutMinutes || 0}
                    onChange={(e) => updateSetting('security', 'sessionTimeoutMinutes', parseInt(e.target.value) || 0)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="maxLoginAttempts" className="text-card-foreground">Max Login Attempts</Label>
                  <Input
                    id="maxLoginAttempts"
                    type="number"
                    value={settings?.security?.maxLoginAttempts || 0}
                    onChange={(e) => updateSetting('security', 'maxLoginAttempts', parseInt(e.target.value) || 0)}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label className="text-card-foreground">Two-Factor Authentication</Label>
                  <p className="text-sm text-card-foreground">Require 2FA for all users</p>
                </div>
                <Switch
                  checked={settings?.security?.twoFactorRequired || false}
                  onCheckedChange={(checked) => updateSetting('security', 'twoFactorRequired', checked)}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Research Settings */}
        <TabsContent value="research" className="space-y-6">
          <Card className="bg-card">
            <CardHeader>
              <CardTitle className="text-card-foreground">Research Configuration</CardTitle>
              <CardDescription className="text-card-foreground">Configure research processing and document handling</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="maxDocumentSizeMB" className="text-card-foreground">Max Document Size (MB)</Label>
                  <Input
                    id="maxDocumentSizeMB"
                    type="number"
                    value={settings?.research?.maxDocumentSizeMB || 0}
                    onChange={(e) => updateSetting('research', 'maxDocumentSizeMB', parseInt(e.target.value) || 0)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="aiProcessingTimeout" className="text-card-foreground">AI Processing Timeout (Seconds)</Label>
                  <Input
                    id="aiProcessingTimeout"
                    type="number"
                    value={settings?.research?.aiProcessingTimeout || 0}
                    onChange={(e) => updateSetting('research', 'aiProcessingTimeout', parseInt(e.target.value) || 0)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-card-foreground">Allowed File Types</Label>
                <div className="flex flex-wrap gap-2">
                  {(settings?.research?.allowedFileTypes || []).map((type, index) => (
                    <Badge key={index} variant="outline">{type}</Badge>
                  ))}
                  {(!settings?.research?.allowedFileTypes || settings?.research?.allowedFileTypes?.length === 0) && (
                    <span className="text-sm text-card-foreground">No file types configured</span>
                  )}
                </div>
                <p className="text-xs text-card-foreground">Supported document formats for upload</p>
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label className="text-card-foreground">Auto-Processing</Label>
                  <p className="text-sm text-card-foreground">Automatically process uploaded documents with AI</p>
                </div>
                <Switch
                  checked={settings?.research?.autoProcessingEnabled || false}
                  onCheckedChange={(checked) => updateSetting('research', 'autoProcessingEnabled', checked)}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
