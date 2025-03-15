/** @jsxImportSource @emotion/react */

import { err } from './InputError.css';

interface Props {
  children: React.ReactNode;
}

function InputError({ children }: Props) {
  return <div css={err}>{children}</div>;
}

export { InputError };
