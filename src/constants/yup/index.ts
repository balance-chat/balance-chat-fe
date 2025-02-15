import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .required('이메일을 입력해주세요')
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      '올바른 이메일 형식을 입력하세요'
    ),
  password: yup
    .string()
    .required('비밀번호를 입력해주세요')
    .min(8, '비밀번호는 최소 8자 이상이어야 해요'),
});

export const joinSchema = yup.object().shape({
  email: yup
    .string()
    .required('이메일을 입력해주세요')
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      '올바른 이메일 형식을 입력하세요'
    ),
  password: yup
    .string()
    .required('비밀번호를 입력해주세요')
    .min(8, '8자 이상의 비밀번호를 입력해주세요')
    .max(20, '20자 이하의 비밀번호를 입력해주세요')
    .matches(
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-_])(?=.*[0-9]).{8,20}$/,
      '비밀번호는 영문, 숫자, 특수문자 (!@#$%^&*-_+=) 를 포함해야 해요'
    )
    .matches(
      /^[a-zA-Z0-9!@#$%^*+=-_]+$/,
      '영문, 숫자, 특수문자 (!@#$%^&*-_+=) 외의 문자는 사용할 수 없어요'
    ),
  passwordConfirm: yup
    .string()
    .required('비밀번호를 다시 입력해 주세요')
    .oneOf([yup.ref('password')], '비밀번호가 일치하지 않아요'),
  nickname: yup
    .string()
    .required('닉네임을 입력해주세요')
    .min(2, '2자 이상의 닉네임을 입력해주세요')
    .max(16, '16자 이하의 닉네임을 입력해주세요')
    .matches(
      /^(?=.*[a-zA-Z0-9가-힣])[a-zA-Z0-9가-힣]{2,16}$/,
      '닉네임은 한글, 숫자, 영어만 쓸 수 있어요'
    ),
});
