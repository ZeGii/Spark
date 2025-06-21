
'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface PaginationState {
  page: number
  pageSize: number
  total: number
  totalPages: number
}

interface TablePaginationProps {
  pagination: PaginationState
  onPageChange: (page: number) => void
  onPageSizeChange: (pageSize: number) => void
  loading?: boolean
  className?: string
}

export function TablePagination({
  pagination,
  onPageChange,
  onPageSizeChange,
  loading = false,
  className
}: TablePaginationProps) {
  const [jumpToPage, setJumpToPage] = useState('')

  const { page, pageSize, total, totalPages } = pagination
  const startIndex = (page - 1) * pageSize + 1
  const endIndex = Math.min(page * pageSize, total)

  // Debug logging for pagination state
  console.log('TablePagination: Current state', { 
    page, 
    pageSize, 
    total, 
    totalPages, 
    loading,
    startIndex,
    endIndex
  })

  const handlePageChange = (newPage: number) => {
    console.log('TablePagination: handlePageChange called', { 
      newPage, 
      currentPage: page, 
      totalPages, 
      loading,
      isValid: newPage >= 1 && newPage <= totalPages && newPage !== page && !loading
    })
    
    if (newPage >= 1 && newPage <= totalPages && newPage !== page && !loading) {
      console.log('TablePagination: Calling onPageChange with page:', newPage)
      onPageChange(newPage)
    } else {
      console.log('TablePagination: Page change blocked - invalid conditions')
    }
  }

  const handlePageSizeChange = (newPageSize: number) => {
    console.log('TablePagination: handlePageSizeChange called', { 
      newPageSize, 
      currentPageSize: pageSize, 
      loading 
    })
    
    if (newPageSize !== pageSize && !loading) {
      console.log('TablePagination: Calling onPageSizeChange with pageSize:', newPageSize)
      onPageSizeChange(newPageSize)
    } else {
      console.log('TablePagination: PageSize change blocked - invalid conditions')
    }
  }

  const handleJumpToPage = (e: React.FormEvent) => {
    e.preventDefault()
    const pageNumber = parseInt(jumpToPage)
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      handlePageChange(pageNumber)
      setJumpToPage('')
    }
  }

  const getVisiblePages = () => {
    const maxVisible = 5
    const half = Math.floor(maxVisible / 2)
    
    let start = Math.max(1, page - half)
    let end = Math.min(totalPages, start + maxVisible - 1)
    
    if (end - start < maxVisible - 1) {
      start = Math.max(1, end - maxVisible + 1)
    }
    
    return Array.from({ length: end - start + 1 }, (_, i) => start + i)
  }

  // Always show pagination controls if there's data, regardless of page count
  if (total === 0) {
    return null
  }

  return (
    <div className={cn(
      "flex items-center justify-between gap-4 flex-wrap bg-gradient-to-br from-[#1A1A1A] to-[#252529] border border-white/20 rounded-lg p-4 mt-4 sticky bottom-0 z-10",
      className
    )}>
      {/* Results info */}
      <div className="text-sm text-[#CCCCCC]">
        {total > 0 ? (
          <>
            Showing {startIndex.toLocaleString()} to {endIndex.toLocaleString()} of{' '}
            {total.toLocaleString()} results
          </>
        ) : (
          'No results found'
        )}
      </div>

      <div className="flex items-center gap-4">
        {/* Page size selector */}
        <div className="flex items-center gap-2">
          <span className="text-sm text-[#CCCCCC] whitespace-nowrap">Show:</span>
          <Select
            value={pageSize.toString()}
            onValueChange={(value) => handlePageSizeChange(parseInt(value))}
            disabled={loading}
          >
            <SelectTrigger className="w-20">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="20">20</SelectItem>
              <SelectItem value="50">50</SelectItem>
              <SelectItem value="100">100</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Jump to page */}
        {totalPages > 1 && (
          <form onSubmit={handleJumpToPage} className="flex items-center gap-2">
            <span className="text-sm text-[#CCCCCC] whitespace-nowrap">Page:</span>
            <Input
              type="number"
              min="1"
              max={totalPages}
              value={jumpToPage}
              onChange={(e) => setJumpToPage(e.target.value)}
              placeholder={page.toString()}
              className="w-16 text-center"
              disabled={loading}
            />
          </form>
        )}

        {/* Pagination buttons */}
        {totalPages > 1 && (
          <div className="flex items-center gap-1">
            {/* First page */}
            <Button
              variant="outline"
              size="sm"
              onClick={() => handlePageChange(1)}
              disabled={page === 1 || loading}
              className="hidden sm:flex"
            >
              <ChevronsLeft className="w-4 h-4" />
            </Button>

            {/* Previous page */}
            <Button
              variant="outline"
              size="sm"
              onClick={() => handlePageChange(Math.max(1, page - 1))}
              disabled={page === 1 || loading}
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="hidden sm:inline ml-1">Previous</span>
            </Button>

            {/* Page numbers */}
            <div className="hidden md:flex items-center gap-1">
              {getVisiblePages().map((pageNum) => (
                <Button
                  key={pageNum}
                  variant={page === pageNum ? "default" : "outline"}
                  size="sm"
                  onClick={() => handlePageChange(pageNum)}
                  disabled={loading}
                  className={cn(
                    "w-10 h-8 p-0 transition-all duration-200",
                    page === pageNum 
                      ? "bg-[#00FF88] text-black font-semibold shadow-lg shadow-[#00FF88]/25 border-[#00FF88]" 
                      : "hover:bg-white/10 hover:border-white/30"
                  )}
                >
                  {pageNum}
                </Button>
              ))}
            </div>

            {/* Current page indicator (mobile) */}
            <div className="md:hidden flex items-center">
              <span className="text-sm text-[#CCCCCC] px-2">
                {page} / {totalPages}
              </span>
            </div>

            {/* Next page */}
            <Button
              variant="outline"
              size="sm"
              onClick={() => handlePageChange(Math.min(totalPages, page + 1))}
              disabled={page === totalPages || loading}
            >
              <span className="hidden sm:inline mr-1">Next</span>
              <ChevronRight className="w-4 h-4" />
            </Button>

            {/* Last page */}
            <Button
              variant="outline"
              size="sm"
              onClick={() => handlePageChange(totalPages)}
              disabled={page === totalPages || loading}
              className="hidden sm:flex"
            >
              <ChevronsRight className="w-4 h-4" />
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
