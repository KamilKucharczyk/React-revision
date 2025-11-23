import React from 'react';
import css from './Statistics.module.css';
import PropTypes from 'prop-types';

export const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => (
  <ul className={css.list}>
    <li>Good: {good}</li>
    <li>Neutral: {neutral}</li>
    <li>Bad: {bad}</li>
    <li>Total: {total}</li>
    <li>Positive feedback: {positiveFeedback}</li>
  </ul>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.string.isRequired,
};
