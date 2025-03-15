/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { DivProps } from '@/types/common/props';

function Content({ children, ...props }: DivProps) {
  return (
    <div
      css={css`
        flex: 1;
        overflow-y: scroll;
        padding: 8px 0 8px 8px;
      `}
      {...props}
    >
      {children}
    </div>
  );
}

export { Content };
