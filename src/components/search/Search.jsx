import { SearchIcon } from 'lucide-react';

const Search = () => {
  return (
    <div className='relative'>
      <SearchIcon className='text-[#9197B3] inset-y-0 absolute top-1/2 left-3 -translate-y-1/2' />
      <input
        type='text'
        placeholder='Search'
        className=' w-[216px] border border-gray-100 bg-white rounded-lg py-[10px] focus:ring-[#1E2772] focus:border-gray-100 outline-none pl-10'
      />
    </div>
  );
};

export default Search;
