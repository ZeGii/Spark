
'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Upload, FileText, Eye, Edit, Send, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { ResearchPublishingDashboard } from '@/components/admin/research-publishing-dashboard';
import { DocumentUploadModal } from '@/components/admin/document-upload-modal';
import { ResearchEditModal } from '@/components/admin/research-edit-modal';
import { OpportunityPreviewModal } from '@/components/admin/opportunity-preview-modal';

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
  const [selectedResearch, setSelectedResearch] = useState<ResearchRecord | null>(null);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showOpportunityModal, setShowOpportunityModal] = useState(false);

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
                Manage research documents, AI processing, and content editing
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
                      <div key={research.id} className="border rounded-lg p-4 space-y-3">
                        <div className="flex items-start justify-between">
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <h3 className="font-semibold text-card-foreground">{research.title}</h3>
                              {getStatusBadge(research.status)}
                            </div>
                            <p className="text-sm text-card-foreground">{research.brief}</p>
                            <div className="flex items-center gap-4 text-sm">
                              <Badge variant="outline">{research.topic.industry}</Badge>
                              <Badge variant="outline">{research.topic.country}</Badge>
                              <span className="text-card-foreground">
                                {research.opportunities.length} opportunities
                              </span>
                            </div>
                            {research.researchDocuments.length > 0 && (
                              <div className="flex items-center gap-2 text-sm">
                                {getProcessingStatusIcon(research.aiProcessingStatus)}
                                <span className="text-card-foreground">
                                  AI Processing: {research.aiProcessingStatus.toLowerCase()}
                                </span>
                              </div>
                            )}
                          </div>
                          <div className="flex items-center gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => {
                                setSelectedResearch(research);
                                setShowUploadModal(true);
                              }}
                            >
                              <Upload className="h-4 w-4 mr-2" />
                              Upload Document
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => {
                                setSelectedResearch(research);
                                setShowEditModal(true);
                              }}
                            >
                              <Edit className="h-4 w-4 mr-2" />
                              Edit
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => {
                                setSelectedResearch(research);
                                setShowOpportunityModal(true);
                              }}
                            >
                              <Eye className="h-4 w-4 mr-2" />
                              Preview
                            </Button>
                            <Button
                              size="sm"
                              onClick={() => handlePublishResearch(research.id, true)}
                              disabled={research.aiProcessingStatus !== 'COMPLETED'}
                            >
                              <Send className="h-4 w-4 mr-2" />
                              Publish
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
                Manage published research and opportunities
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
                      <div key={research.id} className="border rounded-lg p-4 space-y-3">
                        <div className="flex items-start justify-between">
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <h3 className="font-semibold text-card-foreground">{research.title}</h3>
                              <Badge className="bg-green-500">Published</Badge>
                            </div>
                            <p className="text-sm text-card-foreground">{research.brief}</p>
                            <div className="flex items-center gap-4 text-sm">
                              <Badge variant="outline">{research.topic.industry}</Badge>
                              <Badge variant="outline">{research.topic.country}</Badge>
                              <span className="text-card-foreground">
                                {research.opportunities.length} opportunities
                              </span>
                              <span className="text-card-foreground">
                                Published: {new Date(research.releaseDate).toLocaleDateString()}
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => {
                                setSelectedResearch(research);
                                setShowOpportunityModal(true);
                              }}
                            >
                              <Eye className="h-4 w-4 mr-2" />
                              View
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handlePublishResearch(research.id, false)}
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

      {/* Modals */}
      {showUploadModal && selectedResearch && (
        <DocumentUploadModal
          research={selectedResearch}
          onClose={() => {
            setShowUploadModal(false);
            setSelectedResearch(null);
            fetchData();
          }}
        />
      )}

      {showEditModal && selectedResearch && (
        <ResearchEditModal
          research={selectedResearch}
          onClose={() => {
            setShowEditModal(false);
            setSelectedResearch(null);
            fetchData();
          }}
        />
      )}

      {showOpportunityModal && selectedResearch && (
        <OpportunityPreviewModal
          research={selectedResearch}
          onClose={() => {
            setShowOpportunityModal(false);
            setSelectedResearch(null);
          }}
        />
      )}
    </div>
  );
}
