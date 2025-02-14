/** @jsxImportSource @emotion/react */

import { useFormContext } from 'react-hook-form';
import { LoginFormData } from '@/types/auth/account';
import { Form } from '../../Form/Form';

interface Props {
  showTitle?: boolean;
}

function PasswordField({ showTitle = false }: Props) {
  const {
    register,
    formState: { errors },
  } = useFormContext<LoginFormData>();

  return (
    <Form.Section title={showTitle ? '비밀번호' : null}>
      <Form.Input
        type="password"
        placeholder="비밀번호"
        isValid={!errors.password}
        {...register('password')}
      />
      {errors.password && (
        <Form.ErrorMessage>{errors.password?.message}</Form.ErrorMessage>
      )}
    </Form.Section>
  );
}

export { PasswordField };
