import Button from '~/components/ui/button';
import TextInput from '~/components/ui/text-input';

const Login = () => {
  return (
    <div className='flex flex-1 items-center justify-center'>
      <div className='px-8 py-4 bg-zinc-800 rounded-md w-full sm:container '>
        <div className='text-center'>
          <h1 className='mb-2'>Welcome back!</h1>
          <p className='text-gray-400 text-sm'>
            We're so excited to see you again!
          </p>
        </div>
        <div className='mt-2 mb-5'>
          <TextInput label='email' error='There is an error' className='mb-5' />
          <TextInput label='Password' />
        </div>
        <Button onClick={() => console.log('clicked')}>Log In</Button>
        <p className='mt-2 text-gray-400'>
          Need an account? <span className='text-sky-700'>Register</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
