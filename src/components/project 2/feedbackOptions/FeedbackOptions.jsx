import React from 'react';
import Proptypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ onLeaveFeedback }) => (
  <div className={css.list}>
    <button
      type="button"
      name="good"
      className={css.btn}
      onClick={onLeaveFeedback}
    >
      Good
    </button>
    <button
      type="button"
      name="neutral"
      className={css.btn}
      onClick={onLeaveFeedback}
    >
      Neutral
    </button>
    <button
      type="button"
      name="bad"
      className={css.btn}
      onClick={onLeaveFeedback}
    >
      Bad
    </button>
  </div>
);

FeedbackOptions.propTypes = {
  onLeaveFeedback: Proptypes.func.isRequired,
};
