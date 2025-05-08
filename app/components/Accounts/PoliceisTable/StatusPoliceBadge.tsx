import React from 'react';
import clsx from 'clsx';

type StatusText = 'Active' | 'Pending';

interface StatusPoliceBadgeProps {
  statusText: StatusText;
}

const StatusPoliceBadge: React.FC<StatusPoliceBadgeProps> = ({ statusText }) => {
  const statusConfig = {
    Active: { color: 'bg-green-500', text: 'Active' },
    Pending: { color: 'bg-yellow-500', text: 'Pending' },
  };

  const config = statusConfig[statusText];

  return (
    <div className="flex items-center gap-1.5">
      <span className={clsx('w-2 h-2 rounded-full', config.color)}></span>
      <span className="text-xm">{config.text}</span>
    </div>
  );
};

export default StatusPoliceBadge;