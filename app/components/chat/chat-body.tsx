import type { Message, User } from '@prisma/client';
import ChatMessage from '~/components/chat/chat-message';
import type { WithSerializedTypes } from '~/types/generics';

type Props = {
  messages: WithSerializedTypes<
    Message & { sender: WithSerializedTypes<User> }
  >[];
};
const ChatBody = ({ messages }: Props) => {
  return (
    <div className='flex-1 overflow-y-scroll scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-zinc-600/50 scrollbar-h-12 scrollbar-rounded-full px-4'>
      <div className='py-4'>
        {messages.map((message, index) => {
          const sameUser =
            index !== 0 && messages[index - 1].senderId === message.senderId;

          return (
            <ChatMessage
              key={message.id}
              message={message}
              sender={message.sender}
              hideHeader={sameUser}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ChatBody;
