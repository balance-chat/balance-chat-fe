/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { DivProps } from '../@types';

function Section({ children, ...props }: DivProps) {
  return (
    <div
      css={css`
        padding: 8px;
      `}
      {...props}
    >
      {children}
    </div>
  );
}

export { Section };
