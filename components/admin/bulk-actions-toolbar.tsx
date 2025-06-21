
'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Trash2, 
  CheckCircle, 
  XCircle, 
  X,
  Loader2,
  AlertTriangle
} from 'lucide-react'
import { toast } from 'sonner'

interface BulkActionsToolbarProps {
  selectedCount: number
  selectedIds: string[]
  onClearSelection: () => void
  onBulkDelete: (ids: string[]) => Promise<void>
  onBulkApprove: (ids: string[]) => Promise<void>
  onBulkReject: (ids: string[], reason: string) => Promise<void>
  totalCount: number
}

type BulkAction = 'delete' | 'approve' | 'reject'

export function BulkActionsToolbar({
  selectedCount,
  selectedIds,
  onClearSelection,
  onBulkDelete,
  onBulkApprove,
  onBulkReject,
  totalCount
}: BulkActionsToolbarProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [showDialog, setShowDialog] = useState<BulkAction | null>(null)
  const [rejectionReason, setRejectionReason] = useState('')

  const handleBulkAction = async (action: BulkAction) => {
    if (selectedIds.length === 0) return

    setIsLoading(true)
    try {
      switch (action) {
        case 'delete':
          await onBulkDelete(selectedIds)
          toast.success(`Successfully deleted ${selectedIds.length} topics`)
          break
        case 'approve':
          await onBulkApprove(selectedIds)
          toast.success(`Successfully approved ${selectedIds.length} topics`)
          break
        case 'reject':
          if (!rejectionReason.trim()) {
            toast.error('Please provide a rejection reason')
            return
          }
          await onBulkReject(selectedIds, rejectionReason)
          toast.success(`Successfully rejected ${selectedIds.length} topics`)
          break
      }
      onClearSelection()
      setShowDialog(null)
      setRejectionReason('')
    } catch (error: any) {
      console.error(`Bulk ${action} error:`, error)
      toast.error(`Failed to ${action} topics: ${error.message || 'Unknown error'}`)
    } finally {
      setIsLoading(false)
    }
  }

  const handleDialogClose = () => {
    setShowDialog(null)
    setRejectionReason('')
  }

  if (selectedCount === 0) return null

  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="bg-white border border-gray-200 rounded-lg shadow-lg p-4 mb-4"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="bg-blue-50 text-blue-700 border-blue-200">
                  {selectedCount} selected
                </Badge>
                <span className="text-sm text-gray-600">
                  of {totalCount} topics
                </span>
              </div>
              
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowDialog('approve')}
                  disabled={isLoading}
                  className="text-green-700 border-green-200 hover:bg-green-50"
                >
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Approve ({selectedCount})
                </Button>
                
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowDialog('reject')}
                  disabled={isLoading}
                  className="text-orange-700 border-orange-200 hover:bg-orange-50"
                >
                  <XCircle className="w-4 h-4 mr-2" />
                  Reject ({selectedCount})
                </Button>
                
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowDialog('delete')}
                  disabled={isLoading}
                  className="text-red-700 border-red-200 hover:bg-red-50"
                >
                  <Trash2 className="w-4 h-4 mr-2" />
                  Delete ({selectedCount})
                </Button>
              </div>
            </div>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={onClearSelection}
              disabled={isLoading}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="w-4 h-4 mr-2" />
              Clear Selection
            </Button>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={showDialog === 'delete'} onOpenChange={handleDialogClose}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-red-500" />
              Confirm Bulk Delete
            </AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete {selectedCount} selected topics? This action cannot be undone and will permanently remove all associated data including votes and notifications.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={handleDialogClose}>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => handleBulkAction('delete')}
              disabled={isLoading}
              className="bg-red-600 hover:bg-red-700"
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Deleting...
                </div>
              ) : (
                'Delete Topics'
              )}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Approve Confirmation Dialog */}
      <AlertDialog open={showDialog === 'approve'} onOpenChange={handleDialogClose}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              Confirm Bulk Approval
            </AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to approve {selectedCount} selected topics? This will make them available for community voting with a default vote threshold of 50 votes.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={handleDialogClose}>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => handleBulkAction('approve')}
              disabled={isLoading}
              className="bg-green-600 hover:bg-green-700"
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Approving...
                </div>
              ) : (
                'Approve Topics'
              )}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Reject Confirmation Dialog */}
      <AlertDialog open={showDialog === 'reject'} onOpenChange={handleDialogClose}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="flex items-center gap-2">
              <XCircle className="w-5 h-5 text-orange-500" />
              Confirm Bulk Rejection
            </AlertDialogTitle>
            <AlertDialogDescription>
              Please provide a reason for rejecting these {selectedCount} topics. This reason will be visible to the users who submitted them.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="px-6">
            <Label htmlFor="rejection-reason" className="text-gray-900">
              Rejection Reason *
            </Label>
            <Textarea
              id="rejection-reason"
              placeholder="Please provide a clear reason for rejection..."
              value={rejectionReason}
              onChange={(e) => setRejectionReason(e.target.value)}
              className="mt-2"
              rows={3}
              required
            />
          </div>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={handleDialogClose}>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => handleBulkAction('reject')}
              disabled={isLoading || !rejectionReason.trim()}
              className="bg-orange-600 hover:bg-orange-700"
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Rejecting...
                </div>
              ) : (
                'Reject Topics'
              )}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}
