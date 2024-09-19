/* eslint-disable react/prop-types */
import { useState } from 'react';
import {
  HelpCircle,
  ChevronRight,
  ChevronLeft,
  Bolt,
  SquareUser,
  ChevronDown,
} from 'lucide-react';

const Sidebar = ({ user }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  const navList = [
    {
      name: 'Users',
      icon: <SquareUser size={20} />,
    },
    {
      name: 'Help',
      icon: <HelpCircle size={20} className='text-[#9197B3]' />,
    },
  ];

  return (
    <div
      className={`bg-white h-screen transition-all duration-300 ${
        isExpanded ? 'w-[306px] px-[28px]' : 'w-[102px]'
      } flex flex-col shadow-lg`}
    >
      <div className='flex items-center pt-6 pb-4 justify-center'>
        <Bolt className='h-[37px] w-[37px]' />

        {/* {isExpanded && (
          <p className='ml-2 font-semibold'>
            Dashboard <span className=' '>v0.1</span>
          </p>
        )} */}
        <div
          className={`ml-[8px] whitespace-nowrap overflow-hidden transition-all duration-300 ${
            isExpanded ? 'w-60' : 'w-0'
          }`}
        >
          <span className='font-semibold  text-[28px]'>Dashboard</span>
          <span className='text-[10px] text-[#838383] ml-1 font-medium'>
            v.01
          </span>
        </div>
      </div>

      <nav className='flex-1 mt-4'>
        <ul>
          {navList.map((item, index) => (
            <li className='mb-2' key={`${item.name}${index}`}>
              <a
                href='#'
                className={`flex items-center p-2  ${
                  isExpanded ? 'mx-0 ' : 'mx-auto justify-center w-[50px]'
                } rounded-lg ${
                  item.name === 'Users'
                    ? 'bg-[#5932EA] text-white'
                    : 'bg-transparent hover:bg-gray-100'
                } `}
              >
                <span
                  className={`flex items-center  flex-1 ${
                    isExpanded ? 'justify-normal' : 'justify-center'
                  }`}
                >
                  {item.icon}
                  {isExpanded ? (
                    <span
                      className={`ml-3 ${
                        item.name === 'Users' ? 'text-white' : 'text-[#9197B3]'
                      }`}
                    >
                      {item.name}
                    </span>
                  ) : null}
                </span>
                {isExpanded ? (
                  <ChevronRight
                    size={20}
                    className={`${
                      item.name === 'Users' ? 'text-white' : 'text-[#9197B3]'
                    } `}
                  />
                ) : null}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      {isExpanded ? (
        <div className='bg-gradient-to-r from-[#EAABF0] to-[#4925E9] p-6 rounded-[20px] opacity-100 transition-all duration-300 '>
          <p className='text-white text-[14px]  text-center font-semibold '>
            Upgrade to PRO to get access to all Features
          </p>
          <button className='p-2 mt-[20px] rounded-[20px] bg-white text-[#4925E9] font-semibold w-full'>
            Get Pro Now!
          </button>
        </div>
      ) : null}
      <div
        className={`flex items-center  mt-[48px] ${
          isExpanded ? 'justify-between' : 'justify-center'
        }`}
      >
        {!isExpanded ? (
          <img src={user?.image} className='w-[40px] h-[40px] rounded-full' />
        ) : (
          <>
            <div className='flex items-center'>
              <img
                src={user?.image}
                className='w-[40px] h-[40px] rounded-full'
              />

              <div className='flex flex-col ml-3'>
                <p className='text-[14px] font-medium text-black'>
                  {user?.firstName}
                </p>
                <p className='text-[12px] text-[#757575]'>Project Manager</p>
              </div>
            </div>
            <ChevronDown size={20} className='text-[#9197B3]' />
          </>
        )}
      </div>

      <button
        onClick={toggleSidebar}
        className='p-2 m-4 rounded-full bg-gray-200 hover:bg-gray-300 self-end'
      >
        {isExpanded ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
      </button>
    </div>
  );
};

export default Sidebar;
