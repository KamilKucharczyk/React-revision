import React from 'react';
import PropTypes from 'prop-types';
import css from './filter.module.css';

export const Filter = ({ value, onChange }) => (
  <div className={css.container}>
    <p>Find contacts by name</p>
    <input type="text" name="filter" value={value} onChange={onChange} />
  </div>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
