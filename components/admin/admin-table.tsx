
'use client'

import { useState, useEffect } from 'react'
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { 
  Search, 
  ArrowUpDown,
  ArrowUp,
  ArrowDown,
  Download
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { TablePagination, PaginationState } from './table-pagination'
import { FilterBar, FilterConfig, FilterState } from './filter-bar'

export interface Column<T> {
  key: keyof T | string
  label: string
  sortable?: boolean
  render?: (value: any, row: T) => React.ReactNode
  width?: string
}

interface AdminTableProps<T> {
  data: T[]
  columns: Column<T>[]
  pagination: PaginationState
  onPageChange: (page: number) => void
  onPageSizeChange: (pageSize: number) => void
  onSearchChange?: (search: string) => void
  onSortChange?: (sortBy: string, sortOrder: 'asc' | 'desc') => void
  loading?: boolean
  emptyMessage?: string
  onRowClick?: (row: T) => void
  // Bulk selection props
  bulkSelectable?: boolean
  selectedItems?: string[]
  onSelectionChange?: (selectedIds: string[]) => void
  getItemId?: (item: T) => string
  searchPlaceholder?: string
  exportable?: boolean
  className?: string
  // Filter props
  filterConfigs?: FilterConfig[]
  filterState?: FilterState
  onFilterChange?: (key: string, value: any) => void
  onClearFilters?: () => void
  showFilters?: boolean
}

export function AdminTable<T extends Record<string, any>>({
  data = [],
  columns = [],
  pagination,
  onPageChange,
  onPageSizeChange,
  onSearchChange,
  onSortChange,
  loading = false,
  emptyMessage = "No data available",
  onRowClick,
  // Bulk selection props
  bulkSelectable = false,
  selectedItems = [],
  onSelectionChange,
  getItemId = (item) => item.id || String(item.id || ''),
  searchPlaceholder = "Search...",
  exportable = false,
  className,
  // Filter props
  filterConfigs = [],
  filterState = {},
  onFilterChange,
  onClearFilters,
  showFilters = false
}: AdminTableProps<T>) {
  const [searchTerm, setSearchTerm] = useState('')
  const [sortConfig, setSortConfig] = useState<{
    key: string
    direction: 'asc' | 'desc'
  } | null>(null)

  // Debounce search (only if no filter system is used)
  useEffect(() => {
    if (!showFilters && onSearchChange) {
      const timer = setTimeout(() => {
        onSearchChange(searchTerm)
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [searchTerm, onSearchChange, showFilters])

  // Ensure data is always an array
  const safeData = Array.isArray(data) ? data : []

  // Bulk selection logic
  const handleSelectItem = (itemId: string, checked: boolean) => {
    if (!onSelectionChange) return
    
    const newSelection = checked
      ? [...selectedItems, itemId]
      : selectedItems.filter(id => id !== itemId)
    
    onSelectionChange(newSelection)
  }

  // Selection state calculations
  const currentPageIds = safeData.map(item => getItemId(item))
  const isAllCurrentPageSelected = currentPageIds.length > 0 && currentPageIds.every(id => selectedItems.includes(id))

  const handleSelectAllToggle = (checked: boolean) => {
    if (!onSelectionChange) return
    
    if (checked) {
      const newSelection = Array.from(new Set([...selectedItems, ...currentPageIds]))
      onSelectionChange(newSelection)
    } else {
      const newSelection = selectedItems.filter(id => !currentPageIds.includes(id))
      onSelectionChange(newSelection)
    }
  }

  const handleSort = (key: string) => {
    const newSortConfig = sortConfig?.key === key
      ? sortConfig.direction === 'asc' 
        ? { key, direction: 'desc' as const }
        : null
      : { key, direction: 'asc' as const }
    
    setSortConfig(newSortConfig)
    
    if (onSortChange) {
      if (newSortConfig) {
        onSortChange(newSortConfig.key, newSortConfig.direction)
      } else {
        onSortChange('', 'asc')
      }
    }
  }

  const handleExport = () => {
    if (!safeData.length) return
    
    const csvContent = [
      columns.map(col => col.label).join(','),
      ...safeData.map(row =>
        columns.map(col => {
          const value = typeof col.key === 'string' ? (row?.[col.key] || '') : ''
          return `"${String(value).replace(/"/g, '""')}"`
        }).join(',')
      )
    ].join('\n')

    const blob = new Blob([csvContent], { type: 'text/csv' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'data-export.csv'
    a.click()
    window.URL.revokeObjectURL(url)
  }

  const getSortIcon = (columnKey: string) => {
    if (sortConfig?.key !== columnKey) {
      return <ArrowUpDown className="w-4 h-4 text-[#CCCCCC]" />
    }
    return sortConfig.direction === 'asc' 
      ? <ArrowUp className="w-4 h-4 text-white" />
      : <ArrowDown className="w-4 h-4 text-white" />
  }

  if (loading && safeData.length === 0) {
    return (
      <div className={cn("space-y-4", className)}>
        <div className="flex items-center justify-between">
          <div className="h-10 w-64 bg-card rounded animate-pulse"></div>
          <div className="h-10 w-32 bg-card rounded animate-pulse"></div>
        </div>
        <div className="border rounded-lg bg-card">
          <div className="h-12 bg-muted border-b"></div>
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="h-16 border-b last:border-b-0 bg-card"></div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className={cn("space-y-4", className)}>
      {/* Filter Bar or Legacy Search */}
      {showFilters && filterConfigs.length > 0 ? (
        <div className="flex items-center justify-between gap-4">
          <div className="flex-1">
            <FilterBar
              filters={filterConfigs}
              filterState={filterState}
              onFilterChange={onFilterChange || (() => {})}
              onClearFilters={onClearFilters || (() => {})}
              loading={loading}
            />
          </div>
          
          {exportable && safeData.length > 0 && (
            <Button variant="outline" onClick={handleExport} size="sm" disabled={loading}>
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
          )}
        </div>
      ) : (
        /* Legacy Search and Export Controls */
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4 flex-1">
            {onSearchChange && (
              <div className="relative max-w-sm">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#CCCCCC] w-4 h-4" />
                <Input
                  placeholder={searchPlaceholder}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                  disabled={loading}
                />
              </div>
            )}
          </div>

          {exportable && safeData.length > 0 && (
            <Button variant="outline" onClick={handleExport} size="sm" disabled={loading}>
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
          )}
        </div>
      )}

      {/* Table */}
      <div className="border rounded-lg bg-card relative">
        {loading && (
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-10 rounded-lg">
            <div className="flex items-center gap-2 text-foreground">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary"></div>
              <span className="text-sm">Loading...</span>
            </div>
          </div>
        )}
        
        <Table>
          <TableHeader>
            <TableRow className="bg-muted">
              {bulkSelectable && (
                <TableHead className="w-12 text-center">
                  <Checkbox
                    checked={isAllCurrentPageSelected}
                    onCheckedChange={handleSelectAllToggle}
                    className="border-white data-[state=checked]:bg-white data-[state=checked]:text-black"
                    disabled={loading}
                  />
                </TableHead>
              )}
              {columns.map((column) => (
                <TableHead 
                  key={String(column.key)} 
                  className={cn(
                    "font-medium text-white",
                    column.width === 'fit' && "w-fit",
                    column.width && column.width !== 'fit' && `w-${column.width}`,
                    column.sortable !== false && "cursor-pointer hover:bg-muted/80"
                  )}
                  onClick={() => column.sortable !== false && handleSort(String(column.key))}
                >
                  <div className="flex items-center space-x-2">
                    <span>{column.label}</span>
                    {column.sortable !== false && getSortIcon(String(column.key))}
                  </div>
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {safeData.length === 0 ? (
              <TableRow>
                <TableCell 
                  colSpan={columns.length + (bulkSelectable ? 1 : 0)} 
                  className="text-center py-8 text-[#CCCCCC]"
                >
                  {emptyMessage}
                </TableCell>
              </TableRow>
            ) : (
              safeData.map((row, index) => {
                const itemId = getItemId(row)
                const isSelected = selectedItems.includes(itemId)
                
                return (
                  <TableRow 
                    key={index} 
                    className={cn(
                      "hover:bg-muted/50 transition-colors",
                      onRowClick && "cursor-pointer hover:bg-white/10",
                      isSelected && "bg-blue-50/50 border-l-4 border-l-blue-500"
                    )}
                    onClick={(e) => {
                      // Don't trigger row click if clicking checkbox
                      if ((e.target as HTMLElement).closest('[data-checkbox]')) {
                        return
                      }
                      onRowClick?.(row)
                    }}
                  >
                    {bulkSelectable && (
                      <TableCell className="py-3 text-center" data-checkbox>
                        <Checkbox
                          checked={isSelected}
                          onCheckedChange={(checked) => handleSelectItem(itemId, checked as boolean)}
                          onClick={(e) => e.stopPropagation()}
                          disabled={loading}
                        />
                      </TableCell>
                    )}
                    {columns.map((column) => (
                      <TableCell key={String(column.key)} className="py-3">
                        {column.render 
                          ? column.render(row?.[String(column.key)], row)
                          : String(row?.[String(column.key)] || '')
                        }
                      </TableCell>
                    ))}
                  </TableRow>
                )
              })
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <TablePagination
        pagination={pagination}
        onPageChange={onPageChange}
        onPageSizeChange={onPageSizeChange}
        loading={loading}
      />
    </div>
  )
}
