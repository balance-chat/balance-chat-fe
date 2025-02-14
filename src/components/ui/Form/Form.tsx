/** @jsxImportSource @emotion/react */

import { ButtonAgree } from '../ButtonAgree/ButtonAgree';
import { ButtonSubmit } from '../ButtonSubmit/ButtonSubmit';
import { FormSection } from '../FormSection/FormSection';
import { Input } from '../Input/Input';
import { InputWithCheckBtn } from '../InputWithCheckBtn/InputWithCheckBtn';
import { container } from './Form.css';

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
