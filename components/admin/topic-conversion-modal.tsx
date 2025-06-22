
'use client'

import { useState } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { ArrowRight, Zap, Users, Calendar, Target } from 'lucide-react'
import { toast } from 'sonner'

interface Topic {
  id: string
  title: string
  description: string
  industry: string
  country: string
  status: string
  voteCount: number
  voteThreshold: number | null
  createdAt: string
  proposedBy: {
    name: string
    email: string
  }
}

interface TopicConversionModalProps {
  topic: Topic | null
  isOpen: boolean
  onClose: () => void
  onConvert: (topicId: string) => Promise<void>
}

export default function TopicConversionModal({
  topic,
  isOpen,
  onClose,
  onConvert
}: TopicConversionModalProps) {
  const [loading, setLoading] = useState(false)

  const handleConvert = async () => {
    if (!topic) return

    setLoading(true)
    try {
      await onConvert(topic.id)
      toast.success('Topic converted to research successfully')
      handleClose()
    } catch (error) {
      toast.error('Failed to convert topic to research')
    } finally {
      setLoading(false)
    }
  }

  const handleClose = () => {
    setLoading(false)
    onClose()
  }

  if (!topic) return null

  const voteProgress = topic.voteThreshold 
    ? Math.min((topic.voteCount / topic.voteThreshold) * 100, 100)
    : 0

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-green-600" />
            Convert Topic to Research
          </DialogTitle>
          <DialogDescription>
            This qualified topic is ready to be converted into a research project
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Topic Details */}
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg">{topic.title}</h3>
              <div className="flex items-center gap-2 mt-2">
                <Badge variant="outline">{topic.industry}</Badge>
                <Badge variant="outline">{topic.country}</Badge>
                <Badge variant="default" className="bg-green-100 text-green-800">
                  Qualified
                </Badge>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-muted-foreground">
              {topic.description}
            </p>

            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">
                Proposed by <strong>{topic.proposedBy.name}</strong>
              </span>
            </div>
          </div>

          <Separator />

          {/* Vote Statistics */}
          <div className="space-y-4">
            <h4 className="font-medium flex items-center gap-2">
              <Target className="h-4 w-4" />
              Voting Results
            </h4>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="text-2xl font-bold text-blue-600">{topic.voteCount}</div>
                <div className="text-sm text-blue-700">Total Votes</div>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="text-2xl font-bold text-green-600">{Math.round(voteProgress)}%</div>
                <div className="text-sm text-green-700">Target Achieved</div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Vote Progress</span>
                <span>{topic.voteCount} / {topic.voteThreshold || 50}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-green-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${Math.min(voteProgress, 100)}%` }}
                />
              </div>
            </div>
          </div>

          <Separator />

          {/* Conversion Process */}
          <div className="space-y-4">
            <h4 className="font-medium flex items-center gap-2">
              <ArrowRight className="h-4 w-4" />
              What happens next
            </h4>
            
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <ul className="text-sm text-green-700 space-y-2">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0" />
                  <span>Topic will be converted to a research project</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0" />
                  <span>Research team will be assigned to conduct the study</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0" />
                  <span>Topic proposer will be notified of the conversion</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0" />
                  <span>Research is expected to be completed within 30 days</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0" />
                  <span>Results will be published on the platform</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Timeline */}
          <div className="space-y-4">
            <h4 className="font-medium flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Research Timeline
            </h4>
            
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="space-y-2">
                <div className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto text-sm font-medium">
                  1
                </div>
                <div className="text-xs text-muted-foreground">
                  <div className="font-medium">Week 1-2</div>
                  <div>Research Planning</div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto text-sm font-medium">
                  2
                </div>
                <div className="text-xs text-muted-foreground">
                  <div className="font-medium">Week 2-3</div>
                  <div>Data Collection</div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto text-sm font-medium">
                  3
                </div>
                <div className="text-xs text-muted-foreground">
                  <div className="font-medium">Week 4</div>
                  <div>Analysis & Report</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <DialogFooter className="gap-2">
          <Button variant="outline" onClick={handleClose} disabled={loading}>
            Cancel
          </Button>
          
          <Button 
            onClick={handleConvert} 
            disabled={loading}
            className="bg-green-600 hover:bg-green-700"
          >
            {loading ? 'Converting...' : 'Convert to Research'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
