/** @jsxImportSource @emotion/react */

import Form from '@/components/ui/Form';
import { forgot } from './styles';

function LoginForm() {
  return (
    <Form>
      <Form.Section>
        <Form.Input type="email" placeholder="이메일 주소" isValid={true} />
      </Form.Section>
      <Form.Section>
        <Form.Input type="password" placeholder="비밀번호" isValid={true} />
        <div css={forgot}>
          <a>비밀번호를 잊어버렸나요?</a>
        </div>
      </Form.Section>
      <Form.Section>
        <Form.Submit isValid={true}>로그인하기</Form.Submit>
      </Form.Section>
    </Form>
  );
}

export default LoginForm;
