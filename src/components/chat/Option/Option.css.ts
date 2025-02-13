import { css } from '@emotion/react';

export const card = css`
  width: 100%;
  min-width: 56px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 12px;
  border-radius: 12px;
  overflow: hidden;
`;

export const bg = (color: string) => css`
  background-color: ${color};
`;

export const text = (color: string) => css`
  color: ${color};
`;

export const cardTitle = css`
  font-size: 12px;
  line-height: 16px;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const cardContent = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const cnt = css`
  font-size: 16px;
  font-weight: 500;
`;
