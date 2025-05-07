import { FC }   from 'react';
import SidebarSection from './SidebarSection';

interface SidebarItem {
  id: string;
  label: string;
  href: string;
}

interface SidebarDataSection {
  id: string;
  title: string;
  items: SidebarItem[];
}

interface AccountDetailsSidebarProps {
  data: SidebarDataSection[];
  activeItemId: string;
  setActiveItemId: (id: string) => void;
  setTitleId: (id: string) => void;
}

const AccountDetailsSidebar: FC<AccountDetailsSidebarProps> = ({ data, activeItemId, setActiveItemId, setTitleId}) => {


  const handleActive = (itemId: string) => {
    setActiveItemId(itemId);
  };

  return (
    <aside className="p-5 rounded-lg flex-shrink-0">
      {data.map((section) => (
        <SidebarSection
          key={section.id}
          id={section.id}
          title={section.title}
          count={section.items.length}
          items={section.items}
          activeItemId={activeItemId}
          onClick={handleActive}
          setTitleId={setTitleId}
        />
      ))}
    </aside>
  );
};

export default AccountDetailsSidebar;