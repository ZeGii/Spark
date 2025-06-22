
'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { TrendingUp, TrendingDown, Minus } from 'lucide-react'
import { ResponsiveContainer, LineChart, Line, Area, AreaChart } from 'recharts'
import { cn } from '@/lib/utils'

interface ActivityMetricCardProps {
  title: string
  value: string | number
  change?: {
    value: number
    type: 'increase' | 'decrease' | 'neutral'
    period: string
  }
  chartData?: Array<{ name: string; value: number }>
  icon?: React.ReactNode
  color?: 'blue' | 'green' | 'amber' | 'red' | 'purple' | 'slate'
  description?: string
  chartType?: 'line' | 'area'
}

const colorClasses = {
  blue: 'text-[#00FF88] bg-[#00FF88]/20 border-[#00FF88]/30',
  green: 'text-[#10B981] bg-[#10B981]/20 border-[#10B981]/30',
  amber: 'text-[#f5d565] bg-[#f5d565]/20 border-[#f5d565]/30',
  red: 'text-red-400 bg-red-500/20 border-red-500/30',
  purple: 'text-[#FCD34D] bg-[#FCD34D]/20 border-[#FCD34D]/30',
  slate: 'text-[#CCCCCC] bg-white/10 border-white/20'
}

const chartColors = {
  blue: '#00FF88',
  green: '#10B981', 
  amber: '#f5d565',
  red: '#ef4444',
  purple: '#FCD34D',
  slate: '#CCCCCC'
}

export function ActivityMetricCard({ 
  title, 
  value, 
  change,
  chartData = [],
  icon, 
  color = 'slate', 
  description,
  chartType = 'line'
}: ActivityMetricCardProps) {
  return (
    <Card className="relative transition-all duration-200 hover:shadow-xl bg-gradient-to-br from-[#1A1A1A] to-[#252529] border border-white/20 hover:border-white/40 group min-h-[160px]">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-3">
          {icon && (
            <div className={cn(
              "w-8 h-8 rounded-lg flex items-center justify-center border transition-all duration-200 group-hover:scale-110",
              colorClasses[color]
            )}>
              <div className="scale-75">
                {icon}
              </div>
            </div>
          )}
          <div className="flex-1">
            <CardTitle className="text-sm font-semibold text-white">{title}</CardTitle>
            {description && (
              <p className="text-xs text-[#CCCCCC] mt-1">{description}</p>
            )}
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-3">
        {/* Value and Change */}
        <div className="flex items-end justify-between">
          <div className="text-2xl font-bold text-white">
            {value}
          </div>
          
          {change && (
            <div className="flex items-center">
              {change.type === 'increase' && (
                <div className="flex items-center text-[#10B981] text-xs">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  <span className="font-semibold">+{change.value}%</span>
                </div>
              )}
              {change.type === 'decrease' && (
                <div className="flex items-center text-red-400 text-xs">
                  <TrendingDown className="w-3 h-3 mr-1" />
                  <span className="font-semibold">{change.value}%</span>
                </div>
              )}
              {change.type === 'neutral' && (
                <div className="flex items-center text-[#CCCCCC] text-xs">
                  <Minus className="w-3 h-3 mr-1" />
                  <span className="font-semibold">0%</span>
                </div>
              )}
            </div>
          )}
        </div>
        
        {/* Mini Chart */}
        {chartData.length > 0 && (
          <div className="h-12 w-full">
            <ResponsiveContainer width="100%" height="100%">
              {chartType === 'area' ? (
                <AreaChart data={chartData}>
                  <defs>
                    <linearGradient id={`gradient-${color}`} x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor={chartColors[color]} stopOpacity={0.3}/>
                      <stop offset="95%" stopColor={chartColors[color]} stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <Area 
                    type="monotone" 
                    dataKey="value" 
                    stroke={chartColors[color]}
                    strokeWidth={2}
                    fill={`url(#gradient-${color})`}
                    dot={false}
                  />
                </AreaChart>
              ) : (
                <LineChart data={chartData}>
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    stroke={chartColors[color]}
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              )}
            </ResponsiveContainer>
          </div>
        )}
        
        {change?.period && (
          <div className="text-xs text-[#CCCCCC]">{change.period}</div>
        )}
      </CardContent>
    </Card>
  )
}
