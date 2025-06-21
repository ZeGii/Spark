
'use client'

import { useEffect, useState, useCallback, useMemo } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { AdminTable, Column } from '@/components/admin/admin-table'
import { PaginationState } from '@/components/admin/table-pagination'
import { StatsCard } from '@/components/admin/stats-card'
import { ChartContainer } from '@/components/admin/chart-container'
import { BulkActionsToolbar } from '@/components/admin/bulk-actions-toolbar'
import TopicApprovalModal from '@/components/admin/topic-approval-modal'
import TopicConversionModal from '@/components/admin/topic-conversion-modal'
import ReviewTopicProposalModal from '@/components/admin/review-topic-proposal-modal'
import VoteThresholdSettings from '@/components/admin/vote-threshold-settings'
import CharacterLimitSettings from '@/components/admin/character-limit-settings'
import WorkflowDashboard from '@/components/admin/workflow-dashboard'
import { DateFilter, DateRange } from '@/components/admin/date-filter'
import { FilterState } from '@/components/admin/filter-bar'
import { TOPIC_FILTER_CONFIGS } from '@/components/admin/topic-filters'
import { filtersToSearchParams, hasActiveFilters } from '@/components/admin/filter-utils'
import { StatusBadge } from '@/components/ui/status-badge'
import { CountdownTimer } from '@/components/ui/countdown-timer'
import { VoteProgress } from '@/components/ui/vote-progress'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { toast } from 'sonner'
import { 
  Lightbulb, 
  Clock, 
  CheckCircle, 
  XCircle,
  TrendingUp,
  Users,
  ArrowRight,
  BarChart3,
  Zap,
  Settings,
  AlertTriangle,
  RefreshCw,
  Loader2
} from 'lucide-react'
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, PieChart, Pie, Cell } from 'recharts'
import { getTopicPriority, formatTimeRemaining } from '@/lib/workflow-utils'

interface Topic {
  id: string
  title: string
  description: string
  industry: string
  country: string
  status: string
  voteCount: number
  voteThreshold: number | null
  approvalDate: string | null
  deadline: string | null
  rejectionReason: string | null
  createdAt: string
  updatedAt: string
  proposedBy: {
    id: string
    name: string
    username: string
    email: string
  }
  approvedBy?: {
    id: string
    name: string
    username: string
  } | null
  _count: {
    votes: number
  }
}

interface TopicStats {
  totalTopics: number
  pendingTopics: number
  activeTopics: number
  qualifiedTopics: number
  rejectedTopics: number
  averageVotes: number
  qualificationRate: number
  topicGrowth: number
}

// Mock data fallback
const mockTopics: Topic[] = [
  {
    id: '1',
    title: 'AI Impact on Healthcare',
    description: 'Exploring how artificial intelligence is revolutionizing medical diagnosis and treatment.',
    industry: 'Technology',
    country: 'United States',
    status: 'APPROVED',
    voteCount: 67,
    voteThreshold: 50,
    approvalDate: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    deadline: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000).toISOString(),
    rejectionReason: null,
    createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    proposedBy: {
      id: '1',
      name: 'Dr. Sarah Chen',
      username: 'sarah_chen',
      email: 'sarah.chen@email.com'
    },
    approvedBy: {
      id: 'admin1',
      name: 'Admin User',
      username: 'admin'
    },
    _count: {
      votes: 67
    }
  },
  {
    id: '2',
    title: 'Climate Change Solutions',
    description: 'Investigating renewable energy alternatives for urban environments.',
    industry: 'Environment',
    country: 'Global',
    status: 'QUALIFIED',
    voteCount: 89,
    voteThreshold: 50,
    approvalDate: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000).toISOString(),
    deadline: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    rejectionReason: null,
    createdAt: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    proposedBy: {
      id: '2',
      name: 'Prof. Michael Rodriguez',
      username: 'prof_rodriguez',
      email: 'michael.r@university.edu'
    },
    approvedBy: {
      id: 'admin1',
      name: 'Admin User',
      username: 'admin'
    },
    _count: {
      votes: 89
    }
  },
  {
    id: '3',
    title: 'Space Exploration Ethics',
    description: 'Examining the ethical implications of space colonization and resource extraction.',
    industry: 'Science',
    country: 'United States',
    status: 'PENDING',
    voteCount: 0,
    voteThreshold: null,
    approvalDate: null,
    deadline: null,
    rejectionReason: null,
    createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
    proposedBy: {
      id: '3',
      name: 'Dr. Lisa Wang',
      username: 'lisa_wang',
      email: 'lisa.wang@space.org'
    },
    approvedBy: null,
    _count: {
      votes: 0
    }
  }
]

