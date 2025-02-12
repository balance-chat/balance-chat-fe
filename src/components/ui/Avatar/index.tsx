/** @jsxImportSource @emotion/react */

import { BiSolidUser } from 'react-icons/bi';
import { circular, anonym, avatar } from './styles.css';

interface Props {
  picture?: string;
}

function Avatar({ picture }: Props) {
  return !picture ? <AnonymAvatar /> : <PictureAvatar picture={picture} />;
}

function AnonymAvatar() {
  return (
    <div css={[circular, anonym]}>
      <BiSolidUser size={20} />
    </div>
  );
}

function PictureAvatar({ picture }: Props) {
  return (
    <div>
      <img css={[circular, avatar]} src={picture} />
    </div>
  );
}

export { Avatar };
