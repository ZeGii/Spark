
'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Upload, FileText, Eye, Edit, Send, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { ResearchPublishingDashboard } from '@/components/admin/research-publishing-dashboard';

interface QualifiedTopic {
  id: string;
  title: string;
  description: string;
  industry: string;
  country: string;
  voteCount: number;
  voteThreshold: number;
  approvalDate: string;
  deadline: string;
  status: string;
}

interface ResearchRecord {
  id: string;
  title: string;
  brief: string;
  executiveSummary: string;
  methodology: string;
  keyFindings: string[];
  marketSize?: string;
  growthRate?: string;
  competitorCount?: number;
  status: string;
  isPublished: boolean;
  aiProcessingStatus: string;
  releaseDate: string;
  createdAt: string;
  topic: {
    title: string;
    industry: string;
    country: string;
  };
  opportunities: Array<{
    id: string;
    title: string;
    severity: number;
    urgency: number;
  }>;
  researchDocuments: Array<{
    id: string;
    originalName: string;
    aiProcessingStatus: string;
    uploadedAt: string;
  }>;
}

export default function AdminResearchPage() {
  const [qualifiedTopics, setQualifiedTopics] = useState<QualifiedTopic[]>([]);
  const [researchRecords, setResearchRecords] = useState<ResearchRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedTopic, setSelectedTopic] = useState<QualifiedTopic | null>(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      
      // Fetch qualified topics
      const topicsResponse = await fetch('/api/admin/topics?status=QUALIFIED');
      const topicsData = await topicsResponse.json();
      
      // Fetch research records
      const researchResponse = await fetch('/api/admin/research');
      const researchData = await researchResponse.json();
      
      setQualifiedTopics(topicsData.topics || []);
      setResearchRecords(researchData.research || []);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleConvertToResearch = async (topicId: string) => {
    try {
      const response = await fetch('/api/admin/research/convert', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topicId })
      });

      if (response.ok) {
        fetchData(); // Refresh data
      }
    } catch (error) {
      console.error('Error converting topic:', error);
    }
  };

  const handlePublishResearch = async (researchId: string, isPublished: boolean) => {
    try {
      const response = await fetch(`/api/admin/research/${researchId}/publish`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ isPublished })
      });

      if (response.ok) {
        fetchData(); // Refresh data
      }
    } catch (error) {
      console.error('Error publishing research:', error);
    }
  };

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      DRAFT: { color: 'bg-gray-500', label: 'Draft' },
      IN_REVIEW: { color: 'bg-yellow-500', label: 'In Review' },
      PUBLISHED: { color: 'bg-green-500', label: 'Published' },
      ARCHIVED: { color: 'bg-gray-400', label: 'Archived' }
    };

    const config = statusConfig[status as keyof typeof statusConfig] || statusConfig.DRAFT;
    return <Badge className={config.color}>{config.label}</Badge>;
  };

  const getProcessingStatusIcon = (status: string) => {
    switch (status) {
      case 'PENDING':
        return <Clock className="h-4 w-4 text-yellow-500" />;
      case 'PROCESSING':
        return <div className="h-4 w-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />;
      case 'COMPLETED':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'FAILED':
        return <AlertCircle className="h-4 w-4 text-red-500" />;
      default:
        return <Clock className="h-4 w-4 text-gray-400" />;
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Research Publishing</h1>
          <p className="text-card-foreground">
            Convert qualified topics to research and manage the publishing workflow
          </p>
        </div>
      </div>

      <Tabs defaultValue="dashboard" className="space-y-6">
        <TabsList>
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          <TabsTrigger value="qualified">Qualified Topics</TabsTrigger>
          <TabsTrigger value="research">Research Records</TabsTrigger>
          <TabsTrigger value="published">Published Research</TabsTrigger>
        </TabsList>

        <TabsContent value="dashboard">
          <ResearchPublishingDashboard 
            qualifiedTopics={qualifiedTopics}
            researchRecords={researchRecords}
          />
        </TabsContent>

        <TabsContent value="qualified">
          <Card className="bg-card">
            <CardHeader>
              <CardTitle className="text-card-foreground">Qualified Topics Ready for Research</CardTitle>
              <CardDescription className="text-card-foreground">
                Topics that have reached their vote threshold and are ready to be converted to research
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {qualifiedTopics.length === 0 ? (
                  <p className="text-center text-card-foreground py-8">
                    No qualified topics available for research conversion
                  </p>
                ) : (
                  qualifiedTopics.map((topic) => (
                    <div key={topic.id} className="border rounded-lg p-4 space-y-3">
                      <div className="flex items-start justify-between">
                        <div className="space-y-2">
                          <h3 className="font-semibold text-card-foreground">{topic.title}</h3>
                          <p className="text-sm text-card-foreground">{topic.description}</p>
                          <div className="flex items-center gap-4 text-sm">
                            <Badge variant="outline">{topic.industry}</Badge>
                            <Badge variant="outline">{topic.country}</Badge>
                            <span className="text-card-foreground">
                              {topic.voteCount}/{topic.voteThreshold} votes
                            </span>
                          </div>
                        </div>
                        <Button 
                          onClick={() => handleConvertToResearch(topic.id)}
                          className="shrink-0"
                        >
                          <FileText className="h-4 w-4 mr-2" />
                          Convert to Research
                        </Button>
                      </div>
                      <Progress 
                        value={(topic.voteCount / topic.voteThreshold) * 100} 
                        className="h-2"
                      />
                    </div>
                  ))
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="research">
          <Card className="bg-card">
            <CardHeader>
              <CardTitle className="text-card-foreground">Research Records</CardTitle>
              <CardDescription className="text-card-foreground">
                Click on any research record to open the dedicated admin research editor
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {researchRecords.filter(r => !r.isPublished).length === 0 ? (
                  <p className="text-center text-card-foreground py-8">
                    No research records in progress
                  </p>
                ) : (
                  researchRecords
                    .filter(r => !r.isPublished)
                    .map((research) => (
                      <div 
                        key={research.id} 
                        className="border rounded-lg p-6 space-y-4 cursor-pointer transition-all duration-300 hover:border-[#00FF88]/50 hover:bg-[#00FF88]/5 hover:shadow-lg hover:shadow-[#00FF88]/10 hover:scale-[1.02] group"
                        onClick={() => window.location.href = `/admin/research/${research.id}/edit`}
                      >
                        <div className="flex items-start justify-between">
                          <div className="space-y-3 flex-1">
                            <div className="flex items-center gap-3">
                              <h3 className="font-semibold text-card-foreground text-lg group-hover:text-[#00FF88] transition-colors duration-300">
                                {research.title}
                              </h3>
                              {getStatusBadge(research.status)}
                            </div>
                            <p className="text-sm text-card-foreground leading-relaxed pr-4">
                              {research.brief}
                            </p>
                            <div className="flex items-center gap-4 text-sm">
                              <Badge variant="outline" className="group-hover:border-[#00FF88]/30 transition-colors duration-300">
                                {research.topic.industry}
                              </Badge>
                              <Badge variant="outline" className="group-hover:border-[#FCD34D]/30 transition-colors duration-300">
                                {research.topic.country}
                              </Badge>
                              <span className="text-card-foreground group-hover:text-[#00FF88] transition-colors duration-300">
                                {research.opportunities.length} opportunities
                              </span>
                              <span className="text-card-foreground group-hover:text-[#FCD34D] transition-colors duration-300">
                                {research.researchDocuments.length} documents
                              </span>
                            </div>
                            {research.researchDocuments.length > 0 && (
                              <div className="flex items-center gap-2 text-sm">
                                {getProcessingStatusIcon(research.aiProcessingStatus)}
                                <span className="text-card-foreground group-hover:text-white transition-colors duration-300">
                                  AI Processing: {research.aiProcessingStatus.toLowerCase()}
                                </span>
                              </div>
                            )}
                          </div>
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-[#00FF88]/10 border border-[#00FF88]/30 rounded-full flex items-center justify-center group-hover:bg-[#00FF88]/20 group-hover:scale-110 transition-all duration-300">
                              <Edit className="h-5 w-5 text-[#00FF88]" />
                            </div>
                            <div className="text-right space-y-1">
                              <div className="text-xs text-muted-foreground">Click to Edit</div>
                              <div className="text-xs text-[#00FF88] font-medium group-hover:text-[#00E87A] transition-colors duration-300">
                                Admin Mode
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Quick Actions Row */}
                        <div className="flex items-center justify-between pt-3 border-t border-muted/20">
                          <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                            <span>Created: {new Date(research.createdAt).toLocaleDateString()}</span>
                            <span>•</span>
                            <span className="group-hover:text-[#00FF88] transition-colors duration-300">
                              Ready for editing
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Button
                              size="sm"
                              onClick={(e) => {
                                e.stopPropagation();
                                handlePublishResearch(research.id, true);
                              }}
                              disabled={research.aiProcessingStatus !== 'COMPLETED'}
                              className="bg-[#00FF88] hover:bg-[#00E87A] text-black text-xs px-3 py-1 opacity-0 group-hover:opacity-100 transition-all duration-300"
                            >
                              <Send className="h-3 w-3 mr-1" />
                              Quick Publish
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="published">
          <Card className="bg-card">
            <CardHeader>
              <CardTitle className="text-card-foreground">Published Research</CardTitle>
              <CardDescription className="text-card-foreground">
                Click on any published research to view or edit in admin mode
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {researchRecords.filter(r => r.isPublished).length === 0 ? (
                  <p className="text-center text-card-foreground py-8">
                    No published research yet
                  </p>
                ) : (
                  researchRecords
                    .filter(r => r.isPublished)
                    .map((research) => (
                      <div 
                        key={research.id} 
                        className="border rounded-lg p-6 space-y-4 cursor-pointer transition-all duration-300 hover:border-[#00FF88]/50 hover:bg-[#00FF88]/5 hover:shadow-lg hover:shadow-[#00FF88]/10 hover:scale-[1.02] group"
                        onClick={() => window.location.href = `/admin/research/${research.id}/edit`}
                      >
                        <div className="flex items-start justify-between">
                          <div className="space-y-3 flex-1">
                            <div className="flex items-center gap-3">
                              <h3 className="font-semibold text-card-foreground text-lg group-hover:text-[#00FF88] transition-colors duration-300">
                                {research.title}
                              </h3>
                              <Badge className="bg-[#00FF88] text-black">Published</Badge>
                            </div>
                            <p className="text-sm text-card-foreground leading-relaxed pr-4">
                              {research.brief}
                            </p>
                            <div className="flex items-center gap-4 text-sm">
                              <Badge variant="outline" className="group-hover:border-[#00FF88]/30 transition-colors duration-300">
                                {research.topic.industry}
                              </Badge>
                              <Badge variant="outline" className="group-hover:border-[#FCD34D]/30 transition-colors duration-300">
                                {research.topic.country}
                              </Badge>
                              <span className="text-card-foreground group-hover:text-[#00FF88] transition-colors duration-300">
                                {research.opportunities.length} opportunities
                              </span>
                              <span className="text-card-foreground group-hover:text-[#FCD34D] transition-colors duration-300">
                                Published: {new Date(research.releaseDate).toLocaleDateString()}
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-[#00FF88]/10 border border-[#00FF88]/30 rounded-full flex items-center justify-center group-hover:bg-[#00FF88]/20 group-hover:scale-110 transition-all duration-300">
                              <Eye className="h-5 w-5 text-[#00FF88]" />
                            </div>
                            <div className="text-right space-y-1">
                              <div className="text-xs text-muted-foreground">Click to View</div>
                              <div className="text-xs text-[#00FF88] font-medium group-hover:text-[#00E87A] transition-colors duration-300">
                                Admin Mode
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Quick Actions Row */}
                        <div className="flex items-center justify-between pt-3 border-t border-muted/20">
                          <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                            <span>Published: {new Date(research.releaseDate).toLocaleDateString()}</span>
                            <span>•</span>
                            <span className="text-[#00FF88] font-medium">Live</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={(e) => {
                                e.stopPropagation();
                                window.open(`/research/${research.id}`, '_blank');
                              }}
                              className="border-[#00FF88]/30 text-[#00FF88] hover:bg-[#00FF88] hover:text-black text-xs px-3 py-1 opacity-0 group-hover:opacity-100 transition-all duration-300"
                            >
                              <Eye className="h-3 w-3 mr-1" />
                              View Public
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={(e) => {
                                e.stopPropagation();
                                handlePublishResearch(research.id, false);
                              }}
                              className="border-red-500/30 text-red-400 hover:bg-red-500 hover:text-white text-xs px-3 py-1 opacity-0 group-hover:opacity-100 transition-all duration-300"
                            >
                              Unpublish
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>


    </div>
  );
}
