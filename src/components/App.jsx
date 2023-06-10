import { useState } from 'react';
// import { Component } from 'react';

import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statististics';
import Notification from './Notification/Notification';
import css from './App.module.css';

const App = () => {
  // Хук useState повертає пару значень: поточне значення стану та функцію, що дозволяє оновити цей стан
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // функція яка обробляє подію кліка та оновлює значення стану.

  const handleFeedbackClick = event => {
    const feedbackType = event.target.name;

    // обробка події та оновлення стану за допомогою if/else
    // if (feedbackType === 'good') {
    //   setGood(prevGood => prevGood + 1);
    // } else if (feedbackType === 'neutral') {
    //   setNeutral(prevNeutral => prevNeutral + 1);
    // } else if (feedbackType === 'bad') {
    //   setBad(prevBad => prevBad + 1);
    // }

    // обробка події та оновлення стану за допомогою switch/case
    switch (feedbackType) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;

      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;

      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;

      default:
        break;
    }
  };
  // функція яка підраховує загальну кількість відгуків
  const countTotalFeedback = () => {
    return good + neutral + bad;
  };
  // console.log(countTotalFeedback());

  // функція яка підраховує % позитивних відгуків
  const countPositiveFeedbackPercentage = () => {
    const totalFeedback = countTotalFeedback();
    return totalFeedback > 0 ? Math.round((good / totalFeedback) * 100) : 0;
  };

  return (
    <div className={css.wrapper}>
      <Section title="Leave your feedback">
        <FeedbackOptions
          options={{ good, neutral, bad }}
          onLeaveFeedback={handleFeedbackClick}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};

export default App;

// =========================================================================
// class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

// handleFeedbackClick = event => {
//   console.log(event.target.value);
//   const feedbackType = event.target.name;
//   console.log(feedbackType);

//   this.setState(prevState => ({
//     [feedbackType]: prevState[feedbackType] + 1,

//   }));
// };

// countTotalFeedback = () => {
//   const { good, neutral, bad } = this.state;
//   return good + neutral + bad;
// };

// countPositiveFeedbackPercentage = () => {
//   const { good } = this.state;
//   const totalFeedback = this.countTotalFeedback();
//   return totalFeedback > 0 ? Math.round((good / totalFeedback) * 100) : 0;
// };

//   render() {
//     const { good, neutral, bad } = this.state;

//     return (
//       <div className={css.wrapper}>
//         <Section title="Leave your feedback">
//           <FeedbackOptions
//             options={this.state}
//             onLeaveFeedback={this.handleFeedbackClick}
//           />
//         </Section>
//         <Section title="Statistics">
//           {this.countTotalFeedback() > 0 ? (
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={this.countTotalFeedback()}
//               positivePercentage={this.countPositiveFeedbackPercentage()}
//             />
//           ) : (
//             <Notification message="There is no feedback" />
//           )}
//         </Section>
//       </div>
//     );
//   }
// }

// export default App;
