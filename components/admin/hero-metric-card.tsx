
'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { TrendingUp, TrendingDown, Minus, AlertTriangle } from 'lucide-react'
import { cn } from '@/lib/utils'

interface HeroMetricCardProps {
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
  size?: 'normal' | 'large'
}

const colorClasses = {
  blue: 'text-[#00FF88] bg-[#00FF88]/20 border-[#00FF88]/30',
  green: 'text-[#10B981] bg-[#10B981]/20 border-[#10B981]/30',
  amber: 'text-[#f5d565] bg-[#f5d565]/20 border-[#f5d565]/30',
  red: 'text-red-400 bg-red-500/20 border-red-500/30',
  purple: 'text-[#FCD34D] bg-[#FCD34D]/20 border-[#FCD34D]/30',
  slate: 'text-[#CCCCCC] bg-white/10 border-white/20'
}

export function HeroMetricCard({ 
  title, 
  value, 
  change, 
  icon, 
  color = 'slate', 
  urgent = false,
  description,
  size = 'normal'
}: HeroMetricCardProps) {
  return (
    <Card className={cn(
      "relative transition-all duration-200 hover:shadow-xl bg-gradient-to-br from-[#1A1A1A] to-[#252529] border border-white/20 hover:border-white/40 group",
      size === 'large' ? 'min-h-[140px]' : 'min-h-[120px]',
      urgent && "ring-2 ring-[#f5d565]/50 bg-gradient-to-br from-[#f5d565]/10 to-[#FCD34D]/5"
    )}>
      {urgent && (
        <div className="absolute -top-1 -right-1">
          <div className="w-3 h-3 bg-[#f5d565] rounded-full animate-pulse shadow-lg shadow-[#f5d565]/50"></div>
        </div>
      )}
      
      <CardContent className={cn("p-6", size === 'large' && "p-8")}>
        {/* Header with Icon and Title */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            {icon && (
              <div className={cn(
                "rounded-lg flex items-center justify-center border transition-all duration-200 group-hover:scale-110",
                size === 'large' ? 'w-12 h-12' : 'w-10 h-10',
                colorClasses[color]
              )}>
                <div className={size === 'large' ? 'scale-125' : ''}>
                  {icon}
                </div>
              </div>
            )}
            <div>
              <h3 className={cn(
                "font-semibold text-white leading-tight",
                size === 'large' ? 'text-lg' : 'text-base'
              )}>
                {title}
              </h3>
              {description && (
                <p className="text-sm text-[#CCCCCC] mt-1">{description}</p>
              )}
            </div>
          </div>
          
          {urgent && (
            <AlertTriangle className="w-5 h-5 text-[#f5d565] animate-pulse" />
          )}
        </div>
        
        {/* Main Value */}
        <div className="mb-4">
          <div className={cn(
            "font-bold text-white leading-none tracking-tight",
            size === 'large' ? 'text-4xl' : 'text-3xl'
          )}>
            {value}
          </div>
        </div>
        
        {/* Change Indicator */}
        {change && (
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              {change.type === 'increase' && (
                <div className="flex items-center text-[#10B981] bg-[#10B981]/20 px-2 py-1 rounded-full">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  <span className="text-sm font-semibold">+{change.value}%</span>
                </div>
              )}
              {change.type === 'decrease' && (
                <div className="flex items-center text-red-400 bg-red-500/20 px-2 py-1 rounded-full">
                  <TrendingDown className="w-4 h-4 mr-1" />
                  <span className="text-sm font-semibold">{change.value}%</span>
                </div>
              )}
              {change.type === 'neutral' && (
                <div className="flex items-center text-[#CCCCCC] bg-white/10 px-2 py-1 rounded-full">
                  <Minus className="w-4 h-4 mr-1" />
                  <span className="text-sm font-semibold">0%</span>
                </div>
              )}
            </div>
            
            <span className="text-xs text-[#CCCCCC] font-medium">{change.period}</span>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
