'use client'
import SearchInput from '../commons/SearchInput';
import { FC, useState } from 'react';
import UserAvatar from '../commons/UserAvatar';
import { UserData } from '@/app/types/user';

type HeaderContentProprs = {
  user: UserData;
}

const HeaderContent: FC<HeaderContentProprs> = ({user}) => {
  const {id, firstName, lastName, assignedTasks } = user;

  const [search, setSearch] = useState('');

  return (
    <div className='layout-default layout-margine my-6'>
      <h1 className='text-3xl'>
        Hi {firstName}, welcome! You have {assignedTasks.length} open tasks.
      </h1>
      <div className='flex items-center justify-end gap-4 w-1/3'>
        <SearchInput 
          type='text' 
          placeholder='Search'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className='bg-customGray text-white/50 rounded-full px-4 py-2 w-full'
        />
        <UserAvatar userId={id} firstName={firstName} lastName={lastName} size='md'/>
      </div>
    </div>
  )
}

export default HeaderContent