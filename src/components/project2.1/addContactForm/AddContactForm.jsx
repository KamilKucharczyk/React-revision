import React, { Component } from 'react';
import css from './AddContactForm.module.css';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

export class AddContactForm extends Component {
  state = {
    name: '',
  };
  nameId = nanoid();

  handleSubmit = event => {
    event.preventDefault();
    const { name } = this.state;
    if (!name) {
      return;
    }
    this.props.onSubmit({ name });
    this.reset();
  };

  reset = () => {
    this.setState({ name: '' });
  };
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    const { name } = this.state;
    return (
      <form className={css.form} onSubmit={this.handleSubmit}>
        <label className={css.label} htmlFor={this.nameId}>
          Name
          <input
            id={this.nameId}
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

AddContactForm.propTypes = {
  name: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
