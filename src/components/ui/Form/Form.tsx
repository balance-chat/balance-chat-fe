/** @jsxImportSource @emotion/react */

import { ButtonAgree } from '../ButtonAgree/ButtonAgree';
import { ButtonSubmit } from '../ButtonSubmit/ButtonSubmit';
import { FormField } from '../FormField/FormField';
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
Form.Field = FormField;

export { Form };
