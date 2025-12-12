import React, { Component } from 'react';
import { AddContactForm } from './addContactForm/AddContactForm';
import css from './App.module.css';
import { ContactList } from './contactList/ContactList';
import { nanoid } from 'nanoid';
import { Filter } from './filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  addContact = ({ name, number }) => {
    const listedContact = this.state.contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (listedContact) {
      alert('The contact is already on the list');
    } else {
      const newContact = {
        name,
        number,
        id: nanoid(),
      };
      this.setState(prev => {
        return {
          contacts: [...prev.contacts, newContact],
        };
      });
    }
  };

  filterChange = event => {
    event.preventDefault();
    this.setState({ filter: event.target.value });
  };

  filteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  removeContact = contactId => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(contact => contactId !== contact.id),
    }));
  };

  render() {
    const { filter } = this.state;
    return (
      <div className={css.wrapper}>
        <h1>Phonebook</h1>
        <AddContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter onChange={this.filterChange} value={filter} />
        <ContactList
          contacts={this.filteredContacts()}
          onDelete={this.removeContact}
        />
      </div>
    );
  }
}
