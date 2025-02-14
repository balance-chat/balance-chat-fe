/** @jsxImportSource @emotion/react */

import { username } from './styles';

interface Props {
  name: string;
  // isSameTeam: boolean;
}

function Username({ name }: Props) {
  return <div css={username}>{name}</div>;
}

export default Username;
