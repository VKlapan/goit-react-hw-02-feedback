import { ButtonsBlock } from './FeedbackOptions.styled';
import FeedbackButton from './Button/Button';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonsBlock>
      {options.map(option => {
        return (
          <FeedbackButton
            key={option}
            option={option}
            onLeaveFeedback={onLeaveFeedback}
          />
        );
      })}
    </ButtonsBlock>
  );
};

export default FeedbackOptions;
