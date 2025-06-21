
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  ArrowLeft, 
  Target, 
  Users,
  TrendingUp,
  AlertTriangle,
  Lightbulb,
  BarChart3,
  Shield,
  Clock,
  Download,
  Share
} from 'lucide-react'

interface POUData {
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
  researchTitle: string
  researchId: string
}

const POUDetailPage = ({ params }: { params: { id: string; pouId: string } }) => {
  const [pouData, setPouData] = useState<POUData | null>(null)

  useEffect(() => {
    // Sample data - in real app, fetch from API
    const samplePOU: POUData = {
      id: params.pouId,
      title: 'AI-Powered Budget Optimization',
      targetAudience: 'Young professionals aged 25-35 with irregular income patterns, particularly gig workers, freelancers, and commission-based employees who struggle with traditional budgeting methods.',
      marketEvidence: 'Our comprehensive survey of 2,847 respondents reveals that 73% of gig workers struggle with budget planning due to income variability. Additionally, 89% of freelancers report difficulty in maintaining consistent savings rates, while 67% express frustration with existing budgeting tools that assume regular income patterns. Market research indicates this demographic represents 36% of the workforce and is growing at 15% annually.',
      painPoints: [
        'Unpredictable income streams making traditional budgeting ineffective',
        'Manual budget adjustments required with each income fluctuation',
        'Lack of automated savings discipline during high-income periods',
        'Difficulty in planning for irregular expenses and tax obligations',
        'Limited financial products designed for variable income earners',
        'Stress and anxiety around financial planning and cash flow management'
      ],
      solutions: [
        'Dynamic budget allocation algorithms that adjust spending categories based on income patterns',
        'Machine learning-powered income prediction models using historical data',
        'Automated savings rules that scale with income fluctuations',
        'Smart expense categorization with irregular income considerations',
        'Tax obligation forecasting and automatic reserve setting',
        'Personalized financial coaching based on income volatility patterns'
      ],
      marketSize: '$2.1B addressable market within the broader $12.8B personal finance app market',
      competition: 'Low to Medium - While general budgeting apps exist (Mint, YNAB), few solutions specifically address irregular income patterns. Closest competitors include Tiller and PocketGuard, but neither offers AI-powered income prediction or dynamic budget optimization.',
      barriers: [
        'Data privacy concerns around income and spending pattern analysis',
        'User behavior change required to adopt new budgeting methodologies',
        'Regulatory compliance for financial advice and automated savings',
        'Technical complexity of building accurate income prediction models',
        'Customer acquisition costs in the competitive fintech space',
        'Building trust with users who have been disappointed by previous solutions'
      ],
      timeline: '12-18 months to market with MVP, 24-30 months for full feature set',
      researchTitle: 'AI-Powered Personal Finance Apps Market Analysis',
      researchId: params.id
    }
    setPouData(samplePOU)
  }, [params.id, params.pouId])

  if (!pouData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <div className="text-muted-foreground">Loading opportunity analysis...</div>
        </div>
      </div>
    )
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
            <Link href={`/research/${pouData.researchId}`}>
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Research
              </Button>
            </Link>
            <Badge variant="secondary">Product Opportunity</Badge>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h1 className="text-3xl font-bold mb-4">{pouData.title}</h1>
              <p className="text-muted-foreground text-sm mb-2">
                From: {pouData.researchTitle}
              </p>
              <p className="text-muted-foreground text-lg mb-6">
                Detailed analysis of market opportunity and implementation strategy
              </p>
            </div>

            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Quick Overview</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Market Size</div>
                    <div className="text-lg font-bold text-primary">{pouData.marketSize.split(' ')[0]}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Timeline</div>
                    <div className="text-sm font-semibold">{pouData.timeline}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Competition</div>
                    <div className="text-sm font-semibold">{pouData.competition.split(' - ')[0]}</div>
                  </div>
                  <div className="pt-4 space-y-2">
                    <Button className="w-full gradient-bg">
                      <Download className="w-4 h-4 mr-2" />
                      Download Analysis
                    </Button>
                    <Button variant="outline" size="sm" className="w-full">
                      <Share className="w-4 h-4 mr-2" />
                      Share Opportunity
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.div>

        {/* Content Sections */}
        <div className="space-y-8">
          {/* Target Audience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-blue-500" />
                  <span>Target Audience</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {pouData.targetAudience}
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Market Evidence */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BarChart3 className="w-5 h-5 text-green-500" />
                  <span>Market Evidence</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {pouData.marketEvidence}
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Pain Points & Solutions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <AlertTriangle className="w-5 h-5 text-red-500" />
                    <span>Pain Points</span>
                  </CardTitle>
                  <CardDescription>
                    Key challenges faced by the target audience
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {pouData.painPoints.map((point, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground text-sm leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Lightbulb className="w-5 h-5 text-yellow-500" />
                    <span>Proposed Solutions</span>
                  </CardTitle>
                  <CardDescription>
                    Innovative approaches to address market needs
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {pouData.solutions.map((solution, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground text-sm leading-relaxed">{solution}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          {/* Market Analysis */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <TrendingUp className="w-5 h-5 text-purple-500" />
                    <span>Market Size & Competition</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Addressable Market</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {pouData.marketSize}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Competitive Landscape</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {pouData.competition}
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-orange-500" />
                    <span>Implementation Timeline</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {pouData.timeline}
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>MVP Development</span>
                      <span className="text-muted-foreground">6-8 months</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Beta Testing</span>
                      <span className="text-muted-foreground">2-3 months</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Market Launch</span>
                      <span className="text-muted-foreground">12-18 months</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          {/* Barriers & Risks */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-amber-500" />
                  <span>Implementation Barriers & Risks</span>
                </CardTitle>
                <CardDescription>
                  Key challenges and mitigation strategies for successful execution
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {pouData.barriers.map((barrier, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 bg-muted/30 rounded-lg">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm leading-relaxed">{barrier}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Card className="bg-gradient-to-r from-primary/10 via-primary/5 to-background border-primary/20">
              <CardContent className="p-8 text-center">
                <Target className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Ready to Pursue This Opportunity?</h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  This analysis provides a comprehensive foundation for product development. 
                  Consider conducting additional user interviews and competitive analysis before proceeding.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="gradient-bg">
                    <Download className="w-5 h-5 mr-2" />
                    Download Full Analysis
                  </Button>
                  <Button size="lg" variant="outline">
                    <Users className="w-5 h-5 mr-2" />
                    Connect with Experts
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default POUDetailPage
