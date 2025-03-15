import { css } from '@emotion/react';
import { avatar as sizes } from '@/constants/theme/sizes';

export const avatarSize = (size: 's' | 'm') => css`
  width: ${sizes[size].width};
  height: ${sizes[size].height};
  font-size: ${sizes[size].iconSize};
`;

export const circular = css`
  border-radius: 50%;
`;

export const anonym = css`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e4e4e4;
  color: #cfcfcf;
`;

export const avatar = css`
  display: block;
  object-fit: cover;
  object-position: top center;
`;
