const ChatInput = () => {
  return (
    <div className='w-full p-4'>
      <div className='w-full bg-zinc-600 flex flex-row py-2 px-4 rounded-md'>
        <input
          className='w-full bg-transparent outline-none'
          placeholder='Send a message'
        />
      </div>
    </div>
  );
};

export default ChatInput;
