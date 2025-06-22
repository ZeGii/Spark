
'use client'

import { FilterConfig } from './filter-bar'

export const TOPIC_FILTER_CONFIGS: FilterConfig[] = [
  {
    key: 'search',
    label: 'Search',
    type: 'search',
    placeholder: 'Search topics by title, description, or submitter...'
  },
  {
    key: 'status',
    label: 'Status',
    type: 'select',
    options: [
      { value: 'PENDING', label: 'Pending Review' },
      { value: 'APPROVED', label: 'Approved (Voting)' },
      { value: 'REJECTED', label: 'Rejected' },
      { value: 'QUALIFIED', label: 'Qualified (Ready for Research)' },
      { value: 'CONVERTED', label: 'Converted to Research' },
      { value: 'COMPLETED', label: 'Research Completed' }
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
      { value: 'Environment', label: 'Environment' },
      { value: 'Science', label: 'Science' },
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
    key: 'voteThreshold',
    label: 'Vote Threshold',
    type: 'select',
    options: [
      { value: '1-25', label: '1-25 votes' },
      { value: '26-50', label: '26-50 votes' },
      { value: '51-100', label: '51-100 votes' },
      { value: '100+', label: '100+ votes' }
    ]
  },
  {
    key: 'priority',
    label: 'Priority',
    type: 'select',
    options: [
      { value: 'high', label: 'High Priority' },
      { value: 'medium', label: 'Medium Priority' },
      { value: 'low', label: 'Low Priority' }
    ]
  },
  {
    key: 'dateRange',
    label: 'Submission Date',
    type: 'daterange'
  }
]

// Helper function to get filter options with counts (for API integration)
export const getTopicFilterOptions = async (filterKey: string): Promise<{ value: string; label: string; count: number }[]> => {
  try {
    const response = await fetch(`/api/admin/topics/filter-options?type=${filterKey}`)
    if (response.ok) {
      return await response.json()
    }
  } catch (error) {
    console.error(`Error fetching ${filterKey} options:`, error)
  }
  
  // Return default options without counts
  const config = TOPIC_FILTER_CONFIGS.find(f => f.key === filterKey)
  return config?.options?.map(opt => ({ ...opt, count: 0 })) || []
}
