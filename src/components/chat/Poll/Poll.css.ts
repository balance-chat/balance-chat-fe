import { css } from '@emotion/react';

export const container = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0 16px 0;
  border-bottom: 1px solid #efefef;
  color: #222;
`;

export const txt = css`
  flex: 1;
  text-align: center;
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const icon = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;
