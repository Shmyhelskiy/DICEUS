import { FC } from "react"
import clsx from 'clsx';
import Button from "../../commons/Button";

type WorkQueueTabProps  = {
  title: string;
  onClick: () => void;
  isActive: boolean;
  count: number;
}

const WorkQueueTab: FC<WorkQueueTabProps> = ({title, onClick, isActive, count}) => {
  return (
    <Button label={`${title} (${count})`} onClick={onClick} className={clsx(
        'w-fit cursor-pointer rounded-full text-sm px-4 py-1.5 hover:bg-gray-60',
        isActive ? 'bg-customBlue' : 'bg-rootBackGround text-white/70'
      )} type='button' /> 
  )
}

export default WorkQueueTab