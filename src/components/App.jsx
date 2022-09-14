import React, { Component } from 'react';
import Feedback from './Feedback/Feedback';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return this.countTotalFeedback() !== 0
      ? Math.ceil((this.state.good * 100) / this.countTotalFeedback())
      : '--';
  };

  addFeedback = feedback => {
    switch (feedback) {
      case 'good':
        this.setState(prevState => ({ good: prevState.good + 1 }));
        break;
      case 'neutral':
        this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
        break;
      case 'bad':
        this.setState(prevState => ({ bad: prevState.bad + 1 }));
        break;
      default:
        console.log('Sorry');
    }
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        React homework template
        <Feedback
          state={this.state}
          onClick={this.addFeedback}
          total={this.countTotalFeedback}
          percentage={this.countPositiveFeedbackPercentage}
        ></Feedback>
      </div>
    );
  }
}

export default App;
