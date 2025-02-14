/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { DivProps } from '@/types/common/props';

function Container({ children, ...props }: DivProps) {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        height: 100%;
      `}
      {...props}
    >
      {children}
    </div>
  );
}

export default Container;
