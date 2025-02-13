import { css } from '@emotion/react';

export const container = css`
  display: flex;
  padding-left: 8px;
  margin-right: -4px;

  & > div:first-child {
    z-index: 3;
  }
  & > div:nth-child(2) {
    z-index: 2;
  }
  & > div:nth-child(3) {
    z-index: 1;
  }
`;

export const avatar = css`
  margin-left: -12px;
  border-radius: 100%;
`;

export const border = (color: string) => css`
  border: 4px solid ${color};
`;
