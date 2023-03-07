import type { LoaderArgs} from '@remix-run/node';
import { redirect } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { db } from '~/utils/db.server';
import ChatHeader from '~/components/chat/chat-header';
import ChatInput from '~/components/chat/chat-input';
import ChatBody from '~/components/chat/chat-body';
import { requireUserId } from '~/utils/session.server';

export const loader = async ({ request, params }: LoaderArgs) => {
  const userId = await requireUserId(request, '/login');
  const channelId = params.channelId;

  if(!channelId) {
    throw redirect('/channels');
  }
  
  // if user does not have rights to view this channel, redirect to home page
  const userChannel = await db.userChannels.findUnique({
    where: {
      userId_channelId: {
        userId: +userId,
        channelId: channelId,
      }
    }
  })

  if(!userChannel) {
    throw redirect('/channels');
  }
    
  const channel = await db.channel.findUnique({
    where: {
      id: params.channelId,
    },
    include: {
      messages: {
        include: {
          sender: true,
        },
      },
    },
  });

  return channel;
};

const Channel = () => {
  const channel = useLoaderData<typeof loader>();

  return (
    <div className='flex-1 flex flex-col w-full overflow-hidden'>
      <ChatHeader title={channel?.title ?? ''} />
      <ChatBody messages={channel?.messages ?? []} />
      <ChatInput />
    </div>
  );
};

export default Channel;
