import React from 'react';
import {
  Button,
  ButtonsBlock,
  FeedbackSection,
  StatisticsBlock,
} from './Feedback.styled';

const Feedback = ({ state, onClick, total, percentage }) => {
  const { good, neutral, bad } = state;

  return (
    <FeedbackSection>
      <h2>Please leave feedback</h2>
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
      <StatisticsBlock>
        <h3>Statistics</h3>
        <p>
          Good: <span>{good}</span>
        </p>
        <p>
          Neutral: <span>{neutral}</span>
        </p>
        <p>
          Bad: <span>{bad}</span>
        </p>

        <p>
          Total: <span>{total()}</span>
        </p>
        <p>
          Positive feedbacks: <span>{percentage()}%</span>
        </p>
      </StatisticsBlock>
    </FeedbackSection>
  );
};

export default Feedback;
