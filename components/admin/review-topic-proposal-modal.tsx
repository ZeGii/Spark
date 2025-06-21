
'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { toast } from 'sonner'
import {
  User,
  Calendar,
  Globe,
  Building,
  Clock,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Lightbulb,
  ArrowRight,
  Loader2,
  FileText,
  Tag,
  MapPin
} from 'lucide-react'

interface Topic {
  id: string
  title: string
  description: string
  industry: string
  country: string
  status: string
  voteCount: number
  voteThreshold: number | null
  approvalDate: string | null
  deadline: string | null
  rejectionReason: string | null
  createdAt: string
  updatedAt: string
  proposedBy: {
    id: string
    name: string
    username: string
    email: string
  }
  approvedBy?: {
    id: string
    name: string
    username: string
  } | null
  _count: {
    votes: number
  }
}

interface ReviewTopicProposalModalProps {
  topic: Topic | null
  isOpen: boolean
  onClose: () => void
  onApprove: (topicId: string, voteThreshold: number) => Promise<void>
  onReject: (topicId: string, rejectionReason: string) => Promise<void>
  onConvert?: (topicId: string) => Promise<void>
}

const ReviewTopicProposalModal = ({
  topic,
  isOpen,
  onClose,
  onApprove,
  onReject,
  onConvert
}: ReviewTopicProposalModalProps) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [action, setAction] = useState<'approve' | 'reject' | 'convert' | null>(null)
  const [voteThreshold, setVoteThreshold] = useState<string>('50')
  const [rejectionReason, setRejectionReason] = useState('')

  const handleApprove = async () => {
    if (!topic) return
    
    const threshold = parseInt(voteThreshold)
    if (isNaN(threshold) || threshold < 1) {
      setError('Please enter a valid vote threshold (minimum 1)')
      return
    }

    setLoading(true)
    setError('')
    
    try {
      await onApprove(topic.id, threshold)
      toast.success('Topic approved successfully')
      onClose()
      resetForm()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to approve topic')
    } finally {
      setLoading(false)
    }
  }

  const handleReject = async () => {
    if (!topic) return
    
    if (!rejectionReason.trim()) {
      setError('Please provide a rejection reason')
      return
    }

    setLoading(true)
    setError('')
    
    try {
      await onReject(topic.id, rejectionReason.trim())
      toast.success('Topic rejected successfully')
      onClose()
      resetForm()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to reject topic')
    } finally {
      setLoading(false)
    }
  }

  const handleConvert = async () => {
    if (!topic || !onConvert) return
    
    setLoading(true)
    setError('')
    
    try {
      await onConvert(topic.id)
      toast.success('Topic converted to research successfully')
      onClose()
      resetForm()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to convert topic')
    } finally {
      setLoading(false)
    }
  }

  const resetForm = () => {
    setAction(null)
    setVoteThreshold('50')
    setRejectionReason('')
    setError('')
  }

  const handleClose = () => {
    onClose()
    resetForm()
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'PENDING': return 'bg-amber-100 text-amber-800 border-amber-200'
      case 'APPROVED': return 'bg-blue-100 text-blue-800 border-blue-200'
      case 'QUALIFIED': return 'bg-green-100 text-green-800 border-green-200'
      case 'REJECTED': return 'bg-red-100 text-red-800 border-red-200'
      default: return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  if (!topic) return null

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-4xl bg-white border border-gray-100 shadow-xl rounded-xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="space-y-4 pb-6">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-bold text-gradient-primary">
              Review Topic Proposal
            </DialogTitle>
            <Badge className={`${getStatusColor(topic.status)} border font-medium`}>
              {topic.status}
            </Badge>
          </div>
          <p className="text-gray-600">
            Comprehensive review and management of research topic proposal
          </p>
        </DialogHeader>

        <div className="space-y-6">
          {/* Error Message */}
          <AnimatePresence mode="wait">
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="bg-destructive/10 border border-destructive/20 text-destructive px-4 py-3 rounded-md text-sm"
              >
                <div className="flex items-start space-x-2">
                  <AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <p>{error}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Topic Header */}
          <div className="bg-gray-50 border border-gray-100 rounded-lg p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center">
                  <Lightbulb className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{topic.title}</h3>
                  <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(topic.createdAt).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <Building className="w-4 h-4" />
                      {topic.industry}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {topic.country}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Topic Description */}
          <div className="space-y-4">
            <div>
              <Label className="text-gray-900 font-medium">Topic Description</Label>
              <div className="bg-gray-50 border border-gray-100 rounded-lg p-4 mt-2">
                <p className="text-gray-600 leading-relaxed">{topic.description}</p>
              </div>
            </div>
          </div>

          {/* Submitter Information */}
          <div className="space-y-4">
            <Label className="text-gray-900 font-medium">Submitted By</Label>
            <div className="bg-gray-50 border border-gray-100 rounded-lg p-4">
              <div className="flex items-center gap-3">
                <Avatar className="w-10 h-10">
                  <AvatarImage src="" />
                  <AvatarFallback className="bg-primary text-primary-foreground">
                    {topic.proposedBy.name.charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium text-gray-900">{topic.proposedBy.name}</p>
                  <p className="text-sm text-gray-600">@{topic.proposedBy.username}</p>
                  <p className="text-sm text-gray-600">{topic.proposedBy.email}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Current Status & Metrics */}
          {topic.status !== 'PENDING' && (
            <div className="space-y-4">
              <Label className="text-gray-900 font-medium">Current Status & Metrics</Label>
              <div className="bg-gray-50 border border-gray-100 rounded-lg p-4">
                <div className="grid grid-cols-2 gap-4">
                  {topic.voteCount > 0 && (
                    <div>
                      <p className="text-sm text-gray-600">Vote Count</p>
                      <p className="font-semibold text-gray-900">{topic.voteCount}</p>
                    </div>
                  )}
                  {topic.voteThreshold && (
                    <div>
                      <p className="text-sm text-gray-600">Vote Threshold</p>
                      <p className="font-semibold text-gray-900">{topic.voteThreshold}</p>
                    </div>
                  )}
                  {topic.approvalDate && (
                    <div>
                      <p className="text-sm text-gray-600">Approval Date</p>
                      <p className="font-semibold text-gray-900">
                        {new Date(topic.approvalDate).toLocaleDateString()}
                      </p>
                    </div>
                  )}
                  {topic.deadline && (
                    <div>
                      <p className="text-sm text-gray-600">Deadline</p>
                      <p className="font-semibold text-gray-900">
                        {new Date(topic.deadline).toLocaleDateString()}
                      </p>
                    </div>
                  )}
                </div>
                {topic.rejectionReason && (
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-600 mb-2">Rejection Reason</p>
                    <p className="text-sm text-gray-900">{topic.rejectionReason}</p>
                  </div>
                )}
              </div>
            </div>
          )}

          <Separator className="my-6" />

          {/* Action Buttons */}
          <div className="space-y-6">
            <Label className="text-gray-900 font-medium">Available Actions</Label>
            
            {!action && (
              <div className="flex flex-wrap gap-3">
                {topic.status === 'PENDING' && (
                  <>
                    <Button
                      variant="form-primary"
                      size="form"
                      onClick={() => setAction('approve')}
                      className="flex items-center gap-2"
                    >
                      <CheckCircle className="w-4 h-4" />
                      Approve Topic
                    </Button>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => setAction('reject')}
                      className="flex items-center gap-2"
                    >
                      <XCircle className="w-4 h-4" />
                      Reject Topic
                    </Button>
                  </>
                )}
                
                {topic.status === 'QUALIFIED' && onConvert && (
                  <Button
                    variant="form-primary"
                    size="form"
                    onClick={() => setAction('convert')}
                    className="flex items-center gap-2"
                  >
                    <ArrowRight className="w-4 h-4" />
                    Convert to Research
                  </Button>
                )}
                
                {topic.status !== 'PENDING' && topic.status !== 'QUALIFIED' && (
                  <div className="bg-gray-50 border border-gray-100 rounded-lg p-4">
                    <p className="text-gray-600 text-sm">
                      No actions available for this topic's current status.
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Approve Action Form */}
            {action === 'approve' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gray-50 border border-gray-100 rounded-lg p-6 space-y-4"
              >
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <h4 className="font-medium text-gray-900">Approve Topic</h4>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="vote-threshold" className="text-gray-900">
                    Vote Threshold Required
                  </Label>
                  <Input
                    id="vote-threshold"
                    type="number"
                    min="1"
                    value={voteThreshold}
                    onChange={(e) => setVoteThreshold(e.target.value)}
                    placeholder="Enter minimum votes required"
                    className="w-full"
                  />
                  <p className="text-sm text-gray-600">
                    Number of votes required for this topic to qualify for research phase
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4">
                  <Button
                    onClick={handleApprove}
                    disabled={loading}
                    variant="form-primary"
                    size="form"
                    className="flex items-center gap-2"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Approving...
                      </>
                    ) : (
                      <>
                        <CheckCircle className="w-4 h-4" />
                        Confirm Approval
                      </>
                    )}
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => setAction(null)}
                    disabled={loading}
                  >
                    Cancel
                  </Button>
                </div>
              </motion.div>
            )}

            {/* Reject Action Form */}
            {action === 'reject' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gray-50 border border-gray-100 rounded-lg p-6 space-y-4"
              >
                <div className="flex items-center gap-2 mb-4">
                  <XCircle className="w-5 h-5 text-red-600" />
                  <h4 className="font-medium text-gray-900">Reject Topic</h4>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="rejection-reason" className="text-gray-900">
                    Rejection Reason *
                  </Label>
                  <Textarea
                    id="rejection-reason"
                    value={rejectionReason}
                    onChange={(e) => setRejectionReason(e.target.value)}
                    placeholder="Provide a clear reason for rejecting this topic..."
                    rows={4}
                    className="w-full"
                  />
                  <p className="text-sm text-gray-600">
                    This reason will be visible to the submitter
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4">
                  <Button
                    onClick={handleReject}
                    disabled={loading}
                    variant="destructive"
                    className="flex items-center gap-2"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Rejecting...
                      </>
                    ) : (
                      <>
                        <XCircle className="w-4 h-4" />
                        Confirm Rejection
                      </>
                    )}
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => setAction(null)}
                    disabled={loading}
                  >
                    Cancel
                  </Button>
                </div>
              </motion.div>
            )}

            {/* Convert Action Confirmation */}
            {action === 'convert' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gray-50 border border-gray-100 rounded-lg p-6 space-y-4"
              >
                <div className="flex items-center gap-2 mb-4">
                  <ArrowRight className="w-5 h-5 text-blue-600" />
                  <h4 className="font-medium text-gray-900">Convert to Research</h4>
                </div>
                
                <p className="text-gray-600">
                  This action will convert the qualified topic into an active research project. 
                  This cannot be undone.
                </p>

                <div className="flex items-center gap-3 pt-4">
                  <Button
                    onClick={handleConvert}
                    disabled={loading}
                    variant="form-primary"
                    size="form"
                    className="flex items-center gap-2"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Converting...
                      </>
                    ) : (
                      <>
                        <ArrowRight className="w-4 h-4" />
                        Confirm Conversion
                      </>
                    )}
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => setAction(null)}
                    disabled={loading}
                  >
                    Cancel
                  </Button>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default ReviewTopicProposalModal
