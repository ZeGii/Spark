
'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

import { Separator } from '@/components/ui/separator'

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container-max section-padding py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center mb-6">
                <Sparkles className="w-8 h-8 text-primary mr-3" />
                <span className="text-2xl font-bold text-gradient-primary">Spark</span>
              </div>
              <p className="text-card-foreground/70 mb-6 max-w-md leading-relaxed">
                Democratizing market research through community-driven insights. 
                Join thousands of entrepreneurs making data-driven decisions.
              </p>
            </motion.div>
          </div>

          {/* Platform Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="font-bold text-lg mb-6 text-card-foreground">Platform</h3>
              <ul className="space-y-3">
                <li>
                  <Link 
                    href="/opportunities" 
                    className="text-card-foreground/70 hover:text-primary transition-colors duration-200"
                  >
                    Opportunities
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/trending" 
                    className="text-card-foreground/70 hover:text-primary transition-colors duration-200"
                  >
                    Trending Topics
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/research" 
                    className="text-card-foreground/70 hover:text-primary transition-colors duration-200"
                  >
                    Research Reports
                  </Link>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Company Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="font-bold text-lg mb-6 text-card-foreground">Company</h3>
              <ul className="space-y-3">
                <li>
                  <Link 
                    href="https://ideanest.net/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-card-foreground/70 hover:text-primary transition-colors duration-200"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/privacy" 
                    className="text-card-foreground/70 hover:text-primary transition-colors duration-200"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/terms" 
                    className="text-card-foreground/70 hover:text-primary transition-colors duration-200"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>

        <Separator className="my-12" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col md:flex-row justify-between items-center"
        >
          <div className="text-card-foreground/60 text-sm mb-4 md:mb-0">
            © 2025 Spark. All rights reserved.
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-card-foreground/60 text-sm">Powered by</span>
            <Link 
              href="https://ideanest.net/" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:opacity-80 transition-opacity duration-200"
            >
              <Image
                src="/images/IDEANEST-Logo-WhiteS.png"
                alt="IDEANEST"
                width={100}
                height={24}
                className="h-6 w-auto"
              />
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
