
'use client'

import { motion } from 'framer-motion'
import { Sparkles, Users, Target, Zap, Heart, Globe, TrendingUp } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Footer from '@/components/footer'

const AboutPage = () => {
  const teamValues = [
    {
      icon: Users,
      title: 'Community First',
      description: 'We believe in the power of collective intelligence and community-driven insights.',
      color: 'bg-blue-500/10 text-blue-400'
    },
    {
      icon: Target,
      title: 'Data-Driven',
      description: 'Every decision should be backed by real market data and validated insights.',
      color: 'bg-green-500/10 text-green-400'
    },
    {
      icon: Zap,
      title: 'Fast & Accessible',
      description: 'Market research should be quick, affordable, and accessible to everyone.',
      color: 'bg-yellow-500/10 text-yellow-400'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'Connecting entrepreneurs worldwide to build solutions that matter.',
      color: 'bg-purple-500/10 text-purple-400'
    }
  ]

  const stats = [
    { number: '10,000+', label: 'Active Users' },
    { number: '500+', label: 'Research Topics' },
    { number: '50+', label: 'Countries' },
    { number: '95%', label: 'Satisfaction Rate' }
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
              <Sparkles className="w-8 h-8 text-primary mr-3" />
              <Badge variant="secondary" className="text-sm font-medium px-4 py-2">
                About Spark
              </Badge>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Democratizing{' '}
              <span className="text-gradient-primary">Market Research</span>
            </h1>
            <p className="text-xl text-foreground/80 mb-12 leading-relaxed">
              We're on a mission to make professional market research accessible to every entrepreneur, 
              startup, and business through the power of community-driven insights.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-background">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center mb-6">
                <Heart className="w-8 h-8 text-primary mr-3" />
                <Badge variant="outline" className="text-sm font-medium px-4 py-2 border-primary text-primary">
                  Our Mission
                </Badge>
              </div>
              <h2 className="text-4xl font-bold mb-6 text-card-foreground">
                Empowering Entrepreneurs with{' '}
                <span className="text-gradient-primary">Real Insights</span>
              </h2>
              <p className="text-card-foreground/70 text-lg leading-relaxed mb-6">
                Traditional market research is expensive, slow, and often out of reach for small businesses 
                and startups. We're changing that by harnessing the collective intelligence of our global 
                community to deliver high-quality research at a fraction of the cost.
              </p>
              <p className="text-card-foreground/70 text-lg leading-relaxed">
                Every entrepreneur deserves access to the insights they need to make informed decisions, 
                validate their ideas, and build products that truly matter to their customers.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 gap-6"
            >
              {stats.map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <div className="bg-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="text-3xl font-bold text-gradient-primary mb-2">
                      {stat.number}
                    </div>
                    <div className="text-card-foreground/70 font-medium">{stat.label}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-gradient-to-br from-muted/10 via-background to-primary/5">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-6">
              <TrendingUp className="w-8 h-8 text-secondary mr-3" />
              <Badge variant="outline" className="text-sm font-medium px-4 py-2 border-secondary text-secondary">
                Our Values
              </Badge>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What Drives{' '}
              <span className="text-gradient-secondary">Our Work</span>
            </h2>
            <p className="text-foreground/70 max-w-3xl mx-auto text-lg leading-relaxed">
              Our core values guide everything we do, from product development to community building.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamValues.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className={`w-16 h-16 rounded-2xl ${value.color} flex items-center justify-center mb-4`}>
                        <Icon className="w-8 h-8" />
                      </div>
                      <CardTitle className="text-xl mb-3">{value.title}</CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        {value.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-background">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="w-8 h-8 text-primary mr-3" />
              <Badge variant="outline" className="text-sm font-medium px-4 py-2 border-primary text-primary">
                Our Story
              </Badge>
            </div>
            <h2 className="text-4xl font-bold mb-8 text-card-foreground">
              Built by Entrepreneurs,{' '}
              <span className="text-gradient-primary">for Entrepreneurs</span>
            </h2>
            <div className="text-left space-y-6 text-card-foreground/70 text-lg leading-relaxed">
              <p>
                Spark was born from a simple frustration: as entrepreneurs ourselves, we knew how crucial 
                market research was for making informed decisions, but traditional research was either too 
                expensive or took too long to be useful.
              </p>
              <p>
                We realized that in our connected world, there had to be a better way. What if we could 
                harness the collective intelligence of entrepreneurs, investors, and industry experts to 
                create high-quality research collaboratively?
              </p>
              <p>
                That's how Spark was born. We built a platform where the community drives the research 
                agenda, votes on what matters most, and contributes to insights that help everyone make 
                better business decisions.
              </p>
              <p>
                Today, thousands of entrepreneurs from over 50 countries use Spark to validate ideas, 
                understand markets, and build products that truly matter to their customers.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default AboutPage
