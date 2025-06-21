
'use client';

import { useEffect, useState } from 'react';
import { getTimeRemaining } from '@/lib/workflow-utils';
import { Clock, AlertTriangle } from 'lucide-react';

interface CountdownTimerProps {
  deadline: Date | null;
  className?: string;
  showIcon?: boolean;
}

export function CountdownTimer({ deadline, className, showIcon = true }: CountdownTimerProps) {
  const [timeRemaining, setTimeRemaining] = useState(getTimeRemaining(deadline));

  useEffect(() => {
    if (!deadline) return;

    const interval = setInterval(() => {
      setTimeRemaining(getTimeRemaining(deadline));
    }, 60000); // Update every minute

    return () => clearInterval(interval);
  }, [deadline]);

  if (!deadline || timeRemaining.expired) {
    return (
      <div className={`flex items-center gap-1 text-red-600 ${className}`}>
        {showIcon && <AlertTriangle className="h-4 w-4" />}
        <span className="text-sm font-medium">Expired</span>
      </div>
    );
  }

  const isUrgent = timeRemaining.days <= 2;

  return (
    <div className={`flex items-center gap-1 ${isUrgent ? 'text-orange-600' : 'text-blue-600'} ${className}`}>
      {showIcon && <Clock className="h-4 w-4" />}
      <span className="text-sm font-medium">
        {timeRemaining.days > 0 && `${timeRemaining.days}d `}
        {timeRemaining.hours > 0 && `${timeRemaining.hours}h `}
        {timeRemaining.days === 0 && timeRemaining.hours === 0 && `${timeRemaining.minutes}m`}
        {timeRemaining.days === 0 && timeRemaining.hours === 0 && timeRemaining.minutes === 0 && 'Less than 1m'}
        {' remaining'}
      </span>
    </div>
  );
}
