import ctl from '@netlify/classnames-template-literals';
import {
  ArrowDown,
  ArrowUp,
  Monitor,
  UserCheck2Icon,
  Users,
} from 'lucide-react';
import User1 from '../../../assets/user1.png';
import User2 from '../../../assets/user2.png';
import User3 from '../../../assets/user3.png';
import User4 from '../../../assets/user4.png';
import User5 from '../../../assets/user5.png';

const UsersSummary = () => {
  const cardItems = [
    {
      titleText: 'Total Users',
      icon: <Users className='text-[#00AC4F]' size={42} />,
      value: '5,423',
      bottom: (
        <p className={bottomStyles}>
          <ArrowUp className={`text-[#00AC4F] ${arrowIconStyles}`} />
          <span className={`text-[#00AC4F] ${percentageStyles}`}>16%</span>
          <span className={spanStyles}>this month</span>
        </p>
      ),
    },
    {
      titleText: 'Members',
      icon: <UserCheck2Icon className='text-[#00AC4F]' size={42} />,
      value: '1,893',
      bottom: (
        <p className={bottomStyles}>
          <ArrowDown className={`text-[#D0004B] ${arrowIconStyles}`} />
          <span className={`text-[#D0004B] ${percentageStyles}`}>16%</span>
          <span className={spanStyles}>this month</span>
        </p>
      ),
    },
    {
      titleText: 'Active Now',
      icon: <Monitor className='text-[#00AC4F]' size={42} />,
      value: '189',
      bottom: (
        <div className='flex items-center'>
          <img src={User1} alt='user1' className={imageStyles} />
          <img src={User2} alt='user2' className={imageStyles} />
          <img src={User3} alt='user3' className={imageStyles} />
          <img src={User4} alt='user4' className={imageStyles} />
          <img src={User5} alt='user5' className={imageStyles} />
        </div>
      ),
    },
  ];
  return (
    <div className={cardWrapperStyles}>
      {cardItems.map((item, index) => (
        <div
          key={item.titleText}
          className={`${cardInnerWrapperStyles} ${
            index === cardItems.length - 1
              ? 'border-r-none md:pt-0 pt-[30px]'
              : 'border-b-[1px] md:border-b-0 md:border-r-[1px] py-[30px] md:pr-[56px] md:py-0'
          }`}
        >
          <div className={iconWrapperStyles}>{item.icon}</div>
          <div>
            <p className={titleStyles}>{item.titleText}</p>
            <p className={valueStyles}>{item.value}</p>
            {item.bottom}
          </div>
        </div>
      ))}
    </div>
  );
};

const cardWrapperStyles = ctl(`
  bg-white 
  shadow-[0_10px_60px_rgba(226,236,249,0.5)]
  rounded-[30px] 
  py-[30px] 
  px-[20px]
  md:px-[50px] 
  mt-[40px] 
  flex 
  justify-between
  mr-0
  md:mr-[45px]
  flex-wrap
  flex-col
  md:flex-row
  `);
const cardInnerWrapperStyles = ctl(`flex gap-x-[20px] items-center  `);
const iconWrapperStyles = ctl(`
bg-gradient-to-br from-[#D3FFE7]  to-[#EFFFF6]  rounded-full p-[30px]`);
const titleStyles = ctl(`
    text-[#ACACAC] text-[14px]
    `);
const valueStyles = ctl(`text-[32px] font-semibold text-[#333333] `);
const bottomStyles = ctl(`flex items-center mt-[6px]`);
const arrowIconStyles = ctl(` w-[20px] h-[20px]`);
const percentageStyles = ctl(` text-[12px] font-semibold`);
const spanStyles = ctl(`text-[#292D32] text-[12px] ml-1`);
const imageStyles = ctl(`-ml-1 w-[26px] h-[26px]`);

export default UsersSummary;
