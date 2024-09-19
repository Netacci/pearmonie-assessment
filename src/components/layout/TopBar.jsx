/* eslint-disable react/prop-types */
import Search from '../search/Search';

const TopBar = ({ user }) => {
  return (
    <div className='flex items-center justify-between pt-6'>
      <p>Hello {user?.firstName}👋,</p>
      <Search />
    </div>
  );
};

export default TopBar;
