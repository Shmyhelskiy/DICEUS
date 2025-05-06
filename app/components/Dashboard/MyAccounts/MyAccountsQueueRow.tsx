import { FC } from "react";
import clsx from "clsx";
import { AccountData } from "@/app/types/accounts";
import { EllipsisVertical } from "lucide-react";
import AcountStatusBadge from "./AcountStatusBadge";

type Props = {
  account: AccountData;
  count: number;
}

const MyAccountsQueueRow: FC<Props> = ({account, count}) => {
  const {accountName, accountType, line, broker, renewalDate, premium, ratedPremium, lossRatio, appetite, status, triage, winnability} = account;
  const rowBgClass = count % 2 === 0 ? '' : 'bg-white/4';

  let bglossRatio;

  switch (true) {
    case lossRatio.percentage >= 50:
      bglossRatio = 'bg-red-500';
      break;
    case lossRatio.percentage >= 35:
      bglossRatio = 'bg-amber-300 text-black';
      break;
    default:
      bglossRatio = 'bg-emerald-500';
      break;
  }

  return (
      <tr className={clsx('transition-colors group align-middle text-white/75 text-sm', rowBgClass)}>
        <td className='px-2 py-2 text-sm pl-4'>
          <p>{accountName}</p>
          <p className="text-xs text-white/50">{accountType}</p>
        </td>
      <td className='px-2'>
        <span>{line}</span>
      </td>
      <td className='px-2'>
        <span>{broker}</span>
      </td>
      <td className='px-2'>
        <span>{renewalDate}</span>
      </td>
      <td className='px-2 text-blue-400'>
        <span>{premium.display}</span>
      </td>
      <td className='px-2'>
        <span>{ratedPremium.display}</span>
      </td>
      <td className='px-3 text-xs'>
        <div className={`rounded-full flex justify-center ${bglossRatio}`}>
          <span>{lossRatio.percentage}%</span>
        </div>
      </td>
      <td className='px-5 text-xs'>
        <div className='rounded-full flex justify-center bg-blue-950/80'>
          <span>{appetite}</span>
        </div>
      </td>
      <td className='px-2 text-xs'>
        <div className="flex items-center">
          <AcountStatusBadge status={status.display} />
        </div>
      </td>
      <td className='px-2 text-xs'>
        <div className="border-1 border-blue-600 rounded-full text-center text-blue-400">
          <span>{triage}</span>
        </div>
      </td>
      <td className='px-2 text-xs'>
        <div className="inline-flex items-center gap-2 border border-blue-400 rounded-full text-blue-500 px-2 py-1">
          <div className="flex items-center gap-1">
          {Array.from({ length: winnability.level }).map((_, index) => (
            <div key={index} className="h-2 w-2 bg-blue-400 rounded-full" />
          ))}
          </div>

          <span>{winnability.text}</span>
        </div>
      </td>
      <td className='px-2 text-center'>
        <button className=' p-1 rounded-full cursor-pointer border-1 border-white'>
           <EllipsisVertical  size={14} className='stroke-white'/>
        </button>
      </td>
    </tr>
  )
}

export default MyAccountsQueueRow

