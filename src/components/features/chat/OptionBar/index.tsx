/** @jsxImportSource @emotion/react */

import { BiSolidCheckCircle } from 'react-icons/bi';
import { bar, barArea, container, content, icon, txt } from './styles';

interface Props {
  title: string;
  count: number;
  ratio: number;
  isSelected?: boolean;
}

function OptionBar({ title, count, ratio, isSelected = false }: Props) {
  const percent = ratio * 100;

  return (
    <div css={container}>
      <div css={icon}>{isSelected && <BiSolidCheckCircle />}</div>
      <div css={content}>
        <div>{title}</div>
        <div css={barArea}>
          <span css={bar(`${percent}%`)} />
          <span css={txt}>
            {count}명, {percent}%
          </span>
        </div>
      </div>
    </div>
  );
}

export default OptionBar;
