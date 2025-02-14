/** @jsxImportSource @emotion/react */

import { AvatarGroup } from '@/components/ui/AvatarGroup/AvatarGroup';
import { bg, card, cardContent, cardTitle, cnt, text } from './Option.css';
import { options } from '@/constants/colors';

interface Props {
  title: string;
  count: number;
  isSelected: boolean;
}

function Option({ title, count, isSelected }: Props) {
  const color = options[isSelected ? 'selected' : 'unselected'];

  return (
    <div css={[card, bg(color.background), text(color.text)]}>
      <div css={cardTitle}>{title}</div>
      <div css={cardContent}>
        <AvatarGroup
          pictures={[undefined, undefined, undefined]}
          backgroundColor={color.background}
        />
        <div css={cnt}>{`${count}명`}</div>
      </div>
    </div>
  );
}

export { Option };
