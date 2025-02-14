/** @jsxImportSource @emotion/react */

import { BiSolidUser } from 'react-icons/bi';
import { circular, anonym, avatar, avatarSize } from './Avatar.css';

type Size = 's' | 'm';

interface Props {
  picture?: string;
  size?: Size;
}

function Avatar({ picture, size = 'm' }: Props) {
  return !picture ? (
    <AnonymAvatar size={size} />
  ) : (
    <PictureAvatar picture={picture} size={size} />
  );
}

function AnonymAvatar({ size }: { size: Size }) {
  return (
    <div css={[circular, anonym, avatarSize(size)]}>
      <BiSolidUser />
    </div>
  );
}

function PictureAvatar({ picture, size = 'm' }: Props) {
  return (
    <div>
      <img css={[circular, avatar, avatarSize(size)]} src={picture} />
    </div>
  );
}

export { Avatar };
