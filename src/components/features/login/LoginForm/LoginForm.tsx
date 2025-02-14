/** @jsxImportSource @emotion/react */

import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { LoginFormData } from '@/types/auth/account';
import { Form } from '@/components/ui/Form/Form';
import { forgot } from './LoginForm.css';

function LoginForm() {
  const methods = useForm<LoginFormData>({
    mode: 'onTouched',
  });

  const onSubmit: SubmitHandler<LoginFormData> = (data) => {
    // @todo: submit login form data
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <Form onSubmit={methods.handleSubmit(onSubmit)}>
        <Form.EmailField />
        <Form.PasswordField />
        <div css={forgot}>
          <a>비밀번호를 잊어버렸나요?</a>
        </div>
        <Form.Section>
          <Form.Submit isValid={methods.formState.isValid}>
            로그인하기
          </Form.Submit>
        </Form.Section>
      </Form>
    </FormProvider>
  );
}

export { LoginForm };
