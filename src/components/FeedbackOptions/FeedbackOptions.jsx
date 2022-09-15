import { ButtonsBlock, Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({ onClick }) => {
  console.log(onClick);
  return (
    <ButtonsBlock>
      <Button type="button" onClick={() => onClick('good')}>
        Good
      </Button>
      <Button type="button" onClick={() => onClick('neutral')}>
        Neutral
      </Button>
      <Button type="button" onClick={() => onClick('bad')}>
        Bad
      </Button>
    </ButtonsBlock>
  );
};

export default FeedbackOptions;
