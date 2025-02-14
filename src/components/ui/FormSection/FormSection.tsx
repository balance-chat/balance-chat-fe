/** @jsxImportSource @emotion/react */

import { section, txt } from './FormSection.css';

interface Props {
  children: React.ReactNode;
  title?: string;
}

function FormSection({ children, title }: Props) {
  return (
    <div css={section}>
      {title && <div css={txt}>{title}</div>}
      {children}
    </div>
  );
}

export { FormSection };
