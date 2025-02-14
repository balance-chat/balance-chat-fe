import { css } from '@emotion/react';

export const inputStyle = css`
  width: 100%;
  padding: 8px 12px;
  font: inherit;
  font-size: 14px;
  line-height: 20px;
  border-radius: 12px;
  display: block;

  &::placeholder {
    font-size: 12px;
    color: #cfcfcf;
  }
`;

export const ok = css`
  border: 1.4px solid #e4e4e4;
  color: #222222;
`;

export const err = css`
  border: 1.8px solid #ff7b72;
  color: #ff7b72;
`;
