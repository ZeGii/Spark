
'use client';

import { Progress } from './progress';
import { getVoteProgress } from '@/lib/workflow-utils';
import { TrendingUp } from 'lucide-react';

interface VoteProgressProps {
  voteCount: number;
  voteThreshold: number | null;
  className?: string;
  showDetails?: boolean;
}

export function VoteProgress({ 
  voteCount, 
  voteThreshold, 
  className, 
  showDetails = true 
}: VoteProgressProps) {
  const progress = getVoteProgress(voteCount, voteThreshold);
  const isQualified = voteThreshold && voteCount >= voteThreshold;

  if (!voteThreshold) {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        <TrendingUp className="h-4 w-4 text-gray-400" />
        <span className="text-sm text-gray-600">{voteCount} votes</span>
      </div>
    );
  }

  return (
    <div className={`space-y-2 ${className}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <TrendingUp className={`h-4 w-4 ${isQualified ? 'text-green-600' : 'text-blue-600'}`} />
          {showDetails && (
            <span className="text-sm font-medium">
              {voteCount} / {voteThreshold} votes
            </span>
          )}
        </div>
        {showDetails && (
          <span className={`text-sm font-medium ${isQualified ? 'text-green-600' : 'text-gray-600'}`}>
            {Math.round(progress)}%
          </span>
        )}
      </div>
      <Progress 
        value={progress} 
        className="h-2"
      />
      {isQualified && showDetails && (
        <p className="text-xs text-green-600 font-medium">
          ✓ Qualified for research!
        </p>
      )}
    </div>
  );
}
