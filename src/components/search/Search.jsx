/* eslint-disable react/prop-types */
import ctl from '@netlify/classnames-template-literals';
import { SearchIcon } from 'lucide-react';

const Search = ({ variant = 'primary', ...props }) => {
  const baseStyles = searchStyles;

  const variants = {
    primary:
      ' md:w-[216px] bg-white shadow-[0_10px_60px_rgba(226,236,249,0.5)] ',
    secondary: 'bg-[#F9FBFF]    md:w-[216px] w-full ',
  };
  const variantStyles = variants[variant] || variants.primary;
  return (
    <div className='relative w-full md:w-[216px]'>
      <SearchIcon className='text-[#9197B3] inset-y-0 absolute top-1/2 left-3 -translate-y-1/2' />
      <input
        type='text'
        placeholder='Search'
        className={`${baseStyles} ${variantStyles}`}
        {...props}
      />
    </div>
  );
};

const searchStyles = ctl(`


  border 
  py-[10px]  
  rounded-[10px]
  outline-none
  pl-10 
  text-sm 
  font-medium 
  focus:outline-none 
  focus:ring-2 
  focus:ring-offset-2 
  border-none 
  focus:ring-none 
  focus:border-none 
  `);

export default Search;
