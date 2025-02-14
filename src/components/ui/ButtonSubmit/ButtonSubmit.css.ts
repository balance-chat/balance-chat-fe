import { css } from '@emotion/react';

export const btn = css`
  width: 100%;
  padding: 8px 12px;
  font: inherit;
  font-size: 12px;
  line-height: 20px;
  border-radius: 12px;
  display: block;
  border: none;
  white-space: nowrap;
`;

export const valid = css`
  background-color: #000;
  color: #f8f8f8;
  cursor: pointer;
  box-shadow: 2px 2px 12px #cfcfcf;
`;

export const invalid = css`
  background-color: #efefef;
  color: #999;
  cursor: not-allowed;
`;
