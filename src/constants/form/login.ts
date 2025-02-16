import { FieldConfig, LoginFormData } from '@/types/auth/account';

export const loginField: FieldConfig<LoginFormData> = {
  email: {
    name: 'email',
    type: 'email',
    placeholder: '이메일 주소',
  },
  password: {
    name: 'password',
    type: 'password',
    placeholder: '비밀번호',
  },
};
