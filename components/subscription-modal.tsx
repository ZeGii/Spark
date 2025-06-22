
'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  X, 
  Crown, 
  Check,
  Zap,
  FileText,
  Users,
  BarChart3,
  Headphones,
  Star
} from 'lucide-react'

interface SubscriptionModalProps {
  isOpen: boolean
  onClose: () => void
  onSubscribe: (plan: 'FREE' | 'PRO') => void
}

const SubscriptionModal = ({ isOpen, onClose, onSubscribe }: SubscriptionModalProps) => {
  const [selectedPlan, setSelectedPlan] = useState<'FREE' | 'PRO'>('PRO')
  const [isProcessing, setIsProcessing] = useState(false)

  const handleSubscribe = async () => {
    setIsProcessing(true)
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    onSubscribe(selectedPlan)
    setIsProcessing(false)
  }

  const plans = [
    {
      id: 'FREE',
      name: 'Free Plan',
      price: '$0',
      period: 'forever',
      description: 'Perfect for getting started with market research',
      features: [
        'Access to trending topics',
        'Vote on research proposals',
        'Propose new topics',
        'Limited research previews',
        'Community discussions',
        'Basic notifications'
      ],
      limitations: [
        'Limited to 3 research reports per month',
        'No access to competitive analysis',
        'No POU analysis access',
        'Standard support only'
      ],
      popular: false,
      buttonText: 'Current Plan',
      buttonVariant: 'outline' as const
    },
    {
      id: 'PRO',
      name: 'Pro Plan',
      price: '$60',
      period: 'per month',
      description: 'Unlock the full power of market intelligence',
      features: [
        'Unlimited access to all research reports',
        'Full competitive analysis',
        'Complete POU analysis',
        'Advanced filtering and search',
        'Priority support & expert consultations',
        'Early access to new research',
        '60% discount on custom research requests',
        'Advanced analytics dashboard',
        'Export reports to PDF',
        'Team collaboration features'
      ],
      limitations: [],
      popular: true,
      buttonText: 'Upgrade to Pro',
      buttonVariant: 'default' as const
    }
  ]

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto"
          >
            <Card>
              <CardHeader className="text-center">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <Crown className="w-6 h-6 text-primary" />
                    <span className="text-lg font-semibold">Choose Your Plan</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={onClose}
                    className="h-8 w-8 p-0"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
                <CardTitle className="text-2xl">Unlock Premium Market Intelligence</CardTitle>
                <CardDescription>
                  Get access to comprehensive research reports and competitive analysis
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {plans.map((plan) => (
                    <motion.div
                      key={plan.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: plan.id === 'PRO' ? 0.1 : 0 }}
                      className={`relative ${
                        selectedPlan === plan.id ? 'ring-2 ring-primary' : ''
                      }`}
                    >
                      <Card 
                        className={`h-full cursor-pointer transition-all duration-200 ${
                          plan.popular ? 'border-primary shadow-lg' : ''
                        } ${selectedPlan === plan.id ? 'bg-primary/5' : ''}`}
                        onClick={() => setSelectedPlan(plan.id as 'FREE' | 'PRO')}
                      >
                        {plan.popular && (
                          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                            <Badge className="bg-gradient-to-r from-primary to-primary/80 text-white px-3 py-1">
                              <Star className="w-3 h-3 mr-1" />
                              Most Popular
                            </Badge>
                          </div>
                        )}
                        
                        <CardHeader className="text-center">
                          <CardTitle className="text-xl">{plan.name}</CardTitle>
                          <div className="space-y-2">
                            <div className="text-3xl font-bold">
                              {plan.price}
                              <span className="text-sm font-normal text-muted-foreground">
                                /{plan.period}
                              </span>
                            </div>
                            <CardDescription>{plan.description}</CardDescription>
                          </div>
                        </CardHeader>
                        
                        <CardContent className="space-y-4">
                          <div>
                            <h4 className="font-medium mb-3 flex items-center space-x-2">
                              <Check className="w-4 h-4 text-green-500" />
                              <span>Included Features</span>
                            </h4>
                            <ul className="space-y-2">
                              {plan.features.map((feature, index) => (
                                <li key={index} className="flex items-start space-x-2 text-sm">
                                  <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          {plan.limitations.length > 0 && (
                            <div>
                              <h4 className="font-medium mb-3 text-muted-foreground">Limitations</h4>
                              <ul className="space-y-2">
                                {plan.limitations.map((limitation, index) => (
                                  <li key={index} className="flex items-start space-x-2 text-sm text-muted-foreground">
                                    <X className="w-4 h-4 mt-0.5 flex-shrink-0" />
                                    <span>{limitation}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>

                {/* Pro Plan Benefits */}
                <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 via-primary/5 to-background rounded-lg border border-primary/20">
                  <h3 className="text-lg font-semibold mb-4 text-center">Why Choose Pro?</h3>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="text-center">
                      <FileText className="w-8 h-8 text-primary mx-auto mb-2" />
                      <h4 className="font-medium mb-1">Unlimited Reports</h4>
                      <p className="text-xs text-muted-foreground">Access all research without limits</p>
                    </div>
                    <div className="text-center">
                      <BarChart3 className="w-8 h-8 text-primary mx-auto mb-2" />
                      <h4 className="font-medium mb-1">Advanced Analytics</h4>
                      <p className="text-xs text-muted-foreground">Deep market insights and trends</p>
                    </div>
                    <div className="text-center">
                      <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                      <h4 className="font-medium mb-1">Expert Support</h4>
                      <p className="text-xs text-muted-foreground">Priority access to consultations</p>
                    </div>
                    <div className="text-center">
                      <Zap className="w-8 h-8 text-primary mx-auto mb-2" />
                      <h4 className="font-medium mb-1">Early Access</h4>
                      <p className="text-xs text-muted-foreground">First to see new research</p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-6">
                  <Button
                    variant="outline"
                    onClick={onClose}
                    className="flex-1"
                  >
                    Maybe Later
                  </Button>
                  <Button
                    onClick={handleSubscribe}
                    disabled={isProcessing}
                    className="flex-1 gradient-bg"
                  >
                    {isProcessing ? (
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Processing...</span>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-2">
                        {selectedPlan === 'PRO' ? <Crown className="w-4 h-4" /> : <Check className="w-4 h-4" />}
                        <span>
                          {selectedPlan === 'PRO' ? 'Subscribe to Pro' : 'Continue with Free'}
                        </span>
                      </div>
                    )}
                  </Button>
                </div>

                {selectedPlan === 'PRO' && (
                  <p className="text-xs text-muted-foreground text-center mt-4">
                    Cancel anytime. No long-term commitments. 7-day money-back guarantee.
                  </p>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

export default SubscriptionModal
