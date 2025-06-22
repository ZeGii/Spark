
'use client'

import { FilterConfig } from './filter-bar'

export const USER_FILTER_CONFIGS: FilterConfig[] = [
  {
    key: 'search',
    label: 'Search',
    type: 'search',
    placeholder: 'Search users by name, email, or industry...'
  },
  {
    key: 'status',
    label: 'Status',
    type: 'select',
    options: [
      { value: 'ACTIVE', label: 'Active' },
      { value: 'SUSPENDED', label: 'Suspended' }
    ]
  },
  {
    key: 'role',
    label: 'Role',
    type: 'select',
    options: [
      { value: 'user', label: 'User' },
      { value: 'admin', label: 'Admin' }
    ]
  },
  {
    key: 'profileType',
    label: 'Profile Type',
    type: 'select',
    options: [
      { value: 'ENTREPRENEUR', label: 'Entrepreneur' },
      { value: 'INVESTOR', label: 'Investor' },
      { value: 'PRODUCT_MANAGER', label: 'Product Manager' },
      { value: 'BUSINESS_ANALYST', label: 'Business Analyst' }
    ]
  },
  {
    key: 'subscriptionPlan',
    label: 'Subscription',
    type: 'select',
    options: [
      { value: 'FREE', label: 'Free' },
      { value: 'PRO', label: 'Pro' }
    ]
  },
  {
    key: 'industry',
    label: 'Industry',
    type: 'multiselect',
    options: [
      { value: 'Technology', label: 'Technology' },
      { value: 'Healthcare', label: 'Healthcare' },
      { value: 'Finance', label: 'Finance' },
      { value: 'Education', label: 'Education' },
      { value: 'Manufacturing', label: 'Manufacturing' },
      { value: 'Retail', label: 'Retail' },
      { value: 'Energy', label: 'Energy' },
      { value: 'Transportation', label: 'Transportation' },
      { value: 'Real Estate', label: 'Real Estate' },
      { value: 'Media', label: 'Media' },
      { value: 'Entertainment', label: 'Entertainment' },
      { value: 'Food & Beverage', label: 'Food & Beverage' },
      { value: 'Agriculture', label: 'Agriculture' },
      { value: 'Construction', label: 'Construction' },
      { value: 'Government', label: 'Government' },
      { value: 'Non-Profit', label: 'Non-Profit' },
      { value: 'Other', label: 'Other' }
    ]
  },
  {
    key: 'country',
    label: 'Country',
    type: 'multiselect',
    options: [
      { value: 'United States', label: 'United States' },
      { value: 'Canada', label: 'Canada' },
      { value: 'United Kingdom', label: 'United Kingdom' },
      { value: 'Germany', label: 'Germany' },
      { value: 'France', label: 'France' },
      { value: 'Australia', label: 'Australia' },
      { value: 'Japan', label: 'Japan' },
      { value: 'South Korea', label: 'South Korea' },
      { value: 'Singapore', label: 'Singapore' },
      { value: 'India', label: 'India' },
      { value: 'China', label: 'China' },
      { value: 'Brazil', label: 'Brazil' },
      { value: 'Mexico', label: 'Mexico' },
      { value: 'Netherlands', label: 'Netherlands' },
      { value: 'Sweden', label: 'Sweden' },
      { value: 'Switzerland', label: 'Switzerland' },
      { value: 'Israel', label: 'Israel' },
      { value: 'South Africa', label: 'South Africa' },
      { value: 'Global', label: 'Global' },
      { value: 'Other', label: 'Other' }
    ]
  },
  {
    key: 'dateRange',
    label: 'Registration Date',
    type: 'daterange'
  }
]

// Helper function to get filter options with counts (for API integration)
export const getUserFilterOptions = async (filterKey: string): Promise<{ value: string; label: string; count: number }[]> => {
  try {
    const response = await fetch(`/api/admin/users/filter-options?type=${filterKey}`)
    if (response.ok) {
      return await response.json()
    }
  } catch (error) {
    console.error(`Error fetching ${filterKey} options:`, error)
  }
  
  // Return default options without counts
  const config = USER_FILTER_CONFIGS.find(f => f.key === filterKey)
  return config?.options?.map(opt => ({ ...opt, count: 0 })) || []
}