const mockStats: TopicStats = {
  totalTopics: 37,
  pendingTopics: 8,
  activeTopics: 15,
  qualifiedTopics: 3,
  rejectedTopics: 11,
  averageVotes: 23,
  qualificationRate: 68,
  topicGrowth: 12
}

const mockAnalytics = {
  statusDistribution: [
    { name: 'Pending', value: 8, color: '#f59e0b' },
    { name: 'Active', value: 15, color: '#3b82f6' },
    { name: 'Qualified', value: 3, color: '#10b981' },
    { name: 'Rejected', value: 11, color: '#ef4444' }
  ],
  categoryPerformance: [
    { category: 'Technology', total: 12, qualified: 8 },
    { category: 'Environment', total: 10, qualified: 6 },
    { category: 'Health', total: 8, qualified: 5 },
    { category: 'Education', total: 7, qualified: 3 }
  ]
}

export default function AdminTopics() {
  const [topics, setTopics] = useState<Topic[]>([])
  const [stats, setStats] = useState<TopicStats | null>(null)
  const [analytics, setAnalytics] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [statsLoading, setStatsLoading] = useState(false)
  const [analyticsLoading, setAnalyticsLoading] = useState(false)
  const [filter, setFilter] = useState<string>('all')
  const [activeTab, setActiveTab] = useState('topics')
  const [dateRange, setDateRange] = useState<DateRange | null>(null)
  
  // Bulk selection state
  const [selectedTopics, setSelectedTopics] = useState<string[]>([])

  // Pagination state
  const [pagination, setPagination] = useState<PaginationState>({
    page: 1,
    pageSize: 50,
    total: 0,
    totalPages: 0
  })

  // Filter state - replaces individual search and filter states
  const [filterState, setFilterState] = useState<FilterState>({})

  // Sort state
  const [sortBy, setSortBy] = useState('createdAt')
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc')
  
  // Modal states
  const [approvalModal, setApprovalModal] = useState<{
    isOpen: boolean
    topic: Topic | null
  }>({ isOpen: false, topic: null })
  
  const [conversionModal, setConversionModal] = useState<{
    isOpen: boolean
    topic: Topic | null
  }>({ isOpen: false, topic: null })

  const [reviewModal, setReviewModal] = useState<{
    isOpen: boolean
    topic: Topic | null
  }>({ isOpen: false, topic: null })

  useEffect(() => {
    fetchTopics()
    fetchTopicStats(dateRange)
    fetchTopicAnalytics(dateRange)
  }, [filter, pagination.page, pagination.pageSize, sortBy, sortOrder, dateRange])

  const fetchTopics = async () => {
    try {
      setLoading(true)
      
      // Build query parameters from filter state
      const filterParams = filtersToSearchParams(filterState)
      
      // Add pagination and sorting parameters
      filterParams.append('page', pagination.page.toString())
      filterParams.append('limit', pagination.pageSize.toString())
      filterParams.append('sortBy', sortBy)
      filterParams.append('sortOrder', sortOrder)
      filterParams.append('filter', filter) // Keep legacy filter support

      // Legacy support: Add date parameters if dateRange is active (for stats)
      if (dateRange) {
        filterParams.append('startDate', dateRange.startDate.toISOString())
        filterParams.append('endDate', dateRange.endDate.toISOString())
      }
      
      const url = `/api/admin/topics?${filterParams.toString()}`
      const response = await fetch(url)
      if (!response.ok) throw new Error('Failed to fetch topics')
      
      const topicData = await response.json()
      setTopics(topicData.topics || [])
      
      // Update pagination state with response data (but preserve current page if it's valid)
      if (topicData.pagination) {
        setPagination(prev => {
          const newState = {
            page: prev.page, // Keep the current page that user selected
            pageSize: topicData.pagination.pageSize,
            total: topicData.pagination.total,
            totalPages: topicData.pagination.totalPages
          }
          
          // Only update page if current page is invalid (beyond total pages)
          if (prev.page > topicData.pagination.totalPages && topicData.pagination.totalPages > 0) {
            newState.page = 1 // Reset to first page if current page is invalid
          }
          
          console.log('Topics Page: Updating pagination from API', { 
            previous: prev, 
            apiResponse: topicData.pagination, 
            newState 
          })
          
          return newState
        })
      }
    } catch (error) {
      console.error('Error fetching topics:', error)
      setTopics(mockTopics)
      toast.error('Failed to load topics, showing sample data')
    } finally {
      setLoading(false)
    }
  }

  const fetchTopicStats = async (dateFilter?: DateRange | null) => {
    try {
      setStatsLoading(true)
      let url = '/api/admin/topics/stats'
      
      // Add date parameters if filter is active
      if (dateFilter) {
        const params = new URLSearchParams({
          startDate: dateFilter.startDate.toISOString(),
          endDate: dateFilter.endDate.toISOString()
        })
        url += `?${params.toString()}`
      }
      
      const response = await fetch(url)
      if (!response.ok) throw new Error('Failed to fetch topic stats')
      
      const statsData = await response.json()
      setStats(statsData)
    } catch (error) {
      console.error('Error fetching topic stats:', error)
      setStats(mockStats)
    } finally {
      setStatsLoading(false)
    }
  }

  const fetchTopicAnalytics = async (dateFilter?: DateRange | null) => {
    try {
      setAnalyticsLoading(true)
      let url = '/api/admin/topics/analytics'
      
      // Add date parameters if filter is active
      if (dateFilter) {
        const params = new URLSearchParams({
          startDate: dateFilter.startDate.toISOString(),
          endDate: dateFilter.endDate.toISOString()
        })
        url += `?${params.toString()}`
      }
      
      const response = await fetch(url)
      if (!response.ok) throw new Error('Failed to fetch topic analytics')
      
      const analyticsData = await response.json()
      setAnalytics(analyticsData)
    } catch (error) {
      console.error('Error fetching topic analytics:', error)
      setAnalytics(mockAnalytics)
    } finally {
      setAnalyticsLoading(false)
    }
  }

  const handleTopicAction = async (action: string, topicId: string) => {
    try {
      const response = await fetch(`/api/admin/topics/${topicId}/${action}`, {
        method: 'POST'
      })
      
      if (!response.ok) throw new Error(`Failed to ${action} topic`)
      
      toast.success(`Topic ${action}ed successfully`)
      await fetchTopics()
      await fetchTopicStats(dateRange)
    } catch (error) {
      console.error(`Error ${action}ing topic:`, error)
      toast.error(`Failed to ${action} topic`)
    }
  }

  const handleApprove = async (topicId: string, voteThreshold: number) => {
    const response = await fetch(`/api/admin/topics/${topicId}/approve`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ voteThreshold })
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.error || 'Failed to approve topic')
    }

    await fetchTopics()
    await fetchTopicStats(dateRange)
  }

  const handleReject = async (topicId: string, rejectionReason: string) => {
    const response = await fetch(`/api/admin/topics/${topicId}/reject`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ rejectionReason })
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.error || 'Failed to reject topic')
    }

    await fetchTopics()
    await fetchTopicStats(dateRange)
  }

  const handleConvert = async (topicId: string) => {
    const response = await fetch(`/api/admin/topics/${topicId}/convert`, {
      method: 'POST'
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.error || 'Failed to convert topic')
    }

    await fetchTopics()
    await fetchTopicStats(dateRange)
  }

  const openApprovalModal = (topic: Topic) => {
    setApprovalModal({ isOpen: true, topic })
  }

  const openConversionModal = (topic: Topic) => {
    setConversionModal({ isOpen: true, topic })
  }

  const openReviewModal = (topic: Topic) => {
    setReviewModal({ isOpen: true, topic })
  }

  const refreshData = async () => {
    await fetchTopics()
    await fetchTopicStats(dateRange)
    await fetchTopicAnalytics(dateRange)
  }

  const handleDateRangeChange = (newDateRange: DateRange | null) => {
    setDateRange(newDateRange)
    // Reset to first page when date range changes
    setPagination(prev => ({ ...prev, page: 1 }))
  }

  // Enhanced pagination handlers with debugging - Stabilized with useCallback
  const handlePageChange = useCallback((page: number) => {
    console.log('Topics Page: handlePageChange called', { page, loading, currentPage: pagination.page })
    
    if (loading) {
      console.log('Topics Page: Page change blocked - loading in progress')
      return
    }
    
    console.log('Topics Page: Setting new page state:', page)
    setPagination(prev => {
      const newPagination = { ...prev, page }
      console.log('Topics Page: New pagination state:', newPagination)
      return newPagination
    })
  }, [loading, pagination.page])

  const handlePageSizeChange = useCallback((pageSize: number) => {
    console.log('Topics Page: handlePageSizeChange called', { pageSize, loading, currentPageSize: pagination.pageSize })
    
    if (loading) {
      console.log('Topics Page: PageSize change blocked - loading in progress')
      return
    }
    
    console.log('Topics Page: Setting new pageSize state:', pageSize)
    setPagination(prev => {
      const newPagination = { ...prev, page: 1, pageSize }
      console.log('Topics Page: New pagination state:', newPagination)
      return newPagination
    })
  }, [loading, pagination.pageSize])

  // Filter handlers - Stabilized with useCallback to prevent infinite re-renders
  const handleFilterChange = useCallback((key: string, value: any) => {
    setFilterState(prev => ({
      ...prev,
      [key]: value
    }))
    setPagination(prev => ({ ...prev, page: 1 })) // Reset to first page when filtering
  }, [])

  const handleClearFilters = useCallback(() => {
    setFilterState({})
    setPagination(prev => ({ ...prev, page: 1 })) // Reset to first page when clearing filters
  }, [])

  // Sort handler - Stabilized with useCallback
  const handleSortChange = useCallback((sortBy: string, sortOrder: 'asc' | 'desc') => {
    setSortBy(sortBy)
    setSortOrder(sortOrder)
    setPagination(prev => ({ ...prev, page: 1 })) // Reset to first page when sorting
  }, [])

  // Bulk action handlers
  const handleBulkDelete = async (topicIds: string[]) => {
    const response = await fetch('/api/admin/topics/bulk-delete', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ topicIds })
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.error || 'Failed to delete topics')
    }

    await refreshData()
  }

  const handleBulkApprove = async (topicIds: string[]) => {
    const response = await fetch('/api/admin/topics/bulk-approve', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ topicIds, voteThreshold: 50 })
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.error || 'Failed to approve topics')
    }

    await refreshData()
  }

  const handleBulkReject = async (topicIds: string[], rejectionReason: string) => {
    const response = await fetch('/api/admin/topics/bulk-reject', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ topicIds, rejectionReason })
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.error || 'Failed to reject topics')
    }

    await refreshData()
  }

  const handleSelectionChange = (selectedIds: string[]) => {
    setSelectedTopics(selectedIds)
  }

  const handleClearSelection = () => {
    setSelectedTopics([])
  }

  const columns: Column<Topic>[] = [
    {
      key: 'title',
      label: 'Title',
      render: (_, topic) => (
        <div className="max-w-xs">
          <div className="flex items-center gap-2 mb-1">
            <Badge 
              variant={
                getTopicPriority(topic) === 'high' ? 'destructive' :
                getTopicPriority(topic) === 'medium' ? 'secondary' : 'outline'
              }
              className="text-xs"
            >
              {getTopicPriority(topic)}
            </Badge>
          </div>
          <p className="font-medium text-card-foreground truncate">{topic?.title || 'Untitled'}</p>
          {topic?.deadline && topic?.status === 'APPROVED' && (
            <p className="text-xs text-amber-600 mt-1">
              {formatTimeRemaining(new Date(topic.deadline))}
            </p>
          )}
        </div>
      )
    },
    {
      key: 'description',
      label: 'Description',
      render: (_, topic) => (
        <div className="max-w-sm">
          <p className="text-sm text-card-foreground line-clamp-2">{topic?.description || 'No description'}</p>
        </div>
      )
    },
    {
      key: 'industry',
      label: 'Industry',
      render: (_, topic) => (
        <Badge variant="outline" className="text-xs">
          {topic?.industry || 'Unknown'}
        </Badge>
      )
    },
    {
      key: 'country',
      label: 'Country',
      render: (_, topic) => (
        <span className="text-sm text-card-foreground">{topic?.country || 'Unknown'}</span>
      )
    },
    {
      key: 'proposedBy',
      label: 'Submitted By',
      render: (_, topic) => (
        <div className="flex items-center gap-2">
          <Avatar className="w-6 h-6">
            <AvatarImage src="" />
            <AvatarFallback className="bg-muted text-card-foreground text-xs">
              {topic?.proposedBy?.name?.charAt(0)?.toUpperCase() || 'U'}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium text-card-foreground">{topic?.proposedBy?.name || 'Unknown User'}</p>
            <p className="text-xs text-card-foreground">{topic?.proposedBy?.email || 'No email'}</p>
          </div>
        </div>
      )
    },
    {
      key: 'status',
      label: 'Status',
      width: 'fit',
      render: (status, topic) => (
        <div className="min-w-fit">
          {topic?.rejectionReason ? (
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="cursor-help">
                  <StatusBadge status={status as any} />
                </div>
              </TooltipTrigger>
              <TooltipContent side="top" className="max-w-xs">
                <div className="space-y-1">
                  <p className="font-medium text-xs">Rejection Reason:</p>
                  <p className="text-xs">{topic.rejectionReason}</p>
                </div>
              </TooltipContent>
            </Tooltip>
          ) : (
            <StatusBadge status={status as any} />
          )}
        </div>
      )
    },
    {
      key: 'voteCount',
      label: 'Progress',
      render: (voteCount, topic) => {
        if (topic?.status === 'PENDING' || topic?.status === 'REJECTED') {
          return <span className="text-xs text-card-foreground">N/A</span>
        }
        
        return (
          <div className="w-32">
            <VoteProgress 
              voteCount={voteCount || 0} 
              voteThreshold={topic?.voteThreshold} 
              showDetails={true}
            />
          </div>
        )
      }
    },
    {
      key: 'createdAt',
      label: 'Created',
      render: (date) => (
        <span className="text-sm text-card-foreground">
          {date ? new Date(date).toLocaleDateString() : 'Unknown'}
        </span>
      )
    }
  ]





  return (
    <TooltipProvider>
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Topic Management</h1>
          <p className="text-card-foreground mt-1">Manage research topics and workflow</p>
        </div>
        
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            onClick={refreshData}
            disabled={loading}
            className="flex items-center gap-2"
          >
            <RefreshCw className="h-4 w-4" />
            Refresh
          </Button>
        </div>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="topics" className="flex items-center gap-2">
            <Lightbulb className="h-4 w-4" />
            Topics
          </TabsTrigger>
          <TabsTrigger value="workflow" className="flex items-center gap-2">
            <ArrowRight className="h-4 w-4" />
            Workflow
          </TabsTrigger>
          <TabsTrigger value="settings" className="flex items-center gap-2">
            <Settings className="h-4 w-4" />
            Settings
          </TabsTrigger>
        </TabsList>

        {/* Topics Tab */}
        <TabsContent value="topics" className="space-y-6">
          {/* Date Filter */}
          <Card className="bg-card">
            <CardContent className="p-6">
              <DateFilter onDateRangeChange={handleDateRangeChange} />
            </CardContent>
          </Card>

          {/* Topic Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {statsLoading ? (
              // Loading state for stats
              Array.from({ length: 4 }).map((_, index) => (
                <Card key={index} className="bg-card">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-center py-8">
                      <Loader2 className="w-8 h-8 animate-spin text-[#00FF88]" />
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : stats ? (
              <>
                <StatsCard
                  title={dateRange ? "Filtered Topics" : "Total Topics"}
                  value={stats.totalTopics?.toLocaleString() || '0'}
                  change={{
                    value: stats.topicGrowth || 0,
                    type: (stats.topicGrowth || 0) > 0 ? 'increase' : (stats.topicGrowth || 0) < 0 ? 'decrease' : 'neutral',
                    period: dateRange ? 'vs previous period' : 'last month'
                  }}
                  icon={<Lightbulb className="h-5 w-5" />}
                  color="blue"
                />
                
                <StatsCard
                  title="Pending Review"
                  value={stats.pendingTopics?.toString() || '0'}
                  icon={<Clock className="h-5 w-5" />}
                  color="amber"
                  urgent={(stats.pendingTopics || 0) > 10}
                  description={(stats.pendingTopics || 0) > 10 ? 'High volume' : 'Normal volume'}
                />
                
                <StatsCard
                  title="Ready for Research"
                  value={stats.qualifiedTopics?.toString() || '0'}
                  icon={<Zap className="h-5 w-5" />}
                  color="green"
                  urgent={(stats.qualifiedTopics || 0) > 0}
                  description={(stats.qualifiedTopics || 0) > 0 ? 'Action required' : 'All processed'}
                />
                
                <StatsCard
                  title="Qualification Rate"
                  value={`${stats.qualificationRate || 0}%`}
                  icon={<TrendingUp className="h-5 w-5" />}
                  color="purple"
                  description={dateRange ? 'For selected period' : 'Topics reaching research phase'}
                />
              </>
            ) : (
              // No stats available
              Array.from({ length: 4 }).map((_, index) => (
                <Card key={index} className="bg-card">
                  <CardContent className="p-6">
                    <div className="text-center text-card-foreground">No data available</div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>

          {/* Analytics Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Topic Status Chart */}
            <ChartContainer
              title={dateRange ? "Filtered Topic Status Distribution" : "Topic Status Distribution"}
              description={dateRange ? `Status breakdown for ${dateRange.label.toLowerCase()}` : "Current status breakdown of all topics"}
              loading={analyticsLoading}
            >
              {!analyticsLoading && analytics?.statusDistribution ? (
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={analytics.statusDistribution}
                      cx="50%"
                      cy="50%"
                      innerRadius={50}
                      outerRadius={90}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {analytics.statusDistribution.map((entry: any, index: number) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <RechartsTooltip 
                      contentStyle={{ 
                        backgroundColor: 'white', 
                        border: '1px solid #e2e8f0',
                        borderRadius: '8px',
                        fontSize: '11px',
                        boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              ) : null}
            </ChartContainer>

            {/* Category Performance */}
            <ChartContainer
              title={dateRange ? "Filtered Category Performance" : "Category Performance"}
              description={dateRange ? `Category performance for ${dateRange.label.toLowerCase()}` : "Topics by category and their success rate"}
              loading={analyticsLoading}
            >
              {!analyticsLoading && analytics?.categoryPerformance ? (
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={analytics.categoryPerformance}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                    <XAxis 
                      dataKey="category" 
                      tick={{ fontSize: 10 }}
                      tickLine={false}
                      axisLine={false}
                    />
                    <YAxis 
                      tick={{ fontSize: 10 }}
                      tickLine={false}
                      axisLine={false}
                    />
                    <RechartsTooltip 
                      contentStyle={{ 
                        backgroundColor: 'white', 
                        border: '1px solid #e2e8f0',
                        borderRadius: '8px',
                        fontSize: '11px',
                        boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                      }}
                    />
                    <Bar dataKey="total" fill="#94a3b8" radius={[2, 2, 0, 0]} />
                    <Bar dataKey="qualified" fill="#10b981" radius={[2, 2, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              ) : null}
            </ChartContainer>
          </div>

          {/* Topic Management Section */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-foreground">Topic Management</h2>
                <p className="text-card-foreground text-sm">Review topics, manage workflow, and track progress</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <Button
                  variant={filter === 'all' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => {
                    setFilter('all')
                    setPagination(prev => ({ ...prev, page: 1 }))
                  }}
                >
                  All
                </Button>
                <Button
                  variant={filter === 'PENDING' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => {
                    setFilter('PENDING')
                    setPagination(prev => ({ ...prev, page: 1 }))
                  }}
                >
                  Pending
                </Button>
                <Button
                  variant={filter === 'APPROVED' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => {
                    setFilter('APPROVED')
                    setPagination(prev => ({ ...prev, page: 1 }))
                  }}
                >
                  Approved
                </Button>
                <Button
                  variant={filter === 'QUALIFIED' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => {
                    setFilter('QUALIFIED')
                    setPagination(prev => ({ ...prev, page: 1 }))
                  }}
                >
                  Qualified
                </Button>
              </div>
            </div>

            <Card className="bg-card">
              <CardContent className="p-6">
                <BulkActionsToolbar
                  selectedCount={selectedTopics.length}
                  selectedIds={selectedTopics}
                  onClearSelection={handleClearSelection}
                  onBulkDelete={handleBulkDelete}
                  onBulkApprove={handleBulkApprove}
                  onBulkReject={handleBulkReject}
                  totalCount={pagination.total}
                />
                
                <AdminTable
                  data={topics}
                  columns={columns}
                  pagination={pagination}
                  onPageChange={handlePageChange}
                  onPageSizeChange={handlePageSizeChange}
                  onSortChange={handleSortChange}
                  loading={loading}
                  exportable={true}
                  emptyMessage="No topics found"
                  onRowClick={(topic) => openReviewModal(topic)}
                  bulkSelectable={true}
                  selectedItems={selectedTopics}
                  onSelectionChange={handleSelectionChange}
                  getItemId={(topic) => topic.id}
                  // New filter props - Temporarily disabled to fix loading issues
                  showFilters={false}
                  filterConfigs={TOPIC_FILTER_CONFIGS}
                  filterState={filterState}
                  onFilterChange={handleFilterChange}
                  onClearFilters={handleClearFilters}
                />
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Workflow Tab */}
        <TabsContent value="workflow" className="space-y-6">
          <WorkflowDashboard onRefresh={refreshData} />
        </TabsContent>

        {/* Settings Tab */}
        <TabsContent value="settings" className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-foreground mb-2">System Settings</h2>
            <p className="text-card-foreground text-sm mb-6">Configure system-wide settings for topic management</p>
            
            <div className="space-y-6">
              <VoteThresholdSettings onThresholdChange={refreshData} />
              <CharacterLimitSettings onSettingsChange={refreshData} />
            </div>
          </div>
        </TabsContent>
      </Tabs>

      {/* Modals */}
      <TopicApprovalModal
        topic={approvalModal.topic}
        isOpen={approvalModal.isOpen}
        onClose={() => setApprovalModal({ isOpen: false, topic: null })}
        onApprove={handleApprove}
        onReject={handleReject}
      />

      <TopicConversionModal
        topic={conversionModal.topic}
        isOpen={conversionModal.isOpen}
        onClose={() => setConversionModal({ isOpen: false, topic: null })}
        onConvert={handleConvert}
      />

      <ReviewTopicProposalModal
        topic={reviewModal.topic}
        isOpen={reviewModal.isOpen}
        onClose={() => setReviewModal({ isOpen: false, topic: null })}
        onApprove={handleApprove}
        onReject={handleReject}
        onConvert={handleConvert}
      />
    </div>
    </TooltipProvider>
  )
}
