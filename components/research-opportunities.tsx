
'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, MapPin, TrendingUp, Calendar, Users, AlertTriangle, Clock, Target } from 'lucide-react';
import Link from 'next/link';

interface Opportunity {
  id: string;
  title: string;
  problemStatement: string;
  targetAudience: string;
  geographicFocus: {
    primary: string[];
    secondary: string[];
    tertiary: string[];
  };
  marketSize: string;
  growthRate?: string;
  severity: number;
  urgency: number;
  sparkCount: number;
  releaseDate: string;
}

interface ResearchOpportunitiesProps {
  researchId: string;
}

export function ResearchOpportunities({ researchId }: ResearchOpportunitiesProps) {
  const [opportunities, setOpportunities] = useState<Opportunity[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOpportunities();
  }, [researchId]);

  const fetchOpportunities = async () => {
    try {
      const response = await fetch(`/api/research/${researchId}/opportunities`);
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

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="space-y-4">
        {Array.from({ length: 3 }).map((_, index) => (
          <Card key={index} className="animate-pulse bg-card">
            <CardHeader>
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              <div className="h-3 bg-gray-200 rounded w-1/2"></div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="h-3 bg-gray-200 rounded"></div>
                <div className="h-3 bg-gray-200 rounded w-5/6"></div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  if (opportunities.length === 0) {
    return (
      <Card className="text-center py-12 bg-card">
        <CardContent>
          <Target className="h-12 w-12 mx-auto mb-4 text-card-foreground" />
          <h3 className="text-lg font-semibold mb-2 text-card-foreground">No Opportunities Available</h3>
          <p className="text-card-foreground">
            Opportunities will appear here once the research document is processed.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-foreground">
          {opportunities.length} Market Opportunities Identified
        </h3>
        <Link href="/opportunities">
          <Button variant="outline" size="sm">
            View All Opportunities
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {opportunities.map((opportunity) => (
          <Link key={opportunity.id} href={`/opportunities/${opportunity.id}`}>
            <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group bg-card">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-card-foreground" />
                    <span className="text-sm text-card-foreground">
                      {formatDate(opportunity.releaseDate)}
                    </span>
                  </div>
                  <Badge className={getSeverityColor(opportunity.severity)}>
                    {getSeverityLabel(opportunity.severity)}
                  </Badge>
                </div>
                
                <CardTitle className="text-lg line-clamp-2 group-hover:text-blue-600 transition-colors text-card-foreground">
                  {opportunity.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-sm text-card-foreground line-clamp-3">
                  {opportunity.problemStatement}
                </p>

                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <Users className="h-4 w-4 text-card-foreground mt-0.5 shrink-0" />
                    <p className="text-sm line-clamp-2 text-card-foreground">{opportunity.targetAudience}</p>
                  </div>

                  <div className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-card-foreground mt-0.5 shrink-0" />
                    <div className="flex flex-wrap gap-1">
                      {opportunity.geographicFocus.primary.slice(0, 3).map((country, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {country}
                        </Badge>
                      ))}
                      {opportunity.geographicFocus.primary.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{opportunity.geographicFocus.primary.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-medium flex items-center gap-1 text-card-foreground">
                      <TrendingUp className="h-3 w-3" />
                      Market Size
                    </p>
                    <p className="text-card-foreground">{opportunity.marketSize}</p>
                  </div>
                  {opportunity.growthRate && (
                    <div>
                      <p className="font-medium text-card-foreground">Growth Rate</p>
                      <p className="text-card-foreground">{opportunity.growthRate}</p>
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between text-sm pt-2 border-t">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1 text-card-foreground">
                      <AlertTriangle className="h-3 w-3 text-orange-500" />
                      <span>Severity: {opportunity.severity}/10</span>
                    </div>
                    <div className="flex items-center gap-1 text-card-foreground">
                      <Clock className="h-3 w-3 text-blue-500" />
                      <span>Urgency: {opportunity.urgency}/10</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-1 text-card-foreground">
                    <Heart className="h-4 w-4" />
                    <span>{opportunity.sparkCount}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
