/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { DivProps } from '../@types';

function Content({ children, ...props }: DivProps) {
  return (
    <div
      css={css`
        flex: 1;
        overflow-y: auto;
        padding: 8px;
      `}
      {...props}
    >
      {children}
    </div>
  );
}

export { Content };
