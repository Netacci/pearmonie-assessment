/* eslint-disable react/prop-types */

import ctl from '@netlify/classnames-template-literals';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  handlePrevPage,
  handleNextPage,
  total,
}) => {
  return (
    <div className='flex justify-center md:justify-between mt-[32px] items-centers '>
      <p
        className={textStyle}
      >{`Showing data ${currentPage} to ${totalPages} of ${total} entries`}</p>{' '}
      <div className='flex items-center gap-x-[12px]'>
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className={btnStyles}
        >
          <ChevronLeft size={18} />
        </button>

        {Array.from({ length: Math.min(4, totalPages) }, (_, i) => i + 1).map(
          (number) => (
            <button
              key={number}
              onClick={() => onPageChange(number)}
              className={`px-3 py-1 rounded ${
                currentPage === number
                  ? 'bg-[#5932EA] text-white'
                  : 'bg-[#F5F5F5]'
              }`}
            >
              {number}
            </button>
          )
        )}

        {totalPages > 5 && currentPage < totalPages - 1 && (
          <span className='px-3 py-1'>...</span>
        )}

        {totalPages > 5 && (
          <button
            onClick={() => onPageChange(totalPages)}
            className={`px-3 py-1 rounded ${
              currentPage === totalPages
                ? 'bg-[#5932EA] text-white'
                : 'bg-[#F5F5F5]'
            }`}
          >
            {totalPages}
          </button>
        )}

        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={btnStyles}
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
};

const btnStyles = ctl(
  `px-3 py-1 bg-[#F5F5F5] rounded border border-solid border-[#EEEEEE] disabled:opacity-50`
);
const textStyle = ctl(
  `hidden md:flex text-[12px] md:text-[14px] text-[#B5B7C0]`
);

export default Pagination;
