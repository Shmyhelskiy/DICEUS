'use client';

import { FC, useState } from 'react';
import SearchInput from './SearchInput';
import Button from './Button';

const SearchAndFilter:FC = () =>{
  const [search, setSearch] = useState('');

  const handleFilterClick = () => {
    alert('Filtering not yet implemented');
  };

  return (
    <ul className="flex gap-2 items-center">
      <li>
        <SearchInput 
          type="text"
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          className="border-1 border-white/10 rounded-full py-1 pl-4"
        />
      </li>
      <li>
        <Button
          type="button"
          label="Filter"
          onClick={handleFilterClick}
          className="border-1 border-blue-500 text-blue-500 rounded-full px-5 text-sm"
        />
      </li>
      <li>
        <Button
          type="button"
          label="Filter"
          onClick={handleFilterClick}
          className="border-1 border-blue-500 text-blue-500 rounded-full px-5 text-sm"
        />
      </li>
    </ul>
  );
}


export default SearchAndFilter