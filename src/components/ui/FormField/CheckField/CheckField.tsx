import { Field } from '@/types/auth/account';
import { FieldValues, useFormContext } from 'react-hook-form';
import { Form } from '../../Form/Form';

interface Props<T extends FieldValues> {
  field: Field<T>;
}

// hasCheckButton = true
function CheckField<T extends FieldValues>({
  field: { name, type, placeholder },
}: Props<T>) {
  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext<T>();
  const error = errors[name];
  const value = watch(name);

  // @todo: check duplicated

  return (
    <>
      <Form.InputWithCheckBtn
        type={type}
        placeholder={placeholder}
        isValidInput={!error}
        isValidBtn={!error && !!value}
        {...register(name)}
      />
      {error && (
        <Form.ErrorMessage>{error.message as string}</Form.ErrorMessage>
      )}
    </>
  );
}

export { CheckField };
