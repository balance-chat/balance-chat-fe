import { Container } from './Container/Container';
import { Content } from './Content/Content';
import { Section } from './Section/Section';

interface Props {
  children: React.ReactNode;
}

function Chat({ children }: Props) {
  return <Container>{children}</Container>;
}

Chat.Section = Section;
Chat.Content = Content;

export { Chat };
