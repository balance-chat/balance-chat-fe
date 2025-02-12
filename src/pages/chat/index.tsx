import { Chat } from '../../components/ui/Layout';
import ChatInput from '../../components/chat/ChatInput/ChatInput';

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
        <ChatInput />
      </Chat.Section>
    </Chat>
  );
}

export { ChatPage };
