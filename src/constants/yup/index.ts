import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      '올바른 이메일 형식을 입력하세요'
    )
    .required('이메일을 입력해주세요'),
  password: yup
    .string()
    .min(8, '비밀번호는 최소 8자 이상이어야 해요')
    .required('비밀번호를 입력해주세요'),
});
