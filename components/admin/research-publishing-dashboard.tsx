
'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { FileText, Upload, Eye, TrendingUp, Clock, CheckCircle } from 'lucide-react';

interface ResearchPublishingDashboardProps {
  qualifiedTopics: any[];
  researchRecords: any[];
}

export function ResearchPublishingDashboard({ 
  qualifiedTopics, 
  researchRecords 
}: ResearchPublishingDashboardProps) {
  const stats = {
    qualifiedTopics: qualifiedTopics.length,
    draftResearch: researchRecords.filter(r => r.status === 'DRAFT').length,
    inReview: researchRecords.filter(r => r.status === 'IN_REVIEW').length,
    published: researchRecords.filter(r => r.isPublished).length,
    totalOpportunities: researchRecords.reduce((sum, r) => sum + (r.opportunities?.length || 0), 0),
    processingDocuments: researchRecords.filter(r => 
      r.aiProcessingStatus === 'PROCESSING' || r.aiProcessingStatus === 'PENDING'
    ).length
  };

  const recentActivity = [
    ...researchRecords
      .filter(r => r.isPublished)
      .slice(0, 3)
      .map(r => ({
        type: 'published',
        title: `Published: ${r.title}`,
        time: r.releaseDate,
        icon: CheckCircle,
        color: 'text-green-600'
      })),
    ...researchRecords
      .filter(r => r.aiProcessingStatus === 'COMPLETED')
      .slice(0, 2)
      .map(r => ({
        type: 'processed',
        title: `AI Processing Complete: ${r.title}`,
        time: r.updatedAt,
        icon: FileText,
        color: 'text-blue-600'
      }))
  ].sort((a, b) => new Date(b.time).getTime() - new Date(a.time).getTime()).slice(0, 5);

  return (
    <div className="space-y-6">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Qualified Topics</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.qualifiedTopics}</div>
            <p className="text-xs text-muted-foreground">
              Ready for research conversion
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Research in Progress</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.draftResearch + stats.inReview}</div>
            <p className="text-xs text-muted-foreground">
              {stats.draftResearch} draft, {stats.inReview} in review
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Published Research</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.published}</div>
            <p className="text-xs text-muted-foreground">
              {stats.totalOpportunities} total opportunities
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">AI Processing</CardTitle>
            <Upload className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.processingDocuments}</div>
            <p className="text-xs text-muted-foreground">
              Documents being processed
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Opportunities</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalOpportunities}</div>
            <p className="text-xs text-muted-foreground">
              Generated from research
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Publishing Pipeline */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Publishing Pipeline</CardTitle>
            <CardDescription>
              Research workflow status overview
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>Qualified Topics</span>
                <span className="font-medium">{stats.qualifiedTopics}</span>
              </div>
              <Progress value={stats.qualifiedTopics > 0 ? 100 : 0} className="h-2" />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>Draft Research</span>
                <span className="font-medium">{stats.draftResearch}</span>
              </div>
              <Progress value={stats.draftResearch > 0 ? 75 : 0} className="h-2" />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>In Review</span>
                <span className="font-medium">{stats.inReview}</span>
              </div>
              <Progress value={stats.inReview > 0 ? 90 : 0} className="h-2" />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>Published</span>
                <span className="font-medium">{stats.published}</span>
              </div>
              <Progress value={stats.published > 0 ? 100 : 0} className="h-2 bg-green-100" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>
              Latest research publishing activities
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.length === 0 ? (
                <p className="text-center text-muted-foreground py-4">
                  No recent activity
                </p>
              ) : (
                recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <activity.icon className={`h-4 w-4 mt-0.5 ${activity.color}`} />
                    <div className="space-y-1 flex-1">
                      <p className="text-sm font-medium">{activity.title}</p>
                      <p className="text-xs text-muted-foreground">
                        {new Date(activity.time).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Next Steps</CardTitle>
          <CardDescription>
            Recommended actions for research publishing workflow
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {stats.qualifiedTopics > 0 && (
              <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                <FileText className="h-5 w-5 text-blue-600" />
                <div>
                  <p className="font-medium text-blue-900">
                    Convert {stats.qualifiedTopics} qualified topics to research
                  </p>
                  <p className="text-sm text-blue-700">
                    Topics are ready for research conversion
                  </p>
                </div>
              </div>
            )}

            {stats.draftResearch > 0 && (
              <div className="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg">
                <Upload className="h-5 w-5 text-yellow-600" />
                <div>
                  <p className="font-medium text-yellow-900">
                    Upload documents for {stats.draftResearch} draft research
                  </p>
                  <p className="text-sm text-yellow-700">
                    Research records need document upload and AI processing
                  </p>
                </div>
              </div>
            )}

            {stats.processingDocuments > 0 && (
              <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                <Clock className="h-5 w-5 text-purple-600" />
                <div>
                  <p className="font-medium text-purple-900">
                    {stats.processingDocuments} documents being processed
                  </p>
                  <p className="text-sm text-purple-700">
                    AI is extracting content and generating opportunities
                  </p>
                </div>
              </div>
            )}

            {stats.inReview > 0 && (
              <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                <Eye className="h-5 w-5 text-green-600" />
                <div>
                  <p className="font-medium text-green-900">
                    Review and publish {stats.inReview} research records
                  </p>
                  <p className="text-sm text-green-700">
                    Research is ready for final review and publishing
                  </p>
                </div>
              </div>
            )}

            {stats.qualifiedTopics === 0 && stats.draftResearch === 0 && stats.inReview === 0 && (
              <div className="text-center py-6 text-muted-foreground">
                <CheckCircle className="h-8 w-8 mx-auto mb-2" />
                <p>All research publishing tasks are up to date!</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
