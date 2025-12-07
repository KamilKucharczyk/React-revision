import React, { Component } from 'react';
import { AddContactForm } from './addContactForm/AddContactForm';
import css from './App.module.css';

export class App extends Component() {
  state = {
    contacts: [],
    name: '',
  };

  render() {
    return (
      <div className={css.wrapper}>
        <h1>Phonebook</h1>
        <AddContactForm />
        <h2>Contacts</h2>
      </div>
    );
  }
}
