
'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Save, RotateCcw, Settings2, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'
import { toast } from 'sonner'
import { motion } from 'framer-motion'

interface CharacterLimitSettingsProps {
  onSettingsChange?: () => void
}

interface Settings {
  topic_title_max_length: number
  topic_description_max_length: number
}

const DEFAULT_SETTINGS: Settings = {
  topic_title_max_length: 100,
  topic_description_max_length: 500
}

export default function CharacterLimitSettings({ onSettingsChange }: CharacterLimitSettingsProps) {
  const [settings, setSettings] = useState<Settings>(DEFAULT_SETTINGS)
  const [originalSettings, setOriginalSettings] = useState<Settings>(DEFAULT_SETTINGS)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [hasChanges, setHasChanges] = useState(false)

  useEffect(() => {
    fetchSettings()
  }, [])

  useEffect(() => {
    const changed = JSON.stringify(settings) !== JSON.stringify(originalSettings)
    setHasChanges(changed)
  }, [settings, originalSettings])

  const fetchSettings = async () => {
    try {
      setLoading(true)
      const response = await fetch('/api/admin/settings')
      
      if (!response.ok) {
        throw new Error('Failed to fetch settings')
      }

      const data = await response.json()
      
      const fetchedSettings: Settings = {
        topic_title_max_length: parseInt(data.settings.topic_title_max_length?.value || '100'),
        topic_description_max_length: parseInt(data.settings.topic_description_max_length?.value || '500')
      }

      setSettings(fetchedSettings)
      setOriginalSettings(fetchedSettings)
    } catch (error) {
      console.error('Error fetching settings:', error)
      toast.error('Failed to load settings')
      setSettings(DEFAULT_SETTINGS)
      setOriginalSettings(DEFAULT_SETTINGS)
    } finally {
      setLoading(false)
    }
  }

  const handleSave = async () => {
    try {
      setSaving(true)

      const response = await fetch('/api/admin/settings', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          settings: {
            topic_title_max_length: settings.topic_title_max_length.toString(),
            topic_description_max_length: settings.topic_description_max_length.toString()
          }
        })
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.error || 'Failed to save settings')
      }

      setOriginalSettings(settings)
      toast.success('Settings saved successfully')
      onSettingsChange?.()
    } catch (error: any) {
      console.error('Error saving settings:', error)
      toast.error(error.message || 'Failed to save settings')
    } finally {
      setSaving(false)
    }
  }

  const handleReset = () => {
    setSettings(originalSettings)
  }

  const handleResetToDefaults = () => {
    setSettings(DEFAULT_SETTINGS)
  }

  const updateSetting = (key: keyof Settings, value: string) => {
    const numValue = parseInt(value)
    if (!isNaN(numValue) && numValue >= 10 && numValue <= 2000) {
      setSettings(prev => ({ ...prev, [key]: numValue }))
    }
  }

  const validateSetting = (value: number, min: number = 10, max: number = 2000) => {
    return value >= min && value <= max
  }

  if (loading) {
    return (
      <Card className="bg-card">
        <CardHeader>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center">
              <Settings2 className="w-4 h-4" />
            </div>
            <div>
              <CardTitle>Character Limits</CardTitle>
              <CardDescription>Configure content validation limits</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="h-20 bg-muted rounded animate-pulse"></div>
            <div className="h-20 bg-muted rounded animate-pulse"></div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="bg-card">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
              <Settings2 className="w-4 h-4 text-primary" />
            </div>
            <div>
              <CardTitle>Character Limits</CardTitle>
              <CardDescription>Configure content validation limits for topic submissions</CardDescription>
            </div>
          </div>
          
          {hasChanges && (
            <Badge variant="secondary" className="bg-amber-50 text-amber-700 border-amber-200">
              Unsaved changes
            </Badge>
          )}
        </div>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Topic Title Limit */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <Label htmlFor="title-limit" className="text-sm font-medium text-foreground">
              Topic Title Character Limit
            </Label>
            <Badge variant="outline" className="text-xs">
              Current: {settings.topic_title_max_length}
            </Badge>
          </div>
          
          <div className="space-y-2">
            <Input
              id="title-limit"
              type="number"
              min="10"
              max="500"
              value={settings.topic_title_max_length}
              onChange={(e) => updateSetting('topic_title_max_length', e.target.value)}
              className={validateSetting(settings.topic_title_max_length, 10, 500) ? '' : 'border-red-300'}
            />
            
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>Minimum: 10 characters</span>
              <span>Maximum: 500 characters</span>
            </div>
            
            {!validateSetting(settings.topic_title_max_length, 10, 500) && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="flex items-center gap-2 text-sm text-red-600 bg-red-50 p-2 rounded"
              >
                <AlertCircle className="w-4 h-4" />
                <span>Value must be between 10 and 500 characters</span>
              </motion.div>
            )}
          </div>
        </div>

        <Separator />

        {/* Topic Description Limit */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <Label htmlFor="description-limit" className="text-sm font-medium text-foreground">
              Topic Description Character Limit
            </Label>
            <Badge variant="outline" className="text-xs">
              Current: {settings.topic_description_max_length}
            </Badge>
          </div>
          
          <div className="space-y-2">
            <Input
              id="description-limit"
              type="number"
              min="50"
              max="2000"
              value={settings.topic_description_max_length}
              onChange={(e) => updateSetting('topic_description_max_length', e.target.value)}
              className={validateSetting(settings.topic_description_max_length, 50, 2000) ? '' : 'border-red-300'}
            />
            
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>Minimum: 50 characters</span>
              <span>Maximum: 2000 characters</span>
            </div>
            
            {!validateSetting(settings.topic_description_max_length, 50, 2000) && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="flex items-center gap-2 text-sm text-red-600 bg-red-50 p-2 rounded"
              >
                <AlertCircle className="w-4 h-4" />
                <span>Value must be between 50 and 2000 characters</span>
              </motion.div>
            )}
          </div>
        </div>

        <Separator />

        {/* Preview Section */}
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
          <h4 className="font-medium mb-3 text-gray-900">Preview Impact</h4>
          <div className="space-y-2 text-sm text-gray-600">
            <p>• Topic titles will be limited to <strong>{settings.topic_title_max_length} characters</strong></p>
            <p>• Topic descriptions will be limited to <strong>{settings.topic_description_max_length} characters</strong></p>
            <p>• Changes will apply to all new topic submissions</p>
            <p>• Existing topics will not be affected</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 pt-4">
          <Button
            variant="outline"
            onClick={handleReset}
            disabled={!hasChanges || saving}
            className="flex-1"
          >
            <RotateCcw className="w-4 h-4 mr-2" />
            Reset Changes
          </Button>
          
          <Button
            variant="outline"
            onClick={handleResetToDefaults}
            disabled={saving}
            className="flex-1"
          >
            Reset to Defaults
          </Button>
          
          <Button
            onClick={handleSave}
            disabled={!hasChanges || saving || !validateSetting(settings.topic_title_max_length, 10, 500) || !validateSetting(settings.topic_description_max_length, 50, 2000)}
            className="flex-1 bg-green-600 hover:bg-green-700"
          >
            {saving ? (
              <div className="flex items-center gap-2">
                <Loader2 className="w-4 h-4 animate-spin" />
                Saving...
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Save className="w-4 h-4" />
                Save Settings
              </div>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
