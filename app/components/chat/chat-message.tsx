import type { Message, User } from '@prisma/client';
import moment from 'moment';
import type { WithSerializedTypes } from '~/types/generics';

type Props = {
  message: WithSerializedTypes<Message>;
  sender: WithSerializedTypes<User>;
  hideHeader?: boolean;
};

const ChatMessage = ({ message, hideHeader, sender }: Props) => {
  return (
    <div key={message.id} className='w-full mb-4 flex flex-row'>
      <div className='pr-4'>
        <div className='w-[40px]'>
          {!hideHeader && (
            <div className='h-[40px] w-full bg-red-100 rounded-full' />
          )}
        </div>
      </div>
      <div className='flex-1 flex flex-col'>
        {!hideHeader && (
          <div className='w-full overflow-hidden'>
            <p className='mb-1'>
              <span className='font-bold mr-2'>{sender.username}</span>
              <span className='text-zinc-300 text-sm'>
                {moment(message.updatedAt).format('DD.MM.YYYY hh:mm')}
              </span>
            </p>
          </div>
        )}
        <p>{message.content}</p>
      </div>
    </div>
  );
};

export default ChatMessage;
