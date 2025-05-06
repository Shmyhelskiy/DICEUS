import { FC } from "react"
import clsx from 'clsx';

type WorkQueueTabProps  = {
  title: string;
  onClick: () => void;
  isActive: boolean;
  count: number;
}

const WorkQueueTab: FC<WorkQueueTabProps> = ({title, onClick, isActive, count}) => {
  return (
    <button
      type="button" 
      className={clsx(
        'w-fit cursor-pointer rounded-full text-sm px-4 py-1.5 hover:bg-gray-60',
        isActive ? 'bg-customBlue' : 'bg-rootBackGround text-white/70'
      )}
      onClick={onClick}
    >
     <span> {title} ({count})</span>
    </button>

    
  )
}

export default WorkQueueTab