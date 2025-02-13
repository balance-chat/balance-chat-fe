/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import JoinForm from '../JoinForm/JoinForm';
import { FormHeader } from '@/components/ui/FormHeader';

function Join() {
  return (
    <div
      css={css`
        max-width: 360px;
        width: 100%;
        padding: 16px;
      `}
    >
      <FormHeader
        title="회원가입"
        subtitle="지금 회원가입하고 무료로 밸런스 게임을 시작해보세요"
      />
      <JoinForm />
    </div>
  );
}

export default Join;
