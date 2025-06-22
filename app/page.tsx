
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  ArrowRight, 
  Target, 
  TrendingUp, 
  Users, 
  Star, 
  CheckCircle, 
  Play,
  Search,
  Rocket,
  ChevronRight,
  Sparkles,
  Zap,
  BarChart3,
  Eye,
  MessageCircle,
  ThumbsUp,
  Shield,
  Lightbulb,
  Gauge,
  Globe,
  Clock
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useAuth } from '@/contexts/auth-context'
import AuthModal from '@/components/auth-modal'
import Footer from '@/components/footer'

/*
BUTTON STYLES DOCUMENTATION FOR FUTURE REFERENCE:

Green Button 1 (for /trending pages):
className="bg-[#00FF88] hover:bg-[#00E87A] text-black text-lg px-8 py-4 w-full sm:w-auto rounded-xl font-semibold"

Green Button 2 (for /opportunities pages):
className="bg-white/10 border-2 border-[#00FF88] text-[#00FF88] hover:bg-[#00FF88] hover:text-black text-lg px-8 py-4 w-full sm:w-auto rounded-xl font-semibold transition-all duration-300"

Wireframed Button Style (non-actionable titles):
className="border-2 border-[COLOR] bg-transparent text-[COLOR] px-6 py-3 text-sm font-bold rounded-full pointer-events-none"
Colors used: #6ae585 or #f5d565
*/

