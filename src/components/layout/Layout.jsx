/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import Sidebar from './SideBar.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../redux/userSlice';
import TopBar from './TopBar.jsx';

const Layout = ({ children }) => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        await dispatch(getUser()).unwrap();
      } catch (err) {
        console.error(err);
      }
    };

    fetchUser();
  }, [dispatch]);
  return (
    <div className='flex overflow-hidden md:overflow-none'>
      <Sidebar user={user} isSidebarVisible={isSidebarVisible} />
      <div className='px-4 md:px-[50px] bg-[#FAFBFF] h-[100vh] w-full'>
        <TopBar
          user={user}
          isSidebarVisible={isSidebarVisible}
          setIsSidebarVisible={setIsSidebarVisible}
        />
        {children}
      </div>
    </div>
  );
};

export default Layout;
