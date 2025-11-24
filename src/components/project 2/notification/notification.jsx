import PropTypes from 'prop-types';
import React from 'react';

export const Notification = ({ message }) => (
  <>
    <p>{message}</p>;
  </>
);

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
