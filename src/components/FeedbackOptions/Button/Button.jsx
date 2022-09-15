import { Button } from './Button.styled';

const FeedbackButton = ({ option, onLeaveFeedback }) => {
  return (
    <Button type="button" onClick={() => onLeaveFeedback({ option })}>
      {option}
    </Button>
  );
};

export default FeedbackButton;
