/** @jsxImportSource @emotion/react */

import { Avatar } from '../Avatar/Avatar';
import { avatar, border, container } from './AvatarGroup.css';

interface Props {
  pictures: (string | undefined)[];
  backgroundColor: string;
}

function AvatarGroup({ pictures, backgroundColor }: Props) {
  return (
    <div css={container}>
      {pictures.map((picture) => (
        <div css={[avatar, border(backgroundColor)]}>
          <Avatar size="s" picture={picture} />
        </div>
      ))}
    </div>
  );
}

export { AvatarGroup };
