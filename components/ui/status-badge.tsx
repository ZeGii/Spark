
import { TopicStatus } from '@prisma/client';
import { getStatusColor, getStatusLabel } from '@/lib/workflow-utils';
import { Badge } from './badge';

interface StatusBadgeProps {
  status: TopicStatus;
  className?: string;
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
  return (
    <Badge 
      variant="secondary" 
      className={`${getStatusColor(status)} ${className}`}
    >
      {getStatusLabel(status)}
    </Badge>
  );
}
