/** @jsxImportSource @emotion/react */

import { FormHeader } from '../../ui/FormHeader';
import LoginForm from '../LoginForm/LoginForm';
import { bottom, container, underline } from './Login.css';

function Login() {
  return (
    <div css={container}>
      <FormHeader
        title="로그인"
        subtitle="지금 로그인하고 밸런스 게임을 시작해보세요"
      />
      <LoginForm />
      <div css={bottom}>
        <span>아직 회원이 아니라면?</span>
        <a href="/" css={underline}>
          회원가입하기
        </a>
      </div>
    </div>
  );
}

export default Login;
