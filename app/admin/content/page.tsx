
'use client'

import { useEffect, useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { DataTable, Column, Action } from '@/components/admin/data-table'
import { StatsCard } from '@/components/admin/stats-card'
import { toast } from 'sonner'
import { 
  FileText, 
  Flag, 
  CheckCircle, 
  XCircle,
  Clock,
  AlertTriangle,
  Eye,
  MessageSquare,
  ThumbsUp,
  ThumbsDown
} from 'lucide-react'

interface ContentItem {
  id: string
  type: 'topic' | 'comment' | 'research'
  title: string
  content: string
  author: {
    name: string
    email: string
  }
  status: 'pending' | 'approved' | 'rejected' | 'flagged'
  createdAt: string
  flagCount: number
  votes: number
  category: string
}

interface ContentStats {
  totalContent: number
  pendingReview: number
  approvedContent: number
  rejectedContent: number
  flaggedContent: number
  contentGrowth: number
  approvalRate: number
}

// Mock data fallback
const mockContent: ContentItem[] = [
  {
    id: '1',
    type: 'topic',
    title: 'AI Impact on Healthcare',
    content: 'Exploring how artificial intelligence is revolutionizing medical diagnosis and treatment.',
    author: {
      name: 'Dr. Sarah Chen',
      email: 'sarah.chen@email.com'
    },
    status: 'pending',
    createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    flagCount: 0,
    votes: 23,
    category: 'Technology'
  },
  {
    id: '2',
    type: 'comment',
    title: 'Comment on Climate Research',
    content: 'This research methodology seems flawed. The sample size is too small.',
    author: {
      name: 'Prof. Michael Rodriguez',
      email: 'michael.r@university.edu'
    },
    status: 'flagged',
    createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
    flagCount: 3,
    votes: 5,
    category: 'Environment'
  },
  {
    id: '3',
    type: 'research',
    title: 'Quantum Computing Applications',
    content: 'Comprehensive analysis of quantum computing potential in cryptography.',
    author: {
      name: 'Dr. Lisa Wang',
      email: 'lisa.wang@tech.com'
    },
    status: 'approved',
    createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
    flagCount: 0,
    votes: 45,
    category: 'Technology'
  }
]

const mockStats: ContentStats = {
  totalContent: 156,
  pendingReview: 12,
  approvedContent: 128,
  rejectedContent: 11,
  flaggedContent: 5,
  contentGrowth: 18,
  approvalRate: 82
}

export default function AdminContent() {
  const [content, setContent] = useState<ContentItem[]>([])
  const [stats, setStats] = useState<ContentStats | null>(null)
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState<string>('all')

  useEffect(() => {
    fetchContent()
    fetchContentStats()
  }, [filter])

  const fetchContent = async () => {
    try {
      const response = await fetch(`/api/admin/content?filter=${filter}`)
      if (!response.ok) throw new Error('Failed to fetch content')
      
      const contentData = await response.json()
      setContent(contentData.content || [])
    } catch (error) {
      console.error('Error fetching content:', error)
      setContent(mockContent)
      toast.error('Failed to load content, showing sample data')
    } finally {
      setLoading(false)
    }
  }

  const fetchContentStats = async () => {
    try {
      const response = await fetch('/api/admin/content/stats')
      if (!response.ok) throw new Error('Failed to fetch content stats')
      
      const statsData = await response.json()
      setStats(statsData)
    } catch (error) {
      console.error('Error fetching content stats:', error)
      setStats(mockStats)
    }
  }

  const handleContentAction = async (action: string, contentId: string) => {
    try {
      const response = await fetch(`/api/admin/content/${contentId}/${action}`, {
        method: 'POST'
      })
      
      if (!response.ok) throw new Error(`Failed to ${action} content`)
      
      toast.success(`Content ${action}ed successfully`)
      fetchContent()
      fetchContentStats()
    } catch (error) {
      console.error(`Error ${action}ing content:`, error)
      toast.error(`Failed to ${action} content`)
    }
  }

  const columns: Column<ContentItem>[] = [
    {
      key: 'title',
      label: 'Content',
      render: (_, item) => (
        <div className="max-w-xs">
          <div className="flex items-center gap-2 mb-1">
            <Badge variant="outline" className="text-xs">
              {item?.type || 'unknown'}
            </Badge>
            {(item?.flagCount || 0) > 0 && (
              <Badge variant="destructive" className="text-xs">
                <Flag className="w-3 h-3 mr-1" />
                {item.flagCount}
              </Badge>
            )}
          </div>
          <p className="font-medium text-slate-900 truncate">{item?.title || 'Untitled'}</p>
          <p className="text-xs text-slate-500 truncate mt-1">{item?.content || 'No content'}</p>
        </div>
      )
    },
    {
      key: 'author',
      label: 'Author',
      render: (_, item) => (
        <div className="flex items-center gap-2">
          <Avatar className="w-6 h-6">
            <AvatarImage src="" />
            <AvatarFallback className="bg-slate-100 text-slate-600 text-xs">
              {item?.author?.name?.charAt(0)?.toUpperCase() || 'U'}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium text-slate-900">{item?.author?.name || 'Unknown User'}</p>
            <p className="text-xs text-slate-500">{item?.author?.email || 'No email'}</p>
          </div>
        </div>
      )
    },
    {
      key: 'status',
      label: 'Status',
      render: (status) => (
        <Badge 
          variant={
            status === 'approved' ? 'default' :
            status === 'pending' ? 'secondary' :
            status === 'flagged' ? 'destructive' : 'outline'
          }
          className="capitalize"
        >
          {status || 'unknown'}
        </Badge>
      )
    },
    {
      key: 'category',
      label: 'Category',
      render: (category) => (
        <Badge variant="outline" className="capitalize">
          {category || 'uncategorized'}
        </Badge>
      )
    },
    {
      key: 'votes',
      label: 'Engagement',
      render: (votes, item) => (
        <div className="text-center">
          <div className="flex items-center gap-1 justify-center">
            <ThumbsUp className="w-3 h-3 text-green-600" />
            <span className="text-sm font-medium">{votes || 0}</span>
          </div>
          {(item?.flagCount || 0) > 0 && (
            <div className="flex items-center gap-1 justify-center mt-1">
              <Flag className="w-3 h-3 text-red-600" />
              <span className="text-xs text-red-600">{item.flagCount}</span>
            </div>
          )}
        </div>
      )
    },
    {
      key: 'createdAt',
      label: 'Created',
      render: (date) => (
        <span className="text-sm text-slate-600">
          {date ? new Date(date).toLocaleDateString() : 'Unknown'}
        </span>
      )
    }
  ]

  const actions: Action<ContentItem>[] = [
    {
      label: 'View Details',
      onClick: (item) => {
        toast.info(`Viewing details for: ${item?.title || 'Unknown content'}`)
      },
      icon: <Eye className="w-4 h-4" />,
      variant: 'outline'
    },
    {
      label: 'Approve',
      onClick: (item) => handleContentAction('approve', item?.id || ''),
      icon: <CheckCircle className="w-4 h-4" />,
      variant: 'default'
    },
    {
      label: 'Reject',
      onClick: (item) => handleContentAction('reject', item?.id || ''),
      icon: <XCircle className="w-4 h-4" />,
      variant: 'destructive'
    }
  ]

  const filteredContent = content.filter(item => {
    if (filter === 'all') return true
    return item?.status === filter
  })

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Content Moderation</h1>
          <p className="text-slate-600 mt-1">Review and moderate user-generated content</p>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <Button
              variant={filter === 'all' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setFilter('all')}
            >
              All
            </Button>
            <Button
              variant={filter === 'pending' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setFilter('pending')}
            >
              Pending
            </Button>
            <Button
              variant={filter === 'flagged' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setFilter('flagged')}
            >
              Flagged
            </Button>
          </div>
        </div>
      </div>

      {/* Content Statistics */}
      {stats && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatsCard
            title="Total Content"
            value={stats.totalContent?.toLocaleString() || '0'}
            change={{
              value: stats.contentGrowth || 0,
              type: (stats.contentGrowth || 0) > 0 ? 'increase' : (stats.contentGrowth || 0) < 0 ? 'decrease' : 'neutral',
              period: 'last month'
            }}
            icon={<FileText className="h-5 w-5" />}
            color="blue"
          />
          
          <StatsCard
            title="Pending Review"
            value={stats.pendingReview?.toString() || '0'}
            icon={<Clock className="h-5 w-5" />}
            color="amber"
            urgent={(stats.pendingReview || 0) > 20}
            description={(stats.pendingReview || 0) > 20 ? 'High volume' : 'Normal volume'}
          />
          
          <StatsCard
            title="Flagged Content"
            value={stats.flaggedContent?.toString() || '0'}
            icon={<Flag className="h-5 w-5" />}
            color="red"
            urgent={(stats.flaggedContent || 0) > 5}
            description={(stats.flaggedContent || 0) > 5 ? 'Needs attention' : 'Under control'}
          />
          
          <StatsCard
            title="Approval Rate"
            value={`${stats.approvalRate || 0}%`}
            icon={<CheckCircle className="h-5 w-5" />}
            color="green"
            description="Content approval rate"
          />
        </div>
      )}

      {/* Content Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-amber-600" />
              Review Queue
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-600">Topics</span>
                <span className="font-medium text-amber-600">
                  {content.filter(c => c?.type === 'topic' && c?.status === 'pending').length}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-600">Comments</span>
                <span className="font-medium text-amber-600">
                  {content.filter(c => c?.type === 'comment' && c?.status === 'pending').length}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-600">Research</span>
                <span className="font-medium text-amber-600">
                  {content.filter(c => c?.type === 'research' && c?.status === 'pending').length}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Flag className="h-5 w-5 text-red-600" />
              Flagged Items
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-red-600 mb-2">
              {stats?.flaggedContent || 0}
            </div>
            <p className="text-sm text-slate-600">
              Items requiring immediate attention
            </p>
            {(stats?.flaggedContent || 0) > 0 && (
              <Button variant="outline" size="sm" className="mt-3 w-full">
                Review Flagged Content
              </Button>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-blue-600" />
              Content Types
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-600">Topics</span>
                <span className="font-medium">
                  {content.filter(c => c?.type === 'topic').length}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-600">Comments</span>
                <span className="font-medium">
                  {content.filter(c => c?.type === 'comment').length}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-600">Research</span>
                <span className="font-medium">
                  {content.filter(c => c?.type === 'research').length}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Content Table */}
      <Card>
        <CardHeader>
          <CardTitle>Content Management</CardTitle>
          <CardDescription>
            Review, approve, or reject user-generated content
          </CardDescription>
        </CardHeader>
        <CardContent>
          <DataTable
            data={filteredContent}
            columns={columns}
            actions={actions}
            loading={loading}
            searchable={true}
            filterable={true}
            exportable={true}
            emptyMessage="No content found"
          />
        </CardContent>
      </Card>
    </div>
  )
}
