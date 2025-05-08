'use client'
import SearchAndFilter from '../../commons/SearchAndFilter'
import CommunicationCard from './CommunicationCard';

const mockData = [
  {
    id: 1,
    status: 'NEW' as const,
    title: 'Policy Renewal - Auto Insurance 5/15/25',
    sender: 'Michael Roberts',
    date: 'Apr 5',
    snippet: 'Hello Arthur, I\'m reaching out regarding the upcoming auto policy renewal for Real Estate Group, LLC. The current policy expires on 6/30/2024. Would you like to review coverage options before proceeding with the renewal? I\'ve attached the current policy details and premium breakdown for your reference.',
    attachments: 3,
    onReply: () => {alert('Reply')},
    special: true,
  },
  {
    id: 2,
    status: 'Responded' as const,
    title: 'Fwd: New Submission - BPM Real Estate - EFF 4/1/24',
    sender: 'Joshua Dunmire',
    date: 'Mar 25',
    snippet: 'Arthur, attached please find our submission for the above mentioned applicant. We have...',
    attachments: undefined,
    special: false,
  },
  {
    id: 3,
    status: 'NEW' as const,
    title: 'New Business: BPM Real Estate Group, LLC',
    sender: 'Isabel Kreller',
    date: 'Feb 28',
    snippet:  'Hello Arthur, I\'m reaching out regarding the upcoming auto policy renewal for Real Estate Group, LLC. The current policy expires on 6/30/2024. Would you like to review coverage options before proceeding with the renewal? I\'ve attached the current policy details and premium breakdown for your reference.',
    attachments: 5,
    onReply: () => {alert('Reply')},
    special: true,
  },
  {
    id: 4,
    status: 'NEW' as const,
    title: 'New Quote Request - Workers Comp Insurance',
    sender: 'Sarah Chen',
    date: 'Apr 5',
    snippet: 'Hi Arthur, Real Estate Group has expressed interest in adding workers compensation coverage to their insurance portfolio. I\'ve completed the initial risk assessment based',
    attachments: 3,
    onReply: () => {alert('Reply')},
    special: false,
  },
];

const Communication = () => {

  return (
    <section>
      <h3 className="text-3xl mb-6">
        Communication
      </h3>

      <article className="bg-customGray p-6 rounded-2xl shadow-xl border-1 border-white/10 flex flex-col gap-6">
        <SearchAndFilter />
        <div className='grid grid-cols-2 gap-6 '>
          {mockData.map((item) => (
            <CommunicationCard
              key={item.id}
              status={item.status}
              title={item.title}
              sender={item.sender}
              date={item.date}
              snippet={item.snippet}
              attachments={item.attachments}
              onReply={item.onReply}
              special={item.special}
            />
          ))}
        </div>
      </article>
    </section>
  )
}

export default Communication