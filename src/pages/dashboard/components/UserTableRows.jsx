/* eslint-disable react/prop-types */
import ctl from '@netlify/classnames-template-literals';

const UserTableRows = ({ item }) => {
  const username = `${item?.firstName} ${item?.lastName}`;

  return (
    <>
      <td className={textStyles}>{username}</td>
      <td className={textStyles}>{item?.company?.name}</td>
      <td className={textStyles}>{item?.phone}</td>
      <td className={textStyles}>{item?.email}</td>
      <td className={textStyles}>{item?.address?.country}</td>
      <td>
        <p
          className={`${statusStyles} ${
            item?.role === 'admin'
              ? 'bg-[rgba(22,192,152,0.38)] border border-solid border-[#00B087] text-[#008767] '
              : 'bg-[#FFC5C5] border-solid border-[#DF0404] text-[#DF0404] '
          }`}
        >
          {item?.role === 'admin' ? 'Active' : 'Inactive'}
        </p>
      </td>
    </>
  );
};

const textStyles = ctl(
  'whitespace-nowrap py-[20px] text-[13px] text-[#292D32] font-semibold'
);
const statusStyles = ctl(`rounded py-[4px] px-[12px] text-center text-[14px]`);
export default UserTableRows;
