import { css } from '@emotion/react';

export const container = css`
  display: flex;
  width: 100%;
  gap: 12px;
  margin-bottom: 8px;
`;

export const right = css`
  justify-content: end;
`;

export const limitWidth = css`
  max-width: 400px;
`;

export const username = css`
  font-size: 12px;
  margin-bottom: 6px;
  color: #666666;
  display: flex;
  align-items: center;

  &::after {
    content: '';
    display: inline-block;
    width: 5px;
    height: 5px;
    border-radius: 3px;
    margin: 2px 4px;
    background-color: #a2b2e7;
  }
`;
