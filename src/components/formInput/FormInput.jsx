/* eslint-disable react/prop-types */
import ctl from '@netlify/classnames-template-literals';

const FormInput = ({
  label,
  name,
  type = 'text',
  placeholder,
  icon,
  ...props
}) => {
  return (
    <div>
      <label htmlFor='email' className='  text-[#555555]'>
        {label}
      </label>
      <div className='mt-[10px] relative rounded-md shadow-sm'>
        <div className={iconStyles}>{icon}</div>
        <input
          type={type}
          name={name}
          id={name}
          className={inputStyles}
          placeholder={placeholder}
          {...props}
        />
      </div>
    </div>
  );
};

const iconStyles = ctl(`
absolute inset-y-0 right-0 px-3 flex items-center pointer-events-none bg-[#1E2772] rounded-lg
   `);
const inputStyles = ctl(
  `block w-full pl-[20px] sm:text-sm border-[#EEEEEE] bg-[#EEEEEE] rounded-lg py-[14px] focus:ring-[#1E2772] focus:border-[#1E2772] outline-none `
);
export default FormInput;
