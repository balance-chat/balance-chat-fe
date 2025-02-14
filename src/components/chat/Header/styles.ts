import { css } from '@emotion/react';

export const header = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px 0 12px 0;
  border-bottom: 1px solid #efefef;
  color: #222;
`;

export const icon = css`
  width: 36px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  border-radius: 12px;
  cursor: pointer;

  &:hover {
    background: #efefef;
  }
`;

export const txt = css`
  flex: 1;
  text-align: center;
  color: #222;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const versus = css`
  width: 100%;
  display: flex;
  gap: 8px;
`;
