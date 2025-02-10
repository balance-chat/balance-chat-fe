import { Container } from './Container';
import { Content } from './Content';
import { Section } from './Section';

interface Props {
  children: React.ReactNode;
}

function Chat({ children }: Props) {
  return <Container>{children}</Container>;
}

Chat.Section = Section;
Chat.Content = Content;

export { Chat };
