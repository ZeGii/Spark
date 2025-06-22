
'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, LineChart, Line } from 'recharts'
import { TrendingUp, TrendingDown, Users, FileText, Activity } from 'lucide-react'
import { cn } from '@/lib/utils'

interface Metric {
  label: string
  value: string | number
  change?: {
    value: number
    type: 'increase' | 'decrease' | 'neutral'
  }
  icon?: React.ReactNode
}

interface RevenueStyleCardProps {
  title: string
  description?: string
  primaryMetric: Metric
  secondaryMetrics: Metric[]
  chartData: Array<{ name: string; value: number; secondary?: number }>
  chartType?: 'bar' | 'line'
  color?: 'blue' | 'green' | 'amber' | 'purple'
}

const colorClasses = {
  blue: {
    primary: '#3b82f6',
    secondary: '#60a5fa',
    bg: 'from-blue-500/20 to-blue-600/10',
    text: 'text-blue-400'
  },
  green: {
    primary: '#00FF88',
    secondary: '#10B981',
    bg: 'from-[#00FF88]/20 to-[#10B981]/10',
    text: 'text-[#00FF88]'
  },
  amber: {
    primary: '#f5d565',
    secondary: '#FCD34D',
    bg: 'from-[#f5d565]/20 to-[#FCD34D]/10',
    text: 'text-[#f5d565]'
  },
  purple: {
    primary: '#8b5cf6',
    secondary: '#a78bfa',
    bg: 'from-purple-500/20 to-purple-600/10',
    text: 'text-purple-400'
  }
}

export function RevenueStyleCard({
  title,
  description,
  primaryMetric,
  secondaryMetrics,
  chartData,
  chartType = 'bar',
  color = 'green'
}: RevenueStyleCardProps) {
  const colors = colorClasses[color]

  return (
    <Card className="bg-gradient-to-br from-[#1A1A1A] to-[#252529] border border-white/20 hover:border-white/40 transition-all duration-200">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-lg font-semibold text-white">{title}</CardTitle>
            {description && (
              <p className="text-sm text-[#CCCCCC] mt-1">{description}</p>
            )}
          </div>
          {primaryMetric.icon && (
            <div className={cn(
              "w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br border border-white/20",
              colors.bg,
              colors.text
            )}>
              {primaryMetric.icon}
            </div>
          )}
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Primary Metric */}
        <div className="space-y-2">
          <div className="flex items-end gap-3">
            <div className="text-3xl font-bold text-white">
              {primaryMetric.value}
            </div>
            {primaryMetric.change && (
              <div className={cn(
                "flex items-center px-2 py-1 rounded-full text-xs font-semibold",
                primaryMetric.change.type === 'increase' 
                  ? "text-[#10B981] bg-[#10B981]/20"
                  : primaryMetric.change.type === 'decrease'
                  ? "text-red-400 bg-red-500/20"
                  : "text-[#CCCCCC] bg-white/10"
              )}>
                {primaryMetric.change.type === 'increase' && <TrendingUp className="w-3 h-3 mr-1" />}
                {primaryMetric.change.type === 'decrease' && <TrendingDown className="w-3 h-3 mr-1" />}
                {primaryMetric.change.type === 'increase' ? '+' : ''}{primaryMetric.change.value}%
              </div>
            )}
          </div>
          <p className="text-sm text-[#CCCCCC]">{primaryMetric.label}</p>
        </div>

        {/* Chart */}
        <div className="h-32">
          <ResponsiveContainer width="100%" height="100%">
            {chartType === 'bar' ? (
              <BarChart data={chartData}>
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
                <Bar 
                  dataKey="value" 
                  fill={colors.primary}
                  radius={[2, 2, 0, 0]}
                />
                {chartData.some(d => d.secondary) && (
                  <Bar 
                    dataKey="secondary" 
                    fill={colors.secondary}
                    radius={[2, 2, 0, 0]}
                  />
                )}
              </BarChart>
            ) : (
              <LineChart data={chartData}>
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
                <Line 
                  type="monotone" 
                  dataKey="value" 
                  stroke={colors.primary}
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            )}
          </ResponsiveContainer>
        </div>

        {/* Secondary Metrics */}
        <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
          {secondaryMetrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-lg font-semibold text-white">
                {metric.value}
              </div>
              <div className="text-xs text-[#CCCCCC] mt-1">
                {metric.label}
              </div>
              {metric.change && (
                <div className={cn(
                  "flex items-center justify-center mt-1 text-xs",
                  metric.change.type === 'increase' ? "text-[#10B981]" : "text-red-400"
                )}>
                  {metric.change.type === 'increase' ? '+' : ''}{metric.change.value}%
                </div>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
