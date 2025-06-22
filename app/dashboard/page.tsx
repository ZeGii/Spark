
'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { StatusBadge } from '@/components/ui/status-badge';
import { CountdownTimer } from '@/components/ui/countdown-timer';
import { VoteProgress } from '@/components/ui/vote-progress';
import { toast } from 'sonner';
import { 
  User, 
  TrendingUp, 
  Clock, 
  CheckCircle, 
  XCircle, 
  FileText,
  Bell,
  Plus,
  BarChart3
} from 'lucide-react';

interface DashboardStats {
  totalTopics: number;
  pendingTopics: number;
  approvedTopics: number;
  qualifiedTopics: number;
  convertedTopics: number;
  rejectedTopics: number;
  completedTopics: number;
}

interface Topic {
  id: string;
  title: string;
  description: string;
  industry: string;
  country: string;
  status: string;
  voteCount: number;
  voteThreshold: number | null;
  approvalDate: string | null;
  deadline: string | null;
  rejectionReason: string | null;
  createdAt: string;
  approvedBy?: {
    id: string;
    name: string;
    username: string;
  } | null;
  _count: {
    votes: number;
  };
}

interface Notification {
  id: string;
  title: string;
  message: string;
  read: boolean;
  createdAt: string;
  topicId?: string;
}

interface DashboardData {
  stats: DashboardStats;
  recentTopics: Topic[];
  unreadNotifications: Notification[];
}

