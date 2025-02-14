import { css } from '@emotion/react';

export const btn = css`
  width: 100%;
  padding: 8px 0;
  font: inherit;
  font-size: 12px;
  line-height: 20px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 8px;
  border: none;

  background-color: transparent;
  cursor: pointer;
`;

export const unchecked = css`
  color: #999;
`;

export const checked = css`
  color: #6079cd;
  font-weight: 500;
`;

export const txt = css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const icon = css`
  display: flex;
  font-size: 20px;
`;
