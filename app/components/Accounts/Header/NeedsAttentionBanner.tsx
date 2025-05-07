import { AlertCircle } from 'lucide-react'; 
import AttentionItem from './AttentionItem';

const attentionItemsData = [
  {
    id: 'marine-survey',
    title: 'Marine Survey Required',
    subtitle: 'Scheduled for 06/12/2025',
    linkText: 'Review details link',
  },
  {
    id: 'loss-control',
    title: 'Loss Control Complete',
    subtitle: 'Last inspection: 02/15/2025',
    linkText: 'View report',
  },
  {
    id: 'claims-review',
    title: 'Claims Review Required',
    subtitle: '3 open claims // $245,000 TTL',
    linkText: 'View claims',
  },
];


const NeedsAttentionBanner = () => {
  return (
    <div className="bg-customGray p-4 rounded-3xl border border-yellow-300 max-w-4xl h-fit">
      <div className="flex items-center mb-4">
        <AlertCircle size={24} className="text-[#FDD261] mr-3 flex-shrink-0" />
        <h2 className="text-xl font-light text-[#FDD261]">Needs Attention</h2>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {attentionItemsData.map((item) => (
          <AttentionItem
            key={item.id}
            title={item.title}
            subtitle={item.subtitle}
            linkText={item.linkText}
          />
        ))}
      </div>
    </div>
  );
};

export default NeedsAttentionBanner;
