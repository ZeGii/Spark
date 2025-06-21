
'use client';

import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Eye, Edit, TrendingUp, Users, MapPin, AlertTriangle, Clock } from 'lucide-react';

interface OpportunityPreviewModalProps {
  research: {
    id: string;
    title: string;
    opportunities: Array<{
      id: string;
      title: string;
      severity: number;
      urgency: number;
    }>;
  };
  onClose: () => void;
}

interface OpportunityDetail {
  id: string;
  title: string;
  problemStatement: string;
  targetAudience: string;
  marketEvidence: string;
  geographicFocus: {
    primary: string[];
    secondary: string[];
    tertiary: string[];
  };
  marketSize: string;
  growthRate?: string;
  severity: number;
  urgency: number;
  opportunityStatement: string;
  creativityNote?: string;
  sparkCount: number;
}

export function OpportunityPreviewModal({ research, onClose }: OpportunityPreviewModalProps) {
  const [opportunities, setOpportunities] = useState<OpportunityDetail[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedOpportunity, setSelectedOpportunity] = useState<OpportunityDetail | null>(null);

  useEffect(() => {
    fetchOpportunities();
  }, [research.id]);

  const fetchOpportunities = async () => {
    try {
      const response = await fetch(`/api/research/${research.id}/opportunities`);
      if (response.ok) {
        const data = await response.json();
        setOpportunities(data.opportunities);
      }
    } catch (error) {
      console.error('Error fetching opportunities:', error);
    } finally {
      setLoading(false);
    }
  };

  const getSeverityColor = (severity: number) => {
    if (severity >= 8) return 'bg-red-500';
    if (severity >= 6) return 'bg-orange-500';
    if (severity >= 4) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  const getSeverityLabel = (severity: number) => {
    if (severity >= 8) return 'Critical';
    if (severity >= 6) return 'High';
    if (severity >= 4) return 'Medium';
    return 'Low';
  };

  if (loading) {
    return (
      <Dialog open onOpenChange={onClose}>
        <DialogContent className="max-w-6xl max-h-[90vh]">
          <div className="flex items-center justify-center h-64">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Opportunity Preview</DialogTitle>
          <DialogDescription>
            Review opportunities generated from "{research.title}"
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {selectedOpportunity ? (
            // Detailed view
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <Button variant="outline" onClick={() => setSelectedOpportunity(null)}>
                  ← Back to List
                </Button>
                <div className="flex items-center gap-2">
                  <Badge className={getSeverityColor(selectedOpportunity.severity)}>
                    {getSeverityLabel(selectedOpportunity.severity)} Priority
                  </Badge>
                  <Badge variant="outline">
                    Urgency: {selectedOpportunity.urgency}/10
                  </Badge>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-2">{selectedOpportunity.title}</h3>
                <p className="text-muted-foreground">{selectedOpportunity.problemStatement}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="h-5 w-5" />
                      Target Audience
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">{selectedOpportunity.targetAudience}</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="h-5 w-5" />
                      Market Size
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg font-semibold">{selectedOpportunity.marketSize}</p>
                    {selectedOpportunity.growthRate && (
                      <p className="text-sm text-muted-foreground">
                        Growth: {selectedOpportunity.growthRate}
                      </p>
                    )}
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    Geographic Focus
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {selectedOpportunity.geographicFocus.primary.length > 0 && (
                    <div>
                      <p className="font-medium text-sm mb-1">Primary Markets:</p>
                      <div className="flex flex-wrap gap-1">
                        {selectedOpportunity.geographicFocus.primary.map((country, index) => (
                          <Badge key={index} variant="default">{country}</Badge>
                        ))}
                      </div>
                    </div>
                  )}
                  {selectedOpportunity.geographicFocus.secondary.length > 0 && (
                    <div>
                      <p className="font-medium text-sm mb-1">Secondary Markets:</p>
                      <div className="flex flex-wrap gap-1">
                        {selectedOpportunity.geographicFocus.secondary.map((country, index) => (
                          <Badge key={index} variant="outline">{country}</Badge>
                        ))}
                      </div>
                    </div>
                  )}
                  {selectedOpportunity.geographicFocus.tertiary.length > 0 && (
                    <div>
                      <p className="font-medium text-sm mb-1">Tertiary Markets:</p>
                      <div className="flex flex-wrap gap-1">
                        {selectedOpportunity.geographicFocus.tertiary.map((country, index) => (
                          <Badge key={index} variant="secondary">{country}</Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Market Evidence</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">{selectedOpportunity.marketEvidence}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Opportunity Statement</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">{selectedOpportunity.opportunityStatement}</p>
                </CardContent>
              </Card>

              {selectedOpportunity.creativityNote && (
                <Card>
                  <CardHeader>
                    <CardTitle>Creative Note</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm italic">{selectedOpportunity.creativityNote}</p>
                  </CardContent>
                </Card>
              )}
            </div>
          ) : (
            // List view
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">
                  {opportunities.length} Opportunities Generated
                </h3>
                <Badge variant="outline">
                  Total Sparks: {opportunities.reduce((sum, opp) => sum + opp.sparkCount, 0)}
                </Badge>
              </div>

              {opportunities.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  <TrendingUp className="h-8 w-8 mx-auto mb-2 opacity-50" />
                  <p>No opportunities generated yet</p>
                  <p className="text-sm">Upload and process a document to generate opportunities</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {opportunities.map((opportunity) => (
                    <Card 
                      key={opportunity.id} 
                      className="cursor-pointer hover:shadow-md transition-shadow"
                      onClick={() => setSelectedOpportunity(opportunity)}
                    >
                      <CardHeader className="pb-3">
                        <div className="flex items-start justify-between">
                          <CardTitle className="text-base line-clamp-2">
                            {opportunity.title}
                          </CardTitle>
                          <Badge className={getSeverityColor(opportunity.severity)}>
                            {getSeverityLabel(opportunity.severity)}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {opportunity.problemStatement}
                        </p>
                        
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                              <AlertTriangle className="h-3 w-3" />
                              <span>Severity: {opportunity.severity}/10</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              <span>Urgency: {opportunity.urgency}/10</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-1">
                            <TrendingUp className="h-3 w-3" />
                            <span>{opportunity.sparkCount} sparks</span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium">{opportunity.marketSize}</p>
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4 mr-1" />
                            View Details
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
