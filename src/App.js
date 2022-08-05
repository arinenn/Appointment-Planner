import React, { useState } from 'react';
import { Switch, Route, Redirect, NavLink } from 'react-router-dom';

import { AppointmentsPage } from './containers/appointmentsPage/AppointmentsPage';
import { ContactsPage } from './containers/contactsPage/ContactsPage';

const myStorage = window.localStorage;
myStorage.setItem('contacts', '[]');
myStorage.setItem('appointments', '[]');

function App() {
  const storageContacts = myStorage.getItem('contacts');
  const storageAppointments = myStorage.getItem('appointments');

  const [contacts, setContacts] = useState(
    JSON.parse(storageContacts)
  );
  const [appointments, setAppointments] = useState(
    JSON.parse(storageAppointments)
  );

  myStorage.setItem('contacts', JSON.stringify(contacts));
  myStorage.setItem('appointments', JSON.stringify(appointments));

  const ROUTES = {
    CONTACTS: '/contacts',
    APPOINTMENTS: '/appointments',
  };

  const addContact = (name, phoneNumber, email) => {
    if (name === '') return;
    const contact = {
      name,
      phoneNumber,
      email,
    };
    setContacts((prevContacts) => [...prevContacts, contact]);
  };

  const removeContact = (name) => {
    setContacts(contacts.filter((contact) => contact.name !== name));
  };

  const addAppointment = (title, contact, date, time) => {
    setAppointments((prevAppointments) => {
      const appointment = {
        title,
        contact,
        date,
        time,
      };
      return [...prevAppointments, appointment];
    });
  };

  const removeAppointment = (title, contact, date, time) => {
    const appointmentToRemove = {
      title,
      contact,
      date,
      time,
    };
    setAppointments(
      appointments.filter((appointment) => {
        if (
          appointment.title === appointmentToRemove.title &&
          appointment.contact === appointmentToRemove.contact &&
          appointment.date === appointmentToRemove.date &&
          appointment.time === appointmentToRemove.time
        ) {
          return false;
        }
        return true;
      })
    );
  };

  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
            <ContactsPage
              contacts={contacts}
              addContact={addContact}
              removeContact={removeContact}
            />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            <AppointmentsPage
              appointments={appointments}
              contacts={contacts}
              addAppointment={addAppointment}
              removeAppointment={removeAppointment}
            />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
