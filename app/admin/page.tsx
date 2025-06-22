
'use client'

import { useEffect, useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { StatsCard } from '@/components/admin/stats-card'
import { HeroMetricCard } from '@/components/admin/hero-metric-card'
import { MultiMetricCard } from '@/components/admin/multi-metric-card'
import { ProgressMetricCard } from '@/components/admin/progress-metric-card'
import { ActivityMetricCard } from '@/components/admin/activity-metric-card'
import { RevenueStyleCard } from '@/components/admin/revenue-style-card'
import { WeeklyActivityCard } from '@/components/admin/weekly-activity-card'
import { CustomerActivityHeatmap } from '@/components/admin/customer-activity-heatmap'
import { CampaignTable } from '@/components/admin/campaign-table'
import { ChartContainer } from '@/components/admin/chart-container'
import { DateFilter, DateRange } from '@/components/admin/date-filter'
import { toast } from 'sonner'
import Link from 'next/link'
import { 
  Users, 
  FileText, 
  TrendingUp, 
  AlertTriangle,
  Clock,
  CheckCircle,
  Zap,
  ArrowRight,
  Activity,
  BarChart3,
  Settings,
  Shield,
  Bell,
  Eye,
  Download,
  Calendar,
  Target,
  CalendarDays,
  X,
  DollarSign,
  Globe,
  MousePointer
} from 'lucide-react'
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, PieChart, Pie, Cell, AreaChart, Area, BarChart, Bar } from 'recharts'

interface DashboardData {
  stats: {
    totalUsers: number
    activeUsers: number
    totalTopics: number
    pendingTopics: number
    activeTopics: number
    qualifiedTopics: number
    completedResearch: number
    totalVotes: number
    userGrowth: number
    topicGrowth: number
    voteGrowth: number
    // Analytics stats
    totalVisits: number
    uniqueUsers: number
    pageViews: number
    bounceRate: number
    avgSessionDuration: number
    conversionRate: number
    visitsGrowth: number
    usersGrowthAnalytics: number
  }
  recentActivity: Array<{
    id: string
    type: 'user_signup' | 'topic_submitted' | 'topic_approved' | 'research_completed'
    description: string
    timestamp: string
    user?: string
  }>
  chartData: {
    userGrowth: Array<{ date: string; users: number }>
    topicStatus: Array<{ name: string; value: number; color: string }>
    weeklyActivity: Array<{ day: string; topics: number; votes: number }>
    // Analytics charts
    traffic: {
      daily: Array<{ date: string; visits: number; users: number }>
      sources: Array<{ source: string; visits: number; percentage: number; color: string }>
      pages: Array<{ page: string; views: number; bounceRate: number }>
    }
    engagement: {
      topTopics: Array<{ title: string; votes: number; engagement: number }>
      userActivity: Array<{ hour: string; active: number }>
      retention: Array<{ day: string; rate: number }>
    }
  }
  systemHealth: {
    status: 'healthy' | 'warning' | 'critical'
    uptime: string
    responseTime: number
    errorRate: number
  }
}

