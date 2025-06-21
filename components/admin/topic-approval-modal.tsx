
'use client'

import { useState } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { CheckCircle, XCircle, Clock, Users } from 'lucide-react'
import { toast } from 'sonner'

interface Topic {
  id: string
  title: string
  description: string
  industry: string
  country: string
  status: string
  voteCount: number
  createdAt: string
  proposedBy: {
    name: string
    email: string
  }
}

interface TopicApprovalModalProps {
  topic: Topic | null
  isOpen: boolean
  onClose: () => void
  onApprove: (topicId: string, voteThreshold: number) => Promise<void>
  onReject: (topicId: string, reason: string) => Promise<void>
}

export default function TopicApprovalModal({
  topic,
  isOpen,
  onClose,
  onApprove,
  onReject
}: TopicApprovalModalProps) {
  const [action, setAction] = useState<'approve' | 'reject' | null>(null)
  const [voteThreshold, setVoteThreshold] = useState(50)
  const [rejectionReason, setRejectionReason] = useState('')
  const [loading, setLoading] = useState(false)

  const handleApprove = async () => {
    if (!topic || voteThreshold < 1) return

    setLoading(true)
    try {
      await onApprove(topic.id, voteThreshold)
      toast.success('Topic approved successfully')
      handleClose()
    } catch (error) {
      toast.error('Failed to approve topic')
    } finally {
      setLoading(false)
    }
  }

  const handleReject = async () => {
    if (!topic || !rejectionReason.trim()) return

    setLoading(true)
    try {
      await onReject(topic.id, rejectionReason.trim())
      toast.success('Topic rejected successfully')
      handleClose()
    } catch (error) {
      toast.error('Failed to reject topic')
    } finally {
      setLoading(false)
    }
  }

  const handleClose = () => {
    setAction(null)
    setVoteThreshold(50)
    setRejectionReason('')
    setLoading(false)
    onClose()
  }

  if (!topic) return null

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-amber-600" />
            Review Topic Proposal
          </DialogTitle>
          <DialogDescription>
            Review and decide whether to approve or reject this topic proposal
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
                <Badge variant="secondary">
                  Submitted {new Date(topic.createdAt).toLocaleDateString()}
                </Badge>
              </div>
            </div>

            <div>
              <Label className="text-sm font-medium text-muted-foreground">Description</Label>
              <p className="mt-1 text-sm leading-relaxed">{topic.description}</p>
            </div>

            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">
                Proposed by <strong>{topic.proposedBy.name}</strong> ({topic.proposedBy.email})
              </span>
            </div>
          </div>

          <Separator />

          {/* Action Selection */}
          {!action && (
            <div className="space-y-4">
              <Label className="text-base font-medium">Choose Action</Label>
              <div className="grid grid-cols-2 gap-4">
                <Button
                  variant="outline"
                  className="h-20 flex-col gap-2 border-green-200 hover:bg-green-50"
                  onClick={() => setAction('approve')}
                >
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <span>Approve Topic</span>
                </Button>
                <Button
                  variant="outline"
                  className="h-20 flex-col gap-2 border-red-200 hover:bg-red-50"
                  onClick={() => setAction('reject')}
                >
                  <XCircle className="h-6 w-6 text-red-600" />
                  <span>Reject Topic</span>
                </Button>
              </div>
            </div>
          )}

          {/* Approval Form */}
          {action === 'approve' && (
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <Label className="text-base font-medium">Approve Topic</Label>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="voteThreshold">Vote Threshold</Label>
                <Input
                  id="voteThreshold"
                  type="number"
                  min="1"
                  max="1000"
                  value={voteThreshold}
                  onChange={(e) => setVoteThreshold(parseInt(e.target.value) || 50)}
                  placeholder="Number of votes needed to qualify"
                />
                <p className="text-xs text-muted-foreground">
                  Number of votes needed for this topic to qualify for research (1-1000)
                </p>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h4 className="font-medium text-green-800 mb-2">What happens next:</h4>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Topic will be open for community voting</li>
                  <li>• 15-day voting period will begin</li>
                  <li>• Topic owner will be notified</li>
                  <li>• Topic qualifies for research when it reaches {voteThreshold} votes</li>
                </ul>
              </div>
            </div>
          )}

          {/* Rejection Form */}
          {action === 'reject' && (
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <XCircle className="h-5 w-5 text-red-600" />
                <Label className="text-base font-medium">Reject Topic</Label>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="rejectionReason">Rejection Reason *</Label>
                <Textarea
                  id="rejectionReason"
                  value={rejectionReason}
                  onChange={(e) => setRejectionReason(e.target.value)}
                  placeholder="Explain why this topic is being rejected..."
                  rows={4}
                  required
                />
                <p className="text-xs text-muted-foreground">
                  This reason will be shared with the topic proposer
                </p>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h4 className="font-medium text-red-800 mb-2">What happens next:</h4>
                <ul className="text-sm text-red-700 space-y-1">
                  <li>• Topic will be marked as rejected</li>
                  <li>• Topic owner will be notified with the reason</li>
                  <li>• Topic will not be available for voting</li>
                  <li>• User can submit a new improved topic</li>
                </ul>
              </div>
            </div>
          )}
        </div>

        <DialogFooter className="gap-2">
          <Button variant="outline" onClick={handleClose} disabled={loading}>
            Cancel
          </Button>
          
          {action === 'approve' && (
            <Button 
              onClick={handleApprove} 
              disabled={loading || voteThreshold < 1}
              className="bg-green-600 hover:bg-green-700"
            >
              {loading ? 'Approving...' : 'Approve Topic'}
            </Button>
          )}
          
          {action === 'reject' && (
            <Button 
              onClick={handleReject} 
              disabled={loading || !rejectionReason.trim()}
              variant="destructive"
            >
              {loading ? 'Rejecting...' : 'Reject Topic'}
            </Button>
          )}
          
          {action && (
            <Button 
              variant="ghost" 
              onClick={() => setAction(null)}
              disabled={loading}
            >
              Back
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
