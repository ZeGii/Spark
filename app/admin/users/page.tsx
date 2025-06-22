
'use client'

import { useEffect, useState, useCallback, useMemo } from 'react'
import { useRouter } from 'next/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { AdminTable, Column } from '@/components/admin/admin-table'
import { PaginationState } from '@/components/admin/table-pagination'
import { StatsCard } from '@/components/admin/stats-card'
import { UserActionsDropdown } from '@/components/admin/user-actions-dropdown'
import { UserProfileModal } from '@/components/admin/user-profile-modal'
import { UserBulkActionsToolbar } from '@/components/admin/user-bulk-actions-toolbar'
import { DateFilter, DateRange } from '@/components/admin/date-filter'
import { FilterState, FilterBar } from '@/components/admin/filter-bar'
import { USER_FILTER_CONFIGS } from '@/components/admin/user-filters'
import { filtersToSearchParams, hasActiveFilters } from '@/components/admin/filter-utils'
import { toast } from 'sonner'
import { 
  Users, 
  UserCheck, 
  UserX, 
  Shield,
  Ban,
  CheckCircle,
  AlertTriangle,
  Mail,
  Calendar,
  Loader2
} from 'lucide-react'

interface User {
  id: string
  name: string
  email: string
  role: 'user' | 'admin'
  status: 'active' | 'suspended' | 'banned'
  createdAt: string
  lastActive: string
  topicsCount: number
  votesCount: number
  subscriptionPlan: string
}

interface UserStats {
  totalUsers: number
  activeUsers: number
  suspendedUsers: number
  bannedUsers: number
  newUsersThisMonth: number
  premiumUsers: number
  userGrowth: number
  activeGrowth: number
  dateFilter?: {
    startDate: string
    endDate: string
  } | null
}

// Mock data fallback
const mockUsers: User[] = [
  {
    id: '1',
    name: 'Dr. Sarah Chen',
    email: 'sarah.chen@email.com',
    role: 'user',
    status: 'active',
    createdAt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(),
    lastActive: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    topicsCount: 5,
    votesCount: 23,
    subscriptionPlan: 'PRO'
  },
  {
    id: '2',
    name: 'Prof. Michael Rodriguez',
    email: 'michael.r@university.edu',
    role: 'user',
    status: 'active',
    createdAt: new Date(Date.now() - 45 * 24 * 60 * 60 * 1000).toISOString(),
    lastActive: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
    topicsCount: 8,
    votesCount: 45,
    subscriptionPlan: 'FREE'
  },
  {
    id: '3',
    name: 'Dr. Lisa Wang',
    email: 'lisa.wang@tech.com',
    role: 'admin',
    status: 'active',
    createdAt: new Date(Date.now() - 60 * 24 * 60 * 60 * 1000).toISOString(),
    lastActive: new Date(Date.now() - 0.5 * 24 * 60 * 60 * 1000).toISOString(),
    topicsCount: 12,
    votesCount: 67,
    subscriptionPlan: 'PRO'
  }
]

const mockStats: UserStats = {
  totalUsers: 1247,
  activeUsers: 1156,
  suspendedUsers: 8,
  bannedUsers: 3,
  newUsersThisMonth: 89,
  premiumUsers: 234,
  userGrowth: 18.5,
  activeGrowth: 12.3
}

