import React, { useState } from 'react';
import { AppointmentForm } from '../../components/appointmentForm/AppointmentForm';

export const AppointmentsPage = (props) => {
  const { contacts, appointments, addAppointment } = props;
  const [title, setTitle] = useState('');
  const [contact, setContact] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const appointmentTitle = e.target['0'].value;
    const appointmentDate = e.target['1'].value;
    const appointmentTime = e.target['2'].value;
    if (
      appointmentDate === '' &&
      appointmentTime === '' &&
      appointmentTitle === '' &&
      contact === ''
    )
      return;
    addAppointment(
      appointmentTitle,
      contact,
      appointmentDate,
      appointmentTime
    );
    setTitle('');
    setContact('');
    setDate('');
    setTime('');
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm
          contacts={contacts}
          title={title}
          setTitle={setTitle}
          contact={contact}
          setContact={setContact}
          date={date}
          setDate={setDate}
          time={time}
          setTime={setTime}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <table>
          <thead>
            <th>Title</th>
            <th>Contact</th>
            <th>Date</th>
            <th>Time</th>
          </thead>
          {appointments.map((element, id) => {
            return (
              <tbody className="appointment" key={id}>
                <td>{`${element.title}`}</td>
                <td>{`${element.contact}`}</td>
                <td>{`${element.date}`}</td>
                <td>{`${element.time}`}</td>
              </tbody>
            );
          })}
        </table>
      </section>
    </div>
  );
};
