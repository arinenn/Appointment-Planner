import React, { useState } from 'react';
import { ContactForm } from '../../components/contactForm/ContactForm';

export const ContactsPage = (props) => {
  const { contacts, addContact } = props;
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  const isNameDuplicate = (contactName) => {
    for (let contact of contacts) {
      if (contact.name === contactName) {
        return true;
      }
    }
    return false;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const contactName = e.target['0'].value;
    const contactPhoneNumber = e.target['1'].value;
    const contactEmail = e.target['2'].value;
    if (!isNameDuplicate(contactName)) {
      addContact(contactName, contactPhoneNumber, contactEmail);
      setName('');
      setPhoneNumber('');
      setEmail('');
    } else {
      window.alert('This contact already exists.');
    }
  };

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
          name={name}
          setName={setName}
          phoneNumber={phoneNumber}
          setPhoneNumber={setPhoneNumber}
          email={email}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <table>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
          </tr>
          {contacts.map((element, id) => {
            return (
              <tr className="contacts" key={id}>
                <td>{`${element.name}`}</td>
                <td>{`${element.phoneNumber}`}</td>
                <td>{`${element.email}`}</td>
              </tr>
            );
          })}
        </table>
      </section>
    </div>
  );
};
