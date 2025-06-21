
'use client'

import { useState, useEffect, useCallback, useMemo } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { 
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Calendar } from '@/components/ui/calendar'
import { Separator } from '@/components/ui/separator'
import { 
  Search, 
  Filter,
  X,
  Calendar as CalendarIcon,
  ChevronDown
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { format } from 'date-fns'

export interface FilterConfig {
  key: string
  label: string
  type: 'select' | 'multiselect' | 'search' | 'daterange'
  options?: { value: string; label: string; count?: number }[]
  placeholder?: string
  showCount?: boolean
}

export interface FilterState {
  [key: string]: string | string[] | { start: Date; end: Date } | null
}

interface FilterBarProps {
  filters: FilterConfig[]
  filterState: FilterState
  onFilterChange: (key: string, value: any) => void
  onClearFilters: () => void
  onApplyFilters?: () => void
  loading?: boolean
  showApplyButton?: boolean
  className?: string
}

export function FilterBar({
  filters,
  filterState,
  onFilterChange,
  onClearFilters,
  onApplyFilters,
  loading = false,
  showApplyButton = false,
  className
}: FilterBarProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [isExpanded, setIsExpanded] = useState(false)

  // Debounced search effect - Fixed to prevent infinite loops
  useEffect(() => {
    const timer = setTimeout(() => {
      const searchFilter = filters.find(f => f.type === 'search')
      if (searchFilter) {
        onFilterChange(searchFilter.key, searchTerm)
      }
    }, 300)
    return () => clearTimeout(timer)
  }, [searchTerm]) // Removed onFilterChange and filters from dependencies to prevent infinite loops

  // Initialize search term from filter state - Fixed to run only once
  useEffect(() => {
    const searchFilter = filters.find(f => f.type === 'search')
    if (searchFilter && filterState[searchFilter.key] && !searchTerm) {
      setSearchTerm(filterState[searchFilter.key] as string)
    }
  }, []) // Run only once on mount

  const getActiveFilterCount = () => {
    return Object.values(filterState).filter(value => {
      if (value === null || value === '') return false
      if (Array.isArray(value)) return value.length > 0
      if (typeof value === 'object' && value !== null) return true
      return true
    }).length
  }

  const renderFilter = (filter: FilterConfig) => {
    const value = filterState[filter.key]

    switch (filter.type) {
      case 'search':
        return (
          <div key={filter.key} className="relative flex-1 min-w-[200px] max-w-[300px]">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder={filter.placeholder || `Search ${filter.label.toLowerCase()}...`}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
              disabled={loading}
            />
          </div>
        )

      case 'select':
        return (
          <div key={filter.key} className="min-w-[140px]">
            <Select
              value={value as string || 'all'}
              onValueChange={(newValue) => onFilterChange(filter.key, newValue === 'all' ? null : newValue)}
              disabled={loading}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder={filter.label} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All {filter.label}</SelectItem>
                {filter.options?.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    <div className="flex items-center justify-between w-full">
                      <span>{option.label}</span>
                      {filter.showCount && option.count !== undefined && (
                        <Badge variant="secondary" className="ml-2 text-xs">
                          {option.count}
                        </Badge>
                      )}
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )

      case 'multiselect':
        const selectedValues = (value as string[]) || []
        return (
          <div key={filter.key} className="min-w-[160px]">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-between",
                    selectedValues.length > 0 && "border-primary"
                  )}
                  disabled={loading}
                >
                  <span className="truncate">
                    {selectedValues.length === 0
                      ? filter.label
                      : selectedValues.length === 1
                      ? filter.options?.find(opt => opt.value === selectedValues[0])?.label
                      : `${selectedValues.length} selected`
                    }
                  </span>
                  <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-48 p-2">
                <div className="space-y-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full justify-start text-xs"
                    onClick={() => onFilterChange(filter.key, [])}
                  >
                    Clear All
                  </Button>
                  <Separator />
                  {filter.options?.map((option) => (
                    <Button
                      key={option.value}
                      variant={selectedValues.includes(option.value) ? "default" : "ghost"}
                      size="sm"
                      className="w-full justify-start text-xs"
                      onClick={() => {
                        const newValues = selectedValues.includes(option.value)
                          ? selectedValues.filter(v => v !== option.value)
                          : [...selectedValues, option.value]
                        onFilterChange(filter.key, newValues)
                      }}
                    >
                      <div className="flex items-center justify-between w-full">
                        <span>{option.label}</span>
                        {filter.showCount && option.count !== undefined && (
                          <Badge variant="secondary" className="ml-2 text-xs">
                            {option.count}
                          </Badge>
                        )}
                      </div>
                    </Button>
                  ))}
                </div>
              </PopoverContent>
            </Popover>
          </div>
        )

      case 'daterange':
        const dateValue = value as { start: Date; end: Date } | null
        return (
          <div key={filter.key} className="min-w-[200px]">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !dateValue && "text-muted-foreground",
                    dateValue && "border-primary"
                  )}
                  disabled={loading}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {dateValue ? (
                    <>
                      {format(dateValue.start, "LLL dd")} - {format(dateValue.end, "LLL dd")}
                    </>
                  ) : (
                    <span>{filter.label}</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  initialFocus
                  mode="range"
                  selected={dateValue ? { from: dateValue.start, to: dateValue.end } : undefined}
                  onSelect={(range) => {
                    if (range?.from && range?.to) {
                      onFilterChange(filter.key, { start: range.from, end: range.to })
                    } else {
                      onFilterChange(filter.key, null)
                    }
                  }}
                  numberOfMonths={2}
                />
                <div className="p-3 border-t">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full"
                    onClick={() => onFilterChange(filter.key, null)}
                  >
                    Clear Date Range
                  </Button>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        )

      default:
        return null
    }
  }

  const activeFilters = getActiveFilterCount()
  const searchFilter = filters.find(f => f.type === 'search')
  const otherFilters = filters.filter(f => f.type !== 'search')

  return (
    <div className={cn("space-y-4", className)}>
      {/* Search and Filter Toggle Row */}
      <div className="flex items-center gap-4">
        {/* Search Filter */}
        {searchFilter && renderFilter(searchFilter)}

        {/* Filter Toggle Button */}
        <Button
          variant="outline"
          onClick={() => setIsExpanded(!isExpanded)}
          className={cn(
            "flex items-center gap-2",
            activeFilters > 0 && "border-primary bg-primary/5"
          )}
          disabled={loading}
        >
          <Filter className="w-4 h-4" />
          <span>Filters</span>
          {activeFilters > 0 && (
            <Badge variant="secondary" className="ml-1">
              {activeFilters}
            </Badge>
          )}
        </Button>

        {/* Clear Filters */}
        {activeFilters > 0 && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onClearFilters}
            className="text-muted-foreground hover:text-foreground"
            disabled={loading}
          >
            Clear All
          </Button>
        )}
      </div>

      {/* Expanded Filter Controls */}
      {isExpanded && otherFilters.length > 0 && (
        <div className="flex flex-wrap items-center gap-3 p-4 border rounded-lg bg-muted/50">
          {otherFilters.map(renderFilter)}
          
          {/* Apply Button (if needed) */}
          {showApplyButton && onApplyFilters && (
            <Button
              onClick={onApplyFilters}
              size="sm"
              disabled={loading}
              className="ml-auto"
            >
              Apply Filters
            </Button>
          )}
        </div>
      )}

      {/* Active Filter Indicators */}
      {activeFilters > 0 && (
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm text-muted-foreground">Active filters:</span>
          {Object.entries(filterState).map(([key, value]) => {
            if (!value) return null
            
            const filter = filters.find(f => f.key === key)
            if (!filter) return null

            if (Array.isArray(value) && value.length === 0) return null
            if (typeof value === 'string' && value === '') return null

            let displayValue = ''
            if (typeof value === 'string') {
              const option = filter.options?.find(opt => opt.value === value)
              displayValue = option?.label || value
            } else if (Array.isArray(value)) {
              displayValue = `${value.length} selected`
            } else if (typeof value === 'object' && value !== null) {
              const dateValue = value as { start: Date; end: Date }
              displayValue = `${format(dateValue.start, "MMM dd")} - ${format(dateValue.end, "MMM dd")}`
            }

            return (
              <Badge
                key={key}
                variant="secondary"
                className="flex items-center gap-1"
              >
                <span className="text-xs">{filter.label}: {displayValue}</span>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-auto p-0 w-4 h-4 hover:bg-transparent"
                  onClick={() => onFilterChange(key, filter.type === 'multiselect' ? [] : null)}
                  disabled={loading}
                >
                  <X className="w-3 h-3" />
                </Button>
              </Badge>
            )
          })}
        </div>
      )}
    </div>
  )
}
