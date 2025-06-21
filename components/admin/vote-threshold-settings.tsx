
'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Settings, Target, TrendingUp, Users, Save, RotateCcw } from 'lucide-react'
import { toast } from 'sonner'

interface VoteThresholdSettingsProps {
  onThresholdChange?: (threshold: number) => void
}

export default function VoteThresholdSettings({ onThresholdChange }: VoteThresholdSettingsProps) {
  const [currentThreshold, setCurrentThreshold] = useState(50)
  const [newThreshold, setNewThreshold] = useState(50)
  const [loading, setLoading] = useState(false)
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    fetchCurrentThreshold()
  }, [])

  const fetchCurrentThreshold = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/admin/settings/threshold')
      if (!response.ok) throw new Error('Failed to fetch threshold')
      
      const data = await response.json()
      setCurrentThreshold(data.threshold)
      setNewThreshold(data.threshold)
    } catch (error) {
      console.error('Error fetching threshold:', error)
      toast.error('Failed to load current threshold')
    } finally {
      setLoading(false)
    }
  }

  const saveThreshold = async () => {
    if (newThreshold < 1 || newThreshold > 1000) {
      toast.error('Threshold must be between 1 and 1000')
      return
    }

    setSaving(true)
    try {
      const response = await fetch('/api/admin/settings/threshold', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ threshold: newThreshold })
      })

      if (!response.ok) throw new Error('Failed to update threshold')
      
      const data = await response.json()
      setCurrentThreshold(data.threshold)
      toast.success('Vote threshold updated successfully')
      
      if (onThresholdChange) {
        onThresholdChange(data.threshold)
      }
    } catch (error) {
      console.error('Error updating threshold:', error)
      toast.error('Failed to update threshold')
    } finally {
      setSaving(false)
    }
  }

  const resetThreshold = () => {
    setNewThreshold(currentThreshold)
  }

  const hasChanges = newThreshold !== currentThreshold

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="h-5 w-5" />
            Vote Threshold Settings
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center py-8">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary"></div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Settings className="h-5 w-5" />
          Vote Threshold Settings
        </CardTitle>
        <CardDescription>
          Configure the default number of votes required for topics to qualify for research
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Current Settings */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Label className="text-base font-medium">Current Default Threshold</Label>
            <Badge variant="outline" className="text-lg px-3 py-1">
              {currentThreshold} votes
            </Badge>
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
              <Target className="h-6 w-6 text-blue-600 mx-auto mb-2" />
              <div className="text-sm text-blue-700">Current Target</div>
              <div className="text-xl font-bold text-blue-600">{currentThreshold}</div>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
              <TrendingUp className="h-6 w-6 text-green-600 mx-auto mb-2" />
              <div className="text-sm text-green-700">Qualification Rate</div>
              <div className="text-xl font-bold text-green-600">68%</div>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 text-center">
              <Users className="h-6 w-6 text-purple-600 mx-auto mb-2" />
              <div className="text-sm text-purple-700">Avg. Votes</div>
              <div className="text-xl font-bold text-purple-600">42</div>
            </div>
          </div>
        </div>

        <Separator />

        {/* Threshold Configuration */}
        <div className="space-y-4">
          <Label className="text-base font-medium">Update Default Threshold</Label>
          
          <div className="space-y-2">
            <Label htmlFor="threshold">Vote Threshold (1-1000)</Label>
            <Input
              id="threshold"
              type="number"
              min="1"
              max="1000"
              value={newThreshold}
              onChange={(e) => setNewThreshold(parseInt(e.target.value) || 1)}
              placeholder="Enter vote threshold"
            />
            <p className="text-xs text-muted-foreground">
              Number of votes a topic needs to qualify for research production
            </p>
          </div>

          {/* Threshold Impact Preview */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <h4 className="font-medium mb-3">Impact Preview</h4>
            <div className="space-y-2 text-sm">
              {newThreshold < 25 && (
                <div className="flex items-center gap-2 text-amber-700">
                  <div className="w-2 h-2 bg-amber-500 rounded-full" />
                  <span>Low threshold - Topics will qualify quickly but may lack community validation</span>
                </div>
              )}
              {newThreshold >= 25 && newThreshold <= 75 && (
                <div className="flex items-center gap-2 text-green-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span>Balanced threshold - Good balance between quality and accessibility</span>
                </div>
              )}
              {newThreshold > 75 && (
                <div className="flex items-center gap-2 text-red-700">
                  <div className="w-2 h-2 bg-red-500 rounded-full" />
                  <span>High threshold - Topics will need strong community support to qualify</span>
                </div>
              )}
              <div className="flex items-center gap-2 text-blue-700">
                <div className="w-2 h-2 bg-blue-500 rounded-full" />
                <span>This will be the default for new topic approvals</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <Button 
              onClick={saveThreshold} 
              disabled={!hasChanges || saving || newThreshold < 1 || newThreshold > 1000}
              className="flex items-center gap-2"
            >
              <Save className="h-4 w-4" />
              {saving ? 'Saving...' : 'Save Changes'}
            </Button>
            
            {hasChanges && (
              <Button 
                variant="outline" 
                onClick={resetThreshold}
                disabled={saving}
                className="flex items-center gap-2"
              >
                <RotateCcw className="h-4 w-4" />
                Reset
              </Button>
            )}
          </div>
        </div>

        <Separator />

        {/* Guidelines */}
        <div className="space-y-3">
          <Label className="text-base font-medium">Threshold Guidelines</Label>
          <div className="space-y-2 text-sm text-muted-foreground">
            <div className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2 flex-shrink-0" />
              <span><strong>1-25 votes:</strong> Low barrier, suitable for niche or specialized topics</span>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2 flex-shrink-0" />
              <span><strong>25-75 votes:</strong> Moderate barrier, good for general interest topics</span>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2 flex-shrink-0" />
              <span><strong>75+ votes:</strong> High barrier, ensures strong community demand</span>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2 flex-shrink-0" />
              <span>Admins can override this default when approving individual topics</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
