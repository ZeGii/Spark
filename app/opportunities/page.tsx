
'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { OpportunityCard } from '@/components/opportunity-card';
import { Search, Filter, TrendingUp, MapPin, Calendar, Target, BarChart3 } from 'lucide-react';
import Link from 'next/link';
import Footer from '@/components/footer';

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
  research: {
    title: string;
    industry: string;
    country: string;
  };
}

interface Filters {
  search: string;
  industry: string;
  country: string;
  minSeverity: string;
  sortBy: string;
  sortOrder: string;
}

export default function OpportunitiesPage() {
  const [opportunities, setOpportunities] = useState<Opportunity[]>([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState<Filters>({
    search: '',
    industry: '',
    country: '',
    minSeverity: '',
    sortBy: 'releaseDate',
    sortOrder: 'desc'
  });
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 12,
    total: 0,
    pages: 0
  });

  const industries = ['Technology', 'Healthcare', 'Finance', 'Agriculture', 'Manufacturing', 'Energy', 'Education', 'Retail'];
  const countries = ['United States', 'Germany', 'United Kingdom', 'France', 'Netherlands', 'Japan', 'Canada', 'China'];

  useEffect(() => {
    fetchOpportunities();
  }, [filters, pagination.page]);

  const fetchOpportunities = async () => {
    try {
      setLoading(true);
      
      const params = new URLSearchParams({
        page: pagination.page.toString(),
        limit: pagination.limit.toString(),
        ...(filters.search && { search: filters.search }),
        ...(filters.industry && { industry: filters.industry }),
        ...(filters.country && { country: filters.country }),
        ...(filters.minSeverity && { minSeverity: filters.minSeverity }),
        sortBy: filters.sortBy,
        sortOrder: filters.sortOrder
      });

      const response = await fetch(`/api/opportunities?${params}`);
      if (response.ok) {
        const data = await response.json();
        setOpportunities(data.opportunities);
        setPagination(prev => ({ ...prev, ...data.pagination }));
      }
    } catch (error) {
      console.error('Error fetching opportunities:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleFilterChange = (key: keyof Filters, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
    setPagination(prev => ({ ...prev, page: 1 }));
  };

  const handlePageChange = (newPage: number) => {
    setPagination(prev => ({ ...prev, page: newPage }));
  };

  const clearFilters = () => {
    setFilters({
      search: '',
      industry: '',
      country: '',
      minSeverity: '',
      sortBy: 'releaseDate',
      sortOrder: 'desc'
    });
    setPagination(prev => ({ ...prev, page: 1 }));
  };

  return (
    <div className="min-h-screen">
      <div className="container-max section-padding">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <Target className="w-8 h-8 text-primary mr-3" />
            <Badge variant="outline" className="text-sm font-medium px-4 py-2 border-primary text-primary">
              Market Intelligence
            </Badge>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Market{' '}
            <span className="text-gradient-primary">Opportunities</span>
          </h1>
          <p className="text-xl text-card-foreground max-w-4xl mx-auto mb-8 leading-relaxed">
            Discover validated market opportunities backed by comprehensive research and data analysis
          </p>
          <div className="flex items-center justify-center space-x-4">
            <Badge variant="secondary" className="text-sm px-4 py-2">
              {pagination.total} opportunities available
            </Badge>
            <Button variant="outline" size="lg" className="px-8">
              <BarChart3 className="w-5 h-5 mr-2" />
              View Analytics
            </Button>
          </div>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-card rounded-xl border shadow-lg p-8 mb-12"
        >
          <div className="flex items-center gap-2 mb-6">
            <Filter className="h-5 w-5 text-primary" />
            <h2 className="text-lg font-semibold text-card-foreground">Filter & Search</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-card-foreground" />
              <Input
                placeholder="Search opportunities..."
                value={filters.search}
                onChange={(e) => handleFilterChange('search', e.target.value)}
                className="pl-10"
              />
            </div>

            <Select value={filters.industry} onValueChange={(value) => handleFilterChange('industry', value)}>
              <SelectTrigger>
                <SelectValue placeholder="All Industries" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Industries</SelectItem>
                {industries.map(industry => (
                  <SelectItem key={industry} value={industry}>{industry}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={filters.country} onValueChange={(value) => handleFilterChange('country', value)}>
              <SelectTrigger>
                <SelectValue placeholder="All Countries" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Countries</SelectItem>
                {countries.map(country => (
                  <SelectItem key={country} value={country}>{country}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={filters.minSeverity} onValueChange={(value) => handleFilterChange('minSeverity', value)}>
              <SelectTrigger>
                <SelectValue placeholder="All Priorities" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Priorities</SelectItem>
                <SelectItem value="8">Critical (8+)</SelectItem>
                <SelectItem value="6">High (6+)</SelectItem>
                <SelectItem value="4">Medium (4+)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Select value={filters.sortBy} onValueChange={(value) => handleFilterChange('sortBy', value)}>
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="releaseDate">Release Date</SelectItem>
                  <SelectItem value="severity">Priority</SelectItem>
                  <SelectItem value="urgency">Urgency</SelectItem>
                  <SelectItem value="sparkCount">Popularity</SelectItem>
                </SelectContent>
              </Select>

              <Select value={filters.sortOrder} onValueChange={(value) => handleFilterChange('sortOrder', value)}>
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="desc">Descending</SelectItem>
                  <SelectItem value="asc">Ascending</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button variant="outline" onClick={clearFilters}>
              Clear Filters
            </Button>
          </div>
        </motion.div>

        {/* Results Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center justify-between mb-8"
        >
          <div className="flex items-center gap-4">
            <h2 className="text-xl font-semibold text-foreground">
              {pagination.total} Opportunities Found
            </h2>
            {(filters.search || filters.industry || filters.country || filters.minSeverity) && (
              <Badge variant="outline">Filtered</Badge>
            )}
          </div>
        </motion.div>

        {/* Opportunities Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, index) => (
              <Card key={index} className="animate-pulse bg-card">
                <CardHeader>
                  <div className="h-4 bg-muted rounded w-3/4"></div>
                  <div className="h-3 bg-muted rounded w-1/2"></div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="h-3 bg-muted rounded"></div>
                    <div className="h-3 bg-muted rounded w-5/6"></div>
                    <div className="h-3 bg-muted rounded w-4/6"></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : opportunities.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="text-center py-12 bg-card">
              <CardContent>
                <TrendingUp className="h-12 w-12 mx-auto mb-4 text-card-foreground" />
                <h3 className="text-lg font-semibold mb-2 text-card-foreground">No Opportunities Found</h3>
                <p className="text-card-foreground mb-4">
                  Try adjusting your filters or search terms to find relevant opportunities.
                </p>
                <Button onClick={clearFilters}>Clear All Filters</Button>
              </CardContent>
            </Card>
          </motion.div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {opportunities.map((opportunity, index) => (
                <motion.div
                  key={opportunity.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <OpportunityCard opportunity={opportunity} />
                </motion.div>
              ))}
            </div>

            {/* Pagination */}
            {pagination.pages > 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex items-center justify-center gap-2"
              >
                <Button
                  variant="outline"
                  onClick={() => handlePageChange(pagination.page - 1)}
                  disabled={pagination.page === 1}
                >
                  Previous
                </Button>
                
                {Array.from({ length: Math.min(5, pagination.pages) }, (_, i) => {
                  const page = i + 1;
                  return (
                    <Button
                      key={page}
                      variant={pagination.page === page ? "default" : "outline"}
                      onClick={() => handlePageChange(page)}
                    >
                      {page}
                    </Button>
                  );
                })}
                
                <Button
                  variant="outline"
                  onClick={() => handlePageChange(pagination.page + 1)}
                  disabled={pagination.page === pagination.pages}
                >
                  Next
                </Button>
              </motion.div>
            )}
          </>
        )}
      </div>

      <Footer />
    </div>
  );
}
