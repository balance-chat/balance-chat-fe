import { ChatBy } from '@/types/chat/message';
import { Chat } from '@/components/layout/Chat';
import { ChatInput } from '@/components/features/chat/ChatInput/ChatInput';
import { MessageGroup } from '@/components/features/chat/MessageGroup/MessageGroup';
import { Header } from '@/components/features/chat/Header/Header';

const TEST_MESSAGE = {
  MESSAGES: [
    '긴 텍스트 메시지 테스트 긴 텍스트 메시지 테스트긴 텍스트 메시지 테스트긴 텍스트 메시지 테스트',
  ],
};
const TEST_MESSAGE_1 = {
  USER_NAME: '프로필 사진 없는 유저',
  MESSAGES: ['그룹 메시지 테스트 1', '그룹 메시지 테스트 2'],
};

const TEST_MESSAGE_2 = {
  USER_NAME: '프로필 사진 있는 유저',
  MESSAGES: ['단독 메시지 테스트'],
  PICTURE:
    'https://i.pinimg.com/736x/d5/4d/d2/d54dd20779e0abab679de056ff313411.jpg',
};

function ChatPage() {
  return (
    <Chat>
      <Chat.Section style={{ paddingBottom: 0 }}>
        <Header title="둘 중 같이 밥 먹기 싫은 사람은?" />
      </Chat.Section>
      <Chat.Content>
        <MessageGroup by={ChatBy.User} messages={TEST_MESSAGE.MESSAGES} />
        <MessageGroup
          by={ChatBy.Other}
          username={TEST_MESSAGE_1.USER_NAME}
          messages={TEST_MESSAGE_1.MESSAGES}
        />
        <MessageGroup
          by={ChatBy.Other}
          username={TEST_MESSAGE_2.USER_NAME}
          picture={TEST_MESSAGE_2.PICTURE}
          messages={TEST_MESSAGE_2.MESSAGES}
        />
      </Chat.Content>
      <Chat.Section>
        <ChatInput />
      </Chat.Section>
    </Chat>
  );
}

export { ChatPage };
