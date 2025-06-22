
'use client'

import { useState, useMemo } from 'react'
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
import { Badge } from '@/components/ui/badge'
import { Checkbox } from '@/components/ui/checkbox'
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { 
  ChevronLeft, 
  ChevronRight, 
  Search, 
  Filter,
  Download,
  MoreHorizontal,
  ArrowUpDown,
  ArrowUp,
  ArrowDown
} from 'lucide-react'
import { cn } from '@/lib/utils'

export interface Column<T> {
  key: keyof T | string
  label: string
  sortable?: boolean
  filterable?: boolean
  render?: (value: any, row: T) => React.ReactNode
  width?: string
}

export interface Action<T> {
  label: string
  onClick: (row: T) => void
  variant?: 'default' | 'destructive' | 'outline' | 'secondary'
  icon?: React.ReactNode
}

interface DataTableProps<T> {
  data: T[]
  columns: Column<T>[]
  actions?: Action<T>[]
  searchable?: boolean
  filterable?: boolean
  exportable?: boolean
  pageSize?: number
  loading?: boolean
  emptyMessage?: string
  onRowClick?: (row: T) => void
  // Bulk selection props
  bulkSelectable?: boolean
  selectedItems?: string[]
  onSelectionChange?: (selectedIds: string[]) => void
  getItemId?: (item: T) => string
}

