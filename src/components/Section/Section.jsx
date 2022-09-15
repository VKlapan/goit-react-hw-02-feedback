import { SectionBlock, Title } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <SectionBlock>
      <Title> {title}</Title>
      {children}
    </SectionBlock>
  );
};

export default Section;
