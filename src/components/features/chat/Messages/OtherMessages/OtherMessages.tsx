/** @jsxImportSource @emotion/react */

import { ChatBy } from '@/types/chat/message';
import { container } from './OtherMessages.css';
import { ChatBubble } from '../../ChatBubble/ChatBubble';
import { Username } from '../../Username/Username';

interface OtherMessagesProps {
  by: ChatBy.Other;
  username: string;
  messages: string[];
}

function OtherMessages({ by, username, messages }: OtherMessagesProps) {
  return (
    <div css={container}>
      {by === ChatBy.Other && username && <Username name={username} />}
      {messages.map((msg, i) => (
        <ChatBubble key={i} message={msg} by={by} />
      ))}
    </div>
  );
}

export { OtherMessages };
