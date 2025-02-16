/** @jsxImportSource @emotion/react */

import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Form } from '@/components/ui/Form/Form';
import { JoinFormData } from '@/types/auth/account';
import { joinSchema } from '@/constants/yup';
import { joinField } from '@/constants/form/join';

function JoinForm() {
  const [isAgree, setIsAgree] = useState(false);

  const methods = useForm<JoinFormData>({
    mode: 'onTouched',
    resolver: yupResolver(joinSchema),
  });

  const onClickPolicy = () => {
    setIsAgree((prev) => !prev);
  };

  const onSubmit = (data: JoinFormData) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <Form onSubmit={methods.handleSubmit(onSubmit)}>
        <Form.Section title="이메일 주소">
          <Form.Field field={joinField.email} />
        </Form.Section>

        <Form.Section title="비밀번호">
          <Form.Field field={joinField.password} />
          <Form.Field field={joinField.passwordConfirm} />
        </Form.Section>

        <Form.Section title="닉네임">
          <Form.Field field={joinField.nickname} />
        </Form.Section>

        <Form.Section>
          <Form.Agree isAgree={isAgree} onClick={onClickPolicy}>
            서비스 이용약관에 동의합니다
          </Form.Agree>
        </Form.Section>

        <Form.Section>
          <Form.Submit isValid={methods.formState.isValid && isAgree}>
            가입하기
          </Form.Submit>
        </Form.Section>
      </Form>
    </FormProvider>
  );
}

export { JoinForm };
