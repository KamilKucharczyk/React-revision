import React, { Component } from 'react';
import css from './modal.module.css';
import PropTypes from 'prop-types';

class Modal extends Component {
  render() {
    const { largeImageURL, onClose } = this.props;
    return (
      <div className={css.overlay}>
        <div className={css.modal}>
          <img src={largeImageURL} alt="" onClick={onClose} />
        </div>
      </div>
    );
  }
}
Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
