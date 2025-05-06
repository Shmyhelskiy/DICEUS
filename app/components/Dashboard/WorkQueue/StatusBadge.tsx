import React from 'react';
import clsx from 'clsx';
import { TaskStatus } from '@/app/types/user';


interface StatusBadgeProps {
  status: TaskStatus;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  const statusConfig = {
    New: { color: 'bg-blue-500', text: 'New' },
    'Pending Review': { color: 'bg-yellow-500', text: 'Pending Review' },
    Completed: { color: 'bg-green-500', text: 'Completed' },
  };

  return (
    <div className="flex items-center gap-1.5">
      <span className={clsx('w-2 h-2 rounded-full', statusConfig[status].color)}></span>
      <span className="text-xm">{statusConfig[status].text}</span>
    </div>
  );
};

export default StatusBadge;