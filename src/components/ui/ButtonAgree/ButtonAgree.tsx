/** @jsxImportSource @emotion/react */

import { BiCheck } from 'react-icons/bi';
import { btn, checked, icon, txt, unchecked } from './ButtonAgree.css';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  isAgree: boolean;
}

function ButtonAgree({ isAgree, children, ...props }: Props) {
  return (
    <button type="button" css={[btn, isAgree ? checked : unchecked]} {...props}>
      <div css={icon}>
        <BiCheck />
      </div>
      <div css={txt}>{children}</div>
    </button>
  );
}

export { ButtonAgree };
