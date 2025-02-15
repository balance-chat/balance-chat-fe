import { FieldConfig, JoinFormData } from '@/types/auth/account';

export const joinField: FieldConfig<JoinFormData> = {
  email: {
    name: 'email',
    type: 'email',
    placeholder: '이메일 주소',
    shouldCheckDuplicated: true,
  },
  password: {
    name: 'password',
    type: 'password',
    placeholder: '비밀번호',
  },
  passwordConfirm: {
    name: 'passwordConfirm',
    type: 'password',
    placeholder: '비밀번호 확인',
  },
  nickname: {
    name: 'nickname',
    type: 'text',
    placeholder: '닉네임',
    shouldCheckDuplicated: true,
  },
};
