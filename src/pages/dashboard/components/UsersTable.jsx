/* eslint-disable react/prop-types */

import { useEffect, useState } from 'react';
import Table from '../../../components/table/Table.jsx';
import TableHeader from './TableHeader.jsx';
import ctl from '@netlify/classnames-template-literals';
import { getAllUsers } from '../../../redux/userSlice.js';
import { useDispatch, useSelector } from 'react-redux';
import { Loader2 } from 'lucide-react';

const UsersTable = () => {
  const { users } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [rowsPerPage] = useState(10);
  const [page, setPage] = useState(1);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        await dispatch(getAllUsers({ limit: rowsPerPage, page })).unwrap();
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, [dispatch, rowsPerPage, page]);

  const headers = [
    { id: 'firstName', label: 'Users Name' },
    { id: 'company', label: 'Company' },
    { id: 'phone', label: 'Phone Number' },
    { id: 'email', label: 'Email' },
    { id: 'country', label: 'Country' },
    { id: 'status', label: 'Status' },
  ];
  const allUsers = users && users?.users;

  const handleChangePage = (i) => {
    setPage(i);
  };

  const handleNextPage = (totalPages) => {
    if (page < totalPages) {
      setPage((prev) => prev + 1);
    }
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
    }
  };
  return (
    <div className={tableWrapperStyles}>
      <TableHeader />
      {loading ? (
        <Loader2 className='m-auto animate-spin' />
      ) : (
        <Table
          headers={headers}
          data={allUsers}
          itemsPerPage={rowsPerPage}
          section={'users'}
          total={users?.total}
          handleChangePage={handleChangePage}
          handleNextPage={() =>
            handleNextPage(Math.ceil(users?.total / rowsPerPage))
          }
          handlePrevPage={handlePrevPage}
          rowsPerPage={rowsPerPage}
          currentPage={page}
        />
      )}
    </div>
  );
};

const tableWrapperStyles = ctl(
  `my-[40px] 
  bg-white  
  shadow-[0_10px_60px_rgba(226,236,249,0.5)]
   py-[30px] 
   px-[38px]
    rounded-[30px] 
    md:mr-[35px] 

    
    `
);
export default UsersTable;
