/** @jsxImportSource @emotion/react */

import { useRef } from 'react';
import { IoSend } from 'react-icons/io5';

import { container, send, textArea, textWrap } from './styles';
import { shadow } from '../../../styles/base.css';

function ChatInput() {
  const textRef = useRef<HTMLTextAreaElement>(null);

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const textarea = textRef.current;
    if (textarea) {
      textarea.style.height = 'inherit';
      textarea.style.height = `${e.target.scrollHeight}px`;
    }
  };

  return (
    <div css={[shadow, container]}>
      <div css={textWrap}>
        <textarea
          ref={textRef}
          rows={1}
          onChange={onChange}
          css={[textArea]}
          placeholder="메시지 입력"
        />
      </div>
      <button css={send}>
        <IoSend size={12} />
      </button>
    </div>
  );
}

export default ChatInput;
