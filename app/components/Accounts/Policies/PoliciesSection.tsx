import { Ship, ShieldCheck, ShieldUser, Building2, Umbrella} from 'lucide-react';
import PolicyCard from './PolicyCard';


const policiesData = [
  {
    id: 'marine',
    iconName: 'Ship',
    iconColor: 'text-blue-500',
    name: 'Marine Cargo',
    premium: '$625,000',
    effDate: '6/30/2026',
  },
  {
    id: 'general',
    iconName: 'ShieldCheck',
    iconColor: 'text-green-500',
    name: 'General Liability',
    premium: '$175,000',
    effDate: '6/30/2026',
  },
  {
    id: 'workers',
    iconName: 'ShieldUser',
    iconColor: 'text-purple-500',
    name: 'Workers Comp',
    premium: '$75,000',
    effDate: '----',
  },
  {
    id: 'property',
    iconName: 'Building2',
    iconColor: 'text-yellow-500',
    name: 'Property',
    premium: '$64,829.83',
    effDate: '----',
  },
  {
    id: 'umbrella',
    iconName: 'Umbrella',
    iconColor: 'text-red-500',
    name: 'Umbrella',
    premium: '$275,000',
    effDate: '13/03/2026',
  },
];

const iconComponents: Record<string, React.ElementType> = {
  Ship,
  ShieldCheck,
  ShieldUser,
  Building2,
  Umbrella,
};

const PoliciesSection = () => {
  return (
    <section className='mb-10'>
      <div>
        <h2 className="text-3xl mb-6">Policies</h2>

        <div className="bg-customGray p-6 rounded-2xl shadow-xl border-1 border-white/10">
          <div className="flex gap-4 overflow-x-clip scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-slate-700">
            {policiesData.map((policy) => {
              const IconComponent = iconComponents[policy.iconName]
              return (
                <PolicyCard
                  key={policy.id}
                  icon={<IconComponent size={24} className={policy.iconColor} />}
                  name={policy.name}
                  premium={policy.premium}
                  effDate={policy.effDate}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PoliciesSection;