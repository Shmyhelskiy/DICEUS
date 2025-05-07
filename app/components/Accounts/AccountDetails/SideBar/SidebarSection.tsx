import Button from "@/app/components/commons/Button";
import clsx from "clsx";
import { FC } from "react";

interface SidebarItem {
  id: string;
  label: string;
  href: string;
  isActive?: boolean;
}

interface SidebarSectionProps {
  id: string;
  title: string;
  count: number;
  items: SidebarItem[];
  activeItemId?: string;
  onClick: (itemId: string) => void;
  setTitleId: (id: string) => void;
}

const SidebarSection: FC<SidebarSectionProps> = ({ id, title, count, items, activeItemId, onClick, setTitleId }) => {
  const isActive = id === activeItemId;
  
  
  return (
    <div className={clsx('mb-b p-2', isActive ? 'bg-insideGray rounded-3xl' : null)}>
      <div className="flex justify-between items-center mx-5">
        <h4 className="text-xl uppercase tracking-wider cursor-pointer" onClick={() => {onClick(id)}}>
          {title}
        </h4>
        <span className={clsx("text-sm py-4 px-3  bg-insideGray rounded-md w-5 h-5 flex items-center justify-center", isActive ? 'border-1 border-white' : null)}>
          {count}
        </span>
      </div>

      <div
        className={`
          overflow-hidden transition-all duration-500 ease-in-out
          ${isActive ? 'max-h-96 opacity-100 visible' : 'max-h-0 opacity-0 invisible'}
        `}
      >
        {isActive && 
          <ul className="space-y-6 pl-[15%]">
          {items.map((item) => (
            <li key={item.id}>
              <Button type="button" onClick={() => setTitleId(item.id)} label={item.label} className={"text-start text-gray-300 hover:text-blue-500"} />
            </li>
          ))}
        </ul>
        }
      </div>
      
    </div>
  );
};

export default SidebarSection;