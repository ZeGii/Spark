
'use client'

import { motion } from 'framer-motion'
import { Mail, MessageSquare, Phone, MapPin, Clock, Send } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import Footer from '@/components/footer'

const ContactPage = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Send us an email and we\'ll respond within 24 hours',
      contact: 'hello@sparkresearch.com',
      action: 'Send Email',
      color: 'bg-blue-500/10 text-blue-400'
    },
    {
      icon: MessageSquare,
      title: 'Live Chat',
      description: 'Chat with our team for immediate assistance',
      contact: 'Available 9 AM - 6 PM EST',
      action: 'Start Chat',
      color: 'bg-green-500/10 text-green-400'
    },
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Speak directly with our support team',
      contact: '+1 (555) 123-4567',
      action: 'Call Now',
      color: 'bg-purple-500/10 text-purple-400'
    }
  ]

  const officeInfo = [
    {
      icon: MapPin,
      title: 'Headquarters',
      details: ['123 Innovation Drive', 'San Francisco, CA 94105', 'United States']
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Monday - Friday: 9:00 AM - 6:00 PM', 'Saturday: 10:00 AM - 4:00 PM', 'Sunday: Closed']
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
              <MessageSquare className="w-8 h-8 text-primary mr-3" />
              <Badge variant="secondary" className="text-sm font-medium px-4 py-2">
                Get in Touch
              </Badge>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Contact{' '}
              <span className="text-gradient-primary">Our Team</span>
            </h1>
            <p className="text-xl text-foreground/80 mb-12 leading-relaxed">
              Have questions about Spark? Need help with your research? 
              We're here to help you succeed with your market intelligence needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="section-padding bg-background">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-card-foreground">
              Choose Your{' '}
              <span className="text-gradient-primary">Preferred Method</span>
            </h2>
            <p className="text-foreground/70 max-w-3xl mx-auto text-lg leading-relaxed">
              We offer multiple ways to get in touch. Choose the method that works best for you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => {
              const Icon = method.icon
              return (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300 text-center">
                    <CardHeader>
                      <div className={`w-16 h-16 rounded-2xl ${method.color} flex items-center justify-center mx-auto mb-4`}>
                        <Icon className="w-8 h-8" />
                      </div>
                      <CardTitle className="text-xl mb-3">{method.title}</CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        {method.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="font-semibold text-card-foreground">
                          {method.contact}
                        </div>
                        <Button className="w-full gradient-bg">
                          {method.action}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Office Info */}
      <section className="section-padding bg-gradient-to-br from-muted/10 via-background to-primary/5">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-4 text-card-foreground">
                  Send Us a{' '}
                  <span className="text-gradient-primary">Message</span>
                </h2>
                <p className="text-foreground/70 text-lg leading-relaxed">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>

              <Card className="shadow-lg">
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="John" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Doe" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="john@example.com" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="company">Company (Optional)</Label>
                      <Input id="company" placeholder="Your Company" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" placeholder="How can we help you?" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Tell us more about your inquiry..."
                        rows={6}
                      />
                    </div>
                    
                    <Button type="submit" className="w-full gradient-bg text-lg py-3">
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Office Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold mb-4 text-card-foreground">
                  Visit Our{' '}
                  <span className="text-gradient-secondary">Office</span>
                </h2>
                <p className="text-foreground/70 text-lg leading-relaxed">
                  We'd love to meet you in person. Here's where you can find us.
                </p>
              </div>

              <div className="space-y-6">
                {officeInfo.map((info, index) => {
                  const Icon = info.icon
                  return (
                    <Card key={info.title} className="hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                            <Icon className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-card-foreground mb-2">{info.title}</h3>
                            <div className="space-y-1">
                              {info.details.map((detail, idx) => (
                                <p key={idx} className="text-card-foreground/70">{detail}</p>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>

              {/* Map Placeholder */}
              <Card className="overflow-hidden">
                <div className="h-64 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                    <p className="text-card-foreground font-medium">Interactive Map</p>
                    <p className="text-card-foreground/60 text-sm">Coming Soon</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-background">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-card-foreground">
              Frequently Asked{' '}
              <span className="text-gradient-primary">Questions</span>
            </h2>
            <p className="text-foreground/70 max-w-3xl mx-auto text-lg leading-relaxed">
              Quick answers to common questions about Spark and our services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                question: "How quickly do you respond to inquiries?",
                answer: "We typically respond to all inquiries within 24 hours during business days. For urgent matters, please call us directly."
              },
              {
                question: "Do you offer custom research services?",
                answer: "Yes! We provide custom market research tailored to your specific needs. Contact us to discuss your requirements."
              },
              {
                question: "What industries do you cover?",
                answer: "We cover a wide range of industries including technology, healthcare, finance, retail, and many more. Check our research library for specific sectors."
              },
              {
                question: "How can I become a research contributor?",
                answer: "We welcome expert contributors! Reach out to us with your background and areas of expertise to join our research community."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-card-foreground mb-3">{faq.question}</h3>
                    <p className="text-card-foreground/70 leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ContactPage
