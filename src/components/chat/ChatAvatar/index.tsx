import Avatar from '@/components/ui/Avatar';

interface Props {
  picture?: string;
}

function ChatAvatar({ picture }: Props) {
  return (
    <div>
      <Avatar picture={picture} />
    </div>
  );
}

export default ChatAvatar;
