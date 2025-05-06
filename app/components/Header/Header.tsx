'use client'
import { useEffect } from "react";
import HeaderContent from "./HeaderContent"
import NavigationMenu from "./NavigationMenu";
import useUserStore from "@/app/state/userStore";

const Header = () => {
  const getUser = useUserStore((state) => state.getUser);
  const user = useUserStore((state) => state.user);
  const isLoading = useUserStore((state) => state.isLoading);

  useEffect(() => {
    getUser();
  }, [getUser]);
  
  if (isLoading) {
    return (
      <header className="w-full">
        <div className="ml-28 mr-32 h-[88px] flex items-center">
          <p>Loading user data...</p>
        </div>
      </header>
    );
  }
  
  return (
    <header>
      {user && <HeaderContent  user={user}/>}
      <div className="h-[0.5px] bg-white/20"/>
      <NavigationMenu />
    </header>
  )
}

export default Header