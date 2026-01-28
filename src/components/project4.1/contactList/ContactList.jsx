import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';

export const ContactList = ({ contacts, onDelete }) => (
  <ul className={css.list}>
    {contacts.map(contact => (
      <li className={css.list_el} key={contact.id}>
        {contact.name}: {contact.number}{' '}
        <button
          type="button"
          onClick={() => {
            onDelete(contact.id);
          }}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