export default function AdminUsers() {
  const router = useRouter()
  const [users, setUsers] = useState<User[]>([])
  const [stats, setStats] = useState<UserStats | null>(null)
  const [loading, setLoading] = useState(true)
  const [statsLoading, setStatsLoading] = useState(false)
  const [currentUser, setCurrentUser] = useState<{ email: string } | null>(null)
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null)
  const [dateRange, setDateRange] = useState<DateRange | null>(null)
  
  // Bulk selection state
  const [selectedUsers, setSelectedUsers] = useState<string[]>([])

  // Pagination state
  const [pagination, setPagination] = useState<PaginationState>({
    page: 1,
    pageSize: 50,
    total: 0,
    totalPages: 0
  })

  // Filter state - replaces individual search and date states
  const [filterState, setFilterState] = useState<FilterState>({})

  // Sort state
  const [sortBy, setSortBy] = useState('createdAt')
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc')

  useEffect(() => {
    fetchUsers()
    fetchUserStats(dateRange)
    fetchCurrentUser()
  }, [pagination.page, pagination.pageSize, sortBy, sortOrder, dateRange])
  
  // Separate effect for filter changes to avoid dependency issues
  useEffect(() => {
    // Only fetch if there are actual filter changes
    const hasFilters = Object.values(filterState).some(value => {
      if (value === null || value === '' || value === undefined) return false
      if (Array.isArray(value)) return value.length > 0
      if (typeof value === 'object' && value !== null) return true
      return true
    })
    
    if (hasFilters || Object.keys(filterState).length > 0) {
      fetchUsers()
      // Reset to first page when filters change
      setPagination(prev => ({ ...prev, page: 1 }))
    }
  }, [filterState])

  const fetchCurrentUser = async () => {
    try {
      const response = await fetch('/api/auth/me')
      if (response.ok) {
        const userData = await response.json()
        setCurrentUser({ email: userData.email })
      }
    } catch (error) {
      console.error('Error fetching current user:', error)
    }
  }

  const fetchUsers = async () => {
    try {
      setLoading(true)
      
      // Build query parameters from filter state
      const filterParams = filtersToSearchParams(filterState)
      
      // Add pagination and sorting parameters
      filterParams.append('page', pagination.page.toString())
      filterParams.append('limit', pagination.pageSize.toString())
      filterParams.append('sortBy', sortBy)
      filterParams.append('sortOrder', sortOrder)

      // Legacy support: Add date parameters if dateRange is active (for stats)
      if (dateRange) {
        filterParams.append('startDate', dateRange.startDate.toISOString())
        filterParams.append('endDate', dateRange.endDate.toISOString())
      }
      
      const url = `/api/admin/users?${filterParams.toString()}`
      const response = await fetch(url)
      if (!response.ok) throw new Error('Failed to fetch users')
      
      const userData = await response.json()
      
      // Map API response to User interface format
      const formattedUsers = (userData.users || []).map((user: any) => ({
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        status: user.status?.toLowerCase() || 'active',
        createdAt: user.createdAt,
        lastActive: user.lastActive || user.updatedAt,
        topicsCount: user.topicsCount,
        votesCount: user.votesCount,
        subscriptionPlan: user.subscriptionPlan
      }))
      
      setUsers(formattedUsers)
      
      // Update pagination state with response data (but preserve current page if it's valid)
      if (userData.pagination) {
        setPagination(prev => {
          const newState = {
            page: prev.page, // Keep the current page that user selected
            pageSize: userData.pagination.pageSize,
            total: userData.pagination.total,
            totalPages: userData.pagination.totalPages
          }
          
          // Only update page if current page is invalid (beyond total pages)
          if (prev.page > userData.pagination.totalPages && userData.pagination.totalPages > 0) {
            newState.page = 1 // Reset to first page if current page is invalid
          }
          
          console.log('Users Page: Updating pagination from API', { 
            previous: prev, 
            apiResponse: userData.pagination, 
            newState 
          })
          
          return newState
        })
      }
    } catch (error) {
      console.error('Error fetching users:', error)
      setUsers(mockUsers)
      toast.error('Failed to load users, showing sample data')
    } finally {
      setLoading(false)
    }
  }

  const fetchUserStats = async (dateFilter?: DateRange | null) => {
    try {
      setStatsLoading(true)
      let url = '/api/admin/users/stats'
      
      // Add date parameters if filter is active
      if (dateFilter) {
        const params = new URLSearchParams({
          startDate: dateFilter.startDate.toISOString(),
          endDate: dateFilter.endDate.toISOString()
        })
        url += `?${params.toString()}`
      }
      
      const response = await fetch(url)
      if (!response.ok) throw new Error('Failed to fetch user stats')
      
      const statsData = await response.json()
      setStats(statsData)
    } catch (error) {
      console.error('Error fetching user stats:', error)
      setStats(mockStats)
    } finally {
      setStatsLoading(false)
    }
  }

  const handleRowClick = (user: User) => {
    setSelectedUserId(user.id)
    setModalOpen(true)
  }

  const handleDateRangeChange = (newDateRange: DateRange | null) => {
    setDateRange(newDateRange)
    // Reset to first page when date range changes
    setPagination(prev => ({ ...prev, page: 1 }))
  }

  // Enhanced pagination handlers with debugging - Stabilized with useCallback
  const handlePageChange = useCallback((page: number) => {
    console.log('Users Page: handlePageChange called', { page, loading, currentPage: pagination.page })
    
    if (loading) {
      console.log('Users Page: Page change blocked - loading in progress')
      return
    }
    
    console.log('Users Page: Setting new page state:', page)
    setPagination(prev => {
      const newPagination = { ...prev, page }
      console.log('Users Page: New pagination state:', newPagination)
      return newPagination
    })
  }, [loading, pagination.page])

  const handlePageSizeChange = useCallback((pageSize: number) => {
    console.log('Users Page: handlePageSizeChange called', { pageSize, loading, currentPageSize: pagination.pageSize })
    
    if (loading) {
      console.log('Users Page: PageSize change blocked - loading in progress')
      return
    }
    
    console.log('Users Page: Setting new pageSize state:', pageSize)
    setPagination(prev => {
      const newPagination = { ...prev, page: 1, pageSize }
      console.log('Users Page: New pagination state:', newPagination)
      return newPagination
    })
  }, [loading, pagination.pageSize])

  // Filter handlers - Stabilized with useCallback to prevent infinite re-renders
  const handleFilterChange = useCallback((key: string, value: any) => {
    setFilterState(prev => ({
      ...prev,
      [key]: value
    }))
    setPagination(prev => ({ ...prev, page: 1 })) // Reset to first page when filtering
  }, [])

  const handleClearFilters = useCallback(() => {
    setFilterState({})
    setPagination(prev => ({ ...prev, page: 1 })) // Reset to first page when clearing filters
  }, [])

  // Sort handler - Stabilized with useCallback
  const handleSortChange = useCallback((sortBy: string, sortOrder: 'asc' | 'desc') => {
    setSortBy(sortBy)
    setSortOrder(sortOrder)
    setPagination(prev => ({ ...prev, page: 1 })) // Reset to first page when sorting
  }, [])

  // Bulk action handlers
  const handleBulkDelete = async (userIds: string[]) => {
    const response = await fetch('/api/admin/users/bulk-delete', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ userIds })
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.error || 'Failed to delete users')
    }

    await fetchUsers()
    await fetchUserStats(dateRange)
  }

  const handleBulkSuspend = async (userIds: string[]) => {
    const response = await fetch('/api/admin/users/bulk-suspend', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ userIds })
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.error || 'Failed to suspend users')
    }

    await fetchUsers()
    await fetchUserStats(dateRange)
  }

  const handleBulkActivate = async (userIds: string[]) => {
    const response = await fetch('/api/admin/users/bulk-activate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ userIds })
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.error || 'Failed to activate users')
    }

    await fetchUsers()
    await fetchUserStats(dateRange)
  }

  const handleSelectionChange = (selectedIds: string[]) => {
    setSelectedUsers(selectedIds)
  }

  const handleClearSelection = () => {
    setSelectedUsers([])
  }

  const handleActionComplete = () => {
    fetchUsers()
    fetchUserStats(dateRange)
  }

  const columns: Column<User>[] = [
    {
      key: 'name',
      label: 'User',
      render: (_, user) => (
        <div className="flex items-center gap-3">
          <Avatar className="w-8 h-8">
            <AvatarImage src="" />
            <AvatarFallback className="bg-gradient-to-br from-[#00FF88] to-[#10B981] text-black text-xs font-medium">
              {user?.name?.charAt(0)?.toUpperCase() || 'U'}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium text-white">{user?.name || 'Unknown User'}</p>
            <p className="text-xs text-[#CCCCCC]">{user?.email || 'No email'}</p>
          </div>
        </div>
      )
    },
    {
      key: 'role',
      label: 'Role',
      render: (role) => (
        <Badge variant={role === 'admin' ? 'default' : 'secondary'} className="capitalize">
          {role || 'user'}
        </Badge>
      )
    },
    {
      key: 'status',
      label: 'Status',
      render: (status) => (
        <Badge 
          variant={
            status === 'active' ? 'default' :
            status === 'suspended' ? 'secondary' : 'destructive'
          }
          className="capitalize"
        >
          {status || 'unknown'}
        </Badge>
      )
    },
    {
      key: 'subscriptionPlan',
      label: 'Plan',
      render: (subscription) => (
        <Badge 
          variant={subscription === 'PRO' ? 'default' : 'outline'}
          className="capitalize"
        >
          {subscription || 'FREE'}
        </Badge>
      )
    },
    {
      key: 'topicsCount',
      label: 'Topics',
      render: (count) => (
        <span className="text-sm font-medium text-white">{count || 0}</span>
      )
    },
    {
      key: 'votesCount',
      label: 'Votes',
      render: (count) => (
        <span className="text-sm font-medium text-white">{count || 0}</span>
      )
    },
    {
      key: 'createdAt',
      label: 'Joined',
      render: (date) => (
        <span className="text-sm text-[#CCCCCC]">
          {date ? new Date(date).toLocaleDateString() : 'Unknown'}
        </span>
      )
    },
    {
      key: 'lastActive',
      label: 'Last Active',
      render: (date) => (
        <span className="text-sm text-[#CCCCCC]">
          {date ? new Date(date).toLocaleDateString() : 'Unknown'}
        </span>
      )
    },
    {
      key: 'actions',
      label: 'Actions',
      sortable: false,
      render: (_, user) => (
        <div onClick={(e) => e.stopPropagation()}>
          <UserActionsDropdown
            user={user}
            currentUserEmail={currentUser?.email || ''}
            onActionComplete={handleActionComplete}
          />
        </div>
      )
    }
  ]



  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">User Management</h1>
          <p className="text-[#CCCCCC] mt-1">Manage users, permissions, and account status</p>
        </div>
        
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-gradient-to-r hover:from-[#f5d565]/20 hover:to-[#FCD34D]/20 hover:border-[#f5d565]/50">
            <Mail className="w-4 h-4 mr-2" />
            Send Notification
          </Button>
          <Button size="sm" className="bg-gradient-to-r from-[#00FF88] to-[#10B981] text-black hover:from-[#00E87A] hover:to-[#059669]">
            <Users className="w-4 h-4 mr-2" />
            Export Users
          </Button>
        </div>
      </div>

      {/* Date Filter */}
      <Card className="bg-gradient-to-br from-[#1A1A1A] to-[#252529] border border-white/20">
        <CardContent className="p-6">
          <DateFilter onDateRangeChange={handleDateRangeChange} />
        </CardContent>
      </Card>

      {/* User Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsLoading ? (
          // Loading state for stats
          Array.from({ length: 4 }).map((_, index) => (
            <Card key={index} className="bg-gradient-to-br from-[#1A1A1A] to-[#252529] border border-white/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-center py-8">
                  <Loader2 className="w-8 h-8 animate-spin text-[#00FF88]" />
                </div>
              </CardContent>
            </Card>
          ))
        ) : stats ? (
          <>
            <StatsCard
              title={dateRange ? "Filtered Users" : "Total Users"}
              value={stats.totalUsers?.toLocaleString() || '0'}
              change={{
                value: stats.userGrowth || 0,
                type: (stats.userGrowth || 0) > 0 ? 'increase' : (stats.userGrowth || 0) < 0 ? 'decrease' : 'neutral',
                period: dateRange ? 'vs previous period' : 'last month'
              }}
              icon={<Users className="h-5 w-5" />}
              color="blue"
            />
            
            <StatsCard
              title="Active Users"
              value={stats.activeUsers?.toLocaleString() || '0'}
              change={{
                value: stats.activeGrowth || 0,
                type: (stats.activeGrowth || 0) > 0 ? 'increase' : (stats.activeGrowth || 0) < 0 ? 'decrease' : 'neutral',
                period: dateRange ? 'activity rate' : 'last month'
              }}
              icon={<UserCheck className="h-5 w-5" />}
              color="green"
            />
            
            <StatsCard
              title="Suspended"
              value={stats.suspendedUsers?.toString() || '0'}
              icon={<AlertTriangle className="h-5 w-5" />}
              color="amber"
              urgent={(stats.suspendedUsers || 0) > 10}
              description={(stats.suspendedUsers || 0) > 10 ? 'High volume' : 'Normal'}
            />
            
            <StatsCard
              title="Premium Users"
              value={stats.premiumUsers?.toString() || '0'}
              icon={<Shield className="h-5 w-5" />}
              color="purple"
              description={`${Math.round(((stats.premiumUsers || 0) / (stats.totalUsers || 1)) * 100)}% of total`}
            />
          </>
        ) : (
          // No stats available
          Array.from({ length: 4 }).map((_, index) => (
            <Card key={index} className="bg-gradient-to-br from-[#1A1A1A] to-[#252529] border border-white/20">
              <CardContent className="p-6">
                <div className="text-center text-[#CCCCCC]">No data available</div>
              </CardContent>
            </Card>
          ))
        )}
      </div>

      {/* User Activity Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="bg-gradient-to-br from-[#1A1A1A] to-[#252529] border border-white/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-white">
              <Calendar className="h-5 w-5 text-[#00FF88]" />
              {dateRange ? `New Users in Period` : 'New Users This Month'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {statsLoading ? (
              <div className="flex items-center justify-center py-4">
                <Loader2 className="w-6 h-6 animate-spin text-[#00FF88]" />
              </div>
            ) : (
              <>
                <div className="text-3xl font-bold text-white mb-2">
                  {stats?.newUsersThisMonth || 0}
                </div>
                <p className="text-sm text-[#CCCCCC]">
                  {dateRange ? 
                    `Registered during ${dateRange.label.toLowerCase()}` :
                    `${stats?.userGrowth && stats.userGrowth > 0 ? '+' : ''}${stats?.userGrowth || 0}% from last month`
                  }
                </p>
              </>
            )}
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-[#1A1A1A] to-[#252529] border border-white/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-white">
              <CheckCircle className="h-5 w-5 text-[#10B981]" />
              {dateRange ? 'Filtered Status' : 'Account Status'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {statsLoading ? (
              <div className="flex items-center justify-center py-4">
                <Loader2 className="w-6 h-6 animate-spin text-[#00FF88]" />
              </div>
            ) : (
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-[#CCCCCC]">Active</span>
                  <span className="font-medium text-[#10B981]">{stats?.activeUsers || 0}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-[#CCCCCC]">Suspended</span>
                  <span className="font-medium text-[#f5d565]">{stats?.suspendedUsers || 0}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-[#CCCCCC]">Banned</span>
                  <span className="font-medium text-red-400">{stats?.bannedUsers || 0}</span>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-[#1A1A1A] to-[#252529] border border-white/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-white">
              <Shield className="h-5 w-5 text-[#f5d565]" />
              {dateRange ? 'Filtered Subscriptions' : 'Subscription Breakdown'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {statsLoading ? (
              <div className="flex items-center justify-center py-4">
                <Loader2 className="w-6 h-6 animate-spin text-[#00FF88]" />
              </div>
            ) : (
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-[#CCCCCC]">Free Users</span>
                  <span className="font-medium text-white">{(stats?.totalUsers || 0) - (stats?.premiumUsers || 0)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-[#CCCCCC]">Premium Users</span>
                  <span className="font-medium text-[#f5d565]">{stats?.premiumUsers || 0}</span>
                </div>
                <div className="w-full bg-gradient-to-r from-[#10141a] to-[#141921] rounded-full h-2 mt-3 border border-white/10">
                  <div 
                    className="bg-gradient-to-r from-[#f5d565] to-[#FCD34D] h-2 rounded-full transition-all duration-300"
                    style={{ 
                      width: `${stats ? ((stats.premiumUsers || 0) / (stats.totalUsers || 1)) * 100 : 0}%` 
                    }}
                  ></div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Users Table */}
      <Card className="bg-gradient-to-br from-[#1A1A1A] to-[#252529] border border-white/20">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-white flex items-center gap-2">
                {dateRange ? `Filtered Users (${dateRange.label})` : 'All Users'}
                {hasActiveFilters(filterState) && (
                  <Badge variant="secondary">
                    Filtered
                  </Badge>
                )}
              </CardTitle>
              <CardDescription className="text-[#CCCCCC]">
                {loading ? (
                  "Loading users..."
                ) : (
                  `${pagination.total || 0} total users${
                    hasActiveFilters(filterState) ? ' (filtered)' : ''
                  }`
                )}
              </CardDescription>
            </div>
          </div>
          
          {/* Search and Filter Bar */}
          <div className="mt-4 pt-4 border-t border-white/20">
            <FilterBar
              filters={USER_FILTER_CONFIGS}
              filterState={filterState}
              onFilterChange={handleFilterChange}
              onClearFilters={handleClearFilters}
              loading={loading}
              className="mb-0"
            />
          </div>
        </CardHeader>
        <CardContent>
          <UserBulkActionsToolbar
            selectedCount={selectedUsers.length}
            selectedIds={selectedUsers}
            onClearSelection={handleClearSelection}
            onBulkDelete={handleBulkDelete}
            onBulkSuspend={handleBulkSuspend}
            onBulkActivate={handleBulkActivate}
            totalCount={users.length}
          />
          
          <AdminTable
            data={users}
            columns={columns}
            pagination={pagination}
            onPageChange={handlePageChange}
            onPageSizeChange={handlePageSizeChange}
            onSortChange={handleSortChange}
            loading={loading}
            exportable={true}
            emptyMessage={hasActiveFilters(filterState) ? 'No users match your filters' : 'No users found'}
            onRowClick={handleRowClick}
            bulkSelectable={true}
            selectedItems={selectedUsers}
            onSelectionChange={handleSelectionChange}
            getItemId={(user) => user.id}
          />
        </CardContent>
      </Card>

      {/* User Profile Modal */}
      <UserProfileModal
        isOpen={modalOpen}
        onClose={() => {
          setModalOpen(false)
          setSelectedUserId(null)
        }}
        userId={selectedUserId}
        currentUserEmail={currentUser?.email || ''}
        onActionComplete={handleActionComplete}
      />
    </div>
  )
}
