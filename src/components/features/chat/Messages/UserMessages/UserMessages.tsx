/** @jsxImportSource @emotion/react */

import { ChatBy } from '@/types/chat/message';
import { ChatBubble } from '../../ChatBubble/ChatBubble';
import { container } from './UserMessages.css';

interface UserMessagesProps {
  by: ChatBy.User;
  messages: string[];
}

function UserMessages({ by, messages }: UserMessagesProps) {
  return (
    <div css={[container]}>
      {messages.map((msg, i) => (
        <ChatBubble key={i} message={msg} by={by} />
      ))}
    </div>
  );
}

export { UserMessages };
