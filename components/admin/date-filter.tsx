
'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { CalendarIcon, Filter, X, RotateCcw } from 'lucide-react'
import { format, subDays, startOfDay, endOfDay } from 'date-fns'
import { cn } from '@/lib/utils'

export interface DateRange {
  startDate: Date
  endDate: Date
  label: string
}

interface DateFilterProps {
  onDateRangeChange: (range: DateRange | null) => void
  className?: string
}

const QUICK_FILTERS = [
  {
    label: 'Today',
    getValue: () => ({
      startDate: startOfDay(new Date()),
      endDate: endOfDay(new Date()),
      label: 'Today'
    })
  },
  {
    label: '7 Days',
    getValue: () => ({
      startDate: startOfDay(subDays(new Date(), 6)),
      endDate: endOfDay(new Date()),
      label: 'Last 7 Days'
    })
  },
  {
    label: '30 Days',
    getValue: () => ({
      startDate: startOfDay(subDays(new Date(), 29)),
      endDate: endOfDay(new Date()),
      label: 'Last 30 Days'
    })
  },
  {
    label: '90 Days',
    getValue: () => ({
      startDate: startOfDay(subDays(new Date(), 89)),
      endDate: endOfDay(new Date()),
      label: 'Last 90 Days'
    })
  }
]

export function DateFilter({ onDateRangeChange, className }: DateFilterProps) {
  const [selectedRange, setSelectedRange] = useState<DateRange | null>(null)
  const [customStartDate, setCustomStartDate] = useState<Date | undefined>()
  const [customEndDate, setCustomEndDate] = useState<Date | undefined>()
  const [isCustomOpen, setIsCustomOpen] = useState(false)
  const [activeFilter, setActiveFilter] = useState<string | null>(null)

  const handleQuickFilter = (filter: typeof QUICK_FILTERS[0]) => {
    const range = filter.getValue()
    setSelectedRange(range)
    setActiveFilter(filter.label)
    setCustomStartDate(undefined)
    setCustomEndDate(undefined)
    onDateRangeChange(range)
  }

  const handleCustomRange = () => {
    if (customStartDate && customEndDate) {
      if (customStartDate > customEndDate) {
        // Swap dates if start is after end
        const temp = customStartDate
        setCustomStartDate(customEndDate)
        setCustomEndDate(temp)
      }
      
      const range: DateRange = {
        startDate: startOfDay(customStartDate),
        endDate: endOfDay(customEndDate || customStartDate),
        label: `${format(customStartDate, 'MMM d')} - ${format(customEndDate || customStartDate, 'MMM d, yyyy')}`
      }
      
      setSelectedRange(range)
      setActiveFilter('custom')
      setIsCustomOpen(false)
      onDateRangeChange(range)
    }
  }

  const handleClearFilter = () => {
    setSelectedRange(null)
    setActiveFilter(null)
    setCustomStartDate(undefined)
    setCustomEndDate(undefined)
    onDateRangeChange(null)
  }

  const isCustomRangeValid = customStartDate && customEndDate

  return (
    <div className={cn("flex items-center gap-3 flex-wrap", className)}>
      {/* Filter Icon and Label */}
      <div className="flex items-center gap-2 text-[#CCCCCC]">
        <Filter className="w-4 h-4" />
        <span className="text-sm font-medium">Filter by Date:</span>
      </div>

      {/* Quick Filter Buttons */}
      <div className="flex items-center gap-2">
        {QUICK_FILTERS.map((filter) => (
          <Button
            key={filter.label}
            variant={activeFilter === filter.label ? "default" : "outline"}
            size="sm"
            onClick={() => handleQuickFilter(filter)}
            className={cn(
              "text-xs",
              activeFilter === filter.label
                ? "bg-[#00FF88] text-black hover:bg-[#00E87A]"
                : "border-white/20 text-white hover:bg-white/10"
            )}
          >
            {filter.label}
          </Button>
        ))}
      </div>

      {/* Custom Range Picker */}
      <Popover open={isCustomOpen} onOpenChange={setIsCustomOpen}>
        <PopoverTrigger asChild>
          <Button
            variant={activeFilter === 'custom' ? "default" : "outline"}
            size="sm"
            className={cn(
              "text-xs",
              activeFilter === 'custom'
                ? "bg-[#00FF88] text-black hover:bg-[#00E87A]"
                : "border-white/20 text-white hover:bg-white/10"
            )}
          >
            <CalendarIcon className="w-3 h-3 mr-1" />
            Custom Range
          </Button>
        </PopoverTrigger>
        <PopoverContent 
          className="w-auto p-0 bg-[#1A1A1A] border border-white/20" 
          align="start"
        >
          <div className="p-4 space-y-4">
            <div className="text-sm font-medium text-white mb-3">Select Date Range</div>
            
            <div className="grid grid-cols-2 gap-4">
              {/* Start Date */}
              <div>
                <label className="text-xs text-[#CCCCCC] mb-2 block">Start Date</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full justify-start text-left border-white/20 text-white hover:bg-white/10"
                    >
                      <CalendarIcon className="mr-2 h-3 w-3" />
                      {customStartDate ? format(customStartDate, "MMM d, yyyy") : "Pick start"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 bg-[#1A1A1A] border border-white/20">
                    <Calendar
                      mode="single"
                      selected={customStartDate}
                      onSelect={setCustomStartDate}
                      disabled={(date) => date > new Date() || (customEndDate ? date > customEndDate : false)}
                      initialFocus
                      className="text-white"
                    />
                  </PopoverContent>
                </Popover>
              </div>

              {/* End Date */}
              <div>
                <label className="text-xs text-[#CCCCCC] mb-2 block">End Date</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full justify-start text-left border-white/20 text-white hover:bg-white/10"
                    >
                      <CalendarIcon className="mr-2 h-3 w-3" />
                      {customEndDate ? format(customEndDate, "MMM d, yyyy") : "Pick end"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 bg-[#1A1A1A] border border-white/20">
                    <Calendar
                      mode="single"
                      selected={customEndDate}
                      onSelect={setCustomEndDate}
                      disabled={(date) => date > new Date() || (customStartDate ? date < customStartDate : false)}
                      initialFocus
                      className="text-white"
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>

            <Separator className="bg-white/10" />

            <div className="flex items-center justify-between gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setCustomStartDate(undefined)
                  setCustomEndDate(undefined)
                }}
                className="border-white/20 text-white hover:bg-white/10"
              >
                <RotateCcw className="w-3 h-3 mr-1" />
                Reset
              </Button>
              
              <Button
                size="sm"
                onClick={handleCustomRange}
                disabled={!isCustomRangeValid}
                className="bg-[#00FF88] text-black hover:bg-[#00E87A] disabled:opacity-50"
              >
                Apply Range
              </Button>
            </div>
          </div>
        </PopoverContent>
      </Popover>

      {/* Active Filter Display */}
      {selectedRange && (
        <>
          <Separator orientation="vertical" className="h-6 bg-white/20" />
          <div className="flex items-center gap-2">
            <Badge 
              variant="secondary" 
              className="bg-[#00FF88]/20 text-[#00FF88] border-[#00FF88]/30"
            >
              {selectedRange.label}
            </Badge>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleClearFilter}
              className="h-6 w-6 p-0 text-[#CCCCCC] hover:text-white hover:bg-white/10"
            >
              <X className="w-3 h-3" />
            </Button>
          </div>
        </>
      )}
    </div>
  )
}
