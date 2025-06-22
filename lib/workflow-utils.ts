
import { TopicStatus } from '@prisma/client';

export function calculateDeadline(approvalDate: Date): Date {
  const deadline = new Date(approvalDate);
  deadline.setDate(deadline.getDate() + 15);
  return deadline;
}

export function isTopicExpired(deadline: Date | null): boolean {
  if (!deadline) return false;
  return new Date() > deadline;
}

export function getTimeRemaining(deadline: Date | null): {
  days: number;
  hours: number;
  minutes: number;
  expired: boolean;
} {
  if (!deadline) {
    return { days: 0, hours: 0, minutes: 0, expired: true };
  }

  const now = new Date().getTime();
  const deadlineTime = deadline.getTime();
  const difference = deadlineTime - now;

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, expired: true };
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

  return { days, hours, minutes, expired: false };
}

export function getStatusColor(status: TopicStatus): string {
  switch (status) {
    case 'PENDING':
      return 'bg-yellow-100 text-yellow-800';
    case 'APPROVED':
      return 'bg-blue-100 text-blue-800';
    case 'REJECTED':
      return 'bg-red-100 text-red-800';
    case 'QUALIFIED':
      return 'bg-green-100 text-green-800';
    case 'CONVERTED':
      return 'bg-purple-100 text-purple-800';
    case 'COMPLETED':
      return 'bg-gray-100 text-gray-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
}

export function getStatusLabel(status: TopicStatus): string {
  switch (status) {
    case 'PENDING':
      return 'Pending Review';
    case 'APPROVED':
      return 'Open for Voting';
    case 'REJECTED':
      return 'Rejected';
    case 'QUALIFIED':
      return 'Qualified for Research';
    case 'CONVERTED':
      return 'In Research';
    case 'COMPLETED':
      return 'Research Complete';
    default:
      return status;
  }
}

export function canTransitionStatus(from: TopicStatus, to: TopicStatus): boolean {
  const validTransitions: Record<TopicStatus, TopicStatus[]> = {
    PENDING: ['APPROVED', 'REJECTED'],
    APPROVED: ['QUALIFIED', 'REJECTED'],
    REJECTED: [], // No transitions from rejected
    QUALIFIED: ['CONVERTED'],
    CONVERTED: ['COMPLETED'],
    COMPLETED: [] // No transitions from completed
  };

  return validTransitions[from]?.includes(to) || false;
}

export function shouldAutoQualify(voteCount: number, voteThreshold: number | null): boolean {
  if (!voteThreshold) return false;
  return voteCount >= voteThreshold;
}

export function getVoteProgress(voteCount: number, voteThreshold: number | null): number {
  if (!voteThreshold || voteThreshold === 0) return 0;
  return Math.min((voteCount / voteThreshold) * 100, 100);
}

export function shouldProcessDeadlines(): boolean {
  // Check if we should process deadlines (could be time-based or manual)
  return true;
}

export function getTopicPriority(topic: any): 'low' | 'medium' | 'high' {
  if (!topic) return 'low';
  
  const daysSinceCreated = Math.floor(
    (new Date().getTime() - new Date(topic.createdAt).getTime()) / (1000 * 60 * 60 * 24)
  );
  
  // High priority if pending for more than 3 days
  if (topic.status === 'PENDING' && daysSinceCreated > 3) return 'high';
  
  // High priority if qualified (ready for research)
  if (topic.status === 'QUALIFIED') return 'high';
  
  // Medium priority if approved and close to deadline
  if (topic.status === 'APPROVED' && topic.deadline) {
    const timeRemaining = getTimeRemaining(new Date(topic.deadline));
    if (timeRemaining.days <= 2) return 'high';
    if (timeRemaining.days <= 5) return 'medium';
  }
  
  return 'low';
}

export function formatTimeRemaining(deadline: Date | null): string {
  if (!deadline) return 'No deadline';
  
  const remaining = getTimeRemaining(deadline);
  
  if (remaining.expired) return 'Expired';
  
  if (remaining.days > 0) {
    return `${remaining.days}d ${remaining.hours}h remaining`;
  } else if (remaining.hours > 0) {
    return `${remaining.hours}h ${remaining.minutes}m remaining`;
  } else {
    return `${remaining.minutes}m remaining`;
  }
}

export function getStatusDescription(status: TopicStatus): string {
  switch (status) {
    case 'PENDING':
      return 'Awaiting admin review and approval';
    case 'APPROVED':
      return 'Open for community voting';
    case 'REJECTED':
      return 'Not approved for voting';
    case 'QUALIFIED':
      return 'Reached vote threshold, ready for research';
    case 'CONVERTED':
      return 'Converted to research project';
    case 'COMPLETED':
      return 'Research completed and published';
    default:
      return 'Unknown status';
  }
}
