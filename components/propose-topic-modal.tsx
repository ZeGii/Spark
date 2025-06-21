
'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { X, Lightbulb, Send, CheckCircle, AlertCircle } from 'lucide-react'

interface ProposeTopicModalProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (topic: {
    title: string
    description: string
    industry: string
    country: string
  }) => void
}

// Aligned with trending page countries
const COUNTRIES = [
  'United States',
  'Canada', 
  'United Kingdom',
  'Germany',
  'France',
  'Australia',
  'Japan',
  'Singapore',
  'India',
  'China',
  'Brazil',
  'Europe',
  'Asia-Pacific',
  'North America',
  'Global',
  'Other'
]

const INDUSTRIES = [
  'Technology',
  'Healthcare',
  'Finance',
  'E-commerce',
  'Education',
  'Manufacturing',
  'Real Estate',
  'Food & Beverage',
  'Transportation',
  'Energy',
  'Media & Entertainment',
  'Other'
]

const ProposeTopicModal = ({ isOpen, onClose, onSubmit }: ProposeTopicModalProps) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    industry: '',
    country: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  
  // Character limit settings
  const [characterLimits, setCharacterLimits] = useState({
    titleLimit: 100,
    descriptionLimit: 500
  })
  const [loadingLimits, setLoadingLimits] = useState(true)

  // Fetch character limits from settings
  const fetchCharacterLimits = async () => {
    try {
      const response = await fetch('/api/admin/settings')
      if (response.ok) {
        const data = await response.json()
        setCharacterLimits({
          titleLimit: parseInt(data.settings.topic_title_max_length?.value || '100'),
          descriptionLimit: parseInt(data.settings.topic_description_max_length?.value || '500')
        })
      }
    } catch (error) {
      console.error('Error fetching character limits:', error)
      // Keep default values on error
    } finally {
      setLoadingLimits(false)
    }
  }

  // Validation functions
  const isTitleValid = formData.title.length <= characterLimits.titleLimit && formData.title.length > 0
  const isDescriptionValid = formData.description.length <= characterLimits.descriptionLimit && formData.description.length > 0
  const isFormValid = isTitleValid && isDescriptionValid && formData.industry && formData.country

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!isFormValid) {
      return
    }

    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/topics', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.error || 'Failed to submit topic')
      }

      const result = await response.json()
      onSubmit(result)
      
      // Show success state and auto-close after 5 seconds
      setShowSuccess(true)
      setTimeout(() => {
        setShowSuccess(false)
        setFormData({ title: '', description: '', industry: '', country: '' })
        onClose()
      }, 5000)
    } catch (error: any) {
      console.error('Error submitting topic:', error)
      // TODO: Handle errors within the modal instead of alerts
      // For now, keep error handling simple
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleClose = () => {
    setFormData({ title: '', description: '', industry: '', country: '' })
    setShowSuccess(false)
    onClose()
  }

  // Fetch character limits when modal opens
  useEffect(() => {
    if (isOpen) {
      fetchCharacterLimits()
    }
  }, [isOpen])

  // Cleanup timer on unmount
  useEffect(() => {
    return () => {
      setShowSuccess(false)
    }
  }, [])

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
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto"
          >
            <Card className="bg-white border border-gray-100 shadow-xl rounded-xl">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Lightbulb className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-gradient-primary">Propose Research Topic</CardTitle>
                      <CardDescription className="text-gray-600">
                        Share your research idea with the community
                      </CardDescription>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleClose}
                    className="h-8 w-8 p-0 opacity-100 bg-gray-100"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                {showSuccess ? (
                  // Success State
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-12 px-6 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
                      className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6"
                    >
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </motion.div>
                    
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-xl font-semibold text-gray-900 mb-2"
                    >
                      Topic Submitted Successfully!
                    </motion.h3>
                    
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-gray-600 mb-4"
                    >
                      Your research topic is now pending admin approval.
                    </motion.p>
                    
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="text-sm text-gray-500"
                    >
                      This window will close automatically in 5 seconds...
                    </motion.div>
                  </motion.div>
                ) : (
                  // Form State
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="title" className="text-gray-900">Topic Title *</Label>
                        <span className={`text-xs ${
                          formData.title.length > characterLimits.titleLimit 
                            ? 'text-red-600' 
                            : formData.title.length > characterLimits.titleLimit * 0.8 
                              ? 'text-amber-600' 
                              : 'text-gray-500'
                        }`}>
                          {formData.title.length}/{characterLimits.titleLimit}
                        </span>
                      </div>
                      <Input
                        id="title"
                        placeholder={`e.g., AI-Powered Personal Finance Apps (max ${characterLimits.titleLimit} characters)`}
                        value={formData.title}
                        onChange={(e) => {
                          if (e.target.value.length <= characterLimits.titleLimit) {
                            setFormData(prev => ({ ...prev, title: e.target.value }))
                          }
                        }}
                        className={formData.title.length > characterLimits.titleLimit ? 'border-red-300' : ''}
                        required
                      />
                      {formData.title.length > characterLimits.titleLimit && (
                        <div className="flex items-center gap-2 text-sm text-red-600">
                          <AlertCircle className="w-4 h-4" />
                          <span>Title exceeds maximum length of {characterLimits.titleLimit} characters</span>
                        </div>
                      )}
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="description" className="text-gray-900">Description *</Label>
                        <span className={`text-xs ${
                          formData.description.length > characterLimits.descriptionLimit 
                            ? 'text-red-600' 
                            : formData.description.length > characterLimits.descriptionLimit * 0.8 
                              ? 'text-amber-600' 
                              : 'text-gray-500'
                        }`}>
                          {formData.description.length}/{characterLimits.descriptionLimit}
                        </span>
                      </div>
                      <Textarea
                        id="description"
                        placeholder={`Describe what kind of market research you'd like to see. Include specific questions, target markets, or areas of focus... (max ${characterLimits.descriptionLimit} characters)`}
                        value={formData.description}
                        onChange={(e) => {
                          if (e.target.value.length <= characterLimits.descriptionLimit) {
                            setFormData(prev => ({ ...prev, description: e.target.value }))
                          }
                        }}
                        className={formData.description.length > characterLimits.descriptionLimit ? 'border-red-300' : ''}
                        rows={4}
                        required
                      />
                      {formData.description.length > characterLimits.descriptionLimit && (
                        <div className="flex items-center gap-2 text-sm text-red-600">
                          <AlertCircle className="w-4 h-4" />
                          <span>Description exceeds maximum length of {characterLimits.descriptionLimit} characters</span>
                        </div>
                      )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label className="text-gray-900">Industry *</Label>
                        <Select 
                          value={formData.industry} 
                          onValueChange={(value) => setFormData(prev => ({ ...prev, industry: value }))}
                          required
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select industry" />
                          </SelectTrigger>
                          <SelectContent>
                            {INDUSTRIES.map(industry => (
                              <SelectItem key={industry} value={industry}>
                                {industry}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label className="text-gray-900">Primary Country *</Label>
                        <Select 
                          value={formData.country} 
                          onValueChange={(value) => setFormData(prev => ({ ...prev, country: value }))}
                          required
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select primary country" />
                          </SelectTrigger>
                          <SelectContent>
                            {COUNTRIES.map(country => (
                              <SelectItem key={country} value={country}>
                                {country}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                      <h4 className="font-medium mb-2 text-gray-900">What happens next?</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Your topic will be submitted for admin review</li>
                        <li>• If approved, it opens for community voting (15-day period)</li>
                        <li>• Topics reaching the vote threshold qualify for research</li>
                        <li>• You'll receive notifications about status changes</li>
                        <li>• Track progress in your personal dashboard</li>
                      </ul>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 pt-4">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={handleClose}
                        className="flex-1"
                      >
                        Cancel
                      </Button>
                      <Button
                        type="submit"
                        disabled={isSubmitting || !isFormValid}
                        className="flex-1 gradient-bg"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center space-x-2">
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            <span>Submitting...</span>
                          </div>
                        ) : (
                          <div className="flex items-center space-x-2">
                            <Send className="w-4 h-4" />
                            <span>Submit Topic</span>
                          </div>
                        )}
                      </Button>
                    </div>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

export default ProposeTopicModal
