/** @jsxImportSource @emotion/react */

import { err, inputStyle, ok } from './index.css';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  isValid: boolean;
}

function Input({ isValid, ...props }: Props) {
  return <input css={[inputStyle, isValid ? ok : err]} {...props} />;
}

export { Input };
