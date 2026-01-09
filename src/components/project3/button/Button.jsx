import React, { Component } from 'react';
import css from './Button.module.css';
import PropTypes from 'prop-types';
class Button extends Component {
  render() {
    const { onClick, imagesLength } = this.props;
    if (imagesLength === 0) return null;
    return (
      <button type="button" className={css.button} onClick={onClick}>
        Load more
      </button>
    );
  }
}
Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  imagesLength: PropTypes.number.isRequired,
};

export default Button;
