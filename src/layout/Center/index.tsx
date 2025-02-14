/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { DivProps } from '@/types/common/props';

function Center({ children, ...props }: DivProps) {
  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 40px;
        width: 100%;
        min-height: 100%;
        padding: 8px;
      `}
      {...props}
    >
      {children}
    </div>
  );
}

export default Center;
