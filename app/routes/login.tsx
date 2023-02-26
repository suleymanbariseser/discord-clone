import type { ActionArgs } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useActionData } from '@remix-run/react';
import Button from '~/components/ui/button';
import TextInput from '~/components/ui/text-input';
import { loginSchema } from '~/schemas/user';
import { db } from '~/utils/db.server';
import { validate } from '~/utils/form';
import { comparePassword, createUserSession } from '~/utils/session.server';

export const action = async ({ request }: ActionArgs) => {
  const res = await validate({ request, schema: loginSchema });

  if (!res.success) return json(res, { status: 400 });

  const { email, password } = res.values;

  const user = await db.user.findUnique({
    where: { email },
    select: {
      id: true,
      password: true,
    },
  });

  if (!user)
    return json(
      {
        errors: {
          email: ['Invalid email or password'],
        },
      },
      { status: 400 }
    );

  const isCorrectPassword = await comparePassword(password, user.password);

  if (!isCorrectPassword)
    return json(
      {
        errors: {
          email: ['Invalid email or password'],
        },
      },
      { status: 400 }
    );

  return createUserSession(user.id, '/');
};

const Login = () => {
  const actionData = useActionData<typeof action>();

  console.log(actionData);

  return (
    <div className='flex flex-1 items-center justify-center'>
      <div className='px-8 py-4 bg-zinc-800 rounded-md w-full sm:container '>
        <div className='text-center'>
          <h1 className='mb-2'>Welcome back!</h1>
          <p className='text-gray-400 text-sm'>
            We're so excited to see you again!
          </p>
        </div>
        <form method='post'>
          <div className='mt-2 mb-5'>
            <TextInput
              label='Email'
              name='email'
              className='mb-5'
              error={actionData?.errors?.email?.[0]}
            />
            <TextInput
              label='Password'
              name='password'
              error={actionData?.errors?.password?.[0]}
            />
          </div>
          <Button onClick={() => console.log('clicked')}>Log In</Button>
        </form>
        <p className='mt-2 text-gray-400'>
          Need an account? <span className='text-sky-700'>Register</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
