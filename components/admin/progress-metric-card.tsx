
'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface ProgressMetricCardProps {
  title: string
  value: string | number
  percentage: number
  target?: string | number
  icon?: React.ReactNode
  color?: 'blue' | 'green' | 'amber' | 'red' | 'purple' | 'slate'
  description?: string
  urgent?: boolean
}

const colorClasses = {
  blue: 'text-[#00FF88] bg-[#00FF88]/20 border-[#00FF88]/30',
  green: 'text-[#10B981] bg-[#10B981]/20 border-[#10B981]/30',
  amber: 'text-[#f5d565] bg-[#f5d565]/20 border-[#f5d565]/30',
  red: 'text-red-400 bg-red-500/20 border-red-500/30',
  purple: 'text-[#FCD34D] bg-[#FCD34D]/20 border-[#FCD34D]/30',
  slate: 'text-[#CCCCCC] bg-white/10 border-white/20'
}

const progressColors = {
  blue: '#00FF88',
  green: '#10B981', 
  amber: '#f5d565',
  red: '#ef4444',
  purple: '#FCD34D',
  slate: '#CCCCCC'
}

export function ProgressMetricCard({ 
  title, 
  value, 
  percentage,
  target,
  icon, 
  color = 'slate', 
  description,
  urgent = false
}: ProgressMetricCardProps) {
  return (
    <Card className={cn(
      "relative transition-all duration-200 hover:shadow-xl bg-gradient-to-br from-[#1A1A1A] to-[#252529] border border-white/20 hover:border-white/40 group min-h-[140px]",
      urgent && "ring-2 ring-[#f5d565]/50 bg-gradient-to-br from-[#f5d565]/10 to-[#FCD34D]/5"
    )}>
      {urgent && (
        <div className="absolute -top-1 -right-1">
          <div className="w-3 h-3 bg-[#f5d565] rounded-full animate-pulse shadow-lg shadow-[#f5d565]/50"></div>
        </div>
      )}
      
      <CardHeader className="pb-4">
        <div className="flex items-center gap-3">
          {icon && (
            <div className={cn(
              "w-10 h-10 rounded-lg flex items-center justify-center border transition-all duration-200 group-hover:scale-110",
              colorClasses[color]
            )}>
              {icon}
            </div>
          )}
          <div className="flex-1">
            <CardTitle className="text-base font-semibold text-white">{title}</CardTitle>
            {description && (
              <p className="text-sm text-[#CCCCCC] mt-1">{description}</p>
            )}
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Value and Target */}
        <div className="flex items-end justify-between">
          <div className="text-2xl font-bold text-white">
            {value}
          </div>
          {target && (
            <div className="text-sm text-[#CCCCCC]">
              of {target}
            </div>
          )}
        </div>
        
        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm text-[#CCCCCC]">Progress</span>
            <span className="text-sm font-semibold text-white">{percentage}%</span>
          </div>
          
          <div className="relative">
            <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
              <div 
                className="h-full rounded-full transition-all duration-500 ease-out"
                style={{
                  width: `${percentage}%`,
                  backgroundColor: progressColors[color]
                }}
              />
            </div>
            {/* Glow effect for high percentages */}
            {percentage > 80 && (
              <div 
                className="absolute inset-0 h-2 rounded-full blur-sm opacity-30"
                style={{
                  background: `linear-gradient(90deg, transparent ${Math.max(0, percentage - 10)}%, ${progressColors[color]} ${percentage}%)`
                }}
              />
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
