import NavItem from "./NavItem"
import { House, Database, Users, FileInput, Building2, Goal, KeyRound  } from 'lucide-react';

const NavigationMenu = () => {
  return (
    <nav className="layout-default layout-margine mt-4">
      <ul className="flex gap-3">
        <NavItem href="/" label="Dashboard" icon={<House size={22} />}/>
        <NavItem href="/accounts" label="Accounts" icon={<Database size={22} />}/>
        <NavItem href="/brokers" label="Brokers" icon={<Users size={22} />}/>
        <NavItem href="/submissions" label="Submissions" icon={<FileInput size={22} />}/>
        <NavItem href="/organizations" label="Organizations" icon={<Building2 size={22} />}/>
        <NavItem href="/goals" label="Goals & Rules" icon={<Goal size={22} />}/>
        <NavItem href="/admin" label="Admin" icon={<KeyRound size={22} />}/>
      </ul>
    </nav>
  )
}

export default NavigationMenu