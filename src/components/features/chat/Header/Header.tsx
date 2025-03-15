/** @jsxImportSource @emotion/react */

import { header, icon, txt } from './Header.css';
import { BiChevronLeft, BiChevronUp, BiPoll } from 'react-icons/bi';
import { Option } from '@/types/chat/poll';
import { Poll } from '../Poll/Poll';
import { useState } from 'react';

const OPTIONS: Option[] = [
  {
    title: '쩝쩝거리는 사람이 더 싫다',
    count: 40,
    ratio: 0.4,
    isSelected: false,
  },
  {
    title: '식탐 많은 사람이 더 싫다',
    count: 60,
    ratio: 0.6,
    isSelected: true,
  },
];

interface Props {
  title: string;
}

function Header({ title }: Props) {
  const [showPoll, setShowPoll] = useState(false);

  const toggle = () => {
    setShowPoll((prev) => !prev);
  };

  return (
    <div>
      <div css={header}>
        <button css={icon}>
          <BiChevronLeft size={20} />
        </button>
        <p css={txt}>{title}</p>
        <button css={icon} onClick={toggle}>
          {!showPoll ? <BiPoll size={20} /> : <BiChevronUp size={20} />}
        </button>
      </div>
      {showPoll && <Poll options={OPTIONS} />}
    </div>
  );
}

export { Header };