export function DataTable<T extends Record<string, any>>({
  data = [],
  columns = [],
  actions = [],
  searchable = true,
  filterable = true,
  exportable = true,
  pageSize = 10,
  loading = false,
  emptyMessage = "No data available",
  onRowClick,
  // Bulk selection props
  bulkSelectable = false,
  selectedItems = [],
  onSelectionChange,
  getItemId = (item) => item.id || String(item.id || '')
}: DataTableProps<T>) {
  const [searchTerm, setSearchTerm] = useState('')
  const [sortConfig, setSortConfig] = useState<{
    key: string
    direction: 'asc' | 'desc'
  } | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [filterColumn, setFilterColumn] = useState<string>('')
  const [filterValue, setFilterValue] = useState<string>('')

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



  const handleSelectAllFiltered = () => {
    if (!onSelectionChange) return
    
    const allFilteredIds = sortedData.map(item => getItemId(item))
    const newSelection = Array.from(new Set([...selectedItems, ...allFilteredIds]))
    onSelectionChange(newSelection)
  }

  const handleClearSelection = () => {
    if (!onSelectionChange) return
    onSelectionChange([])
  }

  // Filter and search data
  const filteredData = useMemo(() => {
    let filtered = [...safeData]

    // Apply search
    if (searchTerm) {
      filtered = filtered.filter(row =>
        Object.values(row || {}).some(value =>
          String(value || '').toLowerCase().includes(searchTerm.toLowerCase())
        )
      )
    }

    // Apply column filter
    if (filterColumn && filterValue) {
      filtered = filtered.filter(row =>
        String(row?.[filterColumn] || '').toLowerCase().includes(filterValue.toLowerCase())
      )
    }

    return filtered
  }, [safeData, searchTerm, filterColumn, filterValue])

  // Sort data
  const sortedData = useMemo(() => {
    if (!sortConfig) return filteredData

    return [...filteredData].sort((a, b) => {
      const aValue = a?.[sortConfig.key] || ''
      const bValue = b?.[sortConfig.key] || ''

      if (aValue < bValue) {
        return sortConfig.direction === 'asc' ? -1 : 1
      }
      if (aValue > bValue) {
        return sortConfig.direction === 'asc' ? 1 : -1
      }
      return 0
    })
  }, [filteredData, sortConfig])

  // Paginate data
  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize
    return sortedData.slice(startIndex, startIndex + pageSize)
  }, [sortedData, currentPage, pageSize])

  const totalPages = Math.ceil(sortedData.length / pageSize)

  // Selection state calculations
  const currentPageIds = paginatedData.map(item => getItemId(item))
  const selectedOnCurrentPage = selectedItems.filter(id => currentPageIds.includes(id))
  const isAllCurrentPageSelected = currentPageIds.length > 0 && currentPageIds.every(id => selectedItems.includes(id))
  const isSomeCurrentPageSelected = currentPageIds.some(id => selectedItems.includes(id))

  // Update handleSelectAll to use currentPageIds
  const handleSelectAllUpdated = (checked: boolean) => {
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
    setSortConfig(current => {
      if (current?.key === key) {
        if (current.direction === 'asc') {
          return { key, direction: 'desc' }
        } else {
          return null // Remove sorting
        }
      }
      return { key, direction: 'asc' }
    })
  }

  const handleExport = () => {
    if (!sortedData.length) return
    
    const csvContent = [
      columns.map(col => col.label).join(','),
      ...sortedData.map(row =>
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

  // Get filterable columns with safe values
  const filterableColumns = columns.filter(col => col.filterable !== false)

  if (loading) {
    return (
      <div className="space-y-4">
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
    <div className="space-y-4">
      {/* Controls */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-4 flex-1">
          {searchable && (
            <div className="relative max-w-sm">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#CCCCCC] w-4 h-4" />
              <Input
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          )}

          {filterable && filterableColumns.length > 0 && (
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-[#CCCCCC]" />
              <Select value={filterColumn} onValueChange={setFilterColumn}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Filter by..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All columns</SelectItem>
                  {filterableColumns.map(col => (
                    <SelectItem key={String(col.key)} value={String(col.key)}>
                      {col.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              {filterColumn && filterColumn !== 'all' && (
                <Input
                  placeholder="Filter value..."
                  value={filterValue}
                  onChange={(e) => setFilterValue(e.target.value)}
                  className="w-40"
                />
              )}
            </div>
          )}
        </div>

        {exportable && sortedData.length > 0 && (
          <Button variant="outline" onClick={handleExport} size="sm">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
        )}
      </div>

      {/* Table */}
      <div className="border rounded-lg bg-card">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted">
              {bulkSelectable && (
                <TableHead className="w-12 text-center">
                  <Checkbox
                    checked={isAllCurrentPageSelected}
                    onCheckedChange={handleSelectAllUpdated}
                    className="border-white data-[state=checked]:bg-white data-[state=checked]:text-black"
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
              {actions.length > 0 && (
                <TableHead className="w-20 text-center text-white">Actions</TableHead>
              )}
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedData.length === 0 ? (
              <TableRow>
                <TableCell 
                  colSpan={columns.length + (actions.length > 0 ? 1 : 0) + (bulkSelectable ? 1 : 0)} 
                  className="text-center py-8 text-[#CCCCCC]"
                >
                  {emptyMessage}
                </TableCell>
              </TableRow>
            ) : (
              paginatedData.map((row, index) => {
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
                    {actions.length > 0 && (
                      <TableCell className="text-center">
                        <div className="flex items-center justify-center space-x-1">
                          {actions.slice(0, 2).map((action, actionIndex) => (
                            <Button
                              key={actionIndex}
                              variant={action.variant || 'outline'}
                              size="sm"
                              onClick={(e) => {
                                e.stopPropagation()
                                action.onClick(row)
                              }}
                              className="h-8 px-2"
                              title={action.label}
                            >
                              {action.icon}
                              <span className="sr-only">{action.label}</span>
                            </Button>
                          ))}
                          {actions.length > 2 && (
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              className="h-8 w-8 p-0" 
                              title="More actions"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <MoreHorizontal className="w-4 h-4" />
                            </Button>
                          )}
                        </div>
                      </TableCell>
                    )}
                  </TableRow>
                )
              })
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between">
          <div className="text-sm text-[#CCCCCC]">
            Showing {((currentPage - 1) * pageSize) + 1} to {Math.min(currentPage * pageSize, sortedData.length)} of {sortedData.length} results
          </div>
          
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="w-4 h-4" />
              Previous
            </Button>
            
            <div className="flex items-center space-x-1">
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                const page = i + 1
                return (
                  <Button
                    key={page}
                    variant={currentPage === page ? "default" : "outline"}
                    size="sm"
                    onClick={() => setCurrentPage(page)}
                    className="w-8 h-8 p-0"
                  >
                    {page}
                  </Button>
                )
              })}
            </div>
            
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
            >
              Next
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
