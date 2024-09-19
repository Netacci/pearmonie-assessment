import { Mail, LockKeyhole } from 'lucide-react';
import ctl from '@netlify/classnames-template-literals';
import LoginImage from '../../assets/Login_image.png';
import PinkOval from '../../assets/pink.svg';
import BlueTop from '../../assets/blue-top.svg';
import BlueBottom from '../../assets/blue-bottom.svg';
import FormInput from '../../components/formInput/FormInput';
import Button from '../../components/button/Button';

const Login = () => {
  return (
    <div className={loginWrapperStyles}>
      {/* Left side*/}
      <div className={leftSideWrapper}>
        <div className='h-[100vh] flex justify-center items-center'>
          <img src={LoginImage} alt='Login image' className='w-[85%]' />
          <div className='absolute '>
            <PinkOval />
          </div>
        </div>
        <div className='absolute'>
          <BlueTop />
        </div>
        <div className='absolute bottom-0 right-20'>
          <BlueBottom />
        </div>
      </div>

      {/* Right side - Auth Form */}
      <div className={rightSideWrapper}>
        <p className='font-semibold text-center text-[#555555] mb-10 '>
          Login into your account
        </p>
        <form className='space-y-4'>
          <FormInput
            name='email'
            type='email'
            placeholder='info@example'
            label='Email Id:'
            icon={<Mail className='h-5 w-5 text-white ' />}
          />
          <FormInput
            name='password'
            type='password'
            placeholder='Enter your password'
            label='Password'
            icon={<LockKeyhole className='h-5 w-5 text-white ' />}
          />
          <div className='mt-2 text-right underline '>
            <a href='#' className='text-[14px] text-[#1E2772] '>
              Forgot your password?
            </a>
          </div>

          <div>
            <Button type='submit' variiant='primary'>
              Login now
            </Button>
          </div>
        </form>
        <div className='mt-6'>
          <div className='relative'>
            <div className='absolute inset-0 flex items-center'>
              <div className='w-full border-t border-gray-300'></div>
            </div>
            <div className='relative flex justify-center text-sm'>
              <span className='px-[19px] bg-white text-[#C2C2C2]'>OR</span>
            </div>
          </div>
          <div className='mt-6'>
            <Button variant='secondary'>Signup now</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const loginWrapperStyles = ctl(`
 flex  overflow-hidden items-center justify-center
  `);
const leftSideWrapper = ctl(
  `w-[943px] bg-[#F4F4F4] relative  hidden lg:flex flex-1 `
);
const rightSideWrapper = ctl(`w-full lg:w-[483px] p-7`);
export default Login;
