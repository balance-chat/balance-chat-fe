/** @jsxImportSource @emotion/react */

import { ChatBy } from '@/types/message.type';
import { bubble, other, user } from './ChatBubble.css';

interface Props {
  message: string;
  by: ChatBy;
}

function ChatBubble({ message, by }: Props) {
  return <div css={[bubble, by === ChatBy.User ? user : other]}>{message}</div>;
}

export default ChatBubble;
