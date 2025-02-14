/** @jsxImportSource @emotion/react */

import { container, mainText, subText } from './FormHeader.css';

interface Props {
  title: string;
  subtitle?: string;
}

function FormHeader({ title, subtitle }: Props) {
  return (
    <div css={container}>
      <h2 css={mainText}>{title}</h2>
      {subtitle && <p css={subText}>{subtitle}</p>}
    </div>
  );
}

export { FormHeader };
