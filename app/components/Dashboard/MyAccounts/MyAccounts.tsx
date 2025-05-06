'use client'
import { useState } from "react";
import SearchInput from "../../commons/SearchInput"
import Button from "../../commons/Button";
import MyAccountsQueueTable from "./MyAccountsQueueTable";
import useUserStore from "@/app/state/userStore";

const MyAccounts = () => {

  const [search, setSearch] = useState('');
  const accounts = useUserStore((state) => state.user?.accounts) ?? [];

  return (
    <div className="p-5 pb-10">
      <div className="flex items-center gap-2 mb-4">
        <h2 className="text-xl pb-2">
          My accounts
        </h2>
        <SearchInput 
          type='text' 
          placeholder='Search'
          value={search} 
          onChange={(e) => setSearch(e.target.value)}
          className="bg-gray-700/50 text-white/50 rounded-full px-4 w-1/6"
        />

        <ul className="flex gap-2 items-center">
          <li>
            <Button type="button" label="Filter" onClick={() => {alert('Filtering not yet implemented')}} className='border-1 border-blue-500 text-blue-500 rounded-full px-5 text-sm'/>
          </li>
          <li>
            <Button type="button" label="Sort" onClick={() => {alert('Sorting not yet implemented')}} className='border-1 border-blue-500 text-blue-500 rounded-full px-5 text-sm'/>
          </li>
          <li>
            <Button type="button" label="Group" onClick={() => {alert('Grouping not yet implemented')}} className='border-1 border-blue-500 text-blue-500 rounded-full px-5 text-sm'/>
          </li>
          <li>
            <Button type="button" label="+ New" onClick={() => {alert('Creation not yet implemented')}} className='bg-blue-500 rounded-full px-5 text-sm'/>
          </li>
        </ul>

      </div>
      
      <MyAccountsQueueTable accounts={accounts} />
    </div>
  )
}

export default MyAccounts