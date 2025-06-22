
'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, Area, AreaChart } from 'recharts'
import { Activity, TrendingUp } from 'lucide-react'
import { cn } from '@/lib/utils'

interface WeeklyActivityCardProps {
  title: string
  primaryValue: string | number
  change?: {
    value: number
    type: 'increase' | 'decrease' | 'neutral'
    period: string
  }
  chartData: Array<{ name: string; value: number }>
  description?: string
  color?: 'blue' | 'green' | 'amber' | 'purple'
}

const colorClasses = {
  blue: { primary: '#3b82f6', bg: 'from-blue-500/20 to-blue-600/10' },
  green: { primary: '#00FF88', bg: 'from-[#00FF88]/20 to-[#10B981]/10' },
  amber: { primary: '#f5d565', bg: 'from-[#f5d565]/20 to-[#FCD34D]/10' },
  purple: { primary: '#8b5cf6', bg: 'from-purple-500/20 to-purple-600/10' }
}

export function WeeklyActivityCard({
  title,
  primaryValue,
  change,
  chartData,
  description,
  color = 'green'
}: WeeklyActivityCardProps) {
  const colors = colorClasses[color]

  return (
    <Card className="bg-gradient-to-br from-[#1A1A1A] to-[#252529] border border-white/20 hover:border-white/40 transition-all duration-200">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-base font-semibold text-white">{title}</CardTitle>
            {description && (
              <p className="text-sm text-[#CCCCCC] mt-1">{description}</p>
            )}
          </div>
          <div className={cn(
            "w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br border border-white/20 text-[#00FF88]",
            colors.bg
          )}>
            <Activity className="w-5 h-5" />
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Primary Value */}
        <div className="flex items-end gap-3">
          <div className="text-2xl font-bold text-white">
            {primaryValue}
          </div>
          {change && (
            <div className={cn(
              "flex items-center px-2 py-1 rounded-full text-xs font-semibold",
              change.type === 'increase' 
                ? "text-[#10B981] bg-[#10B981]/20"
                : change.type === 'decrease'
                ? "text-red-400 bg-red-500/20"
                : "text-[#CCCCCC] bg-white/10"
            )}>
              <TrendingUp className="w-3 h-3 mr-1" />
              +{change.value}%
            </div>
          )}
        </div>

        {/* Chart */}
        <div className="h-24">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData}>
              <defs>
                <linearGradient id={`gradient-${color}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={colors.primary} stopOpacity={0.3}/>
                  <stop offset="95%" stopColor={colors.primary} stopOpacity={0}/>
                </linearGradient>
              </defs>
              <XAxis 
                dataKey="name" 
                tick={{ fontSize: 10, fill: '#9CA3AF' }}
                tickLine={false}
                axisLine={false}
              />
              <YAxis hide />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1F2937', 
                  border: '1px solid #374151',
                  borderRadius: '8px',
                  fontSize: '11px',
                  color: '#F9FAFB'
                }}
              />
              <Area 
                type="monotone" 
                dataKey="value" 
                stroke={colors.primary}
                strokeWidth={2}
                fill={`url(#gradient-${color})`}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Change indicator */}
        {change && (
          <div className="text-xs text-[#CCCCCC]">
            {change.period}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
