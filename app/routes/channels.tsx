import type { LoaderArgs } from '@remix-run/node';
import { NavLink, Outlet, useLoaderData } from '@remix-run/react';
import { db } from '~/utils/db.server';
import { requireUserId } from '~/utils/session.server';

export const loader = async ({ request }: LoaderArgs) => {
  const userId = await requireUserId(request, '/login');

  const channels = await db.userChannels.findMany({
    where: {
      userId: +userId,
    },
    include: {
      channel: true,
    },
  });

  return channels;
};

const Channels = () => {
  const channels = useLoaderData<typeof loader>();

  return (
    <div className='h-screen w-full flex flex-row'>
      <div className='bg-zinc-800 h-screen w-[250px] p-2'>
        <div className='flex flex-row justify-between mb-2'>
          <h1>Channels</h1>
          <NavLink to='./new'>
            <div className=''>
              <h1>+</h1>
            </div>
          </NavLink>
        </div>
        <div className='flex-col gap-2'>
          {channels.map(({ channel, channelId }) => (
            <NavLink to={`./${channelId}`} key={`${channelId}`}>
              <div className='text-center p-2 hover:bg-zinc-700'>
                <h6 className='truncate bg-transparent'>{channel.title}</h6>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
      <div className='flex-1 flex'>
        <Outlet />
      </div>
    </div>
  );
};

export default Channels;
