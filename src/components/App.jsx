
import React, {useState} from 'react';
import ContactList from './ContactList/ContactList.jsx';
import SearchBox from './SearchBox/SearchBox.jsx';
import ContactForm from './ContactForm/ContactForm.jsx'; 
import {nanoid} from 'nanoid';

import './App.css';


const App = () => {
  // Масив контактів жорстко закодований для тестування
  const [contacts, setContacts] = useState ([
    { id: nanoid(), name: "Rosie Simpson", number: "459-12-56" },
    { id: nanoid(), name: "Hermione Kline", number: "443-89-12" },
    { id: nanoid(), name: "Eden Clements", number: "645-17-79" },
    { id: nanoid(), name: "Annie Copeland", number: "227-91-26" }
  ])
   
    
    const handleDeleteContact = (contactId) => {
      setContacts((prevContacts) => prevContacts.filter(contact => contact.id !== contactId));
  };

  const [filter, setFilter] = useState('');

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleAddContact = (newContact) => {
    setContacts(prevContacts => [...prevContacts, { id: nanoid(), ...newContact }]);
  };
  

    return (
  <div>
    <div>
      <h1 className='title'>Phonebook</h1>

      </div>
      <ContactForm addContact={handleAddContact} />
      <SearchBox setSearchUser={setFilter} />

      
       <ContactList
  userContact={filteredContacts}
  handleDeleteContact={handleDeleteContact}
/>

      </div>

  );
};

export default App;


