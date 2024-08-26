import React from 'react';
import './ContactsView.css';

const ContactsView = ({ contacts, onDelete, onEdit, onView }) => {
  return (
    <div className="contacts-container">
      <ul className="contacts-list">
        {contacts.map(contact => (
          <li key={contact.id} className="contact-item">
            <span>{contact.firstName} {contact.lastName}</span>
            <div className="contact-actions">
              <button onClick={() => onEdit(contact)}>Edit</button>
              <button onClick={() => onView(contact)}>View</button>
              <button onClick={() => onDelete(contacts.filter(c => c.id !== contact.id))}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactsView;
