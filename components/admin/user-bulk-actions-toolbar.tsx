
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
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Trash2, 
  UserCheck, 
  UserX, 
  X,
  Loader2,
  AlertTriangle,
  Shield,
  Ban
} from 'lucide-react'
import { toast } from 'sonner'

interface UserBulkActionsToolbarProps {
  selectedCount: number
  selectedIds: string[]
  onClearSelection: () => void
  onBulkDelete: (ids: string[]) => Promise<void>
  onBulkSuspend: (ids: string[]) => Promise<void>
  onBulkActivate: (ids: string[]) => Promise<void>
  totalCount: number
}

type BulkAction = 'delete' | 'suspend' | 'activate'

export function UserBulkActionsToolbar({
  selectedCount,
  selectedIds,
  onClearSelection,
  onBulkDelete,
  onBulkSuspend,
  onBulkActivate,
  totalCount
}: UserBulkActionsToolbarProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [showDialog, setShowDialog] = useState<BulkAction | null>(null)

  const handleBulkAction = async (action: BulkAction) => {
    if (selectedIds.length === 0) return

    setIsLoading(true)
    try {
      switch (action) {
        case 'delete':
          await onBulkDelete(selectedIds)
          toast.success(`Successfully deleted ${selectedIds.length} users`)
          break
        case 'suspend':
          await onBulkSuspend(selectedIds)
          toast.success(`Successfully suspended ${selectedIds.length} users`)
          break
        case 'activate':
          await onBulkActivate(selectedIds)
          toast.success(`Successfully activated ${selectedIds.length} users`)
          break
      }
      onClearSelection()
      setShowDialog(null)
    } catch (error: any) {
      console.error(`Bulk ${action} error:`, error)
      toast.error(`Failed to ${action} users: ${error.message || 'Unknown error'}`)
    } finally {
      setIsLoading(false)
    }
  }

  const handleDialogClose = () => {
    setShowDialog(null)
  }

  if (selectedCount === 0) return null

  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="bg-gradient-to-br from-[#1A1A1A] to-[#252529] border border-white/20 rounded-lg shadow-lg p-4 mb-4"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="bg-[#00FF88]/20 text-[#00FF88] border-[#00FF88]/30">
                  {selectedCount} selected
                </Badge>
                <span className="text-sm text-[#CCCCCC]">
                  of {totalCount} users
                </span>
              </div>
              
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowDialog('activate')}
                  disabled={isLoading}
                  className="text-[#10B981] border-[#10B981]/20 hover:bg-[#10B981]/10 hover:border-[#10B981]/50"
                >
                  <UserCheck className="w-4 h-4 mr-2" />
                  Activate ({selectedCount})
                </Button>
                
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowDialog('suspend')}
                  disabled={isLoading}
                  className="text-[#f5d565] border-[#f5d565]/20 hover:bg-[#f5d565]/10 hover:border-[#f5d565]/50"
                >
                  <Ban className="w-4 h-4 mr-2" />
                  Suspend ({selectedCount})
                </Button>
                
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowDialog('delete')}
                  disabled={isLoading}
                  className="text-red-400 border-red-400/20 hover:bg-red-400/10 hover:border-red-400/50"
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
              className="text-[#CCCCCC] hover:text-white hover:bg-white/10"
            >
              <X className="w-4 h-4 mr-2" />
              Clear Selection
            </Button>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={showDialog === 'delete'} onOpenChange={handleDialogClose}>
        <AlertDialogContent className="bg-[#1A1A1A] border border-white/20">
          <AlertDialogHeader>
            <AlertDialogTitle className="flex items-center gap-2 text-white">
              <AlertTriangle className="w-5 h-5 text-red-400" />
              Confirm Bulk Delete
            </AlertDialogTitle>
            <AlertDialogDescription className="text-[#CCCCCC]">
              Are you sure you want to delete {selectedCount} selected users? This action cannot be undone and will permanently remove all associated data including topics, votes, and notifications.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel 
              onClick={handleDialogClose}
              className="border-white/20 text-white hover:bg-white/10"
            >
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={() => handleBulkAction('delete')}
              disabled={isLoading}
              className="bg-red-600 hover:bg-red-700 text-white"
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Deleting...
                </div>
              ) : (
                'Delete Users'
              )}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Suspend Confirmation Dialog */}
      <AlertDialog open={showDialog === 'suspend'} onOpenChange={handleDialogClose}>
        <AlertDialogContent className="bg-[#1A1A1A] border border-white/20">
          <AlertDialogHeader>
            <AlertDialogTitle className="flex items-center gap-2 text-white">
              <Ban className="w-5 h-5 text-[#f5d565]" />
              Confirm Bulk Suspend
            </AlertDialogTitle>
            <AlertDialogDescription className="text-[#CCCCCC]">
              Are you sure you want to suspend {selectedCount} selected users? This will prevent them from logging in and accessing the platform until they are reactivated.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel 
              onClick={handleDialogClose}
              className="border-white/20 text-white hover:bg-white/10"
            >
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={() => handleBulkAction('suspend')}
              disabled={isLoading}
              className="bg-[#f5d565] hover:bg-[#FCD34D] text-black"
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Suspending...
                </div>
              ) : (
                'Suspend Users'
              )}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Activate Confirmation Dialog */}
      <AlertDialog open={showDialog === 'activate'} onOpenChange={handleDialogClose}>
        <AlertDialogContent className="bg-[#1A1A1A] border border-white/20">
          <AlertDialogHeader>
            <AlertDialogTitle className="flex items-center gap-2 text-white">
              <UserCheck className="w-5 h-5 text-[#10B981]" />
              Confirm Bulk Activation
            </AlertDialogTitle>
            <AlertDialogDescription className="text-[#CCCCCC]">
              Are you sure you want to activate {selectedCount} selected users? This will allow them to log in and access the platform again.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel 
              onClick={handleDialogClose}
              className="border-white/20 text-white hover:bg-white/10"
            >
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={() => handleBulkAction('activate')}
              disabled={isLoading}
              className="bg-[#10B981] hover:bg-[#059669] text-white"
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Activating...
                </div>
              ) : (
                'Activate Users'
              )}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}
