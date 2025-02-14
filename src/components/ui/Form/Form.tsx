/** @jsxImportSource @emotion/react */

import { ButtonAgree } from '../ButtonAgree/ButtonAgree';
import { ButtonSubmit } from '../ButtonSubmit/ButtonSubmit';
import { EmailField } from '../Field/Email/EmailField';
import { PasswordField } from '../Field/Password/PasswordField';
import { FormSection } from '../FormSection/FormSection';
import { Input } from '../Input/Input';
import { InputError } from '../InputError/InputError';
import { InputWithCheckBtn } from '../InputWithCheckBtn/InputWithCheckBtn';
import { container } from './Form.css';

interface Props extends React.HTMLAttributes<HTMLFormElement> {
  children: React.ReactNode;
}

function Form({ children, ...props }: Props) {
  return (
    <form css={container} {...props}>
      {children}
    </form>
  );
}

Form.Section = FormSection;
Form.Input = Input;
Form.InputWithCheckBtn = InputWithCheckBtn;
Form.Agree = ButtonAgree;
Form.Submit = ButtonSubmit;
Form.ErrorMessage = InputError;
Form.EmailField = EmailField;
Form.PasswordField = PasswordField;

export { Form };
