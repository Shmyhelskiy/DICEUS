import React from 'react';
import clsx from 'clsx';


interface AcountStatusBadgeProps {
  status: 'Active' | 'Under review';
}

const AcountStatusBadge: React.FC<AcountStatusBadgeProps> = ({ status }) => {
  const statusConfig = {
    Active: { color: 'bg-green-500', text: 'Active' },
    'Under review': { color: 'bg-blue-800', text: 'Under review' },
  };

  return (
    <div className="flex items-center gap-1.5">
      <span className={clsx('w-2 h-2 rounded-full', statusConfig[status].color)}></span>
      <span className="text-xm">{statusConfig[status].text}</span>
    </div>
  );
};

export default AcountStatusBadge;