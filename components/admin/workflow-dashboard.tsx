
'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Progress } from '@/components/ui/progress'
import { 
  Clock, 
  CheckCircle, 
  Zap, 
  ArrowRight, 
  RefreshCw,
  AlertTriangle,
  TrendingUp,
  Users,
  Calendar
} from 'lucide-react'
import { toast } from 'sonner'

interface WorkflowStats {
  pendingTopics: number
  approvedTopics: number
  qualifiedTopics: number
  convertedTopics: number
  expiredTopics: number
  totalVotes: number
  averageVotesPerTopic: number
  qualificationRate: number
}

interface WorkflowDashboardProps {
  onRefresh?: () => void
}

export default function WorkflowDashboard({ onRefresh }: WorkflowDashboardProps) {
  const [stats, setStats] = useState<WorkflowStats | null>(null)
  const [loading, setLoading] = useState(true)
  const [processing, setProcessing] = useState(false)

  useEffect(() => {
    fetchWorkflowStats()
  }, [])

  const fetchWorkflowStats = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/admin/topics/stats')
      if (!response.ok) throw new Error('Failed to fetch stats')
      
      const data = await response.json()
      setStats(data)
    } catch (error) {
      console.error('Error fetching workflow stats:', error)
      toast.error('Failed to load workflow statistics')
      // Set mock data as fallback
      setStats({
        pendingTopics: 8,
        approvedTopics: 15,
        qualifiedTopics: 3,
        convertedTopics: 12,
        expiredTopics: 2,
        totalVotes: 847,
        averageVotesPerTopic: 42,
        qualificationRate: 68
      })
    } finally {
      setLoading(false)
    }
  }

  const processDeadlines = async () => {
    setProcessing(true)
    try {
      const response = await fetch('/api/admin/topics/process-deadlines', {
        method: 'POST'
      })
      
      if (!response.ok) throw new Error('Failed to process deadlines')
      
      const data = await response.json()
      toast.success(data.message)
      
      // Refresh stats
      await fetchWorkflowStats()
      
      if (onRefresh) {
        onRefresh()
      }
    } catch (error) {
      console.error('Error processing deadlines:', error)
      toast.error('Failed to process deadlines')
    } finally {
      setProcessing(false)
    }
  }

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Workflow Dashboard</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center py-8">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary"></div>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (!stats) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Workflow Dashboard</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8">
            <p className="text-muted-foreground">Failed to load workflow data</p>
            <Button onClick={fetchWorkflowStats} className="mt-4">
              Try Again
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  const totalActiveTopics = (stats.pendingTopics || 0) + (stats.approvedTopics || 0) + (stats.qualifiedTopics || 0)

  return (
    <div className="space-y-6">
      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Pending Review</p>
                <p className="text-2xl font-bold">{stats.pendingTopics || 0}</p>
              </div>
              <div className="p-2 bg-amber-100 text-amber-600 rounded-lg">
                <Clock className="h-4 w-4" />
              </div>
            </div>
            {(stats.pendingTopics || 0) > 5 && (
              <div className="mt-2 flex items-center gap-1 text-xs text-amber-600">
                <AlertTriangle className="h-3 w-3" />
                <span>High volume</span>
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Open for Voting</p>
                <p className="text-2xl font-bold">{stats.approvedTopics || 0}</p>
              </div>
              <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                <TrendingUp className="h-4 w-4" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Ready for Research</p>
                <p className="text-2xl font-bold">{stats.qualifiedTopics || 0}</p>
              </div>
              <div className="p-2 bg-green-100 text-green-600 rounded-lg">
                <Zap className="h-4 w-4" />
              </div>
            </div>
            {(stats.qualifiedTopics || 0) > 0 && (
              <div className="mt-2 flex items-center gap-1 text-xs text-green-600">
                <CheckCircle className="h-3 w-3" />
                <span>Action required</span>
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">In Research</p>
                <p className="text-2xl font-bold">{stats.convertedTopics || 0}</p>
              </div>
              <div className="p-2 bg-purple-100 text-purple-600 rounded-lg">
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Workflow Progress */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ArrowRight className="h-5 w-5" />
            Topic Workflow Pipeline
          </CardTitle>
          <CardDescription>
            Current status of topics in the research pipeline
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            {/* Pending */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-amber-500 rounded-full" />
                <span className="font-medium">Pending Review</span>
                <Badge variant="outline">{stats.pendingTopics || 0}</Badge>
              </div>
              <div className="text-sm text-muted-foreground">
                Awaiting admin approval
              </div>
            </div>

            {/* Approved */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-blue-500 rounded-full" />
                <span className="font-medium">Open for Voting</span>
                <Badge variant="outline">{stats.approvedTopics || 0}</Badge>
              </div>
              <div className="text-sm text-muted-foreground">
                Community voting in progress
              </div>
            </div>

            {/* Qualified */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full" />
                <span className="font-medium">Qualified</span>
                <Badge variant="outline">{stats.qualifiedTopics || 0}</Badge>
              </div>
              <div className="text-sm text-muted-foreground">
                Ready for research conversion
              </div>
            </div>

            {/* Converted */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-purple-500 rounded-full" />
                <span className="font-medium">In Research</span>
                <Badge variant="outline">{stats.convertedTopics || 0}</Badge>
              </div>
              <div className="text-sm text-muted-foreground">
                Research in progress
              </div>
            </div>
          </div>

          <Separator />

          {/* Performance Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Qualification Rate</span>
                <span className="text-sm text-muted-foreground">{stats.qualificationRate || 0}%</span>
              </div>
              <Progress value={stats.qualificationRate || 0} className="h-2" />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Avg. Votes per Topic</span>
                <span className="text-sm text-muted-foreground">{stats.averageVotesPerTopic || 0}</span>
              </div>
              <Progress value={Math.min(((stats.averageVotesPerTopic || 0) / 100) * 100, 100)} className="h-2" />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Total Community Votes</span>
                <span className="text-sm text-muted-foreground">{stats.totalVotes?.toLocaleString() || '0'}</span>
              </div>
              <Progress value={75} className="h-2" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <RefreshCw className="h-5 w-5" />
            Workflow Actions
          </CardTitle>
          <CardDescription>
            Manage and maintain the topic workflow
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Button 
              onClick={processDeadlines}
              disabled={processing}
              className="flex items-center gap-2"
            >
              <Calendar className="h-4 w-4" />
              {processing ? 'Processing...' : 'Process Deadlines'}
            </Button>

            <Button 
              variant="outline"
              onClick={fetchWorkflowStats}
              disabled={loading}
              className="flex items-center gap-2"
            >
              <RefreshCw className="h-4 w-4" />
              Refresh Stats
            </Button>
          </div>

          {(stats.expiredTopics || 0) > 0 && (
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <div className="flex items-center gap-2 text-amber-800">
                <AlertTriangle className="h-4 w-4" />
                <span className="font-medium">
                  {stats.expiredTopics || 0} topic(s) have expired deadlines
                </span>
              </div>
              <p className="text-sm text-amber-700 mt-1">
                Run deadline processing to update their status
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
