
'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { 
  TrendingUp, 
  Search, 
  Plus, 
  ThumbsUp,
  Globe,
  Clock,
  Users,
  Zap,
  CheckCircle
} from 'lucide-react'
import ProposeTopicModal from '@/components/propose-topic-modal'
import AuthModal from '@/components/auth-modal'
import { useAuth } from '@/contexts/auth-context'
import Footer from '@/components/footer'
import { getTimeRemaining } from '@/lib/workflow-utils'

interface Topic {
  id: string
  title: string
  description: string
  industry: string
  country: string
  status: string
  voteCount: number
  voteThreshold: number | null
  approvalDate: string | null
  deadline: string | null
  createdAt: string
  proposedBy: {
    name: string
    username: string
  }
  approvedBy?: {
    name: string
    username: string
  } | null
  _count: {
    votes: number
  }
}

// Aligned region data for both trending page and popup
const COUNTRIES = [
  'United States',
  'Canada', 
  'United Kingdom',
  'Germany',
  'France',
  'Australia',
  'Japan',
  'Singapore',
  'India',
  'China',
  'Brazil',
  'Europe',
  'Asia-Pacific',
  'North America',
  'Global',
  'Other'
]

const TrendingPage = () => {
  const { user } = useAuth()
  const [mounted, setMounted] = useState(false)
  const [topics, setTopics] = useState<Topic[]>([])
  const [filteredTopics, setFilteredTopics] = useState<Topic[]>([])
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedIndustry, setSelectedIndustry] = useState('all')
  const [selectedCountry, setSelectedCountry] = useState('all')
  const [sparkFilter, setSparkFilter] = useState('all') // New spark filter
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
  const [votedTopics, setVotedTopics] = useState<Set<string>>(new Set())
  const [userTopics, setUserTopics] = useState<Set<string>>(new Set())
  // Qualification popup state
  const [showQualificationPopup, setShowQualificationPopup] = useState(false)
  const [qualificationMessage, setQualificationMessage] = useState('')

  useEffect(() => {
    setMounted(true)
  }, [])

  // Auto-disappear timer for qualification popup
  useEffect(() => {
    if (showQualificationPopup) {
      const timer = setTimeout(() => {
        setShowQualificationPopup(false)
      }, 2000) // 2 seconds

      return () => clearTimeout(timer)
    }
  }, [showQualificationPopup])

  // Fetch topics from API
  useEffect(() => {
    fetchTopics()
    if (user) {
      fetchUserVotes()
    }
  }, [user])

  const fetchTopics = async () => {
    try {
      const response = await fetch('/api/topics?status=APPROVED')
      if (!response.ok) {
        throw new Error('Failed to fetch topics')
      }
      const data = await response.json()
      setTopics(data)
      
      // Track user's own topics
      if (user) {
        const userTopicIds = new Set<string>(
          data.filter((topic: Topic) => topic.proposedBy.username === user.username)
            .map((topic: Topic) => topic.id)
        )
        setUserTopics(userTopicIds)
      }
    } catch (error) {
      console.error('Error fetching topics:', error)
      setTopics([])
    }
  }

  const fetchUserVotes = async () => {
    try {
      const response = await fetch('/api/user/votes')
      if (response.ok) {
        const userVotes = await response.json()
        setVotedTopics(new Set(userVotes.map((vote: any) => vote.topicId)))
      }
    } catch (error) {
      console.error('Error fetching user votes:', error)
    }
  }

  // Filter topics based on search and filters including spark filter
  useEffect(() => {
    let filtered = topics.filter(topic => {
      const matchesSearch = topic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           topic.description.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesIndustry = selectedIndustry === 'all' || topic.industry === selectedIndustry
      const matchesCountry = selectedCountry === 'all' || topic.country === selectedCountry
      
      // Apply spark filter
      let matchesSparkFilter = true
      if (sparkFilter === 'voted') {
        matchesSparkFilter = votedTopics.has(topic.id)
      } else if (sparkFilter === 'my-topics') {
        matchesSparkFilter = userTopics.has(topic.id)
      }
      
      return matchesSearch && matchesIndustry && matchesCountry && matchesSparkFilter
    })

    // Sort by votes (descending)
    filtered.sort((a, b) => b.voteCount - a.voteCount)
    setFilteredTopics(filtered)
  }, [topics, searchQuery, selectedIndustry, selectedCountry, sparkFilter, votedTopics, userTopics])

  const handleVote = async (topicId: string) => {
    // Check if user is authenticated
    if (!user) {
      setIsAuthModalOpen(true)
      return
    }

    const isVoted = votedTopics.has(topicId)

    try {
      const response = await fetch(`/api/topics/${topicId}/vote`, {
        method: isVoted ? 'DELETE' : 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.error || 'Failed to vote')
      }

      const result = await response.json()
      
      // Update local state
      setTopics(prev => prev.map(topic => 
        topic.id === topicId 
          ? { ...topic, voteCount: result.voteCount, status: result.status }
          : topic
      ))
      
      // Update voted topics
      setVotedTopics(prev => {
        const newSet = new Set(prev)
        if (isVoted) {
          newSet.delete(topicId)
        } else {
          newSet.add(topicId)
        }
        return newSet
      })

      if (result.qualified && !isVoted) {
        setQualificationMessage('Congratulations! This topic has qualified for research!')
        setShowQualificationPopup(true)
      }
    } catch (error: any) {
      console.error('Error voting:', error)
      alert(error.message || 'Failed to vote. Please try again.')
    }
  }

  const handleProposeTopicClick = () => {
    if (!user) {
      setIsAuthModalOpen(true)
      return
    }
    setIsModalOpen(true)
  }

  const industries = ['all', 'Technology', 'Healthcare', 'Finance', 'E-commerce', 'Education', 'Manufacturing', 'Real Estate', 'Food & Beverage', 'Transportation', 'Energy', 'Media & Entertainment', 'Other']

  const formatTimeRemaining = (deadline: string | null) => {
    if (!deadline) return 'No deadline'
    
    const remaining = getTimeRemaining(new Date(deadline))
    
    if (remaining.expired) return 'Expired'
    
    if (remaining.days > 0) {
      return `${remaining.days}d ${remaining.hours}h`
    } else if (remaining.hours > 0) {
      return `${remaining.hours}h ${remaining.minutes}m`
    } else {
      return `${remaining.minutes}m`
    }
  }

  if (!mounted) {
    return (
      <div className="min-h-screen py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div>
                <h1 className="text-3xl font-bold mb-2">Trending Topics</h1>
                <p className="text-muted-foreground">
                  Vote on research topics that matter to your business
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
            <TrendingUp className="w-8 h-8 text-primary mr-3" />
            <Badge variant="outline" className="text-sm font-medium px-4 py-2 border-primary text-primary">
              Community Driven
            </Badge>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="text-gradient-primary">Trending</span> Research Topics
          </h1>
          <p className="text-xl text-card-foreground max-w-4xl mx-auto mb-12 leading-relaxed">
            Vote on research topics that matter to your business. 
            The most popular topics get prioritized for comprehensive market research.
          </p>
          <Button 
            onClick={handleProposeTopicClick}
            variant="gradient"
            size="lg"
            className="text-lg px-10 py-4"
          >
            <Plus className="w-6 h-6 mr-3" />
            Propose New Topic
          </Button>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-card rounded-xl border shadow-lg p-8 mb-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-card-foreground w-4 h-4" />
              <Input
                placeholder="Search topics..."
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
            <Select value={selectedCountry} onValueChange={setSelectedCountry}>
              <SelectTrigger>
                <SelectValue placeholder="Country/Region" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Regions</SelectItem>
                {COUNTRIES.map(country => (
                  <SelectItem key={country} value={country}>
                    {country}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            {/* Spark Icon Dropdown Filter - Always Visible */}
            {user ? (
              <Select value={sparkFilter} onValueChange={setSparkFilter}>
                <SelectTrigger className="border-[#ff6b35] hover:bg-[#ff6b35]/10">
                  <div className="flex items-center">
                    <Zap className="w-4 h-4 mr-2 text-[#ff6b35]" />
                    <SelectValue placeholder="Filter" />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Topics</SelectItem>
                  <SelectItem value="voted">Voted</SelectItem>
                  <SelectItem value="my-topics">My Topics</SelectItem>
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

        {/* Topics Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredTopics.map((topic, index) => (
            <motion.div
              key={topic.id}
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
              <div className="space-y-4">
                {/* Header with Icon and Title */}
                <div className="flex items-start space-x-3">
                  <motion.div 
                    className="w-10 h-10 bg-gradient-to-br from-[#00FF88] to-[#10B981] rounded-full flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <TrendingUp className="w-5 h-5 text-black" />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-white text-lg font-bold leading-tight group-hover:text-[#00FF88] transition-colors duration-300 mb-2">
                      {topic.title}
                    </h3>
                    <p className="text-[#CCCCCC] text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                      {topic.description}
                    </p>
                  </div>
                </div>
                
                {/* Tags */}
                <div className="flex items-center gap-2 flex-wrap">
                  <Badge className="bg-[#6ae585]/20 text-[#6ae585] border border-[#6ae585]/30 text-xs hover:bg-[#6ae585]/30 transition-colors duration-300">
                    {topic.industry}
                  </Badge>
                  <Badge className="bg-[#f5d565]/20 text-[#f5d565] border border-[#f5d565]/30 text-xs hover:bg-[#f5d565]/30 transition-colors duration-300">
                    <Globe className="w-3 h-3 mr-1" />
                    {topic.country}
                  </Badge>
                </div>
                
                {/* Author and Time Row */}
                <div className="flex items-center justify-between pt-3 border-t border-white/10">
                  <div className="flex items-center space-x-2 text-xs text-[#CCCCCC]">
                    <Users className="w-3 h-3" />
                    <span>by {topic.proposedBy.username}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs text-[#CCCCCC]">
                    <Clock className="w-3 h-3" />
                    <span>{formatTimeRemaining(topic.deadline)}</span>
                  </div>
                </div>
                
                {/* Interactive Vote Progress Bar */}
                <div 
                  className="cursor-pointer group/vote"
                  onClick={() => handleVote(topic.id)}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                          votedTopics.has(topic.id) 
                            ? 'bg-[#00FF88] text-black' 
                            : 'bg-white/10 text-[#00FF88] border border-[#00FF88]/30'
                        }`}
                      >
                        <ThumbsUp className="w-3 h-3" />
                      </motion.div>
                      <span className="text-sm font-medium text-white">
                        {topic.voteCount} votes
                      </span>
                    </div>
                    {topic.voteThreshold && (
                      <span className="text-sm text-[#CCCCCC] font-bold">
                        {Math.round((topic.voteCount / topic.voteThreshold) * 100)}%
                      </span>
                    )}
                  </div>
                  
                  <div className="w-full bg-white/10 rounded-full h-3 group-hover/vote:h-4 transition-all duration-200 overflow-hidden">
                    <motion.div 
                      className={`h-full rounded-full transition-all duration-300 ${
                        votedTopics.has(topic.id) 
                          ? 'bg-gradient-to-r from-[#00FF88] to-[#10B981]' 
                          : 'bg-gradient-to-r from-[#00FF88]/70 to-[#10B981]/70 group-hover/vote:from-[#00FF88] group-hover/vote:to-[#10B981]'
                      }`}
                      style={{
                        width: topic.voteThreshold 
                          ? `${Math.min((topic.voteCount / topic.voteThreshold) * 100, 100)}%`
                          : '0%'
                      }}
                      whileHover={{ 
                        boxShadow: "0 0 20px rgba(0,255,136,0.5)" 
                      }}
                    />
                  </div>
                  
                  {user && (
                    <p className="text-xs text-[#CCCCCC] mt-2 opacity-0 group-hover/vote:opacity-100 transition-opacity duration-300 text-center">
                      {votedTopics.has(topic.id) ? 'Click to remove vote' : 'Click to vote for this topic'}
                    </p>
                  )}
                  
                  {!user && (
                    <p className="text-xs text-[#f5d565] mt-2 opacity-0 group-hover/vote:opacity-100 transition-opacity duration-300 text-center">
                      Sign in to vote for this topic
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredTopics.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-card-foreground mb-4">
              {sparkFilter === 'voted' ? 'No voted topics found' :
               sparkFilter === 'my-topics' ? 'No topics created by you yet' :
               'No topics found matching your criteria'}
            </div>
            <Button 
              onClick={handleProposeTopicClick} 
              className="gradient-bg"
            >
              <Plus className="w-4 h-4 mr-2" />
              Propose a New Topic
            </Button>
          </motion.div>
        )}
      </div>

      <ProposeTopicModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        onSubmit={(result: any) => {
          // Let the modal handle success display internally
          fetchTopics()
          // Don't close modal here - let the modal auto-close after success message
        }}
      />

      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)}
      />

      {/* Qualification Popup - Minimal Toast Style */}
      <AnimatePresence>
        {showQualificationPopup && (
          <motion.div
            initial={{ opacity: 0, x: 400, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 400, scale: 0.8 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed top-6 right-6 z-50 max-w-sm"
          >
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl shadow-2xl border border-green-400/50 p-4 backdrop-blur-sm">
              <div className="flex items-center space-x-3">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                  className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0"
                >
                  <CheckCircle className="w-5 h-5 text-white" />
                </motion.div>
                <div className="flex-1">
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.3 }}
                    className="text-sm font-semibold leading-tight"
                  >
                    {qualificationMessage}
                  </motion.p>
                </div>
              </div>
              {/* Progress bar showing auto-close */}
              <motion.div
                className="mt-3 h-1 bg-white/20 rounded-full overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <motion.div
                  className="h-full bg-white/60 rounded-full"
                  initial={{ width: "100%" }}
                  animate={{ width: "0%" }}
                  transition={{ duration: 2, ease: "linear" }}
                />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  )
}

export default TrendingPage
