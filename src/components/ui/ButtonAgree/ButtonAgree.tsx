/** @jsxImportSource @emotion/react */

import { BiCheck } from 'react-icons/bi';
import { btn, checked, icon, txt, unchecked } from './ButtonAgree.css';
import { useState } from 'react';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

function ButtonAgree({ children, ...props }: Props) {
  const [isChecked, setIsChecked] = useState(false);

  const toggle = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault();
    setIsChecked((prev) => !prev);
  };

  return (
    <button
      type="button"
      css={[btn, isChecked ? checked : unchecked]}
      onClick={toggle}
      {...props}
    >
      <div css={icon}>
        <BiCheck />
      </div>
      <div css={txt}>{children}</div>
    </button>
  );
}

export { ButtonAgree };
