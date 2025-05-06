'use client'

import useUserStore from "@/app/state/userStore"
import WorkQueueTab from "./WorkQueueTab"
import { useMemo, useState } from "react";
import WorkQueueTable from "./WorkQueueTable";


type TabId = 'assigned' | 'pending' | 'referrals';

const WorkQueue = () => {
  const user = useUserStore(state => state.user);
  const allTasks = useMemo(() => user?.assignedTasks || [], [user]);

  const [activeTabId, setActiveTabId] = useState<TabId>('assigned');

  const handleTabChange = (tabId: TabId) => {
    setActiveTabId(tabId);
  };

  const tabsData = useMemo(() => {
    const pendingCount = allTasks.filter(task => task.status === 'Pending Review').length;
    const referralsCount = allTasks.filter(task => task.type === 'Underwriter Referral').length;

    return [
      { id: 'assigned', title: 'Assigned to me', count: allTasks.length },
      { id: 'pending', title: 'Pending Review', count: pendingCount },
      { id: 'referrals', title: 'Referrals', count: referralsCount },
    ] as const;
  }, [allTasks]);

  const filteredTasks = useMemo(() => {
    switch (activeTabId) {
      case 'pending':
        return allTasks.filter((task) => task.status === 'Pending Review');
      case 'referrals':
        return allTasks.filter((task) => task.type === 'Underwriter Referral');
      case 'assigned':
      default:
        return allTasks;
    }
  }, [allTasks, activeTabId]);



  return (
    <div 
      className='p-5 flex flex-col gap-2'
    >
      <h2 className="text-xl">
        Work Queue
      </h2>

      <div className="flex justify-start gap-2 pb-3">
        {tabsData.map((tab) => (
          <WorkQueueTab
            key={tab.id}
            title={tab.title}
            count={tab.count}
            isActive={activeTabId === tab.id}
            onClick={() => handleTabChange(tab.id)}
          />
        ))}
      </div>
      {user && <WorkQueueTable tasks={filteredTasks} userId={user.id}/>}
    </div>
  )
}

export default WorkQueue