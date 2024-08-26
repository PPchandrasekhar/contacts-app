// AddContact.js
import React, { useState } from 'react';
import './AddContact.css'

const AddContact = ({ onAdd }) => {
  const [newContact, setNewContact] = useState({ firstName: '', lastName: '', phoneNumber: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewContact({ ...newContact, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add validation logic here
    if (newContact.firstName && newContact.lastName && newContact.phoneNumber) {
      onAdd(newContact);
      setNewContact({ firstName: '', lastName: '', phoneNumber: '' });
    }
  };

  return (
    <form className='contact-form' onSubmit={handleSubmit}>
      <input
        name="firstName"
        value={newContact.firstName}
        onChange={handleChange}
        placeholder="First Name"
        required
      />
      <input
        name="lastName"
        value={newContact.lastName}
        onChange={handleChange}
        placeholder="Last Name"
        required
      />
      <input
        name="phoneNumber"
        value={newContact.phoneNumber}
        onChange={handleChange}
        placeholder="Phone Number"
        required
      />
      <button className='add-btn' type="submit">Add Contact</button>
    </form>
  );
};

export default AddContact;
