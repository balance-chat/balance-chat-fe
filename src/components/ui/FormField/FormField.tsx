import { FieldValues } from 'react-hook-form';
import { Field } from '@/types/auth/account';
import { CheckField } from './CheckField/CheckField';
import { DefaultField } from './DefaultField/DefaultField';

interface Props<T extends FieldValues> {
  field: Field<T>;
}

function FormField<T extends FieldValues>({ field }: Props<T>) {
  return field.shouldCheckDuplicated ? (
    <CheckField field={field} />
  ) : (
    <DefaultField field={field} />
  );
}

export { FormField };
