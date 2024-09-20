/* eslint-disable react/prop-types */
import { Menu, X } from 'lucide-react';
import Search from '../search/Search';

const TopBar = ({ user, isSidebarVisible, setIsSidebarVisible }) => {
  return (
    <div className='flex flex-col md:flex-row items-start md:items-center justify-between pt-4 md:pt-6 px-4 md:px-0 flex-wrap '>
      <p className='order-1  mt-2 md:mt-0 text-[#000000] text-[16px] md:text-[24px] font-medium'>
        Hello {user?.firstName}👋🏽,
      </p>
      <div className='flex justify-between items-center md:order-1 w-full md:w-auto '>
        <Search />

        <button
          onClick={() => setIsSidebarVisible(!isSidebarVisible)}
          className='md:hidden'
        >
          {isSidebarVisible ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>
    </div>
  );
};

export default TopBar;
