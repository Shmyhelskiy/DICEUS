import React from 'react';
import { EllipsisVertical  } from 'lucide-react'; 
import { Task } from '@/app/types/user';
import UserAvatar from '../../commons/UserAvatar';
import { formatDate, getFullName } from '@/app/utils/stringUtils';
import clsx from 'clsx';
import StatusBadge from './StatusBadge';
import CustomLink from '../../commons/CustomLink';

interface WorkQueueRowProps {
  userId: string;
  task: Task;
  count: number;
}

const WorkQueueRow: React.FC<WorkQueueRowProps> = ({ userId, task, count }) => {

  const { originator, client, line, type, status, createdDate } = task;

  let fullName = getFullName(originator.firstName, originator.lastName);

  if (userId === originator.userId ) {
    fullName = 'Me';
  };
 
  const rowBgClass = count % 2 === 0 ? '' : 'bg-insideGray';

  return (
    <tr className={clsx('transition-colors group align-middle text-white/75 text-sm', rowBgClass)}>
      <td className='px-2'>
        <div className='flex items-center gap-2'>
          <UserAvatar
            firstName={originator.firstName}
            lastName={originator.lastName}
            size='sm'
            originatorId={originator.userId} 
            userId={userId}
          />
          <span>{fullName}</span>
        </div>
      </td>
      <td className='px-2 py-2'>
         <div className='flex flex-col'>
           <span>{client}</span>
           <span className='text-xs text-gray-400'>{line}</span>
         </div>
      </td>
      <td className='px-2'>{type}</td>
      <td className='px-2'>
        <StatusBadge status={status}/>
      </td>
      <td className='px-2 text-gray-300 whitespace-nowrap'>{formatDate(createdDate)}</td>
      <td className='px-2 text-center'>
        <CustomLink path='/' className=' p-1 rounded-full cursor-pointer border-1 border-white'>
           <EllipsisVertical  size={14} className='stroke-white'/>
        </CustomLink>
      </td>
    </tr>
  );
};

export default WorkQueueRow;
