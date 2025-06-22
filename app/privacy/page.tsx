
'use client'

import { motion } from 'framer-motion'
import { Shield, Eye, Lock, Users, FileText, AlertCircle } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Footer from '@/components/footer'

const PrivacyPage = () => {
  const privacyPrinciples = [
    {
      icon: Shield,
      title: 'Data Protection',
      description: 'We use industry-standard encryption and security measures to protect your personal information.',
      color: 'bg-blue-500/10 text-blue-400'
    },
    {
      icon: Eye,
      title: 'Transparency',
      description: 'We clearly explain what data we collect, how we use it, and who we share it with.',
      color: 'bg-green-500/10 text-green-400'
    },
    {
      icon: Lock,
      title: 'User Control',
      description: 'You have full control over your data with options to view, edit, or delete your information.',
      color: 'bg-purple-500/10 text-purple-400'
    },
    {
      icon: Users,
      title: 'Minimal Collection',
      description: 'We only collect data that is necessary to provide and improve our services.',
      color: 'bg-orange-500/10 text-orange-400'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/10">
        <div className="absolute inset-0 bg-dots-pattern opacity-20" />
        <div className="relative container-max section-padding py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center mb-6">
              <Shield className="w-8 h-8 text-primary mr-3" />
              <Badge variant="secondary" className="text-sm font-medium px-4 py-2">
                Privacy Policy
              </Badge>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Your Privacy{' '}
              <span className="text-gradient-primary">Matters</span>
            </h1>
            <p className="text-xl text-foreground/80 mb-12 leading-relaxed">
              We're committed to protecting your privacy and being transparent about how we collect, 
              use, and protect your personal information.
            </p>
            <div className="flex items-center justify-center space-x-4">
              <Badge variant="outline" className="text-sm px-4 py-2">
                Last Updated: January 2024
              </Badge>
              <Badge variant="outline" className="text-sm px-4 py-2">
                GDPR Compliant
              </Badge>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Privacy Principles */}
      <section className="section-padding bg-background">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-card-foreground">
              Our Privacy{' '}
              <span className="text-gradient-primary">Principles</span>
            </h2>
            <p className="text-foreground/70 max-w-3xl mx-auto text-lg leading-relaxed">
              These core principles guide how we handle your personal information and protect your privacy.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {privacyPrinciples.map((principle, index) => {
              const Icon = principle.icon
              return (
                <motion.div
                  key={principle.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className={`w-16 h-16 rounded-2xl ${principle.color} flex items-center justify-center mb-4`}>
                        <Icon className="w-8 h-8" />
                      </div>
                      <CardTitle className="text-xl mb-3">{principle.title}</CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        {principle.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="section-padding bg-gradient-to-br from-muted/10 via-background to-primary/5">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <Card className="shadow-lg">
              <CardContent className="p-8 lg:p-12">
                <div className="prose prose-lg max-w-none">
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-2xl font-bold text-card-foreground mb-4">Information We Collect</h2>
                      <div className="text-card-foreground/70 space-y-4">
                        <p>We collect information you provide directly to us, such as when you:</p>
                        <ul className="list-disc pl-6 space-y-2">
                          <li>Create an account or profile</li>
                          <li>Participate in research topics or voting</li>
                          <li>Contact us for support</li>
                          <li>Subscribe to our newsletter</li>
                          <li>Use our platform features</li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h2 className="text-2xl font-bold text-card-foreground mb-4">How We Use Your Information</h2>
                      <div className="text-card-foreground/70 space-y-4">
                        <p>We use the information we collect to:</p>
                        <ul className="list-disc pl-6 space-y-2">
                          <li>Provide, maintain, and improve our services</li>
                          <li>Process transactions and send related information</li>
                          <li>Send technical notices and support messages</li>
                          <li>Communicate about products, services, and events</li>
                          <li>Monitor and analyze trends and usage</li>
                          <li>Detect and prevent fraudulent transactions</li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h2 className="text-2xl font-bold text-card-foreground mb-4">Information Sharing</h2>
                      <div className="text-card-foreground/70 space-y-4">
                        <p>We do not sell, trade, or otherwise transfer your personal information to third parties except:</p>
                        <ul className="list-disc pl-6 space-y-2">
                          <li>With your explicit consent</li>
                          <li>To trusted service providers who assist in operating our platform</li>
                          <li>When required by law or to protect our rights</li>
                          <li>In connection with a merger, acquisition, or sale of assets</li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h2 className="text-2xl font-bold text-card-foreground mb-4">Data Security</h2>
                      <div className="text-card-foreground/70 space-y-4">
                        <p>We implement appropriate security measures to protect your personal information, including:</p>
                        <ul className="list-disc pl-6 space-y-2">
                          <li>Encryption of data in transit and at rest</li>
                          <li>Regular security audits and assessments</li>
                          <li>Access controls and authentication measures</li>
                          <li>Employee training on data protection</li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h2 className="text-2xl font-bold text-card-foreground mb-4">Your Rights</h2>
                      <div className="text-card-foreground/70 space-y-4">
                        <p>You have the right to:</p>
                        <ul className="list-disc pl-6 space-y-2">
                          <li>Access and receive a copy of your personal data</li>
                          <li>Rectify inaccurate or incomplete data</li>
                          <li>Request deletion of your personal data</li>
                          <li>Object to processing of your personal data</li>
                          <li>Request restriction of processing</li>
                          <li>Data portability</li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h2 className="text-2xl font-bold text-card-foreground mb-4">Cookies and Tracking</h2>
                      <div className="text-card-foreground/70 space-y-4">
                        <p>We use cookies and similar tracking technologies to:</p>
                        <ul className="list-disc pl-6 space-y-2">
                          <li>Remember your preferences and settings</li>
                          <li>Analyze how our platform is used</li>
                          <li>Provide personalized content and features</li>
                          <li>Improve our services and user experience</li>
                        </ul>
                        <p>You can control cookies through your browser settings.</p>
                      </div>
                    </div>

                    <div>
                      <h2 className="text-2xl font-bold text-card-foreground mb-4">Contact Us</h2>
                      <div className="text-card-foreground/70 space-y-4">
                        <p>If you have any questions about this Privacy Policy or our data practices, please contact us:</p>
                        <ul className="list-none space-y-2">
                          <li>Email: privacy@sparkresearch.com</li>
                          <li>Phone: +1 (555) 123-4567</li>
                          <li>Address: 123 Innovation Drive, San Francisco, CA 94105</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="section-padding bg-background">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <Card className="border-orange-200 bg-orange-50/50">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <AlertCircle className="w-8 h-8 text-orange-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-orange-900 mb-3">Important Notice</h3>
                    <p className="text-orange-800 leading-relaxed">
                      This Privacy Policy may be updated from time to time. We will notify you of any material 
                      changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. 
                      Your continued use of our services after any changes constitutes acceptance of the new Privacy Policy.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default PrivacyPage
