
'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { TrendingUp, TrendingDown, Minus } from 'lucide-react'
import { cn } from '@/lib/utils'

interface MetricItem {
  label: string
  value: string | number
  change?: {
    value: number
    type: 'increase' | 'decrease' | 'neutral'
  }
  color?: 'blue' | 'green' | 'amber' | 'red' | 'purple' | 'slate'
}

interface MultiMetricCardProps {
  title: string
  metrics: MetricItem[]
  icon?: React.ReactNode
  description?: string
}

const colorClasses = {
  blue: 'text-[#00FF88]',
  green: 'text-[#10B981]', 
  amber: 'text-[#f5d565]',
  red: 'text-red-400',
  purple: 'text-[#FCD34D]',
  slate: 'text-[#CCCCCC]'
}

export function MultiMetricCard({ 
  title, 
  metrics, 
  icon,
  description 
}: MultiMetricCardProps) {
  return (
    <Card className="relative transition-all duration-200 hover:shadow-xl bg-gradient-to-br from-[#1A1A1A] to-[#252529] border border-white/20 hover:border-white/40 group min-h-[160px]">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-3">
          {icon && (
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#00FF88]/20 to-[#10B981]/20 border border-[#00FF88]/30 flex items-center justify-center transition-all duration-200 group-hover:scale-110">
              {icon}
            </div>
          )}
          <div>
            <CardTitle className="text-lg font-semibold text-white">{title}</CardTitle>
            {description && (
              <p className="text-sm text-[#CCCCCC] mt-1">{description}</p>
            )}
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {metrics.map((metric, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex-1">
              <div className="text-sm text-[#CCCCCC] mb-1">{metric.label}</div>
              <div className={cn(
                "text-xl font-bold",
                metric.color ? colorClasses[metric.color] : 'text-white'
              )}>
                {metric.value}
              </div>
            </div>
            
            {metric.change && (
              <div className="flex items-center ml-4">
                {metric.change.type === 'increase' && (
                  <div className="flex items-center text-[#10B981]">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    <span className="text-sm font-semibold">+{metric.change.value}%</span>
                  </div>
                )}
                {metric.change.type === 'decrease' && (
                  <div className="flex items-center text-red-400">
                    <TrendingDown className="w-4 h-4 mr-1" />
                    <span className="text-sm font-semibold">{metric.change.value}%</span>
                  </div>
                )}
                {metric.change.type === 'neutral' && (
                  <div className="flex items-center text-[#CCCCCC]">
                    <Minus className="w-4 h-4 mr-1" />
                    <span className="text-sm font-semibold">0%</span>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
