/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import Sidebar from './SideBar';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../redux/userSlice';
import TopBar from './TopBar';

const Layout = ({ children }) => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        await dispatch(getUser()).unwrap();
      } catch (err) {
        console.log(err);
      }
    };

    fetchUser();
  }, [dispatch]);
  return (
    <div className='flex'>
      <Sidebar user={user} />
      <div className='px-[60px] bg-[#FAFBFF] h-[100vh] w-full'>
        <TopBar user={user} />
        {children}
      </div>
    </div>
  );
};

export default Layout;
