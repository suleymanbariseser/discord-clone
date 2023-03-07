type Props = {
  title: string;
};

const ChatHeader = ({ title }: Props) => {
  return (
    <div className='w-full p-4 border-b-[1px] border-b-zinc-800 shadow-md'>
      <h2 className='text-l font-bold'>{title}</h2>
    </div>
  );
};

export default ChatHeader;
