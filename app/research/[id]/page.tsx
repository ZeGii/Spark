
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  ArrowLeft, 
  Calendar, 
  Globe,
  TrendingUp,
  Users,
  BarChart3,
  FileText,
  Target,
  Lock,
  Download,
  Share,
  Bookmark
} from 'lucide-react'
import { useAuth } from '@/contexts/auth-context'
import AuthModal from '@/components/auth-modal'
import Footer from '@/components/footer'
import { ResearchOpportunities } from '@/components/research-opportunities'

interface ResearchData {
  id: string
  title: string
  brief: string
  executiveSummary: string
  methodology: string
  keyFindings: string[]
  marketSize: string
  growthRate: string
  competitorCount: number
  releaseDate: string
  geographicFocus: string
  industry: string
  isPro: boolean
  competitiveAnalysis: {
    companyName: string
    description: string
    marketShare: string
    strengths: string[]
    weaknesses: string[]
    fundingStage: string
    revenue: string
  }[]
  pouAnalysis: {
    id: string
    title: string
    targetAudience: string
    marketEvidence: string
    painPoints: string[]
    solutions: string[]
    marketSize: string
    competition: string
    barriers: string[]
    timeline: string
  }[]
}

const ResearchDetailPage = ({ params }: { params: { id: string } }) => {
  const { user } = useAuth()
  const router = useRouter()
  const [research, setResearch] = useState<ResearchData | null>(null)
  const [activeTab, setActiveTab] = useState('overview')
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)

  useEffect(() => {
    // Check if user is authenticated, if not show auth modal
    if (!user) {
      setIsAuthModalOpen(true)
      return
    }

    fetchResearch()
  }, [params.id, user])

  const fetchResearch = async () => {
    try {
      const response = await fetch(`/api/research/${params.id}`)
      
      if (!response.ok) {
        const errorData = await response.json()
        console.error('Research fetch error:', errorData)
        
        // If research not available yet, show sample data for demo
        if (response.status === 404) {
          setResearch(getSampleResearch())
          return
        }
        
        throw new Error(errorData.error || 'Failed to fetch research')
      }
      
      const data = await response.json()
      setResearch(data)
    } catch (error) {
      console.error('Error fetching research:', error)
      // Fallback to sample data for demo purposes
      setResearch(getSampleResearch())
    }
  }

  const getSampleResearch = (): ResearchData => {
    return {
      id: params.id,
      title: 'AI-Powered Personal Finance Apps Market Analysis',
      brief: 'Comprehensive analysis of the AI-driven personal finance application market, covering user adoption patterns, competitive landscape, and growth projections through 2027.',
      executiveSummary: 'The AI-powered personal finance apps market is experiencing unprecedented growth, driven by increasing consumer demand for automated financial management and personalized investment advice. Our analysis reveals a market valued at $12.8B in 2024, with projected growth of 23.4% CAGR through 2027. Key drivers include rising financial literacy awareness, smartphone penetration, and regulatory support for fintech innovation.',
      methodology: 'This research employed a mixed-methods approach combining quantitative market analysis, consumer surveys (n=2,847), expert interviews with 23 industry leaders, and competitive intelligence gathering across 47 major players in the space.',
      keyFindings: [
        'Market size expected to reach $24.1B by 2027',
        '67% of millennials prefer AI-driven financial advice',
        'Average user engagement increased 34% year-over-year',
        'Regulatory compliance remains the top challenge for 78% of companies',
        'B2B2C partnerships driving 45% of new user acquisition'
      ],
      marketSize: '$12.8B',
      growthRate: '+23.4%',
      competitorCount: 47,
      releaseDate: '2024-01-20',
      geographicFocus: 'North America',
      industry: 'FinTech',
      isPro: false,
      competitiveAnalysis: [
        {
          companyName: 'Mint',
          description: 'Leading personal finance management platform with AI-powered insights',
          marketShare: '18.2%',
          strengths: ['Strong brand recognition', 'Comprehensive feature set', 'Free tier availability'],
          weaknesses: ['Limited investment options', 'Privacy concerns', 'Outdated UI'],
          fundingStage: 'Acquired',
          revenue: '$200M+'
        },
        {
          companyName: 'YNAB',
          description: 'Subscription-based budgeting app with educational focus',
          marketShare: '12.7%',
          strengths: ['Strong user loyalty', 'Educational content', 'Active community'],
          weaknesses: ['Steep learning curve', 'No free tier', 'Limited automation'],
          fundingStage: 'Bootstrapped',
          revenue: '$50M+'
        },
        {
          companyName: 'Personal Capital',
          description: 'Wealth management platform with AI-driven investment advice',
          marketShare: '9.4%',
          strengths: ['Investment tracking', 'Professional advisory', 'Net worth analysis'],
          weaknesses: ['Complex interface', 'High minimum investment', 'Limited budgeting'],
          fundingStage: 'Acquired',
          revenue: '$150M+'
        }
      ],
      pouAnalysis: [
        {
          id: '1',
          title: 'AI-Powered Budget Optimization',
          targetAudience: 'Young professionals aged 25-35 with irregular income patterns',
          marketEvidence: 'Survey data shows 73% of gig workers struggle with budget planning due to income variability',
          painPoints: ['Unpredictable income', 'Manual budget adjustments', 'Lack of savings discipline'],
          solutions: ['Dynamic budget allocation', 'Income prediction algorithms', 'Automated savings rules'],
          marketSize: '$2.1B addressable market',
          competition: 'Low - few solutions address irregular income specifically',
          barriers: ['Data privacy concerns', 'User behavior change required', 'Regulatory compliance'],
          timeline: '12-18 months to market'
        },
        {
          id: '2',
          title: 'Micro-Investment Automation',
          targetAudience: 'First-time investors with limited capital and investment knowledge',
          marketEvidence: '89% of millennials interested in investing but 67% feel overwhelmed by options',
          painPoints: ['High minimum investments', 'Complex investment decisions', 'Fear of losing money'],
          solutions: ['Round-up investments', 'AI portfolio management', 'Educational content integration'],
          marketSize: '$4.7B addressable market',
          competition: 'Medium - established players like Acorns and Stash',
          barriers: ['Regulatory requirements', 'Customer acquisition costs', 'Trust building'],
          timeline: '18-24 months to market'
        }
      ]
    }
  }

  const handleAuthModalClose = () => {
    setIsAuthModalOpen(false)
    // Redirect back to research page if user closes auth modal
    router.push('/research')
  }

  if (!research) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <div className="text-muted-foreground">Loading research...</div>
        </div>
      </div>
    )
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex items-center space-x-4 mb-6">
            <Link href="/research">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Research
              </Button>
            </Link>
            <div className="flex items-center space-x-2">
              <Badge variant="secondary">{research.industry}</Badge>
              {research.isPro && (
                <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
                  <Lock className="w-3 h-3 mr-1" />
                  Pro
                </Badge>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h1 className="text-3xl font-bold mb-4">{research.title}</h1>
              <p className="text-muted-foreground text-lg mb-6">{research.brief}</p>
              
              <div className="flex items-center space-x-6 text-sm text-muted-foreground mb-6">
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>{formatDate(research.releaseDate)}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Globe className="w-4 h-4" />
                  <span>{research.geographicFocus}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users className="w-4 h-4" />
                  <span>{research.competitorCount} competitors analyzed</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Market Overview</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Market Size</div>
                    <div className="text-2xl font-bold text-primary">{research.marketSize}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Growth Rate</div>
                    <div className="text-xl font-semibold text-green-400">{research.growthRate}</div>
                  </div>
                  <div className="pt-4 space-y-2">
                    <Button className="w-full gradient-bg">
                      <Download className="w-4 h-4 mr-2" />
                      Download PDF
                    </Button>
                    <div className="grid grid-cols-2 gap-2">
                      <Button variant="outline" size="sm">
                        <Share className="w-4 h-4 mr-1" />
                        Share
                      </Button>
                      <Button variant="outline" size="sm">
                        <Bookmark className="w-4 h-4 mr-1" />
                        Save
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.div>

        {/* Content Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="competitive">Competitive Analysis</TabsTrigger>
              <TabsTrigger value="opportunities">Opportunities</TabsTrigger>
              <TabsTrigger value="methodology">Methodology</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <FileText className="w-5 h-5" />
                      <span>Executive Summary</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {research.executiveSummary}
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <TrendingUp className="w-5 h-5" />
                      <span>Key Findings</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {(research.keyFindings || []).map((finding, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{finding}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="competitive" className="mt-6">
              <div className="space-y-6">
                {(research.competitiveAnalysis || []).map((competitor, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle>{competitor.companyName}</CardTitle>
                        <Badge variant="outline">{competitor.marketShare} market share</Badge>
                      </div>
                      <CardDescription>{competitor.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div>
                          <h4 className="font-medium text-green-400 mb-2">Strengths</h4>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            {(competitor.strengths || []).map((strength, i) => (
                              <li key={i}>• {strength}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-red-400 mb-2">Weaknesses</h4>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            {(competitor.weaknesses || []).map((weakness, i) => (
                              <li key={i}>• {weakness}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium mb-2">Funding Stage</h4>
                          <p className="text-sm text-muted-foreground">{competitor.fundingStage}</p>
                        </div>
                        <div>
                          <h4 className="font-medium mb-2">Revenue</h4>
                          <p className="text-sm text-muted-foreground">{competitor.revenue}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="opportunities" className="mt-6">
              <ResearchOpportunities researchId={research.id} />
            </TabsContent>

            <TabsContent value="methodology" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <BarChart3 className="w-5 h-5" />
                    <span>Research Methodology</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {research.methodology}
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>

        <AuthModal 
          isOpen={isAuthModalOpen} 
          onClose={handleAuthModalClose}
        />
      </div>

      <Footer />
    </div>
  )
}

export default ResearchDetailPage
