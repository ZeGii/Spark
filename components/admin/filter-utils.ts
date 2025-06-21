
import { FilterState } from './filter-bar'

// Convert filter state to URL search parameters
export const filtersToSearchParams = (filters: FilterState): URLSearchParams => {
  const params = new URLSearchParams()
  
  Object.entries(filters).forEach(([key, value]) => {
    if (value === null || value === undefined || value === '') return
    
    if (Array.isArray(value)) {
      if (value.length > 0) {
        params.append(key, value.join(','))
      }
    } else if (typeof value === 'object' && value !== null) {
      // Handle date range
      const dateRange = value as { start: Date; end: Date }
      params.append(`${key}Start`, dateRange.start.toISOString())
      params.append(`${key}End`, dateRange.end.toISOString())
    } else {
      params.append(key, String(value))
    }
  })
  
  return params
}

// Convert URL search parameters back to filter state
export const searchParamsToFilters = (searchParams: URLSearchParams): FilterState => {
  const filters: FilterState = {}
  
  searchParams.forEach((value, key) => {
    if (key.endsWith('Start')) {
      const baseKey = key.replace('Start', '')
      const endValue = searchParams.get(`${baseKey}End`)
      if (endValue) {
        filters[baseKey] = {
          start: new Date(value),
          end: new Date(endValue)
        }
      }
    } else if (key.endsWith('End')) {
      // Skip, handled by Start case
      return
    } else if (value.includes(',')) {
      filters[key] = value.split(',')
    } else {
      filters[key] = value
    }
  })
  
  return filters
}

// Check if filters have any active values
export const hasActiveFilters = (filters: FilterState): boolean => {
  return Object.values(filters).some(value => {
    if (value === null || value === undefined || value === '') return false
    if (Array.isArray(value)) return value.length > 0
    if (typeof value === 'object' && value !== null) return true
    return true
  })
}

// Get filter summary for display
export const getFilterSummary = (filters: FilterState): string => {
  const activeFilters = Object.entries(filters).filter(([_, value]) => {
    if (value === null || value === undefined || value === '') return false
    if (Array.isArray(value)) return value.length > 0
    if (typeof value === 'object' && value !== null) return true
    return true
  })
  
  if (activeFilters.length === 0) return 'No filters applied'
  if (activeFilters.length === 1) return '1 filter applied'
  return `${activeFilters.length} filters applied`
}

// Reset filter state
export const resetFilters = (): FilterState => ({})

// Merge filter states (for combining default filters with user filters)
export const mergeFilters = (defaultFilters: FilterState, userFilters: FilterState): FilterState => {
  return { ...defaultFilters, ...userFilters }
}