export default function AdminDashboard() {
  const [data, setData] = useState<DashboardData | null>(null)
  const [loading, setLoading] = useState(true)
  const [dateRange, setDateRange] = useState<DateRange | null>(null)

  useEffect(() => {
    fetchDashboardData()
  }, [dateRange])

  const fetchDashboardData = async () => {
    try {
      setLoading(true)
      
      // Build query params for date filtering
      const params = new URLSearchParams()
      
      if (dateRange) {
        params.append('startDate', dateRange.startDate.toISOString())
        params.append('endDate', dateRange.endDate.toISOString())
      }

      const response = await fetch(`/api/admin/dashboard?${params.toString()}`, {
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      
      if (!response.ok) {
        throw new Error(`API Error: ${response.status} ${response.statusText}`)
      }
      
      const dashboardData = await response.json()
      console.log('Dashboard data received:', dashboardData)
      setData(dashboardData)
    } catch (error) {
      console.error('Error fetching dashboard data:', error)
      toast.error('Failed to load dashboard data. Please check your connection.')
      
      // Minimal fallback - only set loading to false, don't set mock data
      setData(null)
    } finally {
      setLoading(false)
    }
  }

  const handleDateRangeChange = (range: DateRange | null) => {
    setDateRange(range)
  }

  const exportAnalytics = () => {
    if (!data) return
    
    const csvData = [
      ['Metric', 'Value'],
      ['Total Visits', data.stats.totalVisits?.toString() || '0'],
      ['Unique Users', data.stats.uniqueUsers?.toString() || '0'],
      ['Page Views', data.stats.pageViews?.toString() || '0'],
      ['Bounce Rate', `${data.stats.bounceRate || 0}%`],
      ['Avg Session Duration', `${data.stats.avgSessionDuration || 0} min`],
      ['Conversion Rate', `${data.stats.conversionRate || 0}%`]
    ].map(row => row.join(',')).join('\n')

    const blob = new Blob([csvData], { type: 'text/csv' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'dashboard-analytics-export.csv'
    a.click()
    window.URL.revokeObjectURL(url)
  }

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="h-8 bg-gradient-to-r from-[#1A1A1A] to-[#252529] rounded animate-pulse border border-white/10"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="h-32 bg-gradient-to-br from-[#1A1A1A] to-[#252529] rounded-lg animate-pulse border border-white/10"></div>
          ))}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-64 bg-gradient-to-br from-[#1A1A1A] to-[#252529] rounded-lg animate-pulse border border-white/10"></div>
          ))}
        </div>
      </div>
    )
  }

  if (!data) {
    return (
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-white">Admin Dashboard</h1>
            <p className="text-[#CCCCCC] mt-1">Unable to load dashboard data</p>
          </div>
        </div>
        
        {/* Error State */}
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-red-500/20 to-red-600/10 rounded-full flex items-center justify-center border border-red-500/20">
              <AlertTriangle className="w-8 h-8 text-red-500" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Failed to Load Dashboard</h3>
            <p className="text-[#CCCCCC] mb-4">Please check your connection and try again</p>
            <Button 
              onClick={fetchDashboardData}
              className="bg-gradient-to-r from-[#00FF88] to-[#10B981] text-black hover:from-[#00E87A] hover:to-[#059669]"
            >
              Retry
            </Button>
          </div>
        </div>
      </div>
    )
  }

  // Generate campaign data from real API data
  const campaignData = data?.chartData?.engagement?.topTopics ? data.chartData.engagement.topTopics.map((topic: any, index: number) => ({
    id: `topic-${index}`,
    title: topic.title,
    author: { name: data.recentActivity?.[index]?.user || 'Unknown User' },
    status: (topic.votes > 15 ? 'qualified' : topic.votes > 8 ? 'approved' : 'pending') as 'pending' | 'approved' | 'qualified' | 'completed',
    votes: topic.votes,
    engagement: topic.engagement,
    submittedAt: data.recentActivity?.[index]?.timestamp || new Date().toISOString(),
    category: 'Research'
  })) : []

  // Generate mock heatmap data
  const mockHeatmapData = Array.from({ length: 42 }, (_, i) => ({
    hour: i % 6,
    day: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][Math.floor(i / 6)],
    value: Math.floor(Math.random() * 100) + 20,
    intensity: Math.random()
  }))

  return (
    <div className="space-y-6">
      {/* Header with Date Filter */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">Good morning! 👋</h1>
          <p className="text-[#CCCCCC] mt-1">
            Here's what's happening with your platform
            {dateRange && ` from ${dateRange.label.toLowerCase()}`}
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
          {/* Date Filter Component */}
          <DateFilter
            onDateRangeChange={handleDateRangeChange}
            className="flex-wrap"
          />
          
          <div className="flex items-center gap-2">
            <Button variant="outline" onClick={exportAnalytics} size="sm" className="border-white/20 text-white hover:bg-gradient-to-r hover:from-[#f5d565]/20 hover:to-[#FCD34D]/20 hover:border-[#f5d565]/50">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
            
            {data?.systemHealth && (
              <div className="flex items-center gap-3 bg-gradient-to-r from-[#1A1A1A] to-[#252529] px-3 py-2 rounded-lg border border-white/20">
                <div className={`w-2 h-2 rounded-full ${
                  data.systemHealth.status === 'healthy' ? 'bg-[#00FF88]' :
                  data.systemHealth.status === 'warning' ? 'bg-[#f5d565]' : 'bg-red-500'
                }`}></div>
                <span className="text-xs text-white font-medium">System {data.systemHealth.status}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Loading Indicator for Filtered Data */}
      {loading && dateRange && (
        <div className="flex items-center justify-center py-4">
          <div className="flex items-center gap-3 text-[#CCCCCC]">
            <div className="w-5 h-5 border-2 border-[#00FF88] border-t-transparent rounded-full animate-spin"></div>
            <span className="text-sm">Filtering dashboard data...</span>
          </div>
        </div>
      )}

      {/* Main Dashboard Grid - Dashboard 3.jpeg Layout */}
      {data?.stats && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6">
          {/* Left Column */}
          <div className="lg:col-span-3 space-y-4">
            {/* Hero Metric */}
            <HeroMetricCard
              title="Platform Engagement"
              value={`${((data.stats.totalVotes / data.stats.totalUsers) * 100).toFixed(1)}%`}
              change={{
                value: 28.1,
                type: 'increase',
                period: 'vs last month'
              }}
              icon={<TrendingUp className="h-6 w-6" />}
              color="green"
              description="Community participation rate"
              size="large"
            />

            {/* Progress Card */}
            <ProgressMetricCard
              title="Content Approval Rate"
              value={`${Math.round((data.stats.activeTopics / (data.stats.activeTopics + data.stats.pendingTopics)) * 100)}%`}
              percentage={Math.round((data.stats.activeTopics / (data.stats.activeTopics + data.stats.pendingTopics)) * 100)}
              target="85%"
              icon={<CheckCircle className="h-6 w-6" />}
              color="green"
              description="Topics approved vs pending"
            />

            {/* Weekly Activity */}
            <WeeklyActivityCard
              title="Weekly Platform Traffic"
              primaryValue={data.chartData?.weeklyActivity?.reduce((sum: number, day: any) => sum + day.topics + day.votes, 0)?.toString() || "0"}
              change={{
                value: 12.5,
                type: 'increase',
                period: 'vs last week'
              }}
              chartData={data.chartData?.weeklyActivity?.map((day: any) => ({
                name: day.day,
                value: day.topics + day.votes
              })) || []}
              description="Total topics and votes"
              color="green"
            />
          </div>

          {/* Center Column - Large Revenue Style Card */}
          <div className="lg:col-span-6">
            <RevenueStyleCard
              title="Platform Analytics Overview"
              description="Comprehensive user and content metrics"
              primaryMetric={{
                label: "Total Platform Revenue Impact",
                value: `$${(data.stats.totalUsers * 23.45).toLocaleString()}`,
                change: {
                  value: 18.2,
                  type: 'increase'
                },
                icon: <DollarSign className="h-6 w-6" />
              }}
              secondaryMetrics={[
                {
                  label: "Active Users",
                  value: data.stats.activeUsers.toLocaleString(),
                  change: { value: 12.3, type: 'increase' }
                },
                {
                  label: "New Topics",
                  value: data.stats.pendingTopics + data.stats.activeTopics,
                  change: { value: 8.7, type: 'increase' }
                },
                {
                  label: "Engagement Rate",
                  value: `${((data.stats.totalVotes / data.stats.totalUsers) * 100).toFixed(1)}%`,
                  change: { value: 15.2, type: 'increase' }
                }
              ]}
              chartData={[
                { name: 'Jan', value: 4200, secondary: 3100 },
                { name: 'Feb', value: 4800, secondary: 3400 },
                { name: 'Mar', value: 5200, secondary: 3800 },
                { name: 'Apr', value: 4900, secondary: 3600 },
                { name: 'May', value: 5800, secondary: 4200 },
                { name: 'Jun', value: 6100, secondary: 4500 }
              ]}
              chartType="bar"
              color="green"
            />
          </div>

          {/* Right Column - Stats Cards */}
          <div className="lg:col-span-3 space-y-3">
            <StatsCard
              title="Total Users"
              value={data.stats.totalUsers.toLocaleString()}
              icon={<Users className="h-5 w-5" />}
              change={{
                value: data.stats.userGrowth,
                type: data.stats.userGrowth > 0 ? 'increase' : 'decrease',
                period: 'vs last month'
              }}
              color="blue"
            />
            
            <StatsCard
              title="Active Topics"
              value={data.stats.activeTopics}
              icon={<FileText className="h-5 w-5" />}
              change={{
                value: data.stats.topicGrowth,
                type: data.stats.topicGrowth > 0 ? 'increase' : 'decrease',
                period: 'vs last week'
              }}
              color="green"
            />
            
            <StatsCard
              title="Total Votes"
              value={data.stats.totalVotes.toLocaleString()}
              icon={<TrendingUp className="h-5 w-5" />}
              change={{
                value: data.stats.voteGrowth,
                type: data.stats.voteGrowth > 0 ? 'increase' : 'decrease',
                period: 'vs last week'
              }}
              color="green"
            />
            
            <StatsCard
              title="Pending Review"
              value={data.stats.pendingTopics}
              icon={<Clock className="h-5 w-5" />}
              urgent={data.stats.pendingTopics > 10}
              color="amber"
              description={data.stats.pendingTopics > 10 ? 'High volume' : 'Normal'}
            />
          </div>
        </div>
      )}

      {/* Bottom Section - Customer Activity & Campaign Table */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-6">
        {/* Customer Activity Heatmap */}
        <div className="lg:col-span-2">
          <CustomerActivityHeatmap
            title="User Activity Heatmap"
            description="Activity patterns by day and time"
            heatmapData={mockHeatmapData}
            peakHour="3PM"
            peakDay="Wednesday"
          />
        </div>

        {/* Campaign/Content Table */}
        <div className="lg:col-span-3">
          <CampaignTable
            title="Recent Research Topics"
            description="Latest topic submissions and their status"
            items={campaignData}
            onViewItem={(id) => console.log('View item:', id)}
          />
        </div>
      </div>

      {/* Additional Quick Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-br from-[#1A1A1A] to-[#252529] border border-white/20 p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br from-[#00FF88]/20 to-[#10B981]/10 border border-white/20 text-[#00FF88]">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl font-bold text-white">{data?.stats.pageViews?.toLocaleString() || '0'}</div>
              <div className="text-sm text-[#CCCCCC]">Page Views</div>
            </div>
          </div>
        </Card>

        <Card className="bg-gradient-to-br from-[#1A1A1A] to-[#252529] border border-white/20 p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br from-[#f5d565]/20 to-[#FCD34D]/10 border border-white/20 text-[#f5d565]">
              <MousePointer className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl font-bold text-white">{data?.stats.avgSessionDuration || 0}m</div>
              <div className="text-sm text-[#CCCCCC]">Avg Session</div>
            </div>
          </div>
        </Card>

        <Card className="bg-gradient-to-br from-[#1A1A1A] to-[#252529] border border-white/20 p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br from-purple-500/20 to-purple-600/10 border border-white/20 text-purple-400">
              <Target className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl font-bold text-white">{data?.stats.conversionRate || 0}%</div>
              <div className="text-sm text-[#CCCCCC]">Conversion</div>
            </div>
          </div>
        </Card>

        <Card className="bg-gradient-to-br from-[#1A1A1A] to-[#252529] border border-white/20 p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br from-blue-500/20 to-blue-600/10 border border-white/20 text-blue-400">
              <Activity className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl font-bold text-white">{data?.stats.bounceRate || 0}%</div>
              <div className="text-sm text-[#CCCCCC]">Bounce Rate</div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
