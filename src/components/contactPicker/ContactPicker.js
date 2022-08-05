import React from 'react';

export const ContactPicker = (props) => {
  const { contacts, setContact } = props;

  const handleChange = (e) => {
    e.preventDefault();
    setContact(e.target.value);
  };

  return (
    <select defaultValue="Choose A Contact" onChange={handleChange}>
      <option>Choose Contact</option>
      {contacts.map((contact, id) => {
        return (
          <option value={contact.name} key={id}>
            {contact.name}
          </option>
        );
      })}
    </select>
  );
};
