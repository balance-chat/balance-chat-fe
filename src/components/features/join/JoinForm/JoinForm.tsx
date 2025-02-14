/** @jsxImportSource @emotion/react */

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Form } from '@/components/ui/Form/Form';
import { JoinFormData } from '@/types/auth/account';
import { joinSchema } from '@/constants/yup';

function JoinForm() {
  const [isAgree, setIsAgree] = useState(false);

  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
  } = useForm<JoinFormData>({
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
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Section title="이메일 주소">
        <Form.InputWithCheckBtn
          type="email"
          placeholder="이메일 주소"
          isValidInput={!errors.email}
          isValidBtn={!errors.email}
          {...register('email')}
        />
        {errors.email && (
          <Form.ErrorMessage>{errors.email?.message}</Form.ErrorMessage>
        )}
      </Form.Section>
      <Form.Section title="비밀번호">
        <Form.Input
          type="password"
          placeholder="비밀번호"
          isValid={!errors.password}
          {...register('password')}
        />
        {errors.password && (
          <Form.ErrorMessage>{errors.password?.message}</Form.ErrorMessage>
        )}
        <Form.Input
          type="password"
          placeholder="비밀번호 확인"
          isValid={!errors.passwordConfirm}
          {...register('passwordConfirm')}
        />
        {errors.passwordConfirm && (
          <Form.ErrorMessage>
            {errors.passwordConfirm?.message}
          </Form.ErrorMessage>
        )}
      </Form.Section>
      <Form.Section title="닉네임">
        <Form.InputWithCheckBtn
          type="text"
          placeholder="닉네임"
          isValidInput={!errors.nickname}
          isValidBtn={!errors.nickname}
          {...register('nickname')}
        />
        {errors.nickname && (
          <Form.ErrorMessage>{errors.nickname?.message}</Form.ErrorMessage>
        )}
      </Form.Section>
      <Form.Section>
        <Form.Agree isAgree={isAgree} onClick={onClickPolicy}>
          서비스 이용약관에 동의합니다
        </Form.Agree>
      </Form.Section>
      <Form.Section>
        <Form.Submit isValid={isValid && isAgree}>가입하기</Form.Submit>
      </Form.Section>
    </Form>
  );
}

export { JoinForm };
