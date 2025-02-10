import { Chat } from '../ui/Layout';

function ChatPage() {
  return (
    <Chat>
      <Chat.Section>
        <div>option 1 vs option 2</div>
      </Chat.Section>
      <Chat.Content>
        <div>메시지</div>
        <div>메시지</div>
        <div>메시지</div>
      </Chat.Content>
      <Chat.Section>
        <div>채팅 입력창</div>
      </Chat.Section>
    </Chat>
  );
}

export default ChatPage;
