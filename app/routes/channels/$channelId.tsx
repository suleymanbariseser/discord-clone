import type { LoaderArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import ChatMessage from '~/components/chat/chat-message';
import { db } from '~/utils/db.server';
import ChatHeader from '~/components/chat/chat-header';
import ChatInput from '~/components/chat/chat-input';
import ChatBody from '~/components/chat/chat-body';

export const loader = async ({ request, params }: LoaderArgs) => {
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
