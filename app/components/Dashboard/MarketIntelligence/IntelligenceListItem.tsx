import clsx from 'clsx';
import { FC } from 'react'

export type IntelligenceListItemProps = {
  color: 'red' | 'yellow' | 'blue';
  text: string;
}

const IntelligenceListItem:FC<IntelligenceListItemProps> = ({color, text}) => {
  const colorConfig = {
    red: 'bg-red-500',
    yellow: 'bg-yellow-500',
    blue: 'bg-blue-500',
  };
  
  return (
    <div className='flex text-sm gap-2 pb-3'>
      <div
        className={clsx('rounded-full w-5 h-3', colorConfig[color])}
      />
      <p>{text}</p>
    </div>
  )
}

export default IntelligenceListItem