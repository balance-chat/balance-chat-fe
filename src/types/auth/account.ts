import { FieldValues, Path } from 'react-hook-form';

export interface LoginFormData {
  email: string;
  password: string;
}

export interface JoinFormData {
  email: string;
  password: string;
  passwordConfirm: string;
  nickname: string;
}

export interface Field<T extends FieldValues> {
  name: Path<T>;
  type: 'email' | 'password' | 'text';
  placeholder?: string;
  shouldCheckDuplicated?: boolean;
}

export type FieldConfig<T extends FieldValues> = {
  [K in keyof T]: Field<T>;
};