export default function UserDashboard() {
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(null);
  const [topics, setTopics] = useState<Topic[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    fetchDashboardData();
  }, []);

  useEffect(() => {
    if (activeTab !== 'overview') {
      fetchTopics(activeTab);
    }
  }, [activeTab]);

  const fetchDashboardData = async () => {
    try {
      const response = await fetch('/api/user/dashboard');
      if (!response.ok) {
        throw new Error('Failed to fetch dashboard data');
      }
      
      const data = await response.json();
      setDashboardData(data);
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
      toast.error('Failed to load dashboard data');
    } finally {
      setLoading(false);
    }
  };

  const fetchTopics = async (status?: string) => {
    try {
      const url = status && status !== 'overview' 
        ? `/api/user/topics?status=${status.toUpperCase()}`
        : '/api/user/topics';
      
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch topics');
      }
      
      const data = await response.json();
      setTopics(data.topics);
    } catch (error) {
      console.error('Error fetching topics:', error);
      toast.error('Failed to load topics');
    }
  };

  const markNotificationAsRead = async (notificationId: string) => {
    try {
      const response = await fetch(`/api/notifications/${notificationId}/read`, {
        method: 'POST'
      });
      
      if (response.ok) {
        fetchDashboardData(); // Refresh to update unread count
      }
    } catch (error) {
      console.error('Error marking notification as read:', error);
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto py-8">
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
            <p>Loading your dashboard...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!dashboardData) {
    return (
      <div className="container mx-auto py-8">
        <div className="text-center">
          <p>Failed to load dashboard data</p>
          <Button onClick={fetchDashboardData} className="mt-4">
            Try Again
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8 space-y-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <User className="h-8 w-8 text-primary" />
          <div>
            <h1 className="text-3xl font-bold">My Dashboard</h1>
            <p className="text-muted-foreground">Track your research topic proposals</p>
          </div>
        </div>
        <Button onClick={() => window.location.href = '/trending'}>
          <Plus className="h-4 w-4 mr-2" />
          Propose New Topic
        </Button>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-7">
          <TabsTrigger value="overview">
            <BarChart3 className="h-4 w-4 mr-2" />
            Overview
          </TabsTrigger>
          <TabsTrigger value="pending">
            <Clock className="h-4 w-4 mr-2" />
            Pending ({dashboardData.stats.pendingTopics})
          </TabsTrigger>
          <TabsTrigger value="approved">
            <TrendingUp className="h-4 w-4 mr-2" />
            Approved ({dashboardData.stats.approvedTopics})
          </TabsTrigger>
          <TabsTrigger value="qualified">
            <CheckCircle className="h-4 w-4 mr-2" />
            Qualified ({dashboardData.stats.qualifiedTopics})
          </TabsTrigger>
          <TabsTrigger value="converted">
            <FileText className="h-4 w-4 mr-2" />
            In Research ({dashboardData.stats.convertedTopics})
          </TabsTrigger>
          <TabsTrigger value="completed">
            <CheckCircle className="h-4 w-4 mr-2" />
            Completed ({dashboardData.stats.completedTopics})
          </TabsTrigger>
          <TabsTrigger value="rejected">
            <XCircle className="h-4 w-4 mr-2" />
            Rejected ({dashboardData.stats.rejectedTopics})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatsCard
              title="Total Topics"
              value={dashboardData.stats.totalTopics}
              icon={<FileText className="h-4 w-4" />}
              color="blue"
            />
            <StatsCard
              title="Pending Review"
              value={dashboardData.stats.pendingTopics}
              icon={<Clock className="h-4 w-4" />}
              color="yellow"
            />
            <StatsCard
              title="Open for Voting"
              value={dashboardData.stats.approvedTopics}
              icon={<TrendingUp className="h-4 w-4" />}
              color="blue"
            />
            <StatsCard
              title="In Research"
              value={dashboardData.stats.convertedTopics}
              icon={<CheckCircle className="h-4 w-4" />}
              color="green"
            />
          </div>

          {/* Recent Topics */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Topics</CardTitle>
              <CardDescription>Your latest topic proposals</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {dashboardData.recentTopics.length === 0 ? (
                <div className="text-center py-8">
                  <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">No topics proposed yet</p>
                  <Button className="mt-4" onClick={() => window.location.href = '/trending'}>
                    <Plus className="h-4 w-4 mr-2" />
                    Propose Your First Topic
                  </Button>
                </div>
              ) : (
                dashboardData.recentTopics.map((topic) => (
                  <TopicCard key={topic.id} topic={topic} />
                ))
              )}
            </CardContent>
          </Card>

          {/* Notifications */}
          {dashboardData.unreadNotifications.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="h-5 w-5" />
                  Recent Notifications
                  <Badge variant="secondary">
                    {dashboardData.unreadNotifications.length}
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {dashboardData.unreadNotifications.map((notification) => (
                  <div
                    key={notification.id}
                    className="flex items-start justify-between p-3 bg-blue-50 border border-blue-200 rounded-lg cursor-pointer hover:bg-blue-100 transition-colors"
                    onClick={() => markNotificationAsRead(notification.id)}
                  >
                    <div className="space-y-1">
                      <p className="font-medium text-sm">{notification.title}</p>
                      <p className="text-sm text-muted-foreground">{notification.message}</p>
                      <p className="text-xs text-muted-foreground">
                        {new Date(notification.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      New
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>
          )}
        </TabsContent>

        {/* Other tabs show filtered topics */}
        {['pending', 'approved', 'qualified', 'converted', 'completed', 'rejected'].map((status) => (
          <TabsContent key={status} value={status} className="space-y-4">
            <h2 className="text-xl font-semibold capitalize">{status} Topics</h2>
            {topics.length === 0 ? (
              <Card>
                <CardContent className="text-center py-8">
                  <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">No {status} topics found</p>
                </CardContent>
              </Card>
            ) : (
              topics.map((topic) => (
                <TopicCard key={topic.id} topic={topic} />
              ))
            )}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}

interface StatsCardProps {
  title: string;
  value: number;
  icon: React.ReactNode;
  color: 'blue' | 'yellow' | 'green' | 'red';
}

function StatsCard({ title, value, icon, color }: StatsCardProps) {
  const colorClasses = {
    blue: 'bg-blue-50 text-blue-600 border-blue-200',
    yellow: 'bg-yellow-50 text-yellow-600 border-yellow-200',
    green: 'bg-green-50 text-green-600 border-green-200',
    red: 'bg-red-50 text-red-600 border-red-200'
  };

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <p className="text-2xl font-bold">{value}</p>
          </div>
          <div className={`p-2 rounded-lg border ${colorClasses[color]}`}>
            {icon}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

interface TopicCardProps {
  topic: Topic;
}

function TopicCard({ topic }: TopicCardProps) {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <CardTitle className="text-lg">{topic.title}</CardTitle>
            <div className="flex items-center gap-2">
              <StatusBadge status={topic.status as any} />
              <Badge variant="outline">{topic.industry}</Badge>
              <Badge variant="outline">{topic.country}</Badge>
            </div>
          </div>
          <div className="text-right text-sm text-muted-foreground">
            <p>{new Date(topic.createdAt).toLocaleDateString()}</p>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className="text-muted-foreground">{topic.description}</p>
        
        {topic.status === 'APPROVED' && (
          <div className="space-y-2">
            <VoteProgress 
              voteCount={topic.voteCount} 
              voteThreshold={topic.voteThreshold} 
            />
            {topic.deadline && (
              <CountdownTimer deadline={new Date(topic.deadline)} />
            )}
          </div>
        )}
        
        {topic.status === 'QUALIFIED' && (
          <VoteProgress 
            voteCount={topic.voteCount} 
            voteThreshold={topic.voteThreshold} 
          />
        )}
        
        {topic.status === 'REJECTED' && topic.rejectionReason && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-3">
            <p className="text-sm text-red-800">
              <strong>Rejection Reason:</strong> {topic.rejectionReason}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
