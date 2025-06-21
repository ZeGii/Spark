
'use client'

import { motion } from 'framer-motion'
import { FileText, Scale, Shield, Users, AlertTriangle, CheckCircle } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Footer from '@/components/footer'

const TermsPage = () => {
  const keyTerms = [
    {
      icon: Users,
      title: 'User Responsibilities',
      description: 'Guidelines for appropriate use of our platform and community standards.',
      color: 'bg-blue-500/10 text-blue-400'
    },
    {
      icon: Shield,
      title: 'Intellectual Property',
      description: 'Protection of content, research, and proprietary information on our platform.',
      color: 'bg-green-500/10 text-green-400'
    },
    {
      icon: Scale,
      title: 'Limitation of Liability',
      description: 'Understanding the scope and limits of our legal responsibilities.',
      color: 'bg-purple-500/10 text-purple-400'
    },
    {
      icon: CheckCircle,
      title: 'Service Availability',
      description: 'Terms regarding platform availability, maintenance, and service levels.',
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
              <FileText className="w-8 h-8 text-primary mr-3" />
              <Badge variant="secondary" className="text-sm font-medium px-4 py-2">
                Terms of Service
              </Badge>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Terms of{' '}
              <span className="text-gradient-primary">Service</span>
            </h1>
            <p className="text-xl text-foreground/80 mb-12 leading-relaxed">
              These terms govern your use of Spark and outline the rights and responsibilities 
              of all users of our market research platform.
            </p>
            <div className="flex items-center justify-center space-x-4">
              <Badge variant="outline" className="text-sm px-4 py-2">
                Last Updated: January 2024
              </Badge>
              <Badge variant="outline" className="text-sm px-4 py-2">
                Version 2.1
              </Badge>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Terms Overview */}
      <section className="section-padding bg-background">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-card-foreground">
              Key{' '}
              <span className="text-gradient-primary">Terms</span>
            </h2>
            <p className="text-foreground/70 max-w-3xl mx-auto text-lg leading-relaxed">
              Understanding the main areas covered by our Terms of Service.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {keyTerms.map((term, index) => {
              const Icon = term.icon
              return (
                <motion.div
                  key={term.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className={`w-16 h-16 rounded-2xl ${term.color} flex items-center justify-center mb-4`}>
                        <Icon className="w-8 h-8" />
                      </div>
                      <CardTitle className="text-xl mb-3">{term.title}</CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        {term.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Terms Content */}
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
                      <h2 className="text-2xl font-bold text-card-foreground mb-4">1. Acceptance of Terms</h2>
                      <div className="text-card-foreground/70 space-y-4">
                        <p>
                          By accessing and using Spark, you accept and agree to be bound by the terms and provision 
                          of this agreement. If you do not agree to abide by the above, please do not use this service.
                        </p>
                        <p>
                          These Terms of Service constitute a legally binding agreement between you and Spark regarding 
                          your use of our platform and services.
                        </p>
                      </div>
                    </div>

                    <div>
                      <h2 className="text-2xl font-bold text-card-foreground mb-4">2. Description of Service</h2>
                      <div className="text-card-foreground/70 space-y-4">
                        <p>Spark provides a market research platform that enables users to:</p>
                        <ul className="list-disc pl-6 space-y-2">
                          <li>Access market research reports and insights</li>
                          <li>Participate in community-driven research topics</li>
                          <li>Vote on research priorities</li>
                          <li>Contribute to market intelligence discussions</li>
                          <li>Access premium research content (with subscription)</li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h2 className="text-2xl font-bold text-card-foreground mb-4">3. User Accounts and Registration</h2>
                      <div className="text-card-foreground/70 space-y-4">
                        <p>To access certain features, you must register for an account. You agree to:</p>
                        <ul className="list-disc pl-6 space-y-2">
                          <li>Provide accurate, current, and complete information</li>
                          <li>Maintain and update your information</li>
                          <li>Keep your password secure and confidential</li>
                          <li>Accept responsibility for all activities under your account</li>
                          <li>Notify us immediately of any unauthorized use</li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h2 className="text-2xl font-bold text-card-foreground mb-4">4. Acceptable Use Policy</h2>
                      <div className="text-card-foreground/70 space-y-4">
                        <p>You agree not to use the service to:</p>
                        <ul className="list-disc pl-6 space-y-2">
                          <li>Violate any applicable laws or regulations</li>
                          <li>Infringe on intellectual property rights</li>
                          <li>Transmit harmful, offensive, or inappropriate content</li>
                          <li>Attempt to gain unauthorized access to our systems</li>
                          <li>Interfere with or disrupt the service</li>
                          <li>Use automated systems to access the platform</li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h2 className="text-2xl font-bold text-card-foreground mb-4">5. Intellectual Property Rights</h2>
                      <div className="text-card-foreground/70 space-y-4">
                        <p>
                          All content on Spark, including research reports, data, text, graphics, logos, and software, 
                          is owned by Spark or its licensors and is protected by copyright and other intellectual property laws.
                        </p>
                        <p>
                          You may not reproduce, distribute, modify, or create derivative works of our content without 
                          explicit written permission.
                        </p>
                      </div>
                    </div>

                    <div>
                      <h2 className="text-2xl font-bold text-card-foreground mb-4">6. User-Generated Content</h2>
                      <div className="text-card-foreground/70 space-y-4">
                        <p>When you submit content to our platform, you:</p>
                        <ul className="list-disc pl-6 space-y-2">
                          <li>Retain ownership of your content</li>
                          <li>Grant us a license to use, display, and distribute your content</li>
                          <li>Represent that you have the right to submit the content</li>
                          <li>Agree that your content complies with our community guidelines</li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h2 className="text-2xl font-bold text-card-foreground mb-4">7. Privacy and Data Protection</h2>
                      <div className="text-card-foreground/70 space-y-4">
                        <p>
                          Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect 
                          your information when you use our service. By using Spark, you agree to the collection and 
                          use of information in accordance with our Privacy Policy.
                        </p>
                      </div>
                    </div>

                    <div>
                      <h2 className="text-2xl font-bold text-card-foreground mb-4">8. Limitation of Liability</h2>
                      <div className="text-card-foreground/70 space-y-4">
                        <p>
                          Spark shall not be liable for any indirect, incidental, special, consequential, or punitive 
                          damages, including without limitation, loss of profits, data, use, goodwill, or other 
                          intangible losses.
                        </p>
                        <p>
                          Our total liability shall not exceed the amount paid by you for the service during the 
                          twelve months preceding the claim.
                        </p>
                      </div>
                    </div>

                    <div>
                      <h2 className="text-2xl font-bold text-card-foreground mb-4">9. Termination</h2>
                      <div className="text-card-foreground/70 space-y-4">
                        <p>
                          We may terminate or suspend your account and access to the service immediately, without prior 
                          notice, for any reason, including breach of these Terms.
                        </p>
                        <p>
                          You may terminate your account at any time by contacting us or using the account deletion 
                          feature in your settings.
                        </p>
                      </div>
                    </div>

                    <div>
                      <h2 className="text-2xl font-bold text-card-foreground mb-4">10. Changes to Terms</h2>
                      <div className="text-card-foreground/70 space-y-4">
                        <p>
                          We reserve the right to modify these terms at any time. We will notify users of any material 
                          changes via email or through the platform. Your continued use of the service after changes 
                          constitutes acceptance of the new terms.
                        </p>
                      </div>
                    </div>

                    <div>
                      <h2 className="text-2xl font-bold text-card-foreground mb-4">11. Contact Information</h2>
                      <div className="text-card-foreground/70 space-y-4">
                        <p>If you have any questions about these Terms of Service, please contact us:</p>
                        <ul className="list-none space-y-2">
                          <li>Email: legal@sparkresearch.com</li>
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
            <Card className="border-blue-200 bg-blue-50/50">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <AlertTriangle className="w-8 h-8 text-blue-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-blue-900 mb-3">Legal Notice</h3>
                    <p className="text-blue-800 leading-relaxed">
                      These Terms of Service are governed by the laws of the State of California, United States. 
                      Any disputes arising from these terms will be resolved through binding arbitration in 
                      San Francisco, California. If you do not agree with these terms, please discontinue use 
                      of our service immediately.
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

export default TermsPage
