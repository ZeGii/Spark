
import { NextRequest, NextResponse } from 'next/server'
import { verifyAdminAuth } from '@/lib/auth-utils'

export const dynamic = 'force-dynamic'

// Mock content data
const mockContent = [
  {
    id: '1',
    type: 'topic',
    title: 'AI Impact on Healthcare',
    content: 'Exploring how artificial intelligence is revolutionizing medical diagnosis and treatment.',
    author: {
      name: 'Dr. Sarah Chen',
      email: 'sarah.chen@email.com'
    },
    status: 'pending',
    createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    flagCount: 0,
    votes: 23,
    category: 'Technology'
  },
  {
    id: '2',
    type: 'comment',
    title: 'Comment on Climate Research',
    content: 'This research methodology seems flawed. The sample size is too small.',
    author: {
      name: 'Prof. Michael Rodriguez',
      email: 'michael.r@university.edu'
    },
    status: 'flagged',
    createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
    flagCount: 3,
    votes: 5,
    category: 'Environment'
  },
  {
    id: '3',
    type: 'research',
    title: 'Quantum Computing Applications',
    content: 'Comprehensive analysis of quantum computing potential in cryptography.',
    author: {
      name: 'Dr. Lisa Wang',
      email: 'lisa.wang@tech.com'
    },
    status: 'approved',
    createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
    flagCount: 0,
    votes: 45,
    category: 'Technology'
  },
  {
    id: '4',
    type: 'topic',
    title: 'Sustainable Energy Solutions',
    content: 'Investigating renewable energy alternatives for urban environments.',
    author: {
      name: 'Dr. James Thompson',
      email: 'james.t@green.org'
    },
    status: 'pending',
    createdAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString(),
    flagCount: 1,
    votes: 18,
    category: 'Environment'
  }
]

export async function GET(request: NextRequest) {
  try {
    const authResult = await verifyAdminAuth(request)
    if (!authResult.success) {
      return NextResponse.json({ error: authResult.error }, { status: 401 })
    }

    const { searchParams } = new URL(request.url)
    const filter = searchParams.get('filter') || 'all'

    let filteredContent = mockContent
    if (filter !== 'all') {
      filteredContent = mockContent.filter(item => item.status === filter)
    }

    return NextResponse.json({ content: filteredContent })
  } catch (error) {
    console.error('Content API error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch content' },
      { status: 500 }
    )
  }
}
