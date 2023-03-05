import { useParams } from '@remix-run/react';

const Channel = () => {
  const params = useParams<{ channelId: string }>();

  return <div>Channel {params.channelId}</div>;
};

export default Channel;
