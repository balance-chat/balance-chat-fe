/** @jsxImportSource @emotion/react */

import { ChatBy } from '@/types/message.type';
import { container, right } from './MessageGroup.css';
import ChatAvatar from '../ChatAvatar/ChatAvatar';
import UserMessages from '../Messages/UserMessages';
import OtherMessages from '../Messages/OtherMessages';

interface UserMessageGroupProps {
  by: ChatBy.User;
  messages: string[];
}

interface OtherMessageGroupProps {
  by: ChatBy.Other;
  username: string;
  picture?: string;
  messages: string[];
}

function MessageGroup(props: UserMessageGroupProps | OtherMessageGroupProps) {
  switch (props.by) {
    case ChatBy.User:
      return (
        <div css={[container, right]}>
          <UserMessages by={props.by} messages={props.messages} />
        </div>
      );

    case ChatBy.Other:
      return (
        <div css={container}>
          <ChatAvatar picture={props.picture} />
          <OtherMessages
            by={props.by}
            username={props.username}
            messages={props.messages}
          />
        </div>
      );
  }
}

export default MessageGroup;
