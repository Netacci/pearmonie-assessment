import ctl from '@netlify/classnames-template-literals';
import Search from '../../../components/search/Search.jsx';
import { ChevronDown } from 'lucide-react';

const TableHeader = () => {
  return (
    <div className='flex justify-between flex-col md:flex-row '>
      <div className='mb-2 md:mb-0'>
        <p className='text-[18px] md:text-[22px] font-semibold text-black'>
          All Users
        </p>
        <p className='text-[14px] text-[#16C098] mt-2'>Active members</p>
      </div>
      <div className={filterWrapperStyles}>
        <Search variant='secondary' />
        <div className={filterStyles}>
          <span className='text-[#7E7E7E] text-[12px]'>Sort by</span>{' '}
          <span className='text-[12px] font-semibold text-[#3D3C42]'>
            Newest
          </span>
          <ChevronDown size={18} />
        </div>
      </div>
    </div>
  );
};

const filterWrapperStyles = ctl(
  `flex 
  w-full
  md:w-3/4 
  md:justify-end 
  md:items-center 
  gap-x-[10px]
  md:gap-x-[16px]
  md:flex-row
  flex-col
  items-start
  
  `
);
const filterStyles = ctl(
  `flex items-center gap-1 py-[10px] px-[15px] bg-[#F9FBFF] rounded-[10px] mt-4 md:mt-0 w-full md:w-auto`
);
export default TableHeader;