const HomePage = () => {
  const { user } = useAuth()
  const [mounted, setMounted] = useState(false)
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
  const [animatedNumbers, setAnimatedNumbers] = useState({
    topics: 0,
    votes: 0,
    research: 0
  })

  useEffect(() => {
    setMounted(true)
  }, [])

  // Animation hook for stats
  const [statsRef, statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Animate numbers when stats come into view
  useEffect(() => {
    if (statsInView && mounted) {
      const animateNumber = (start: number, end: number, key: keyof typeof animatedNumbers) => {
        const duration = 2000
        const startTime = Date.now()
        
        const updateNumber = () => {
          const elapsed = Date.now() - startTime
          const progress = Math.min(elapsed / duration, 1)
          const easeOutQuart = 1 - Math.pow(1 - progress, 4)
          const current = Math.floor(start + (end - start) * easeOutQuart)
          
          setAnimatedNumbers(prev => ({ ...prev, [key]: current }))
          
          if (progress < 1) {
            requestAnimationFrame(updateNumber)
          }
        }
        
        requestAnimationFrame(updateNumber)
      }

      animateNumber(0, 247, 'topics')
      animateNumber(0, 12500, 'votes')
      animateNumber(0, 89, 'research')
    }
  }, [statsInView, mounted])

  // Market opportunities data - exact from analysis
  const marketOpportunities = [
    {
      id: '1',
      title: 'Organic Certification Fast-Track for Egyptian Producers',
      description: 'Quality issues in cold chain management',
      marketSize: 'USD 2.1B',
      growth: '8.5% CAGR',
      rating: 1,
      status: 5
    },
    {
      id: '2',
      title: 'European Markets Expansion Opportunity',
      description: 'Cross-border e-commerce growth potential',
      marketSize: 'USD 76.1B',
      growth: '3.9% CAGR',
      rating: 1,
      status: 5
    },
    {
      id: '3',
      title: 'Sustainable Packaging Solutions',
      description: 'Eco-friendly packaging alternatives',
      marketSize: 'USD 4.7B',
      growth: '12.3% CAGR',
      rating: 0,
      status: 5
    }
  ]

  // Trending topics data - exact from analysis
  const trendingTopics = [
    {
      title: 'AI-Powered Personal Finance Apps',
      description: 'Market analysis for AI-driven budgeting and investment platforms',
      tags: ['FinTech', 'United States'],
      metric: '+156'
    },
    {
      title: 'Sustainable Fashion E-commerce',
      description: 'Consumer behavior and market size for eco-friendly clothing platforms',
      tags: ['Fashion', 'Europe'],
      metric: '+142'
    },
    {
      title: 'Remote Work Productivity Tools',
      description: 'Analysis of collaboration software market post-pandemic',
      tags: ['SaaS', 'Global'],
      metric: '+128'
    }
  ]

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-[#10141a] text-white relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#10141a] mb-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8 relative"
            >
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <Badge className="border-2 border-[#6ae585] bg-transparent text-[#6ae585] px-6 py-3 text-sm font-bold rounded-full pointer-events-none">
                    <Sparkles className="w-4 h-4 mr-2" />
                    Build What Matters
                  </Badge>
                </motion.div>
                
                <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                >
                  Discover Market{' '}
                  <span className="text-[#00FF88]">Intelligence</span>{' '}
                  Opportunities
                </motion.h1>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-lg md:text-xl text-[#CCCCCC] leading-relaxed max-w-2xl"
                >
                  Join thousands of entrepreneurs and investors who leverage crowdsourced insights to make data-driven decisions. Get professional research at the speed of your idea.
                </motion.p>
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link href="/trending">
                  <Button 
                    size="lg" 
                    className="bg-[#00FF88] hover:bg-[#00E87A] text-black text-lg px-8 py-4 w-full sm:w-auto rounded-xl font-semibold"
                  >
                    Explore Trending Topics
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link href="/opportunities">
                  <Button 
                    size="lg" 
                    className="bg-white/10 border-2 border-[#00FF88] text-[#00FF88] hover:bg-[#00FF88] hover:text-black text-lg px-8 py-4 w-full sm:w-auto rounded-xl font-semibold transition-all duration-300"
                  >
                    <Target className="w-4 h-4 mr-2" />
                    Discover Opportunities
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Content - Market Intelligence Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative bg-gradient-to-br from-[#1A1A1A] via-[#1A1A1A] to-[#252529] border border-white/20 rounded-2xl p-8 shadow-2xl backdrop-blur-sm hover:shadow-[0_20px_50px_rgba(0,255,136,0.15)] hover:border-[#00FF88]/30 transition-all duration-500 hover:scale-[1.02]"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-[#00FF88]/20 rounded-xl flex items-center justify-center border border-[#00FF88]/30">
                      <BarChart3 className="w-6 h-6 text-[#00FF88]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-white">Market Intelligence</h3>
                    </div>
                  </div>
                  <Badge className="bg-[#00FF88]/20 text-[#00FF88] border border-[#00FF88]/30 rounded-full">
                    <motion.div 
                      className="w-2 h-2 bg-[#00FF88] rounded-full mr-2"
                      animate={{ opacity: [1, 0.5, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                    Live
                  </Badge>
                </div>
                
                <div className="space-y-4">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="flex justify-between items-center p-4 bg-gradient-to-r from-[#00FF88]/10 to-[#00FF88]/5 border border-[#00FF88]/30 rounded-xl hover:bg-[#00FF88]/15 hover:border-[#00FF88]/40 transition-all duration-300 hover:shadow-lg hover:shadow-[#00FF88]/10"
                  >
                    <span className="text-sm font-medium text-white">247+ Active Topics</span>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="flex justify-between items-center p-4 bg-gradient-to-r from-[#00FF88]/10 to-[#00FF88]/5 border border-[#00FF88]/30 rounded-xl hover:bg-[#00FF88]/15 hover:border-[#00FF88]/40 transition-all duration-300 hover:shadow-lg hover:shadow-[#00FF88]/10"
                  >
                    <span className="text-sm font-medium text-white">12.5K+ Votes Cast</span>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-white">Research Quality: 94%</span>
                    </div>
                    <div className="w-full bg-[#334155]/50 rounded-full h-2 overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: "94%" }}
                        transition={{ duration: 1.5, delay: 1, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-[#00FF88] to-[#FCD34D] rounded-full"
                      />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-4 relative bg-[#141921] mb-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            ref={statsRef}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-4"
          >
            <div className="space-y-2">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-2xl md:text-3xl font-bold text-white"
              >
                Trusted by entrepreneurs worldwide
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-base text-[#CCCCCC] max-w-2xl mx-auto"
              >
                Our platform delivers actionable insights that drive real business decisions
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {[
                { value: animatedNumbers.topics, label: 'Active Research Topics', icon: TrendingUp, color: '#6ae585' },
                { value: animatedNumbers.votes.toLocaleString(), label: 'Community Votes', icon: Users, color: '#FCD34D' },
                { value: animatedNumbers.research, label: 'Research Reports', icon: BarChart3, color: '#40E0D0' }
              ].map((stat, index) => (
                <motion.div 
                  key={stat.label}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="p-2 text-center">
                    <motion.div 
                      className="w-6 h-6 mx-auto mb-1 rounded-xl flex items-center justify-center transition-transform duration-300" 
                      style={{ 
                        backgroundColor: `${stat.color}20`, 
                        border: `1px solid ${stat.color}30`,
                        boxShadow: `0 0 15px ${stat.color}20`
                      }}
                      whileHover={{ 
                        boxShadow: `0 0 25px ${stat.color}40`,
                        scale: 1.1 
                      }}
                    >
                      <stat.icon className="w-3 h-3" style={{ color: stat.color }} />
                    </motion.div>
                    
                    <motion.div 
                      className="text-xl font-bold mb-1 transition-transform duration-300"
                      style={{ color: stat.color }}
                    >
                      {stat.value}+
                    </motion.div>
                    
                    <div className="text-xs text-white font-medium transition-colors duration-300">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Market Opportunities Section */}
      <section className="py-20 relative bg-[#10141a] mb-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Panel - Market Opportunities with Live Data */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#1a1a1a] via-[#1a1a1a] to-[#252529] border border-white/20 rounded-2xl p-8 shadow-2xl backdrop-blur-sm hover:shadow-[0_20px_50px_rgba(16,185,129,0.15)] hover:border-[#10B981]/30 transition-all duration-500"
              whileHover={{ scale: 1.02 }}
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-white">Market Opportunities</h3>
                  <Badge className="bg-[#10B981]/20 text-[#10B981] border border-[#10B981]/30 rounded-full text-xs">
                    <motion.div 
                      className="w-2 h-2 bg-[#10B981] rounded-full mr-2"
                      animate={{ opacity: [1, 0.5, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                    Live Data
                  </Badge>
                </div>
                
                <div className="space-y-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-between p-4 bg-gradient-to-r from-[#0F172A]/60 to-[#1A1A1A]/40 rounded-xl border border-white/20 hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 hover:scale-[1.02] group"
                    whileHover={{ x: 5 }}
                  >
                    <div className="flex items-center space-x-3">
                      <motion.div 
                        className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/20"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="w-4 h-4 bg-white rounded-full"></div>
                      </motion.div>
                      <span className="text-white font-medium group-hover:text-blue-300 transition-colors duration-300">HealthTech Wearables</span>
                    </div>
                    <span className="text-white font-bold text-lg group-hover:text-blue-300 transition-colors duration-300">$27.2B</span>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-between p-4 bg-gradient-to-r from-[#0F172A]/60 to-[#1A1A1A]/40 rounded-xl border border-white/20 hover:border-[#10B981]/40 hover:shadow-lg hover:shadow-[#10B981]/10 transition-all duration-300 hover:scale-[1.02] group"
                    whileHover={{ x: 5 }}
                  >
                    <div className="flex items-center space-x-3">
                      <motion.div 
                        className="w-8 h-8 bg-[#10B981] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-[#10B981]/20"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="w-3 h-3 bg-white rounded-sm"></div>
                      </motion.div>
                      <span className="text-white font-medium group-hover:text-[#10B981] transition-colors duration-300">EdTech Platforms</span>
                    </div>
                    <span className="text-white font-bold text-lg group-hover:text-[#10B981] transition-colors duration-300">$89.5B</span>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-between p-4 bg-gradient-to-r from-[#0F172A]/60 to-[#1A1A1A]/40 rounded-xl border border-white/20 hover:border-[#FCD34D]/40 hover:shadow-lg hover:shadow-[#FCD34D]/10 transition-all duration-300 hover:scale-[1.02] group"
                    whileHover={{ x: 5 }}
                  >
                    <div className="flex items-center space-x-3">
                      <motion.div 
                        className="w-8 h-8 bg-[#FCD34D] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-[#FCD34D]/20"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Zap className="w-4 h-4 text-black" />
                      </motion.div>
                      <span className="text-white font-medium group-hover:text-[#FCD34D] transition-colors duration-300">Clean Energy</span>
                    </div>
                    <span className="text-white font-bold text-lg group-hover:text-[#FCD34D] transition-colors duration-300">$156.8B</span>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Right Content Area */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Header */}
              <div className="space-y-6">
                <Badge className="border-2 border-[#f5d565] bg-transparent text-[#f5d565] px-6 py-3 text-sm font-bold rounded-full pointer-events-none">
                  Decision-Ready
                </Badge>
                
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-3xl md:text-4xl lg:text-5xl font-bold text-white"
                >
                  Top Market{' '}
                  <span className="text-[#FCD34D]">Opportunities</span>
                </motion.h2>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="text-lg text-[#CCCCCC] leading-relaxed"
                >
                  Discover the most promising business opportunities with the highest growth potential, market demand, and community interest. Make data-driven decisions with confidence.
                </motion.p>
              </div>

              {/* Features */}
              <div className="space-y-4">
                {[
                  { text: 'Validated by community voting', icon: CheckCircle },
                  { text: 'Real market data and growth metrics', icon: TrendingUp },
                  { text: 'Actionable business insights', icon: Target }
                ].map((feature, index) => (
                  <motion.div
                    key={feature.text}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <feature.icon className="w-6 h-6 text-[#10B981] flex-shrink-0" />
                    <span className="text-[#CCCCCC]">{feature.text}</span>
                  </motion.div>
                ))}
              </div>


            </motion.div>
          </div>

          {/* Full-Width Opportunity Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Egyptian fruit and vegetable exporters face 25-30% quality loss due to improper cold chain management",
                  rating: 1,
                  market: "USD 2.1B",
                  growth: "8.5% CAGR"
                },
                {
                  title: "Organic fruits and vegetables market faces supply constraints with only 15% of total sales being organic",
                  rating: 1,
                  market: "USD 76.1B",
                  growth: "3.9% CAGR"
                },
                {
                  title: "European markets experience severe fresh produce shortages during winter months creating opportunities",
                  rating: 0,
                  market: "USD 4.7B",
                  growth: "12.3% CAGR"
                }
              ].map((opportunity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-white via-white to-gray-50 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 border border-gray-100 group"
                  whileHover={{ 
                    boxShadow: "0 25px 60px rgba(0,0,0,0.15)",
                    y: -8 
                  }}
                >
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-3 flex-1">
                        <motion.div 
                          className="w-10 h-10 bg-gradient-to-br from-[#10B981] to-[#059669] rounded-full flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          <Target className="w-5 h-5 text-white" />
                        </motion.div>
                        <div className="flex-1">
                          <p className="text-gray-900 text-sm leading-relaxed font-medium group-hover:text-gray-700 transition-colors duration-300">
                            {opportunity.title}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                      <div className="space-y-1">
                        <div className="text-xs text-gray-500">Market Size</div>
                        <div className="text-sm font-bold text-[#10B981]">{opportunity.market}</div>
                      </div>
                      <div className="space-y-1 text-right">
                        <div className="text-xs text-gray-500">Growth Rate</div>
                        <div className="text-sm font-bold text-blue-600">{opportunity.growth}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-4 h-4 transition-colors duration-300 ${i < opportunity.rating ? 'text-[#FCD34D] fill-current' : 'text-gray-300'}`} 
                          />
                        ))}
                      </div>
                      <Badge className="bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/20 text-xs">
                        Active
                      </Badge>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Discover Button */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Link href="/opportunities">
              <Button 
                size="lg" 
                className="bg-white/10 border-2 border-[#00FF88] text-[#00FF88] hover:bg-[#00FF88] hover:text-black text-lg px-8 py-4 rounded-xl font-semibold transition-all duration-300"
              >
                Discover Opportunities
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Trending Research Topics Section */}
      <section className="py-20 relative bg-[#10141a] mb-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Content Area */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Header */}
              <div className="space-y-6">
                <Badge className="border-2 border-[#6ae585] bg-transparent text-[#6ae585] px-6 py-3 text-sm font-bold rounded-full pointer-events-none">
                  Real World Demand
                </Badge>
                
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-3xl md:text-4xl lg:text-5xl font-bold text-white"
                >
                  Trending Research{' '}
                  <span className="text-[#10B981]">Topics</span>
                </motion.h2>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="text-lg text-[#CCCCCC] leading-relaxed"
                >
                  Real-time trending insights from our community of entrepreneurs and investors. See what markets and opportunities are generating the most interest right now.
                </motion.p>
              </div>

              {/* Features */}
              <div className="space-y-4">
                {[
                  { text: 'Community-driven research priorities', icon: Users },
                  { text: 'Real-time market sentiment', icon: TrendingUp },
                  { text: 'Global market perspectives', icon: Globe }
                ].map((feature, index) => (
                  <motion.div
                    key={feature.text}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <feature.icon className="w-6 h-6 text-[#10B981] flex-shrink-0" />
                    <span className="text-[#CCCCCC]">{feature.text}</span>
                  </motion.div>
                ))}
              </div>

              {/* View All Topics Button */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="pt-4"
              >
                <Link href="/trending">
                  <Button 
                    size="lg" 
                    className="bg-[#00FF88] hover:bg-[#00E87A] text-black text-lg px-8 py-4 rounded-xl font-semibold"
                  >
                    View All Topics
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right "Trending Now" Panel */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-[#1a1a1a] via-[#1a1a1a] to-[#252529] border border-white/20 rounded-2xl p-8 shadow-2xl backdrop-blur-sm hover:shadow-[0_20px_50px_rgba(16,185,129,0.15)] hover:border-[#10B981]/30 transition-all duration-500"
                whileHover={{ scale: 1.02 }}
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold text-white">Trending Now</h3>
                    <Badge className="bg-[#F97316] text-white px-4 py-2 text-xs font-bold rounded-full">
                      Hot
                    </Badge>
                  </div>
                  
                  <div className="space-y-4">
                    {/* Trending Item 1 */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      viewport={{ once: true }}
                      className="p-4 bg-gradient-to-r from-[#0F172A]/60 to-[#1A1A1A]/40 rounded-xl border border-white/20 hover:border-[#10B981]/40 hover:shadow-lg hover:shadow-[#10B981]/10 transition-all duration-300 hover:scale-[1.02] group"
                      whileHover={{ y: -2 }}
                    >
                      <div className="space-y-3">
                        <div className="flex items-start justify-between">
                          <h4 className="text-white font-semibold text-sm leading-relaxed group-hover:text-[#10B981] transition-colors duration-300">
                            AI-Powered Personal Finance Apps
                          </h4>
                          <motion.div 
                            className="ml-3 text-lg font-bold text-[#10B981] group-hover:scale-110 transition-transform duration-300"
                            whileHover={{ scale: 1.2 }}
                          >
                            +156
                          </motion.div>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <Badge className="bg-[#FCD34D] text-black text-xs px-2 py-1 rounded-md font-medium">
                            FinTech
                          </Badge>
                          <Badge className="bg-[#3B82F6] text-white text-xs px-2 py-1 rounded-md font-medium">
                            United States
                          </Badge>
                        </div>
                        
                        <p className="text-xs text-[#CCCCCC] leading-relaxed group-hover:text-white transition-colors duration-300">
                          Market analysis for AI-driven budgeting and investment platforms
                        </p>
                      </div>
                    </motion.div>
                    
                    {/* Trending Item 2 */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      viewport={{ once: true }}
                      className="p-4 bg-gradient-to-r from-[#0F172A]/60 to-[#1A1A1A]/40 rounded-xl border border-white/20 hover:border-[#10B981]/40 hover:shadow-lg hover:shadow-[#10B981]/10 transition-all duration-300 hover:scale-[1.02] group"
                      whileHover={{ y: -2 }}
                    >
                      <div className="space-y-3">
                        <div className="flex items-start justify-between">
                          <h4 className="text-white font-semibold text-sm leading-relaxed group-hover:text-[#10B981] transition-colors duration-300">
                            Sustainable Fashion E-commerce
                          </h4>
                          <motion.div 
                            className="ml-3 text-lg font-bold text-[#10B981] group-hover:scale-110 transition-transform duration-300"
                            whileHover={{ scale: 1.2 }}
                          >
                            +142
                          </motion.div>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <Badge className="bg-[#FCD34D] text-black text-xs px-2 py-1 rounded-md font-medium">
                            Fashion
                          </Badge>
                          <Badge className="bg-[#3B82F6] text-white text-xs px-2 py-1 rounded-md font-medium">
                            Europe
                          </Badge>
                        </div>
                        
                        <p className="text-xs text-[#CCCCCC] leading-relaxed group-hover:text-white transition-colors duration-300">
                          Consumer behavior and market size for eco-friendly clothing platforms
                        </p>
                      </div>
                    </motion.div>
                    
                    {/* Trending Item 3 */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      viewport={{ once: true }}
                      className="p-4 bg-gradient-to-r from-[#0F172A]/60 to-[#1A1A1A]/40 rounded-xl border border-white/20 hover:border-[#10B981]/40 hover:shadow-lg hover:shadow-[#10B981]/10 transition-all duration-300 hover:scale-[1.02] group"
                      whileHover={{ y: -2 }}
                    >
                      <div className="space-y-3">
                        <div className="flex items-start justify-between">
                          <h4 className="text-white font-semibold text-sm leading-relaxed group-hover:text-[#10B981] transition-colors duration-300">
                            Remote Work Productivity Tools
                          </h4>
                          <motion.div 
                            className="ml-3 text-lg font-bold text-[#10B981] group-hover:scale-110 transition-transform duration-300"
                            whileHover={{ scale: 1.2 }}
                          >
                            +128
                          </motion.div>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <Badge className="bg-[#FCD34D] text-black text-xs px-2 py-1 rounded-md font-medium">
                            SaaS
                          </Badge>
                          <Badge className="bg-[#3B82F6] text-white text-xs px-2 py-1 rounded-md font-medium">
                            Global
                          </Badge>
                        </div>
                        
                        <p className="text-xs text-[#CCCCCC] leading-relaxed group-hover:text-white transition-colors duration-300">
                          Analysis of collaboration software market post-pandemic
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Build Smarter with Spark Section */}
      <section className="py-20 relative bg-[#10141a] mb-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content Area */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Header */}
              <div className="space-y-6">
                <Badge className="border-2 border-[#f5d565] bg-transparent text-[#f5d565] px-6 py-3 text-sm font-bold rounded-full pointer-events-none">
                  Competitive Advantage
                </Badge>
                
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-3xl md:text-4xl lg:text-5xl font-bold text-white"
                >
                  Build Smarter with{' '}
                  <span className="text-[#FCD34D]">Spark</span>
                </motion.h2>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="text-lg text-[#CCCCCC] leading-relaxed"
                >
                  Get the competitive edge with professional-grade market research at startup-friendly prices. Make data-driven decisions that accelerate your growth.
                </motion.p>
              </div>

              {/* Metrics - Streamlined without card frames */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { 
                    value: '95% Accuracy', 
                    subtitle: 'Validated Insights', 
                    icon: CheckCircle,
                    color: '#10B981'
                  },
                  { 
                    value: '90% Cost Savings', 
                    subtitle: 'Vs. traditional firms', 
                    icon: TrendingUp,
                    color: '#10B981'
                  },
                  { 
                    value: '10x Faster', 
                    subtitle: 'Than traditional research', 
                    icon: Zap,
                    color: '#FCD34D'
                  },
                  { 
                    value: 'Global Reach', 
                    subtitle: '50+ countries covered', 
                    icon: Globe,
                    color: '#3B82F6'
                  }
                ].map((metric, index) => (
                  <motion.div
                    key={metric.value}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3 py-2 group cursor-pointer"
                    whileHover={{ x: 5 }}
                  >
                    <motion.div 
                      className="w-8 h-8 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                      style={{ 
                        backgroundColor: `${metric.color}20`, 
                        border: `1px solid ${metric.color}30`,
                        boxShadow: `0 0 10px ${metric.color}20`
                      }}
                      whileHover={{ 
                        boxShadow: `0 0 20px ${metric.color}40`,
                        scale: 1.1 
                      }}
                    >
                      <metric.icon className="w-4 h-4" style={{ color: metric.color }} />
                    </motion.div>
                    <div>
                      <div className="text-base font-bold text-white group-hover:scale-105 transition-transform duration-300">
                        {metric.value}
                      </div>
                      <div className="text-xs text-[#CCCCCC] group-hover:text-white transition-colors duration-300">
                        {metric.subtitle}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right "Success Metrics" Panel */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-[#1a1a1a] via-[#1a1a1a] to-[#252529] border border-white/20 rounded-2xl p-8 shadow-2xl backdrop-blur-sm hover:shadow-[0_20px_50px_rgba(252,211,77,0.15)] hover:border-[#FCD34D]/30 transition-all duration-500"
                whileHover={{ scale: 1.02 }}
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold text-white">Success Metrics</h3>
                    <Badge className="bg-[#10B981] text-white px-4 py-2 text-xs font-bold rounded-full">
                      Proven Results
                    </Badge>
                  </div>
                  
                  <div className="space-y-6">
                    {/* Research Accuracy Progress Bar */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      viewport={{ once: true }}
                      className="space-y-3"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-white font-semibold">Research Accuracy</span>
                        <span className="text-[#10B981] font-bold text-lg">95%</span>
                      </div>
                      <div className="w-full bg-[#334155]/50 rounded-full h-3 overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: "95%" }}
                          transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                          viewport={{ once: true }}
                          className="h-full bg-gradient-to-r from-[#FCD34D] to-[#10B981] rounded-full shadow-lg"
                        />
                      </div>
                    </motion.div>

                    {/* Time Savings Progress Bar */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      viewport={{ once: true }}
                      className="space-y-3"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-white font-semibold">Time Savings</span>
                        <span className="text-[#10B981] font-bold text-lg">10x</span>
                      </div>
                      <div className="w-full bg-[#334155]/50 rounded-full h-3 overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: "100%" }}
                          transition={{ duration: 1.5, delay: 0.7, ease: "easeOut" }}
                          viewport={{ once: true }}
                          className="h-full bg-gradient-to-r from-[#FCD34D] to-[#10B981] rounded-full shadow-lg"
                        />
                      </div>
                    </motion.div>

                    {/* Cost Reduction Progress Bar */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      viewport={{ once: true }}
                      className="space-y-3"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-white font-semibold">Cost Reduction</span>
                        <span className="text-[#10B981] font-bold text-lg">90%</span>
                      </div>
                      <div className="w-full bg-[#334155]/50 rounded-full h-3 overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: "90%" }}
                          transition={{ duration: 1.5, delay: 0.9, ease: "easeOut" }}
                          viewport={{ once: true }}
                          className="h-full bg-gradient-to-r from-[#FCD34D] to-[#10B981] rounded-full shadow-lg"
                        />
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Your Next Great Decision Starts Here Section */}
      <section className="py-20 relative bg-[#10141a] mb-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-16">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Badge className="border-2 border-[#f5d565] bg-transparent text-[#f5d565] px-6 py-3 text-sm font-bold rounded-full pointer-events-none">
                  Get Started Today
                </Badge>
              </motion.div>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-white"
              >
                Your Next Great Decision{' '}
                <span className="text-[#6ae585]">Starts Here</span>
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-lg text-[#CCCCCC] leading-relaxed max-w-3xl mx-auto"
              >
                Join thousands of entrepreneurs who are already making smarter decisions with Spark. Get access to market intelligence that drives real results.
              </motion.p>
            </motion.div>

            {/* Feature Cards - Removed frames/backgrounds */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {[
                {
                  title: 'Discover',
                  description: 'Find trending opportunities',
                  icon: Eye,
                  color: '#10B981'
                },
                {
                  title: 'Validate',
                  description: 'Get community insights',
                  icon: CheckCircle,
                  color: '#FCD34D'
                },
                {
                  title: 'Build',
                  description: 'Launch with confidence',
                  icon: Rocket,
                  color: '#3B82F6'
                }
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center py-8 group"
                  whileHover={{ y: -5 }}
                >
                  <motion.div 
                    className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                    style={{ 
                      backgroundColor: `${feature.color}20`, 
                      border: `2px solid ${feature.color}30`,
                      boxShadow: `0 0 20px ${feature.color}20`
                    }}
                    whileHover={{ 
                      boxShadow: `0 0 30px ${feature.color}40`,
                      scale: 1.1 
                    }}
                  >
                    <feature.icon className="w-8 h-8" style={{ color: feature.color }} />
                  </motion.div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:scale-105 transition-transform duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-[#CCCCCC] group-hover:text-white transition-colors duration-300">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Action Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link href="/trending">
                <Button 
                  size="lg" 
                  className="bg-[#00FF88] hover:bg-[#00E87A] text-black text-lg px-8 py-4 rounded-xl font-semibold"
                >
                  Start Exploring
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              
              <Link href="/opportunities">
                <Button 
                  size="lg" 
                  className="bg-white/10 border-2 border-[#00FF88] text-[#00FF88] hover:bg-[#00FF88] hover:text-black text-lg px-8 py-4 rounded-xl font-semibold transition-all duration-300"
                >
                  View Opportunities
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Auth Modal */}
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
      />

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default HomePage
