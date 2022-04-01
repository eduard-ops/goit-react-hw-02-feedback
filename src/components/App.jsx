import React, { Component } from 'react';

import FeedbackOptions from './FeedbackOptions/';

import PropTypes from 'prop-types';

import Statistics from './Statistics/Statistics';

import Notification from './Notification/';

import Section from './Section/';

import Container from './Container/';

class App extends Component {
  static propTypes = {
    state: PropTypes.object,
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleGood = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };

  handleNeutral = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };

  handleBad = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  totalSum = () => {
    const numbers = Object.values(this.state);

    const totalSum = numbers.reduce((previousValue, number) => {
      return previousValue + number;
    }, 0);
    return totalSum;
  };

  percentCalc = () => {
    let num = 0;
    const values = Object.values(this.state);
    if (values[0] === 0) return;
    num += (values[0] * 100) / this.totalSum();
    return Math.round(num) + '%';
  };

  render() {
    const { bad, good, neutral } = this.state;
    return (
      <Container className="main-container">
        <Section title={'Plese leave feedback'}>
          <FeedbackOptions
            clickBad={this.handleBad}
            clickNeutral={this.handleNeutral}
            clickGood={this.handleGood}
          />
        </Section>

        <Section title={'Statistics'}>
          {this.totalSum() ? (
            <Statistics
              bad={bad}
              good={good}
              neutral={neutral}
              total={this.totalSum()}
              percent={this.percentCalc()}
            />
          ) : (
            <Notification message={'There is no feedback'} />
          )}
        </Section>
      </Container>
    );
  }
}

export default App;
