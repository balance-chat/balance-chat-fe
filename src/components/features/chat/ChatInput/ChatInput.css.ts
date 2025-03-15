import { css } from '@emotion/react';

export const container = css`
  display: flex;
  align-items: end;
  gap: 12px;
  border-radius: 12px;
  padding: 8px;
`;

export const textWrap = css`
  width: 100%;
  min-height: 28px;
  display: flex;
  align-items: center;
`;

export const textArea = css`
  resize: none;
  width: 100%;
  border: none;
  font: inherit;
  font-size: 14px;
  padding-left: 4px;
  outline: none;
  max-height: 120px;
  overflow: hidden;
  line-height: 20px;
  display: block;
  background: transparent;

  &::placeholder {
    font-size: 12px;
    color: #cfcfcf;
  }
`;

export const send = css`
  display: flex;
  align-items: center;
  width: 28px;
  height: 28px;
  background-color: #a1ae99;
  padding: 6px 8px;
  color: #fff;
  border: none;
  border-radius: 12px;
`;
