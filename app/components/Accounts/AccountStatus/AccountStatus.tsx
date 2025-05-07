import React from 'react';
import StatusIcon from './StatusIcon';

type StepStatus = 'completed' | 'pending'; 

type StatusStep = {
  id: string;
  label: string;
  status: StepStatus;
}

const accountStatusStepsData: StatusStep[] = [
  { id: 'submitted', label: 'Submitted', status: 'completed' },
  { id: 'review', label: 'Review', status: 'completed' },
  { id: 'quote', label: 'Quote', status: 'completed' },
  { id: 'bind', label: 'Bind', status: 'completed' },
  { id: 'issue', label: 'Issue', status: 'completed' },
  { id: 'renew', label: 'Renew', status: 'pending' },
];

const AccountStatus = () => {
  return (
    <section className='mb-10'>
      <h3 className="text-3xl mb-6">Account Status</h3>
      <div className="bg-customGray px-15 pt-6 pb-15 rounded-2xl border border-white/10 w-full">
        <div className="flex items-center"> 
          {accountStatusStepsData.map((step, index) => (
            <React.Fragment key={step.id}>
              <div className="relative flex flex-col items-center text-center w-fit">
                <div className="h-8 w-fit flex items-center justify-center">
                  <StatusIcon
                    size={24}
                    color={step.status === 'completed' ? 'text-green-400' : 'border-dashed text-slate-500'}
                    className="p-1"
                  />
                </div>
                <span className='absolute top-10 text-xl'>
                  {step.label}
                </span>
              </div>
            
              {index < accountStatusStepsData.length - 1 && (
                <div className="flex-1 h-0.5 self-center px-2">
                  <div
                    className={`h-full w-full border-t-2 border-dashed ${
                      step.status === 'completed' && accountStatusStepsData[index + 1].status === 'completed'
                        ? 'border-t-green-400'
                        : step.status === 'completed' && accountStatusStepsData[index + 1].status === 'pending'
                        ? 'border-t-slate-600'
                        : 'border-t-slate-600'
                    }`}
                  />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};


export default AccountStatus;