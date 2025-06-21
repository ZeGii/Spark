
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import AuthModal from '@/components/auth-modal'
import { useAuth } from '@/contexts/auth-context'
import { 
  FileText, 
  Search, 
  Calendar, 
  Globe,
  TrendingUp,
  Users,
  BarChart3,
  Lock,
  Eye,
  Zap
} from 'lucide-react'
import Footer from '@/components/footer'

interface Research {
  id: string
  title: string
  brief: string
  releaseDate: string
  geographicFocus: string
  industry: string
  marketSize: string
  growthRate: string
  competitorCount: number
  isPro: boolean
  views: number
  status: 'published' | 'preview'
  sparkCount: number
  isSparkled?: boolean
}

const ResearchPage = () => {
  const { user } = useAuth()
  const [mounted, setMounted] = useState(false)
  const [research, setResearch] = useState<Research[]>([])
  const [filteredResearch, setFilteredResearch] = useState<Research[]>([])
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedIndustry, setSelectedIndustry] = useState('all')
  const [selectedRegion, setSelectedRegion] = useState('all')
  const [sortBy, setSortBy] = useState('newest')
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Sample data
  useEffect(() => {
    const sampleResearch: Research[] = [
      {
        id: '1',
        title: 'AI-Powered Personal Finance Apps Market Analysis',
        brief: 'Comprehensive analysis of the AI-driven personal finance application market, covering user adoption patterns, competitive landscape, and growth projections through 2027.',
        releaseDate: '2024-01-20',
        geographicFocus: 'North America',
        industry: 'FinTech',
        marketSize: '$12.8B',
        growthRate: '+23.4%',
        competitorCount: 47,
        isPro: false,
        views: 1247,
        status: 'published',
        sparkCount: 89,
        isSparkled: false
      },
      {
        id: '2',
        title: 'Sustainable Fashion E-commerce Trends',
        brief: 'Deep dive into consumer behavior and market dynamics in the sustainable fashion e-commerce space, with focus on European markets and emerging brands.',
        releaseDate: '2024-01-18',
        geographicFocus: 'Europe',
        industry: 'Fashion',
        marketSize: '$8.2B',
        growthRate: '+18.7%',
        competitorCount: 32,
        isPro: true,
        views: 892,
        status: 'published',
        sparkCount: 67,
        isSparkled: false
      },
      {
        id: '3',
        title: 'Remote Work Productivity Tools Market',
        brief: 'Analysis of the collaboration software market post-pandemic, including user preferences, pricing strategies, and market consolidation trends.',
        releaseDate: '2024-01-15',
        geographicFocus: 'Global',
        industry: 'SaaS',
        marketSize: '$45.6B',
        growthRate: '+15.2%',
        competitorCount: 89,
        isPro: false,
        views: 2156,
        status: 'published',
        sparkCount: 134,
        isSparkled: false
      },
      {
        id: '4',
        title: 'Plant-Based Meat Alternatives in APAC',
        brief: 'Market penetration analysis and consumer adoption rates for plant-based protein products across Asia-Pacific markets.',
        releaseDate: '2024-01-12',
        geographicFocus: 'Asia-Pacific',
        industry: 'Food & Beverage',
        marketSize: '$3.4B',
        growthRate: '+28.9%',
        competitorCount: 23,
        isPro: true,
        views: 634,
        status: 'published',
        sparkCount: 45,
        isSparkled: false
      },
      {
        id: '5',
        title: 'Telemedicine Platform Market Dynamics',
        brief: 'Healthcare digitization trends and market opportunities for virtual consultation services in post-COVID healthcare landscape.',
        releaseDate: '2024-01-10',
        geographicFocus: 'North America',
        industry: 'HealthTech',
        marketSize: '$29.1B',
        growthRate: '+31.2%',
        competitorCount: 156,
        isPro: false,
        views: 1789,
        status: 'published',
        sparkCount: 98,
        isSparkled: false
      },
      {
        id: '6',
        title: 'EV Charging Infrastructure Investment',
        brief: 'Investment opportunities and market gaps in electric vehicle charging network expansion across European markets.',
        releaseDate: '2024-01-08',
        geographicFocus: 'Europe',
        industry: 'Automotive',
        marketSize: '$18.7B',
        growthRate: '+42.1%',
        competitorCount: 67,
        isPro: true,
        views: 945,
        status: 'published',
        sparkCount: 76,
        isSparkled: false
      }
    ]
    setResearch(sampleResearch)
    setFilteredResearch(sampleResearch)
  }, [])

  // Filter and sort research
  useEffect(() => {
    let filtered = research.filter(item => {
      const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           item.brief.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesIndustry = selectedIndustry === 'all' || item.industry === selectedIndustry
      const matchesRegion = selectedRegion === 'all' || item.geographicFocus === selectedRegion
      
      return matchesSearch && matchesIndustry && matchesRegion
    })

    // Sort
    switch (sortBy) {
      case 'newest':
        filtered.sort((a, b) => new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime())
        break
      case 'oldest':
        filtered.sort((a, b) => new Date(a.releaseDate).getTime() - new Date(b.releaseDate).getTime())
        break
      case 'popular':
        filtered.sort((a, b) => b.views - a.views)
        break
      case 'market-size':
        filtered.sort((a, b) => {
          const aSize = parseFloat(a.marketSize.replace(/[$B]/g, ''))
          const bSize = parseFloat(b.marketSize.replace(/[$B]/g, ''))
          return bSize - aSize
        })
        break
    }

    setFilteredResearch(filtered)
  }, [research, searchQuery, selectedIndustry, selectedRegion, sortBy])

  const handleSparkToggle = async (researchId: string) => {
    // Check if user is authenticated
    if (!user) {
      setIsAuthModalOpen(true)
      return
    }

    try {
      const response = await fetch(`/api/research/${researchId}/spark`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId: user.id }),
      })

      if (response.ok) {
        const { sparked } = await response.json()
        setResearch(prev => 
          prev.map(item => 
            item.id === researchId 
              ? { 
                  ...item, 
                  isSparkled: sparked,
                  sparkCount: sparked ? item.sparkCount + 1 : item.sparkCount - 1
                }
              : item
          )
        )
      }
    } catch (error) {
      console.error('Error toggling spark:', error)
    }
  }

  const industries = ['all', 'FinTech', 'Fashion', 'SaaS', 'Food & Beverage', 'HealthTech', 'Automotive']
  const regions = ['all', 'North America', 'Europe', 'Asia-Pacific', 'Global', 'Latin America']

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  if (!mounted) {
    return (
      <div className="min-h-screen py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div>
                <h1 className="text-3xl font-bold mb-2">Research Reports</h1>
                <p className="text-muted-foreground">
                  Discover market insights and competitive intelligence
                </p>
              </div>
            </div>
          </div>
          <div className="py-16">Loading...</div>
        </div>
      </div>
    )
  }

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
            <BarChart3 className="w-8 h-8 text-primary mr-3" />
            <Badge variant="outline" className="text-sm font-medium px-4 py-2 border-primary text-primary">
              Market Intelligence
            </Badge>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Research{' '}
            <span className="text-gradient-primary">Reports</span>
          </h1>
          <p className="text-xl text-card-foreground max-w-4xl mx-auto mb-8 leading-relaxed">
            Discover comprehensive market insights and competitive intelligence 
            to drive your business decisions forward.
          </p>
          <div className="flex items-center justify-center space-x-4">
            <Badge variant="secondary" className="text-sm px-4 py-2">
              {filteredResearch.length} reports available
            </Badge>
            <Button variant="gradient-secondary" size="lg" className="px-8">
              <Lock className="w-5 h-5 mr-2" />
              Subscribe Pro
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
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-card-foreground w-4 h-4" />
              <Input
                placeholder="Search research..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedIndustry} onValueChange={setSelectedIndustry}>
              <SelectTrigger>
                <SelectValue placeholder="Industry" />
              </SelectTrigger>
              <SelectContent>
                {industries.map(industry => (
                  <SelectItem key={industry} value={industry}>
                    {industry === 'all' ? 'All Industries' : industry}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedRegion} onValueChange={setSelectedRegion}>
              <SelectTrigger>
                <SelectValue placeholder="Region" />
              </SelectTrigger>
              <SelectContent>
                {regions.map(region => (
                  <SelectItem key={region} value={region}>
                    {region === 'all' ? 'All Regions' : region}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger>
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="oldest">Oldest First</SelectItem>
                <SelectItem value="popular">Most Popular</SelectItem>
                <SelectItem value="market-size">Market Size</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" className="w-full">
              <BarChart3 className="w-4 h-4 mr-2" />
              Analytics
            </Button>
          </div>
        </motion.div>

        {/* Research Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredResearch.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/research/${item.id}`}>
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer relative bg-card">
                  {item.isPro && (
                    <div className="absolute top-4 right-4 z-10">
                      <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
                        <Lock className="w-3 h-3 mr-1" />
                        Pro
                      </Badge>
                    </div>
                  )}
                  
                  <CardHeader>
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        <Badge variant="secondary">{item.industry}</Badge>
                        <Badge variant="outline" className="text-xs">
                          {item.status}
                        </Badge>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={(e) => {
                          e.preventDefault()
                          handleSparkToggle(item.id)
                        }}
                        className="p-1 h-auto"
                      >
                        <Zap 
                          className={`w-4 h-4 ${
                            item.isSparkled 
                              ? 'text-primary fill-current' 
                              : 'text-muted-foreground'
                          }`} 
                        />
                        <span className="ml-1 text-sm">{item.sparkCount}</span>
                      </Button>
                    </div>
                    <CardTitle className="text-xl mb-2 pr-8 text-card-foreground">{item.title}</CardTitle>
                    <CardDescription className="text-sm leading-relaxed text-card-foreground">
                      {item.brief}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <div className="text-card-foreground mb-1">Market Size</div>
                          <div className="font-semibold text-card-foreground">{item.marketSize}</div>
                        </div>
                        <div>
                          <div className="text-card-foreground mb-1">Growth Rate</div>
                          <div className="font-semibold text-green-400">{item.growthRate}</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-3 h-3 text-card-foreground" />
                            <span className="text-card-foreground">{formatDate(item.releaseDate)}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Globe className="w-3 h-3 text-card-foreground" />
                            <span className="text-card-foreground">{item.geographicFocus}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between pt-2 border-t border-border">
                        <div className="flex items-center space-x-4 text-sm text-card-foreground">
                          <div className="flex items-center space-x-1">
                            <Users className="w-3 h-3" />
                            <span>{item.competitorCount} competitors</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Eye className="w-3 h-3" />
                            <span>{item.views.toLocaleString()} views</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-1">
                          <FileText className="w-4 h-4 text-primary" />
                          <span className="text-sm font-medium">Read Report</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        {filteredResearch.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <FileText className="w-12 h-12 text-card-foreground mx-auto mb-4" />
            <div className="text-card-foreground mb-4">
              No research reports found matching your criteria
            </div>
            <Button variant="outline">
              Clear Filters
            </Button>
          </motion.div>
        )}

        <AuthModal 
          isOpen={isAuthModalOpen} 
          onClose={() => setIsAuthModalOpen(false)}
        />
      </div>

      <Footer />
    </div>
  )
}

export default ResearchPage
