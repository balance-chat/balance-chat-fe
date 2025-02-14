import { useFormContext } from 'react-hook-form';
import { LoginFormData } from '@/types/auth/account';
import { Form } from '../../Form/Form';

interface Props {
  showTitle?: boolean;
}

function EmailField({ showTitle = false }: Props) {
  const {
    register,
    formState: { errors },
  } = useFormContext<LoginFormData>();

  return (
    <Form.Section title={showTitle ? '이메일 주소' : null}>
      <Form.Input
        type="email"
        placeholder="이메일 주소"
        isValid={!errors.email}
        {...register('email', {
          required: '이메일을 입력해주세요',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: '올바른 이메일 형식이 아니에요',
          },
        })}
      />
      {errors.email && (
        <Form.ErrorMessage>{errors.email?.message}</Form.ErrorMessage>
      )}
    </Form.Section>
  );
}

export { EmailField };
