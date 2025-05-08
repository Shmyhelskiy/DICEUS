'use client'
import { useState } from 'react';
import AccountMainData from "./MainData/AccountMainData";
import AccountDetailsSidebar from "./SideBar/AccountDetailsSidebar"

const sidebarData = [
  {
    id: 'decision-support',
    title: 'DECISION SUPPORT',
    items: [
      { id: 'winnability', label: 'Winnability', href: '#winnability' },
      { id: 'exposure-review', label: 'Exposure Review & Suggested Coverage', href: '#exposure-review' },
      { id: 'portfolio-strategy', label: 'Portfolio Strategy Alignment', href: '#portfolio-strategy' },
      { id: 'broker-analytics', label: 'Broker Analytics', href: '#broker-analytics' },
    ],
  },
  {
    id: 'risk-assessment',
    title: 'RISK ASSESSMENT',
    items: [
      { id: 'risk-item1', label: 'Risk Item 1', href: '#risk-item1' },
      { id: 'risk-item2', label: 'Risk Item 2', href: '#risk-item2' },
    ],
  },
  {
    id: 'docs-compliance',
    title: 'DOCUMENTS AND COMPLIANCE',
    items: [
      { id: 'doc-item1', label: 'Document Item 1', href: '#doc-item1' },
      { id: 'doc-item2', label: 'Document Item 2', href: '#doc-item2' },
    ],
  },
];

const winnabilityPageData = {
  winnability: {
    overallScore: {
      title: 'Overall Score',
      percentage: 82,
      rating: {
        level: 5,
        text: "Very Strong",
      }
    },
    historicalTrend: {
      title: 'Historical Trend',
      data: [
        { month: "Jan", value: 20 },
        { month: "Feb", value: 60 },
        { month: "Mar", value: 20 },
        { month: "Apr", value: 70 },
        { month: "Now", value: 100 }
      ]
    },
    position: {
      title: 'Position',
      bars: [
        { id: "yourScoreBar", value: 82, title: 'Your score'},
        { id: "marketAvgBar", value: 68, title: 'Market avg' },
        { id: "topCompetitorBar", value: 88, title: 'Top competitor' }
      ]
    },
    increasingFactors: {
      title: 'Increasing Winnability',
      data: [
        {
          id: "brokers-relationship",
          rank: 1,
          label: "Brokers relationship",
          impactPercentage: 28,
          barValue: 90
        },
        {
          id: "loss-history",
          rank: 2,
          label: "Loss history",
          impactPercentage: 22,
          barValue: 60
        },
        {
          id: "industry-growth",
          rank: 3,
          label: "Industry growth",
          impactPercentage: 16,
          barValue: 75
        },
        {
          id: "multiline-opportunity",
          rank: 4,
          label: "Multiline opportunity",
          impactPercentage: 11,
          barValue: 45
        }
      ]
    },
    decreasingFactors: {
      title: 'Decreasing Winnability',
      data: [
        {
          id: "premium-pricing",
          rank: 1,
          label: "Premium pricing",
          impactPercentage: -24,
          barValue: 85
        },
        {
          id: "total-exposure",
          rank: 2,
          label: "Total exposure",
          impactPercentage: -18,
          barValue: 70
        },
        {
          id: "loss-ratio-trend",
          rank: 3,
          label: "Loss ratio trend",
          impactPercentage: -13,
          barValue: 55
        },
        {
          id: "market-competition",
          rank: 4,
          label: "Market competition",
          impactPercentage: -5,
          barValue: 30
        }
      ]
    }
  },
  aiPoweredRecommendations: [
    {
      id: "rec-premium-discount",
      title: "Offer 5% premium discount in exchange for 3-year commitment",
      description: "Historical win rate increases 24% with multi-year commitments. Current pricing is 12% above market average. This approach would strengthen retention while maintaining adequate profitability."
    },
    {
      id: "rec-risk-control",
      title: "Propose risk control services for cargo handling procedures",
      description: "Can potentially reduce loss ratio by 15-20% based on similar maritime accounts in your portfolio. Specific focus on loading/unloading operations would address the most frequent claim scenarios."
    }
  ]
};

  

const AccountDetails = () => {

  const [activeItemId, setActiveItemId] = useState<string>(sidebarData[0]?.id || '');
  const [titleId, setTitleId] = useState<string>(sidebarData[0]?.items[0].id || '');

  const selectedItem = sidebarData.flatMap(section => section.items).filter((item) => item.id === titleId);

  return (
    <section>
      <h3 className="text-3xl">
        Account Details
      </h3>

      <div className="bg-customGray p-6 rounded-2xl shadow-xl border-1 border-white/10 flex gap-6">
      <div className="w-[25%]">
        <AccountDetailsSidebar 
          data={sidebarData}  
          activeItemId={activeItemId} 
          setActiveItemId={setActiveItemId}
          setTitleId={setTitleId}
        />
      </div>

      <div className="w-px  border-1 mt-6 border-dashed border-white" />
        <div className="flex-1">
          <AccountMainData data={winnabilityPageData} title={selectedItem[0].label}/>
        </div>
      </div>

    </section>
  )
}

export default AccountDetails