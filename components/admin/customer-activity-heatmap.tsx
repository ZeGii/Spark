
'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Users, Clock } from 'lucide-react'
import { cn } from '@/lib/utils'

interface HeatmapData {
  hour: number
  day: string
  value: number
  intensity: number // 0-1 scale for color intensity
}

interface CustomerActivityHeatmapProps {
  title: string
  description?: string
  heatmapData: HeatmapData[]
  peakHour?: string
  peakDay?: string
}

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
const hours = ['6AM', '9AM', '12PM', '3PM', '6PM', '9PM']

export function CustomerActivityHeatmap({
  title,
  description,
  heatmapData,
  peakHour = '3PM',
  peakDay = 'Wednesday'
}: CustomerActivityHeatmapProps) {
  const getIntensityColor = (intensity: number) => {
    if (intensity >= 0.8) return 'bg-[#00FF88] shadow-[#00FF88]/50'
    if (intensity >= 0.6) return 'bg-[#00FF88]/80'
    if (intensity >= 0.4) return 'bg-[#00FF88]/60'
    if (intensity >= 0.2) return 'bg-[#00FF88]/40'
    return 'bg-[#00FF88]/20'
  }

  const getCellValue = (day: string, hourIndex: number) => {
    const dataPoint = heatmapData.find(d => d.day === day && d.hour === hourIndex)
    return dataPoint?.intensity || Math.random() * 0.8 + 0.1 // Fallback with random data
  }

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
          <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br from-[#00FF88]/20 to-[#10B981]/10 border border-white/20 text-[#00FF88]">
            <Users className="w-5 h-5" />
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Heatmap Grid */}
        <div className="space-y-1">
          {/* Hour labels */}
          <div className="grid grid-cols-7 gap-1 mb-2">
            <div className="text-xs text-[#CCCCCC] text-center"></div>
            {hours.map(hour => (
              <div key={hour} className="text-xs text-[#CCCCCC] text-center">
                {hour}
              </div>
            ))}
          </div>
          
          {/* Heatmap rows */}
          {days.map(day => (
            <div key={day} className="grid grid-cols-7 gap-1">
              <div className="text-xs text-[#CCCCCC] text-center py-1">
                {day}
              </div>
              {hours.map((_, hourIndex) => {
                const intensity = getCellValue(day, hourIndex)
                return (
                  <div
                    key={`${day}-${hourIndex}`}
                    className={cn(
                      "h-4 rounded-sm transition-all duration-200 hover:scale-110 cursor-pointer",
                      getIntensityColor(intensity)
                    )}
                    title={`${day} ${hours[hourIndex]}: ${Math.round(intensity * 100)}% activity`}
                  />
                )
              })}
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="flex items-center justify-between pt-2 border-t border-white/10">
          <div className="flex items-center gap-2">
            <span className="text-xs text-[#CCCCCC]">Less</span>
            <div className="flex gap-1">
              {[0.2, 0.4, 0.6, 0.8, 1].map(intensity => (
                <div
                  key={intensity}
                  className={cn("w-3 h-3 rounded-sm", getIntensityColor(intensity))}
                />
              ))}
            </div>
            <span className="text-xs text-[#CCCCCC]">More</span>
          </div>
          
          <div className="flex items-center gap-1 text-xs text-[#CCCCCC]">
            <Clock className="w-3 h-3" />
            Peak: {peakDay} {peakHour}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
