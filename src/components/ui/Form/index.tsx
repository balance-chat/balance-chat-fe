/** @jsxImportSource @emotion/react */

import { ButtonAgree } from '../ButtonAgree';
import { ButtonSubmit } from '../ButtonSubmit';
import { FormSection } from '../FormSection';
import { Input } from '../Input';
import { InputWithCheckBtn } from '../InputWithCheckBtn';
import { container } from './index.css';

interface Props {
  children: React.ReactNode;
}

function Form({ children }: Props) {
  return <form css={container}>{children}</form>;
}

Form.Section = FormSection;
Form.Input = Input;
Form.InputWithCheckBtn = InputWithCheckBtn;
Form.Agree = ButtonAgree;
Form.Submit = ButtonSubmit;

export { Form };
