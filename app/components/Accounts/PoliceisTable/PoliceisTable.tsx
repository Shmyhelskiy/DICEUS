import PoliceisQueueRow from './PoliceisQueueRow';
import { FullPoliciesData } from '@/app/types/accounts/policiData/fullPoliciesData';

const policiesData: FullPoliciesData = [
  {
    id: '17030212',
    iconName: 'Ship',
    iconColor: 'bg-blue-500',
    name: 'Marine Cargo',
    effDate: '6/30/2026',
    expDate: '6/30/2027',
    status: 'Active',
    expiringTech: 610000,
    expiringPremium: 625000,
    renewalToTech: 567000,
    renewalTech: 670000,
    renevalPremium: 700000,
    rateChange: 3.3,
    lossRatio: 22,
  },
  {
    id: '4631092',
    iconName: 'ShieldCheck',
    iconColor: 'bg-green-500',
    name: 'General Liability',
    effDate: '6/30/2026',
    expDate: '6/30/2027',
    status: 'Active',
    expiringTech: 610000,
    expiringPremium: 625000,
    renewalToTech: 567000,
    renewalTech: 670000,
    renevalPremium: 700000,
    rateChange: 7,
    lossRatio: 22,
  },
  {
    id: '9182371',
    iconName: 'Users',
    iconColor: 'bg-purple-500',
    name: 'Workers Comp',
    effDate: 'Pending',
    expDate: 'Pending',
    status: 'Pending',
    expiringTech: 0,
    expiringPremium: 0,
    renewalToTech: 0,
    renewalTech: 0,
    renevalPremium: 0,
    rateChange: 0,
    lossRatio: 0,
  },
  {
    id: '52749836',
    iconName: 'Building2',
    iconColor: 'bg-yellow-500',
    name: 'Property',
    effDate: '13/03/2026',
    expDate: '13/03/2027',
    status: 'Active',
    expiringTech: 610000,
    expiringPremium: 625000,
    renewalToTech: 567000,
    renewalTech: 670000,
    renevalPremium: 700000,
    rateChange: 10,
    lossRatio: 78,
  },
  {
    id: '7855092',
    iconName: 'Umbrella',
    iconColor: 'bg-red-500',
    name: 'Umbrella',
    effDate: '13/03/2026',
    expDate: '13/03/2027',
    status: 'Active',
    expiringTech: 610000,
    expiringPremium: 625000,
    renewalToTech: 567000,
    renewalTech: 670000,
    renevalPremium: 700000,
    rateChange: 0,
    lossRatio: 50,
  },
];

const PoliceisTable = () => {
  return (
    <table className="w-full">
      <thead className="bg-insideGray">
        <tr>
          <th className="py-2 pl-4 text-left text-xxs font-light text-gray-400 uppercase tracking-wider w-[18%]">
            Line
          </th>
          <th className="p-2 text-left text-xxs font-light text-gray-400 uppercase tracking-wider w-[10%]">
            Eff. Date
          </th>
          <th className="p-2 text-left text-xxs font-light text-gray-400 uppercase tracking-wider w-[10%]">
            Exp. Date
          </th>
          <th className="p-2 text-left text-xxs font-light text-gray-400 uppercase tracking-wider w-[7%]">
            Status
          </th>
          <th className="pl-2 text-left text-xxs font-light text-gray-400 uppercase tracking-wider w-[8%]">
            Expiring Tech
          </th>
          <th className="pl-2 text-left text-xxs font-light text-gray-400 uppercase tracking-wider w-[8%]">
            Expiring Premium
          </th>
          <th className="pl-2 text-left text-xxs font-light text-gray-400 uppercase tracking-wider w-[8%]">
            Renewal to Tech
          </th>
          <th className="pl-2 text-left text-xxs font-light text-gray-400 uppercase tracking-wider w-[8%]">
            Renewal Tech
          </th>
          <th className="pl-2 text-left text-xxs font-light text-gray-400 uppercase tracking-wider w-[9%]">
            Reneval Premium
          </th>
          <th className="pl-2 text-left text-xxs font-light text-gray-400 uppercase tracking-wider w-[5%]">
            Rate Change
          </th>
          <th className="pl-2 text-left text-xxs font-light text-gray-400 uppercase tracking-wider w-[7%]">
            Loss Ratio
          </th>
          <th className="text-left text-xxs font-light text-gray-400 uppercase tracking-wider w-[2%]">
            {/* Колонка для іконки додаткової інформації */}
          </th>
        </tr>
      </thead>
      <tbody>
        {policiesData.map((item, index) => (
          <PoliceisQueueRow key={item.id} data={item} count={index} />
        ))}
      </tbody>
    </table>
  );
};

export default PoliceisTable;
