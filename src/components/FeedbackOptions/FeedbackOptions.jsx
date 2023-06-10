import PropTypes from 'prop-types';
import css from './Feedback.module.css'

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.wrap}>
      {Object.keys(options).map((option) => (
        <button key={option} className={css[option]} name={option} onClick={onLeaveFeedback}>
          {option}
        </button>
      ))}
    </div>
  );
};


FeedbackOptions.propTypes = {
    options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions