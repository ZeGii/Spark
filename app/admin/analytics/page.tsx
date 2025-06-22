
'use client'

import { useEffect, useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { StatsCard } from '@/components/admin/stats-card'
import { ChartContainer } from '@/components/admin/chart-container'
import { toast } from 'sonner'
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Eye,
  Download,
  Calendar,
  Activity,
  Target
} from 'lucide-react'
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, BarChart, Bar, PieChart, Pie, Cell, AreaChart, Area } from 'recharts'

interface AnalyticsData {
  overview: {
    totalVisits: number
    uniqueUsers: number
    pageViews: number
    bounceRate: number
    avgSessionDuration: number
    conversionRate: number
    visitsGrowth: number
    usersGrowth: number
  }
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

export default function AdminAnalytics() {
  const [analytics, setAnalytics] = useState<AnalyticsData | null>(null)
  const [loading, setLoading] = useState(true)
  const [dateRange, setDateRange] = useState('30d')

  useEffect(() => {
    fetchAnalytics()
  }, [dateRange])

  const fetchAnalytics = async () => {
    try {
      const response = await fetch(`/api/admin/analytics?range=${dateRange}`)
      if (!response.ok) throw new Error('Failed to fetch analytics')
      
      const analyticsData = await response.json()
      setAnalytics(analyticsData)
    } catch (error) {
      console.error('Error fetching analytics:', error)
      
      // Fallback mock data
      setAnalytics({
        overview: {
          totalVisits: 12847,
          uniqueUsers: 8934,
          pageViews: 45623,
          bounceRate: 32.5,
          avgSessionDuration: 4.2,
          conversionRate: 12.8,
          visitsGrowth: 18.5,
          usersGrowth: 24.3
        },
        traffic: {
          daily: Array.from({ length: 30 }, (_, i) => ({
            date: new Date(Date.now() - (29 - i) * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
            visits: Math.floor(Math.random() * 500) + 200,
            users: Math.floor(Math.random() * 300) + 150
          })),
          sources: [
            { source: 'Direct', visits: 4523, percentage: 35.2, color: '#3b82f6' },
            { source: 'Search', visits: 3841, percentage: 29.9, color: '#10b981' },
            { source: 'Social', visits: 2156, percentage: 16.8, color: '#f59e0b' },
            { source: 'Referral', visits: 1847, percentage: 14.4, color: '#8b5cf6' },
            { source: 'Email', visits: 480, percentage: 3.7, color: '#ef4444' }
          ],
          pages: [
            { page: '/', views: 8934, bounceRate: 28.5 },
            { page: '/topics', views: 6721, bounceRate: 35.2 },
            { page: '/research', views: 4532, bounceRate: 42.1 },
            { page: '/opportunities', views: 3456, bounceRate: 38.7 }
          ]
        },
        engagement: {
          topTopics: [
            { title: 'AI in Healthcare', votes: 89, engagement: 94.2 },
            { title: 'Climate Solutions', votes: 76, engagement: 87.5 },
            { title: 'Quantum Computing', votes: 65, engagement: 82.1 },
            { title: 'Space Exploration', votes: 54, engagement: 78.9 }
          ],
          userActivity: Array.from({ length: 24 }, (_, i) => ({
            hour: `${i}:00`,
            active: Math.floor(Math.random() * 200) + 50
          })),
          retention: Array.from({ length: 7 }, (_, i) => ({
            day: `Day ${i + 1}`,
            rate: Math.max(20, 100 - i * 12 + Math.random() * 10)
          }))
        }
      })
      
      toast.error('Failed to load analytics data, showing sample data')
    } finally {
      setLoading(false)
    }
  }

  const exportAnalytics = () => {
    if (!analytics) return
    
    const csvData = [
      ['Metric', 'Value'],
      ['Total Visits', analytics.overview.totalVisits?.toString() || '0'],
      ['Unique Users', analytics.overview.uniqueUsers?.toString() || '0'],
      ['Page Views', analytics.overview.pageViews?.toString() || '0'],
      ['Bounce Rate', `${analytics.overview.bounceRate || 0}%`],
      ['Avg Session Duration', `${analytics.overview.avgSessionDuration || 0} min`],
      ['Conversion Rate', `${analytics.overview.conversionRate || 0}%`]
    ].map(row => row.join(',')).join('\n')

    const blob = new Blob([csvData], { type: 'text/csv' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'analytics-export.csv'
    a.click()
    window.URL.revokeObjectURL(url)
  }

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="h-8 bg-slate-200 rounded animate-pulse"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="h-32 bg-slate-200 rounded-lg animate-pulse"></div>
          ))}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="h-64 bg-slate-200 rounded-lg animate-pulse"></div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Analytics Dashboard</h1>
          <p className="text-slate-600 mt-1">Platform performance and user insights</p>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <Button
              variant={dateRange === '7d' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setDateRange('7d')}
            >
              7 Days
            </Button>
            <Button
              variant={dateRange === '30d' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setDateRange('30d')}
            >
              30 Days
            </Button>
            <Button
              variant={dateRange === '90d' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setDateRange('90d')}
            >
              90 Days
            </Button>
          </div>
          <Button variant="outline" onClick={exportAnalytics} size="sm">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* Overview Stats */}
      {analytics?.overview && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatsCard
            title="Total Visits"
            value={analytics.overview.totalVisits?.toLocaleString() || '0'}
            change={{
              value: analytics.overview.visitsGrowth || 0,
              type: (analytics.overview.visitsGrowth || 0) > 0 ? 'increase' : 'decrease',
              period: 'vs last period'
            }}
            icon={<Eye className="h-5 w-5" />}
            color="blue"
          />
          
          <StatsCard
            title="Unique Users"
            value={analytics.overview.uniqueUsers?.toLocaleString() || '0'}
            change={{
              value: analytics.overview.usersGrowth || 0,
              type: (analytics.overview.usersGrowth || 0) > 0 ? 'increase' : 'decrease',
              period: 'vs last period'
            }}
            icon={<Users className="h-5 w-5" />}
            color="green"
          />
          
          <StatsCard
            title="Bounce Rate"
            value={`${analytics.overview.bounceRate || 0}%`}
            icon={<TrendingUp className="h-5 w-5" />}
            color="amber"
            description="Percentage of single-page visits"
          />
          
          <StatsCard
            title="Conversion Rate"
            value={`${analytics.overview.conversionRate || 0}%`}
            icon={<Target className="h-5 w-5" />}
            color="purple"
            description="Users who submitted topics"
          />
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Traffic Trend */}
        {analytics?.traffic?.daily && (
          <ChartContainer
            title="Traffic Trend"
            description="Daily visits and unique users"
            loading={loading}
          >
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={analytics.traffic.daily}>
                <defs>
                  <linearGradient id="visitsGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="usersGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                <XAxis 
                  dataKey="date" 
                  tick={{ fontSize: 10 }}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis 
                  tick={{ fontSize: 10 }}
                  tickLine={false}
                  axisLine={false}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'white', 
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px',
                    fontSize: '11px',
                    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                  }}
                />
                <Area 
                  type="monotone" 
                  dataKey="visits" 
                  stroke="#3b82f6" 
                  strokeWidth={2}
                  fill="url(#visitsGradient)"
                  name="Visits"
                />
                <Area 
                  type="monotone" 
                  dataKey="users" 
                  stroke="#10b981" 
                  strokeWidth={2}
                  fill="url(#usersGradient)"
                  name="Users"
                />
              </AreaChart>
            </ResponsiveContainer>
          </ChartContainer>
        )}

        {/* Traffic Sources */}
        {analytics?.traffic?.sources && (
          <ChartContainer
            title="Traffic Sources"
            description="Where your visitors come from"
            loading={loading}
          >
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={analytics.traffic.sources}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={90}
                  paddingAngle={5}
                  dataKey="visits"
                >
                  {analytics.traffic.sources.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
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
          </ChartContainer>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* User Activity */}
        {analytics?.engagement?.userActivity && (
          <ChartContainer
            title="User Activity by Hour"
            description="When users are most active"
            loading={loading}
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={analytics.engagement.userActivity}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                <XAxis 
                  dataKey="hour" 
                  tick={{ fontSize: 10 }}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis 
                  tick={{ fontSize: 10 }}
                  tickLine={false}
                  axisLine={false}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'white', 
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px',
                    fontSize: '11px',
                    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                  }}
                />
                <Bar dataKey="active" fill="#8b5cf6" radius={[2, 2, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        )}

        {/* Top Pages */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-blue-600" />
              Top Pages
            </CardTitle>
            <CardDescription>Most visited pages and their performance</CardDescription>
          </CardHeader>
          <CardContent>
            {analytics?.traffic?.pages && analytics.traffic.pages.length > 0 ? (
              <div className="space-y-4">
                {analytics.traffic.pages.map((page, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                    <div className="flex-1">
                      <p className="font-medium text-slate-900">{page.page}</p>
                      <p className="text-sm text-slate-600">{page.views?.toLocaleString() || 0} views</p>
                    </div>
                    <div className="text-right">
                      <Badge variant="outline" className="text-xs">
                        {page.bounceRate || 0}% bounce
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <BarChart3 className="h-12 w-12 text-slate-400 mx-auto mb-4" />
                <p className="text-slate-500">No page data available</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Engagement Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-green-600" />
              Top Performing Topics
            </CardTitle>
            <CardDescription>Topics with highest engagement</CardDescription>
          </CardHeader>
          <CardContent>
            {analytics?.engagement?.topTopics && analytics.engagement.topTopics.length > 0 ? (
              <div className="space-y-4">
                {analytics.engagement.topTopics.map((topic, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                    <div className="flex-1">
                      <p className="font-medium text-slate-900">{topic.title}</p>
                      <p className="text-sm text-slate-600">{topic.votes || 0} votes</p>
                    </div>
                    <div className="text-right">
                      <Badge variant="default" className="text-xs">
                        {topic.engagement || 0}% engaged
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <Activity className="h-12 w-12 text-slate-400 mx-auto mb-4" />
                <p className="text-slate-500">No engagement data available</p>
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-purple-600" />
              Key Metrics Summary
            </CardTitle>
            <CardDescription>Important performance indicators</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                <span className="text-sm font-medium text-slate-700">Page Views</span>
                <span className="text-sm font-bold text-slate-900">
                  {analytics?.overview?.pageViews?.toLocaleString() || '0'}
                </span>
              </div>
              
              <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                <span className="text-sm font-medium text-slate-700">Avg. Session Duration</span>
                <span className="text-sm font-bold text-slate-900">
                  {analytics?.overview?.avgSessionDuration || 0} min
                </span>
              </div>
              
              <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                <span className="text-sm font-medium text-slate-700">Bounce Rate</span>
                <span className="text-sm font-bold text-slate-900">
                  {analytics?.overview?.bounceRate || 0}%
                </span>
              </div>
              
              <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                <span className="text-sm font-medium text-slate-700">Conversion Rate</span>
                <span className="text-sm font-bold text-slate-900">
                  {analytics?.overview?.conversionRate || 0}%
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
