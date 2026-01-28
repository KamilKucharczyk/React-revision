import React, { useEffect, useState } from 'react';
import { AddContactForm } from './addContactForm/AddContactForm';
import css from './App.module.css';
import { ContactList } from './contactList/ContactList';
import { nanoid } from 'nanoid';
import { Filter } from './filter/Filter';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    try {
      const savedContacts = localStorage.getItem('contacts');
      return savedContacts ? JSON.parse(savedContacts) : initialContacts;
    } catch {
      return initialContacts;
    }
  });
  const [filter, setFilter] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  useEffect(() => {
    try {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    } catch (e) {
      console.error('Cannot write contacts to localStorage:', e);
    }
  }, [contacts]);

  const addContact = ({ name, number }) => {
    const listedContact = contacts.some(
      contact => contact.name.trim().toLowerCase() === name.trim().toLowerCase()
    );
    if (listedContact) {
      alert('The contact is already on the list');
    } else {
      const newContact = { id: nanoid(), name, number };
      setContacts(prev => [...prev, newContact]);
    }
  };

  const filterChange = event => {
    setFilter(event.target.value);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const removeContact = contactId => {
    setContacts(prev => prev.filter(contact => contact.id !== contactId));
  };

  // const [contacts, setContacts] = useState(initialContacts);
  // const [filter, setFilter] = useState('');
  // const [name, setName] = useState('');
  // const [number, setNumber] = useState('');

  // useEffect(() => {
  //   const savedContacts = localStorage.getItem('contacts');
  //   if (!savedContacts) {
  //     const savedContacts = JSON.parse(initialContacts);
  //     localStorage.setItem('contacts', savedContacts);
  //   }
  // }, []);

  // useEffect(() => {
  //   const existingContacts = localStorage.getItem('contacts');
  //   const contacts = JSON.parse(existingContacts);

  //   if (contacts !== null) {
  //     setContacts(contacts);
  //   }
  // }, []);

  // useEffect(() => {
  //   if (contacts !== initialContacts) {
  //     const changeInContacts = JSON.stringify(contacts);
  //     localStorage.setItem('contacts', changeInContacts);
  //   }
  // }, [contacts]);

  // const addContact = ({ name, number }) => {
  //   const listedContact = contacts.some(
  //     contact => contact.name.toLowerCase() === name.toLowerCase()
  //   );
  //   if (listedContact) {
  //     alert('The contact is already on the list');
  //   } else {
  //     const newContact = {
  //       name,
  //       number,
  //       id: nanoid(),
  //     };
  //     setContacts([...contacts, newContact]);
  //   }
  // };

  // const filterChange = event => {
  //   event.preventDefault();
  //   setFilter(event.target.value);
  // };

  // const filteredContacts = contacts.filter(contact =>
  //   contact.name.toLowerCase().includes(filter.toLowerCase())
  // );

  // const removeContact = contactId => {
  //   const remainingContacts = contacts.filter(
  //     contact => contact.id !== contactId
  //   );
  //   setContacts([...remainingContacts]);
  // };

  return (
    <div className={css.wrapper}>
      <h1>Phonebook</h1>
      <AddContactForm
        onSubmit={addContact}
        name={name}
        number={number}
        setName={setName}
        setNumber={setNumber}
      />
      <h2>Contacts</h2>
      <Filter onChange={filterChange} value={filter} />
      <ContactList contacts={filteredContacts} onDelete={removeContact} />
    </div>
  );
};
