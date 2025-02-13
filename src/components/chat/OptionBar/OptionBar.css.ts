import { css } from '@emotion/react';

export const container = css`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px;
  border-bottom: 1px solid #efefef;
`;

export const content = css`
  flex: 1;
  width: 100%;
  display: flex;
  gap: 4px;
  flex-direction: column;
  font-size: 12px;
  line-height: 16px;
  color: #333333;
`;

export const barArea = css`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  flex-shrink: 0;
`;

export const bar = (width: string) => css`
  width: ${width};
  background-color: #d2d9f0;
  display: inline-block;
  height: 8px;
  margin-right: 10px;
  border-radius: 4px;
  min-width: 10px;
`;

export const txt = css`
  white-space: nowrap;
  font-size: 10px;
  font-weight: 500;
  color: #b7bfd9;
  /* color: #6079cd; */
`;

export const icon = css`
  display: flex;
  align-items: center;
  width: 20px;
  color: #6079cd;
  font-size: 20px;
`;
