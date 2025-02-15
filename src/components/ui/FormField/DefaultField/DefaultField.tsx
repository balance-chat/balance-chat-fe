import { Field } from '@/types/auth/account';
import { FieldValues, useFormContext } from 'react-hook-form';
import { Form } from '../../Form/Form';

interface Props<T extends FieldValues> {
  field: Field<T>;
}

// shouldCheckDuplicated = false
function DefaultField<T extends FieldValues>({
  field: { name, type, placeholder },
}: Props<T>) {
  const {
    register,
    formState: { errors },
  } = useFormContext<T>();
  const error = errors[name];

  return (
    <>
      <Form.Input
        type={type}
        placeholder={placeholder}
        isValid={!error}
        {...register(name)}
      />
      {error && (
        <Form.ErrorMessage>{error.message as string}</Form.ErrorMessage>
      )}
    </>
  );
}

export { DefaultField };
