/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

interface Props {
  children: React.ReactNode;
  maxWidth?: string;
}

/**
 * 컨텐츠를 가로축의 중앙에 정렬하기 위한 루트 컨테이너
 */
const RootContainer = ({ children, maxWidth = '600px' }: Props) => {
  return (
    <div
      css={css`
        max-width: ${maxWidth};
        height: 100%;
        margin: auto;
      `}
    >
      {children}
    </div>
  );
};

export default RootContainer;
