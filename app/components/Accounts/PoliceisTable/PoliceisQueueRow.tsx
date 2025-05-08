import { EllipsisVertical, Ship, ShieldCheck, Users, Umbrella, Building2 } from 'lucide-react';
import CustomLink from '../../commons/CustomLink'
import { FC } from 'react'
import { FullPolicyItem } from '@/app/types/accounts/policiData/fullPoliciesData';
import clsx from 'clsx';
import StatusPoliceBadge from './StatusPoliceBadge';
import { normalizedNumber } from '@/app/utils/stringUtils';

type PoliceisQueueRowProps = {
  data: FullPolicyItem;
  count: number;
}

const iconComponents = {
  Ship,
  ShieldCheck,
  Users,
  Umbrella,
  Building2,
};


const PoliceisQueueRow:FC<PoliceisQueueRowProps> = ({data, count}) => {
  const {
    id, 
    iconName,
    iconColor,
    name,
    effDate,
    expDate,
    status,
    rateChange,
    lossRatio,
    expiringTech,
    expiringPremium,
    renewalToTech,
    renewalTech,
    renevalPremium} = data;
  const IconComponent = iconComponents[iconName as keyof typeof iconComponents];
  const rowBgClass = count % 2 === 0 ? '' : 'bg-insideGray';

  let bglossRatio;

  switch (true) {
    case lossRatio >= 70:
      bglossRatio = 'bg-red-500';
      break;
    case lossRatio >= 50:
      bglossRatio = 'bg-amber-400 text-black';
      break;
    case lossRatio >= 1:
      bglossRatio = 'bg-green-300';
    break;
    default:
      bglossRatio = '';
      break;
  }

  return (
    <tr className={clsx('transition-colors group align-middle', rowBgClass)}>
      <td className='px-2 py-2 text-sm pl-4 flex flex-col gap-1'>
        <div className='flex gap-2 items-center'>
          {IconComponent && <IconComponent className={clsx(`w-5 h-5 rounded-full m-1 p-0.5`, iconColor)} />}
          <p className='text-lg font-light'>{name}</p>
        </div>
        <p className='text-ms text-white/50'>{id}</p>
      </td>
      <td className='px-2'>
        <span>{effDate}</span>
      </td>
      <td className='px-2'>
        <span>{expDate}</span>
      </td>
      <td className='px-2'>
        <StatusPoliceBadge statusText={status}/>
      </td>
      <td className='px-2'>
        {expiringTech ? `${normalizedNumber(expiringTech)}%` : 'N/A'}
      </td>
      <td className='px-2'>
        <span>
          {expiringPremium ? `${normalizedNumber(expiringPremium)}%` : 'N/A'}
        </span>
      </td>
      <td className='px-3'>
        <span>
          {renewalToTech ? `${normalizedNumber(renewalToTech)}%` : 'N/A'}
        </span>
      </td>
      <td className='px-5'>
        <span>
          {renewalTech ? `${normalizedNumber(renewalTech)}%` : 'N/A'}
        </span>
      </td>
      <td className='px-2'>
        <span>
          {renevalPremium ? `${normalizedNumber(renevalPremium)}%` : 'N/A'}
        </span>
      </td>
      <td className='px-2'>
        <span className={clsx(rateChange > 5 ? 'text-red-500' : 'text-white')}>
          {rateChange ? `${rateChange}%` : 'N/A'}
        </span>
      </td>
      <td className='px-2'>
        <div 
          className={clsx('items-center gap-2 rounded-full px-2 py-1 text-center w-fit', bglossRatio)}
        >
          <span>
            {lossRatio ? `${lossRatio}%` : 'N/A'}
          </span>
        </div>
      </td>
      <td className='px-2 text-center'>
        <CustomLink
          className='p-1 rounded-full cursor-pointer border border-white inline-flex items-center justify-center'
        >
          <EllipsisVertical size={14} className='stroke-white' />
        </CustomLink>
      </td>
    </tr>
  )
}

export default PoliceisQueueRow