
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
  const [activeTab, setActiveTab] = useState('opportunities')
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)

  useEffect(() => {
    // Simplified - just fetch research data
    fetchResearch()
  }, [params.id])

  const transformResearchData = (apiData: any): ResearchData => {
    return {
      id: apiData.id,
      title: apiData.title,
      brief: apiData.brief,
      executiveSummary: apiData.executiveSummary || 'Research analysis in progress...',
      methodology: apiData.methodology || 'Comprehensive market analysis and opportunity identification.',
      keyFindings: Array.isArray(apiData.keyFindings) ? apiData.keyFindings : [],
      marketSize: apiData.marketSize || 'TBD',
      growthRate: apiData.growthRate || 'TBD',
      competitorCount: apiData.competitorCount || 0,
      releaseDate: apiData.releaseDate,
      geographicFocus: apiData.country || apiData.topic?.country || 'Global',
      industry: apiData.industry || apiData.topic?.industry || 'Technology',
      isPro: false, // Can be updated based on subscription logic
      competitiveAnalysis: apiData.competitiveAnalysis || [], // Use actual data
      pouAnalysis: apiData.pouAnalysis || [] // Use actual data
    }
  }

  const fetchResearch = async () => {
    try {
      const response = await fetch(`/api/research/${params.id}`)
      
      if (!response.ok) {
        const errorData = await response.json()
        console.error('Research fetch error:', errorData)
        
        if (response.status === 404) {
          // Try to get research from the list API
          const listResponse = await fetch('/api/research')
          if (listResponse.ok) {
            const allResearch = await listResponse.json()
            const foundResearch = allResearch.find((r: any) => r.id === params.id)
            if (foundResearch) {
              setResearch(transformResearchData(foundResearch))
              return
            }
          }
        }
        
        throw new Error(errorData.error || 'Failed to fetch research')
      }
      
      const data = await response.json()
      setResearch(transformResearchData(data))
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

  // Show fallback data while research loads
  if (!research) {
    // Use a default research object with the ID from params to show something immediately
    const defaultResearch: ResearchData = {
      id: params.id,
      title: 'Loading Research...',
      brief: 'Research data is being loaded...',
      executiveSummary: 'Loading...',
      methodology: 'Loading...',
      keyFindings: [],
      marketSize: 'TBD',
      growthRate: 'TBD',
      competitorCount: 0,
      releaseDate: new Date().toISOString(),
      geographicFocus: 'Global',
      industry: 'Technology',
      isPro: false,
      competitiveAnalysis: [],
      pouAnalysis: []
    }
    // Render with default data instead of loading screen
    return renderResearchContent(defaultResearch)
  }

  return renderResearchContent(research)

  function renderResearchContent(researchData: ResearchData) {
    const formatDate = (dateString: string) => {
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    }

    return (
    <div className="min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
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
              <Badge variant="secondary">{researchData.industry}</Badge>
              {researchData.isPro && (
                <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
                  <Lock className="w-3 h-3 mr-1" />
                  Pro
                </Badge>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h1 className="text-3xl font-bold mb-4">{researchData.title}</h1>
              <p className="text-muted-foreground text-lg mb-6">{researchData.brief}</p>
              
              <div className="flex items-center space-x-6 text-sm text-muted-foreground mb-6">
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>{formatDate(researchData.releaseDate)}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Globe className="w-4 h-4" />
                  <span>{researchData.geographicFocus}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users className="w-4 h-4" />
                  <span>{researchData.competitorCount} competitors analyzed</span>
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
                    <div className="text-2xl font-bold text-primary">{researchData.marketSize}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Growth Rate</div>
                    <div className="text-xl font-semibold text-green-400">{researchData.growthRate}</div>
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

        {/* Access Control Check */}
        {!user && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center py-12"
          >
            <Lock className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Authentication Required</h3>
            <p className="text-muted-foreground mb-6">
              Please sign in to access research reports and market opportunities.
            </p>
            <Button onClick={() => setIsAuthModalOpen(true)} size="lg">
              Sign In to Continue
            </Button>
          </motion.div>
        )}

        {/* Content Tabs - Only show if user is authenticated */}
        {user && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="market-data" className="relative">
                  Market Data
                  {user && user.subscription !== 'PRO' && (
                    <Lock className="w-3 h-3 ml-1 text-yellow-500" />
                  )}
                </TabsTrigger>
                <TabsTrigger value="opportunities">Opportunities</TabsTrigger>
                <TabsTrigger value="competitive" className="relative">
                  Competitive Analysis
                  {user && user.subscription !== 'PRO' && (
                    <Lock className="w-3 h-3 ml-1 text-yellow-500" />
                  )}
                </TabsTrigger>
              </TabsList>

            <TabsContent value="market-data" className="mt-6">
              {user?.subscription === 'PRO' ? (
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
                        {researchData.executiveSummary}
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
                        {(researchData.keyFindings || []).map((finding, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <span className="text-muted-foreground">{finding}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <BarChart3 className="w-5 h-5" />
                        <span>Research Methodology</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">
                        {researchData.methodology}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ) : (
                <Card className="text-center py-12">
                  <CardContent>
                    <Lock className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Premium Content</h3>
                    <p className="text-muted-foreground mb-6">
                      Upgrade to Pro to access detailed market data, executive summaries, and research methodology.
                    </p>
                    <Button className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600">
                      Upgrade to Pro
                    </Button>
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            <TabsContent value="opportunities" className="mt-6">
              <ResearchOpportunities researchId={researchData.id} />
            </TabsContent>

            <TabsContent value="competitive" className="mt-6">
              {user?.subscription === 'PRO' ? (
                <div className="space-y-6">
                  {(researchData.competitiveAnalysis || []).length > 0 ? (
                    (researchData.competitiveAnalysis || []).map((competitor, index) => (
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
                    ))
                  ) : (
                    <Card className="text-center py-12">
                      <CardContent>
                        <BarChart3 className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                        <h3 className="text-lg font-semibold mb-2">Competitive Analysis</h3>
                        <p className="text-muted-foreground">
                          Competitive analysis data will be available once research processing is complete.
                        </p>
                      </CardContent>
                    </Card>
                  )}
                </div>
              ) : (
                <Card className="text-center py-12">
                  <CardContent>
                    <Lock className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Premium Content</h3>
                    <p className="text-muted-foreground mb-6">
                      Upgrade to Pro to access comprehensive competitive analysis and market intelligence.
                    </p>
                    <Button className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600">
                      Upgrade to Pro
                    </Button>
                  </CardContent>
                </Card>
              )}
            </TabsContent>
          </Tabs>
        </motion.div>
        )}

        <AuthModal 
          isOpen={isAuthModalOpen} 
          onClose={handleAuthModalClose}
        />
      </div>

      <Footer />
    </div>
    )
  }
}

export default ResearchDetailPage
