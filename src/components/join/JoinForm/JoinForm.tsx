/** @jsxImportSource @emotion/react */

import { Form } from '@/components/ui/Form';

function JoinForm() {
  return (
    <Form>
      <Form.Section title="이메일 주소">
        <Form.InputWithCheckBtn
          type="email"
          placeholder="이메일 주소"
          isValidInput={true}
          isValidBtn={false}
        />
      </Form.Section>
      <Form.Section title="비밀번호">
        <Form.Input type="password" placeholder="비밀번호" isValid={true} />
        <Form.Input
          type="password"
          placeholder="비밀번호 확인"
          isValid={true}
        />
      </Form.Section>
      <Form.Section title="닉네임">
        <Form.InputWithCheckBtn
          type="text"
          placeholder="닉네임"
          isValidInput={true}
          isValidBtn={false}
        />
      </Form.Section>
      <Form.Section>
        <Form.Agree>서비스 이용약관에 동의합니다</Form.Agree>
      </Form.Section>
      <Form.Section>
        <Form.Submit isValid={false}>가입하기</Form.Submit>
      </Form.Section>
    </Form>
  );
}

export default JoinForm;
