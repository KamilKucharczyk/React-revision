import React, { Component } from 'react';
import css from './Button.module.css';
import PropTypes from 'prop-types';
class Button extends Component {
  render() {
    const { onClick, hasMore } = this.props;

    if (!hasMore) return null;
    return (
      <button type="button" className={css.button} onClick={onClick}>
        Load more
      </button>
    );
  }
}
Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
