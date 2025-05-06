import React from 'react';
import WorkQueueRow from './WorkQueueRow';
import { Task } from '@/app/types/user';


interface WorkQueueTableProps {
  tasks: Task[];
  userId: string;
}

const WorkQueueTable: React.FC<WorkQueueTableProps> = ({ tasks, userId }) => {
  
  return (
    <table className="w-full">
      <thead className='bg-white/4'> 
        <tr>
          <th 
            className="p-2 text-left text-xxs font-light text-gray-400 uppercase tracking-wider w-[20%]"
          >
            Originator
          </th>
          <th 
            className="p-2 text-left text-xxs font-light text-gray-400 uppercase tracking-wider w-[20%]"
          >
            Client/Line
          </th>
          <th 
            className="p-2 text-left text-xxs font-light text-gray-400 uppercase tracking-wider w-[20%]"
          >
            Type
          </th>
          <th 
            className="p-2 text-left text-xxs font-light text-gray-400 uppercase tracking-wider w-[15%]"
          >
            Status
          </th>
          <th 
            className="pl-2 text-left text-xxs font-light text-gray-400 uppercase tracking-wider w-[10%]"
          >
            Created
          </th>
          <th 
            className="text-left text-xxs font-light text-gray-400 uppercase tracking-wider w-[5%]"
          >
          {/* Колонка для іконки додаткової інформації */}  
          </th>
        </tr>
      </thead>

      <tbody>
        {tasks.slice(0, 6).map((task, index) => (
          <WorkQueueRow
            key={task.taskId}
            task={task}
            userId={userId}
            count={index}
          />
        ))}
      </tbody>
    </table>
  );
};

export default WorkQueueTable;