import React, { useState } from 'react';
import ContactsView from './components/ContactsView/ContactsView';
import AddContact from './components/AddContact/AddContact';
import EditContact from './components/EditContact/EditContact';
import ViewContactDetails from './components/ViewContactDetails/ViewContactDetails';
import SearchContact from './components/SearchContact/SearchContact';

function App() {
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);
  const [viewMode, setViewMode] = useState('view'); // 'view', 'add', 'edit', 'details'
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddContact = (contact) => {
    contact.id = contacts.length + 1;
    setContacts([...contacts, contact]);
    setViewMode('view');
  };

  const handleEditContact = (updatedContact) => {
    const updatedContacts = contacts.map(contact =>
      contact.id === updatedContact.id ? updatedContact : contact
    );
    setContacts(updatedContacts);
    setViewMode('view');
  };

  const handleViewContact = (contact) => {
    setSelectedContact(contact);
    setViewMode('details');
  };

  const handleBackToContacts = () => {
    setViewMode('view');
  };

  const filteredContacts = contacts.filter(contact =>
    contact.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.phoneNumber.includes(searchTerm)
  );

  return (
    <div>
      <SearchContact searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {viewMode === 'view' && (
        <div>
          <h1>Contacts</h1>
          <ContactsView
            contacts={filteredContacts}
            onDelete={setContacts}
            onEdit={(contact) => { setSelectedContact(contact); setViewMode('edit'); }}
            onView={handleViewContact}
          />
        </div>
      )}
      {viewMode === 'add' && <AddContact onAdd={handleAddContact} />}
      {viewMode === 'edit' && (
        <EditContact
          contact={selectedContact}
          onSave={handleEditContact}
          isOpen={true} // Assuming modal is always open here; adjust if needed
          onClose={() => setViewMode('view')}
        />
      )}
      {viewMode === 'details' && (
        <ViewContactDetails
          contact={selectedContact}
          onBack={handleBackToContacts}
        />
      )}
      {viewMode === 'view' && <button onClick={() => setViewMode('add')}>Add New Contact</button>}
    </div>
  );
}

export default App;
