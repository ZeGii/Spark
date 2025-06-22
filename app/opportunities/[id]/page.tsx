
'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Heart, ArrowLeft, MapPin, TrendingUp, Calendar, Users, AlertTriangle, Clock, FileText, ExternalLink, Target } from 'lucide-react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import Footer from '@/components/footer';

interface OpportunityDetail {
  id: string;
  title: string;
  problemStatement: string;
  targetAudience: string;
  marketEvidence: string;
  geographicFocus?: {
    primary?: string[];
    secondary?: string[];
    tertiary?: string[];
  };
  marketSize: string;
  growthRate?: string;
  severity: number;
  urgency: number;
  opportunityStatement: string;
  creativityNote?: string;
  sparkCount: number;
  releaseDate: string;
  research: {
    id: string;
    title: string;
    brief: string;
    releaseDate: string;
    topic: {
      industry: string;
      country: string;
    };
  };
}

export default function OpportunityDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [opportunity, setOpportunity] = useState<OpportunityDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [sparked, setSparked] = useState(false);
  const [sparkCount, setSparkCount] = useState(0);
  const [sparking, setSparking] = useState(false);

  useEffect(() => {
    if (params.id) {
      fetchOpportunity();
      checkSparkStatus();
    }
  }, [params.id]);

  const fetchOpportunity = async () => {
    try {
      const response = await fetch(`/api/opportunities/${params.id}`);
      if (response.ok) {
        const data = await response.json();
        setOpportunity(data);
        setSparkCount(data.sparkCount);
      } else if (response.status === 404) {
        router.push('/opportunities');
      }
    } catch (error) {
      console.error('Error fetching opportunity:', error);
    } finally {
      setLoading(false);
    }
  };

  const checkSparkStatus = async () => {
    try {
      const response = await fetch(`/api/opportunities/${params.id}/spark`);
      if (response.ok) {
        const data = await response.json();
        setSparked(data.sparked);
      }
    } catch (error) {
      console.error('Error checking spark status:', error);
    }
  };

  const handleSpark = async () => {
    if (sparking) return;
    
    setSparking(true);
    
    try {
      const response = await fetch(`/api/opportunities/${params.id}/spark`, {
        method: 'POST'
      });
      
      if (response.ok) {
        const data = await response.json();
        setSparked(data.sparked);
        setSparkCount(prev => data.sparked ? prev + 1 : prev - 1);
      }
    } catch (error) {
      console.error('Error sparking opportunity:', error);
    } finally {
      setSparking(false);
    }
  };

  const getSeverityColor = (severity: number) => {
    if (severity >= 8) return 'bg-red-500';
    if (severity >= 6) return 'bg-orange-500';
    if (severity >= 4) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  const getSeverityLabel = (severity: number) => {
    if (severity >= 8) return 'Critical Priority';
    if (severity >= 6) return 'High Priority';
    if (severity >= 4) return 'Medium Priority';
    return 'Low Priority';
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen">
        <div className="container-max section-padding">
          <div className="animate-pulse space-y-6">
            <div className="h-8 bg-muted rounded w-1/4"></div>
            <div className="h-12 bg-muted rounded w-3/4"></div>
            <div className="h-64 bg-muted rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!opportunity) {
    return (
      <div className="min-h-screen">
        <div className="container-max section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <Target className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
            <h1 className="text-2xl font-bold mb-4">Opportunity Not Found</h1>
            <p className="text-muted-foreground mb-6">The opportunity you're looking for doesn't exist or has been removed.</p>
            <Link href="/opportunities">
              <Button>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Opportunities
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="container-max section-padding">
        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link href="/opportunities">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Opportunities
            </Button>
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-3">
              <Badge className={getSeverityColor(opportunity.severity)}>
                {getSeverityLabel(opportunity.severity)}
              </Badge>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>Released {formatDate(opportunity.releaseDate)}</span>
              </div>
            </div>
            
            <Button
              onClick={handleSpark}
              disabled={sparking}
              variant={sparked ? "default" : "outline"}
              className={sparked ? "bg-red-500 hover:bg-red-600" : ""}
            >
              <Heart className={`h-4 w-4 mr-2 ${sparked ? 'fill-current' : ''}`} />
              {sparked ? 'Sparked' : 'Spark'} ({sparkCount})
            </Button>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-foreground">
            {opportunity.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-foreground">
            <Badge variant="outline">{opportunity.research.topic.industry}</Badge>
            <Badge variant="outline">{opportunity.research.topic.country}</Badge>
            <div className="flex items-center gap-1">
              <AlertTriangle className="h-4 w-4 text-orange-500" />
              <span className="text-foreground">Severity: {opportunity.severity}/10</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4 text-blue-500" />
              <span className="text-foreground">Urgency: {opportunity.urgency}/10</span>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Problem Statement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="hover:shadow-lg transition-shadow bg-card">
                <CardHeader>
                  <CardTitle className="text-card-foreground">Problem Statement</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-card-foreground leading-relaxed">
                    {opportunity.problemStatement}
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Target Audience */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="hover:shadow-lg transition-shadow bg-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-card-foreground">
                    <Users className="h-5 w-5 text-primary" />
                    Target Audience
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-card-foreground leading-relaxed">
                    {opportunity.targetAudience}
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Market Evidence */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="hover:shadow-lg transition-shadow bg-card">
                <CardHeader>
                  <CardTitle className="text-card-foreground">Market Evidence</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-card-foreground leading-relaxed">
                    {opportunity.marketEvidence}
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Opportunity Statement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="hover:shadow-lg transition-shadow bg-card">
                <CardHeader>
                  <CardTitle className="text-card-foreground">Opportunity</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-card-foreground leading-relaxed">
                    {opportunity.opportunityStatement}
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Creative Note */}
            {opportunity.creativityNote && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <Card className="hover:shadow-lg transition-shadow bg-card border-primary/30">
                  <CardHeader>
                    <CardTitle className="text-card-foreground">Creative Note</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-card-foreground leading-relaxed italic">
                      {opportunity.creativityNote}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Market Size */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="hover:shadow-lg transition-shadow bg-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-card-foreground">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    Market Size
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-primary mb-2">
                    {opportunity.marketSize}
                  </p>
                  {opportunity.growthRate && (
                    <p className="text-sm text-muted-foreground">
                      Growth Rate: <span className="text-green-400 font-medium">{opportunity.growthRate}</span>
                    </p>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Geographic Focus */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="hover:shadow-lg transition-shadow bg-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-card-foreground">
                    <MapPin className="h-5 w-5 text-primary" />
                    Geographic Focus
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {opportunity.geographicFocus?.primary && opportunity.geographicFocus.primary.length > 0 && (
                    <div>
                      <p className="font-medium text-sm mb-2 text-card-foreground">Primary Markets</p>
                      <div className="flex flex-wrap gap-1">
                        {opportunity.geographicFocus.primary.map((country, index) => (
                          <Badge key={index} variant="default" className="text-xs">
                            {country}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  {opportunity.geographicFocus?.secondary && opportunity.geographicFocus.secondary.length > 0 && (
                    <div>
                      <p className="font-medium text-sm mb-2 text-card-foreground">Secondary Markets</p>
                      <div className="flex flex-wrap gap-1">
                        {opportunity.geographicFocus.secondary.map((country, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {country}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  {opportunity.geographicFocus?.tertiary && opportunity.geographicFocus.tertiary.length > 0 && (
                    <div>
                      <p className="font-medium text-sm mb-2 text-card-foreground">Tertiary Markets</p>
                      <div className="flex flex-wrap gap-1">
                        {opportunity.geographicFocus.tertiary.map((country, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {country}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  {(!opportunity.geographicFocus || 
                    (!opportunity.geographicFocus.primary?.length && 
                     !opportunity.geographicFocus.secondary?.length && 
                     !opportunity.geographicFocus.tertiary?.length)) && (
                    <div className="text-sm text-muted-foreground">
                      Geographic focus information not available
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Related Research */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="hover:shadow-lg transition-shadow bg-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-card-foreground">
                    <FileText className="h-5 w-5 text-primary" />
                    Related Research
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-card-foreground">{opportunity.research.title}</h4>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {opportunity.research.brief}
                      </p>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Published: {formatDate(opportunity.research.releaseDate)}
                    </div>
                    <Link href={`/research/${opportunity.research.id}`}>
                      <Button variant="outline" size="sm" className="w-full">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View Full Research
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
