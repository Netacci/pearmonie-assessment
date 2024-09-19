/* eslint-disable react/prop-types */

const Button = ({ children, type = 'button', variant, ...props }) => {
  const baseStyles =
    'w-full flex justify-center py-[13px] px-4 border rounded-lg shadow-sm text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variants = {
    primary: 'text-white bg-[#1E2772] border-transparent focus:ring-[#1E2772]',
    secondary: 'text-[#1E2772] bg-white border-[#1E2772] focus:ring-[#1E2772]',
  };
  const variantStyles = variants[variant] || variants.primary;
  return (
    <button type={type} className={`${baseStyles} ${variantStyles}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
