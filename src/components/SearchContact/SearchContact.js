import React from 'react';
import './SearchContact.css'; // Add this line if you have a CSS file for styling

const SearchContact = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="search-contact">
      <input
        type="text"
        placeholder="Search Contacts"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default SearchContact;
