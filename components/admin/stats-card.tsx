
'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { TrendingUp, TrendingDown, Minus, AlertTriangle } from 'lucide-react'
import { cn } from '@/lib/utils'

interface StatsCardProps {
  title: string
  value: string | number
  change?: {
    value: number
    type: 'increase' | 'decrease' | 'neutral'
    period: string
  }
  icon?: React.ReactNode
  color?: 'blue' | 'green' | 'amber' | 'red' | 'purple' | 'slate'
  urgent?: boolean
  description?: string
}

const colorClasses = {
  blue: 'text-[#00FF88] bg-[#00FF88]/20 border-[#00FF88]/30',
  green: 'text-[#10B981] bg-[#10B981]/20 border-[#10B981]/30',
  amber: 'text-[#f5d565] bg-[#f5d565]/20 border-[#f5d565]/30',
  red: 'text-red-400 bg-red-500/20 border-red-500/30',
  purple: 'text-[#FCD34D] bg-[#FCD34D]/20 border-[#FCD34D]/30',
  slate: 'text-[#CCCCCC] bg-white/10 border-white/20'
}

export function StatsCard({ 
  title, 
  value, 
  change, 
  icon, 
  color = 'slate', 
  urgent = false,
  description 
}: StatsCardProps) {
  return (
    <Card className={cn(
      "relative transition-all duration-200 hover:shadow-lg bg-gradient-to-br from-[#1A1A1A] to-[#252529] border border-white/20 hover:border-white/30 min-h-[80px]",
      urgent && "ring-2 ring-[#f5d565]/50 bg-gradient-to-br from-[#f5d565]/10 to-[#FCD34D]/5"
    )}>
      {urgent && (
        <div className="absolute -top-1 -right-1">
          <div className="w-2 h-2 bg-[#f5d565] rounded-full animate-pulse"></div>
        </div>
      )}
      
      {/* Optimized Layout for Better Space Utilization */}
      <div className="p-2 h-full">
        {/* Header Row - Icon and Title */}
        <div className="flex items-start justify-between mb-1">
          <div className="flex items-center gap-1.5 flex-1 min-w-0">
            {/* Icon */}
            {icon && (
              <div className={cn(
                "w-6 h-6 rounded flex items-center justify-center flex-shrink-0",
                colorClasses[color]
              )}>
                {icon}
              </div>
            )}
            
            {/* Title */}
            <div className="text-xs font-semibold text-white leading-tight truncate">
              {title}
            </div>
          </div>
          
          {/* Urgent Status Indicator */}
          {urgent && (
            <div className="flex-shrink-0 ml-1">
              <AlertTriangle className="w-4 h-4 text-[#f5d565]" />
            </div>
          )}
        </div>
        
        {/* Value Row */}
        <div className="mb-1">
          <div className="text-xl font-bold text-white leading-tight truncate">
            {value}
          </div>
        </div>
        
        {/* Bottom Row - Change/Description */}
        <div className="flex items-center justify-between">
          {/* Change Indicator */}
          {change && (
            <div className="flex items-center">
              {change.type === 'increase' && (
                <div className="flex items-center text-[#10B981]">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  <span className="text-xs font-medium">+{change.value}%</span>
                </div>
              )}
              {change.type === 'decrease' && (
                <div className="flex items-center text-red-400">
                  <TrendingDown className="w-3 h-3 mr-1" />
                  <span className="text-xs font-medium">{change.value}%</span>
                </div>
              )}
              {change.type === 'neutral' && (
                <div className="flex items-center text-[#CCCCCC]">
                  <Minus className="w-3 h-3 mr-1" />
                  <span className="text-xs font-medium">0%</span>
                </div>
              )}
            </div>
          )}
          
          {/* Description */}
          {description && !change && (
            <div className="flex items-center flex-1 min-w-0">
              {urgent && <AlertTriangle className="w-3 h-3 text-[#f5d565] mr-1 flex-shrink-0" />}
              <span className={cn(
                "text-xs leading-tight truncate",
                urgent ? "text-[#f5d565] font-medium" : "text-[#CCCCCC]"
              )}>
                {description}
              </span>
            </div>
          )}
        </div>
      </div>
    </Card>
  )
}
