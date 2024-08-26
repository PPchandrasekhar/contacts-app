import React from 'react';
import './ViewContactDetails.css'; // Add this line if you have a CSS file for styling

const ViewContactDetails = ({ contact, onBack }) => {
  if (!contact) return null;

  return (
    <div className="contact-details">
      <h2>Contact Details</h2>
      <p><strong>First Name:</strong> {contact.firstName}</p>
      <p><strong>Last Name:</strong> {contact.lastName}</p>
      <p><strong>Phone:</strong> {contact.phoneNumber}</p>
      <p><strong>Email:</strong> {contact.email}</p>
      <button onClick={onBack}>Back to Contacts</button>
    </div>
  );
};

export default ViewContactDetails;
