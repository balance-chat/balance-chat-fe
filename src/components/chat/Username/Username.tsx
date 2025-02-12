/** @jsxImportSource @emotion/react */

import { username } from './Username.css';

interface Props {
  name: string;
  // isSameTeam: boolean;
}

function Username({ name }: Props) {
  return <div css={username}>{name}</div>;
}

export default Username;
