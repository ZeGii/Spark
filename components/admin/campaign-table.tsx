
'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { MoreHorizontal, Eye, Edit, Trash2, FileText, Users, TrendingUp } from 'lucide-react'
import { cn } from '@/lib/utils'

interface CampaignItem {
  id: string
  title: string
  author: {
    name: string
    avatar?: string
  }
  status: 'pending' | 'approved' | 'qualified' | 'completed' | 'rejected'
  votes: number
  engagement: number
  submittedAt: string
  category: string
}

interface CampaignTableProps {
  title: string
  description?: string
  items: CampaignItem[]
  onViewItem?: (id: string) => void
  onEditItem?: (id: string) => void
  onDeleteItem?: (id: string) => void
}

const statusConfig = {
  pending: { label: 'Pending', color: 'bg-[#f5d565]/20 text-[#f5d565] border-[#f5d565]/30' },
  approved: { label: 'Approved', color: 'bg-[#00FF88]/20 text-[#00FF88] border-[#00FF88]/30' },
  qualified: { label: 'Qualified', color: 'bg-[#10B981]/20 text-[#10B981] border-[#10B981]/30' },
  completed: { label: 'Completed', color: 'bg-blue-500/20 text-blue-400 border-blue-500/30' },
  rejected: { label: 'Rejected', color: 'bg-red-500/20 text-red-400 border-red-500/30' }
}

export function CampaignTable({
  title,
  description,
  items,
  onViewItem,
  onEditItem,
  onDeleteItem
}: CampaignTableProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    })
  }

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase()
  }

  return (
    <Card className="bg-gradient-to-br from-[#1A1A1A] to-[#252529] border border-white/20">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-lg font-semibold text-white">{title}</CardTitle>
            {description && (
              <p className="text-sm text-[#CCCCCC] mt-1">{description}</p>
            )}
          </div>
          <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br from-[#00FF88]/20 to-[#10B981]/10 border border-white/20 text-[#00FF88]">
            <FileText className="w-5 h-5" />
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <div className="space-y-1">
          {/* Table Header */}
          <div className="grid grid-cols-12 gap-4 p-3 text-xs font-medium text-[#CCCCCC] border-b border-white/10">
            <div className="col-span-4">Topic</div>
            <div className="col-span-2">Author</div>
            <div className="col-span-2">Status</div>
            <div className="col-span-1 text-center">Votes</div>
            <div className="col-span-1 text-center">Engagement</div>
            <div className="col-span-1 text-center">Date</div>
            <div className="col-span-1 text-center">Actions</div>
          </div>

          {/* Table Rows */}
          {items.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-12 gap-4 p-3 text-sm text-white hover:bg-white/5 transition-colors duration-200 border-b border-white/5 last:border-b-0"
            >
              {/* Topic */}
              <div className="col-span-4">
                <div className="font-medium text-white truncate">
                  {item.title}
                </div>
                <div className="text-xs text-[#CCCCCC] mt-1">
                  {item.category}
                </div>
              </div>

              {/* Author */}
              <div className="col-span-2 flex items-center gap-2">
                <Avatar className="w-6 h-6">
                  <AvatarFallback className="text-xs bg-gradient-to-br from-[#00FF88]/20 to-[#10B981]/20 text-[#00FF88]">
                    {getInitials(item.author.name)}
                  </AvatarFallback>
                </Avatar>
                <div className="text-xs text-[#CCCCCC] truncate">
                  {item.author.name}
                </div>
              </div>

              {/* Status */}
              <div className="col-span-2">
                <Badge 
                  variant="outline" 
                  className={cn("text-xs border", statusConfig[item.status].color)}
                >
                  {statusConfig[item.status].label}
                </Badge>
              </div>

              {/* Votes */}
              <div className="col-span-1 text-center">
                <div className="flex items-center justify-center gap-1">
                  <TrendingUp className="w-3 h-3 text-[#00FF88]" />
                  <span className="text-xs font-medium">{item.votes}</span>
                </div>
              </div>

              {/* Engagement */}
              <div className="col-span-1 text-center">
                <div className="text-xs font-medium">
                  {item.engagement}%
                </div>
              </div>

              {/* Date */}
              <div className="col-span-1 text-center">
                <div className="text-xs text-[#CCCCCC]">
                  {formatDate(item.submittedAt)}
                </div>
              </div>

              {/* Actions */}
              <div className="col-span-1 text-center">
                <div className="flex items-center justify-center">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-6 w-6 p-0 text-[#CCCCCC] hover:text-white hover:bg-white/10"
                    onClick={() => onViewItem?.(item.id)}
                  >
                    <Eye className="w-3 h-3" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer with summary */}
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/10">
          <div className="text-sm text-[#CCCCCC]">
            Showing {items.length} topics
          </div>
          <div className="flex items-center gap-4 text-xs text-[#CCCCCC]">
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-[#00FF88]"></div>
              Active: {items.filter(i => i.status === 'approved' || i.status === 'qualified').length}
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-[#f5d565]"></div>
              Pending: {items.filter(i => i.status === 'pending').length}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
