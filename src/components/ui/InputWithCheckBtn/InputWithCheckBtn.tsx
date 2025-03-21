/** @jsxImportSource @emotion/react */

import { ButtonSubmit } from '../ButtonSubmit/ButtonSubmit';
import { Input } from '../Input/Input';
import { inputWithBtn, subBtn } from './InputWithCheckBtn.css';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  isValidInput: boolean;
  isValidBtn: boolean;
}

function InputWithCheckBtn({ isValidInput, isValidBtn, ...props }: Props) {
  return (
    <div css={inputWithBtn}>
      <Input isValid={isValidInput} {...props} />
      <ButtonSubmit type="button" isValid={isValidBtn} css={subBtn}>
        중복확인
      </ButtonSubmit>
    </div>
  );
}

export { InputWithCheckBtn };
