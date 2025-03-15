/** @jsxImportSource @emotion/react */

import { btn, invalid, valid } from './ButtonSubmit.css';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isValid: boolean;
  children: React.ReactNode;
}

function ButtonSubmit({ isValid, children, ...props }: Props) {
  return (
    <button
      css={[btn, isValid ? valid : invalid]}
      disabled={!isValid}
      {...props}
    >
      {children}
    </button>
  );
}

export { ButtonSubmit };
