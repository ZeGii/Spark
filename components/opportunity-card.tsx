
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, MapPin, TrendingUp, Calendar, Users, AlertTriangle, Clock, Zap } from 'lucide-react';
import Link from 'next/link';

interface OpportunityCardProps {
  opportunity: {
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
    research: {
      title: string;
      industry: string;
      country: string;
    };
  };
}

export function OpportunityCard({ opportunity }: OpportunityCardProps) {
  const [sparked, setSparked] = useState(false);
  const [sparkCount, setSparkCount] = useState(opportunity.sparkCount);
  const [sparking, setSparking] = useState(false);

  const handleSpark = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (sparking) return;
    
    setSparking(true);
    
    try {
      const response = await fetch(`/api/opportunities/${opportunity.id}/spark`, {
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

  return (
    <Link href={`/opportunities/${opportunity.id}`}>
      <Card className="h-full hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer group bg-card">
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between mb-3">
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
          
          <CardTitle className="text-lg line-clamp-2 group-hover:text-[#00FF88] transition-colors text-card-foreground">
            {opportunity.title}
          </CardTitle>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <p className="text-sm text-card-foreground line-clamp-3 leading-relaxed">
            {opportunity.problemStatement}
          </p>

          <div className="space-y-3">
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
              <p className="font-medium flex items-center gap-1 mb-1 text-card-foreground">
                <TrendingUp className="h-3 w-3 text-[#00FF88]" />
                Market Size
              </p>
              <p className="text-card-foreground">{opportunity.marketSize}</p>
            </div>
            {opportunity.growthRate && (
              <div>
                <p className="font-medium mb-1 text-card-foreground">Growth Rate</p>
                <p className="text-[#00FF88] font-medium">{opportunity.growthRate}</p>
              </div>
            )}
          </div>

          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <AlertTriangle className="h-3 w-3 text-orange-500" />
                <span className="text-card-foreground">Severity: {opportunity.severity}/10</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-3 w-3 text-blue-500" />
                <span className="text-card-foreground">Urgency: {opportunity.urgency}/10</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between pt-3 border-t border-border">
            <div className="text-sm">
              <Badge variant="outline">{opportunity.research.industry}</Badge>
            </div>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={handleSpark}
              disabled={sparking}
              className={`flex items-center gap-1 ${sparked ? 'text-[#00FF88]' : 'text-card-foreground'} hover:text-[#00FF88]`}
            >
              <Zap className={`h-4 w-4 ${sparked ? 'fill-current' : ''}`} />
              <span>{sparkCount}</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
