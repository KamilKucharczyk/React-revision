import React, { Component } from 'react';
import { FeedbackOptions } from './project 2/feedbackOptions/FeedbackOptions';
import { Section } from './project 2/section/Section';
import { Notification } from './project 2/notification/notification';
import { Statistics } from './project 2/statistics/Statistics';
class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    if (total === 0) {
      return 0;
    } else {
      return Math.round((good / total) * 100);
    }
  };

  handleFeedback = event => {
    const { name } = event.target;
    this.setState(prevState => ({ [name]: prevState[name] + 1 }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positiveFeedback = this.countPositiveFeedbackPercentage();

    return (
      <>
        <Section title="Please leave Feedback">
          <FeedbackOptions onLeaveFeedback={this.handleFeedback} />
        </Section>
        <Section title="Statistics">
          {total === 0 ? (
            <Notification message="No feedback given" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positiveFeedback={positiveFeedback}
            />
          )}
        </Section>
      </>
    );
  }
}

export default App;
