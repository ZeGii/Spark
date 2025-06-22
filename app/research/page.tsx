
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
  BarChart3,
  Lock,
  Zap,
  Filter
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
  isPro: boolean
  sparkCount: number
  isSparkled?: boolean
}

const ResearchPage = () => {
  const { user, loading: authLoading } = useAuth()
  const [mounted, setMounted] = useState(false)
  const [research, setResearch] = useState<Research[]>([])
  const [filteredResearch, setFilteredResearch] = useState<Research[]>([])
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedIndustry, setSelectedIndustry] = useState('all')
  const [selectedRegion, setSelectedRegion] = useState('all')
  const [sortBy, setSortBy] = useState('newest')
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false)
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mounted) {
      fetchResearch()
    }
  }, [mounted])

  // Refetch when user authentication changes
  useEffect(() => {
    if (mounted && !authLoading) {
      fetchResearch()
    }
  }, [user, mounted, authLoading])

  const fetchResearch = async () => {
    console.log('fetchResearch called')
    try {
      setLoading(true)
      console.log('Fetching from /api/research')
      const response = await fetch('/api/research')
      console.log('Response received:', response.status, response.ok)
      if (!response.ok) {
        throw new Error('Failed to fetch research')
      }
      const data = await response.json()
      console.log('Data received:', data.length, 'items')
      
      // Transform API data to match component interface
      const transformedResearch: Research[] = data.map((item: any) => ({
        id: item.id,
        title: item.title,
        brief: item.brief,
        releaseDate: item.releaseDate,
        geographicFocus: item.country || item.topic?.country || 'Global',
        industry: item.industry || item.topic?.industry || 'Technology',
        marketSize: item.marketSize || 'TBD',
        growthRate: item.growthRate || 'TBD',
        isPro: false,
        sparkCount: item.sparkCount || 0,
        isSparkled: item.isSparkled || false
      }))
      
      console.log('Transformed research:', transformedResearch.length, 'items')
      setResearch(transformedResearch)
      setFilteredResearch(transformedResearch)
    } catch (error) {
      console.error('Error fetching research:', error)
      setResearch([])
      setFilteredResearch([])
    } finally {
      console.log('Setting loading to false')
      setLoading(false)
    }
  }

  // Filter and sort research
  useEffect(() => {
    let filtered = research.filter(item => {
      const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           item.brief.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesIndustry = selectedIndustry === 'all' || item.industry === selectedIndustry
      const matchesRegion = selectedRegion === 'all' || item.geographicFocus === selectedRegion
      const matchesFavorites = !showFavoritesOnly || item.isSparkled
      
      return matchesSearch && matchesIndustry && matchesRegion && matchesFavorites
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
        filtered.sort((a, b) => b.sparkCount - a.sparkCount)
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
  }, [research, searchQuery, selectedIndustry, selectedRegion, sortBy, showFavoritesOnly])

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
        }
      })

      if (response.ok) {
        const { sparked } = await response.json()
        setResearch(prev => 
          prev.map(item => 
            item.id === researchId 
              ? { 
                  ...item, 
                  isSparkled: sparked,
                  sparkCount: sparked ? item.sparkCount + 1 : Math.max(0, item.sparkCount - 1)
                }
              : item
          )
        )
      }
    } catch (error) {
      console.error('Error toggling spark:', error)
    }
  }

  const toggleFavoritesFilter = () => {
    if (!user) {
      setIsAuthModalOpen(true)
      return
    }
    setShowFavoritesOnly(!showFavoritesOnly)
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
    return null
  }

  return (
    <div className="min-h-screen bg-[#10141a] text-white">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
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
            <span className="text-gradient-primary">Research</span> Reports
          </h1>
          <p className="text-xl text-card-foreground max-w-4xl mx-auto mb-12 leading-relaxed">
            Discover comprehensive market insights and competitive intelligence 
            to drive your business decisions forward.
          </p>
          <div className="flex items-center justify-center space-x-4">
            <Badge variant="secondary" className="text-sm px-4 py-2">
              {filteredResearch.length} reports available
            </Badge>
            <Button variant="gradient" size="lg" className="text-lg px-10 py-4">
              <Lock className="w-6 h-6 mr-3" />
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
          <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
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
            
            {/* Spark/Favorites Filter - Updated to match Trending Topics pattern */}
            {user ? (
              <Select value={showFavoritesOnly ? 'favorites' : 'all'} onValueChange={(value) => setShowFavoritesOnly(value === 'favorites')}>
                <SelectTrigger className="border-[#ff6b35] hover:bg-[#ff6b35]/10">
                  <div className="flex items-center">
                    <Zap className="w-4 h-4 mr-2 text-[#ff6b35]" />
                    <SelectValue placeholder="Filter" />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Research</SelectItem>
                  <SelectItem value="favorites">Favorites</SelectItem>
                </SelectContent>
              </Select>
            ) : (
              <button 
                onClick={() => setIsAuthModalOpen(true)}
                className="flex items-center justify-center px-3 py-2 border border-[#ff6b35] rounded-md hover:bg-[#ff6b35]/10 transition-colors duration-200 cursor-pointer group"
              >
                <Zap className="w-4 h-4 mr-2 text-[#ff6b35] group-hover:scale-110 transition-transform duration-200" />
                <span className="text-sm text-[#ff6b35] font-medium">Sign in to filter</span>
              </button>
            )}
          </div>
        </motion.div>

        {/* Research Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredResearch.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-[#1a1a1a] via-[#1a1a1a] to-[#252529] border border-white/20 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:shadow-[#00FF88]/10 transition-all duration-500 hover:scale-105 hover:-translate-y-2 group"
              whileHover={{ 
                boxShadow: "0 25px 60px rgba(0,255,136,0.15)",
                y: -8,
                scale: 1.02
              }}
            >
              <Link href={`/research/${item.id}`}>
                <div className="space-y-4">
                  {/* Header with Icon and Title */}
                  <div className="flex items-start space-x-3">
                    <motion.div 
                      className="w-10 h-10 bg-gradient-to-br from-[#00FF88] to-[#10B981] rounded-full flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <FileText className="w-5 h-5 text-black" />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-white text-lg font-bold leading-tight group-hover:text-[#00FF88] transition-colors duration-300 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-[#CCCCCC] text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                        {item.brief}
                      </p>
                    </div>
                  </div>
                  
                  {/* Tags */}
                  <div className="flex items-center gap-2 flex-wrap">
                    <Badge className="bg-[#6ae585]/20 text-[#6ae585] border border-[#6ae585]/30 text-xs hover:bg-[#6ae585]/30 transition-colors duration-300">
                      {item.industry}
                    </Badge>
                    <Badge className="bg-[#f5d565]/20 text-[#f5d565] border border-[#f5d565]/30 text-xs hover:bg-[#f5d565]/30 transition-colors duration-300">
                      <Globe className="w-3 h-3 mr-1" />
                      {item.geographicFocus}
                    </Badge>
                    {item.isPro && (
                      <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs">
                        <Lock className="w-3 h-3 mr-1" />
                        Pro
                      </Badge>
                    )}
                  </div>
                  
                  {/* Market Data */}
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-[#CCCCCC] mb-1">Market Size</div>
                      <div className="font-semibold text-white">{item.marketSize}</div>
                    </div>
                    <div>
                      <div className="text-[#CCCCCC] mb-1">Growth Rate</div>
                      <div className="font-semibold text-[#00FF88]">{item.growthRate}</div>
                    </div>
                  </div>
                  
                  {/* Date and Spark Row */}
                  <div className="flex items-center justify-between pt-3 border-t border-white/10">
                    <div className="flex items-center space-x-2 text-xs text-[#CCCCCC]">
                      <Calendar className="w-3 h-3" />
                      <span>{formatDate(item.releaseDate)}</span>
                    </div>
                    
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={(e) => {
                        e.preventDefault()
                        handleSparkToggle(item.id)
                      }}
                      className={`flex items-center gap-1 ${
                        item.isSparkled 
                          ? 'text-[#00FF88]' 
                          : 'text-[#CCCCCC] hover:text-[#00FF88]'
                      } transition-colors duration-300`}
                    >
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                          item.isSparkled 
                            ? 'bg-[#00FF88] text-black' 
                            : 'bg-white/10 text-[#00FF88] border border-[#00FF88]/30'
                        }`}
                      >
                        <Zap className="w-3 h-3" />
                      </motion.div>
                      <span className="text-sm font-medium">{item.sparkCount}</span>
                    </Button>
                  </div>
                </div>
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
              {showFavoritesOnly 
                ? "No favorite research reports found"
                : "No research reports found matching your criteria"}
            </div>
            <Button 
              onClick={() => {
                setSearchQuery('')
                setSelectedIndustry('all')
                setSelectedRegion('all')
                setShowFavoritesOnly(false)
              }}
              className="bg-[#00FF88] hover:bg-[#00FF88]/90 text-black"
            >
              Clear All Filters
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
