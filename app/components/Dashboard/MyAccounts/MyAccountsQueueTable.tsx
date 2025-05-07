import { AccountsApiResponse } from '@/app/types/accounts/accounts';
import React from 'react';
import MyAccountsQueueRow from './MyAccountsQueueRow';



interface WorkQueueTableProps {
  accounts?: AccountsApiResponse;
}

const MyAccountsQueueTable: React.FC<WorkQueueTableProps> = ({ accounts }) => {
  return (
    <table className="w-full">
      <thead className='bg-insideGray'>
        <tr>
          <th
            className="py-2 pl-4 text-left text-xxs font-light text-gray-400 uppercase tracking-wider w-[17%]"
          >
            Account Name/Type
          </th>
          <th
            className="p-2 text-left text-xxs font-light text-gray-400 uppercase tracking-wider w-[14%]"
          >
            Line
          </th>
          <th
            className="p-2 text-left text-xxs font-light text-gray-400 uppercase tracking-wider w-[10%]"
          >
            Broker
          </th>
          <th
            className="p-2 text-left text-xxs font-light text-gray-400 uppercase tracking-wider w-[9%]"
          >
            Renewal date
          </th>
          <th
            className="pl-2 text-left text-xxs font-light text-gray-400 uppercase tracking-wider w-[6%]"
          >
            Premium
          </th>
          <th
            className="pl-2 text-left text-xxs font-light text-gray-400 uppercase tracking-wider w-[7%]"
          >
            Rated Premium
          </th>
          <th
            className="pl-2 text-left text-xxs font-light text-gray-400 uppercase tracking-wider w-[5%]"
          >
            Loss Ratio
          </th>
          <th
            className="pl-2 text-left text-xxs font-light text-gray-400 uppercase tracking-wider w-[7%]"
          >
            Appetite
          </th>
          <th
            className="pl-2 text-left text-xxs font-light text-gray-400 uppercase tracking-wider w-[8%]"
          >
            Status
          </th>
          <th
            className="pl-2 text-left text-xxs font-light text-gray-400 uppercase tracking-wider w-[4%]"
          >
            Triage
          </th>
          <th
            className="pl-2 text-left text-xxs font-light text-gray-400 uppercase tracking-wider w-[12%]"
          >
            Winnability
          </th>
          <th
            className="text-left text-xxs font-light text-gray-400 uppercase tracking-wider w-[1%]"
          >
            {/* Колонка для іконки додаткової інформації */}
          </th>
        </tr>
      </thead>

      <tbody>
        {accounts && accounts.map((account, index) => (
          <MyAccountsQueueRow
            key={account.id}
            account={account}
            count={index}
          />
        ))}
      </tbody>
    </table>
  );
};

export default MyAccountsQueueTable;