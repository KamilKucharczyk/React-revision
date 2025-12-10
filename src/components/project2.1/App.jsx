import React, { Component } from 'react';
import { AddContactForm } from './addContactForm/AddContactForm';
import css from './App.module.css';
import { ContactList } from './contactList/ContactList';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  addContact = ({ name }) => {
    const listedContact = this.state.contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (listedContact) {
      alert('The contact is already on the list');
    } else {
      const newContact = {
        name,
        id: nanoid(),
      };
      this.setState(prev => {
        return {
          contacts: [...prev.contacts, newContact],
        };
      });
    }
  };

  render() {
    return (
      <div className={css.wrapper}>
        <h1>Phonebook</h1>
        <AddContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <ContactList contacts={this.state.contacts} />
      </div>
    );
  }
}
