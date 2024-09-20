/* eslint-disable react/prop-types */

import Pagination from './Pagination';
import { pageTableRows } from '../../utils/table';

const Table = ({
  headers,
  data,
  section,
  total,
  handleChangePage,
  handleNextPage,
  handlePrevPage,
  rowsPerPage,
  currentPage,
}) => {
  const RenderRows = () => {
    return data?.map((item) => {
      const TableRowComponent = pageTableRows[section];
      // const id = getUid();
      return (
        <tr tabIndex={-1} key={item.id} className='border-b '>
          {TableRowComponent ? <TableRowComponent item={item} /> : null}
        </tr>
      );
    });
  };

  return (
    <div className='container mx-auto py-4 '>
      <div className='overflow-x-auto '>
        <table className='md:w-full w text-left      '>
          <thead>
            <tr className='border-b border-b-[#EEEEEE] '>
              {headers.map((header) => (
                <th
                  key={header.id}
                  className='py-[14px] text-[#B5B7C0] text-[14px]'
                >
                  {header.label}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            <RenderRows />
          </tbody>
        </table>
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(total / rowsPerPage)}
        onPageChange={handleChangePage}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        rowsPerPage={rowsPerPage}
        total={total}
      />
    </div>
  );
};

export default Table;
