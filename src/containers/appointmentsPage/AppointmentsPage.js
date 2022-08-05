import React, { useState } from 'react';
import { AppointmentForm } from '../../components/appointmentForm/AppointmentForm';

export const AppointmentsPage = (props) => {
  const {
    contacts,
    appointments,
    addAppointment,
    removeAppointment,
  } = props;
  const [title, setTitle] = useState('');
  const [contact, setContact] = useState('');

  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString('en-US')
      .split('/');
    return `${year}-${month.padStart(2, '0')}-${day.padStart(
      2,
      '0'
    )}`;
  };
  const [date, setDate] = useState(getTodayString());
  const getTimeNow = () => {
    const today = new Date();
    const hours = today.getHours();
    const minutes = today.getMinutes();
    return `${hours}:${minutes}`;
  };
  const [time, setTime] = useState(getTimeNow());

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
    setDate(getTodayString());
    setTime(getTimeNow());
  };

  const handleDelete = (e) => {
    e.preventDefault();
    const parsedValue = e.target.value.split('#');
    const [title, contact, date, time] = parsedValue;
    removeAppointment(title, contact, date, time);
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
            <th>Clear</th>
          </thead>
          {appointments.map((element, id) => {
            return (
              <tbody className="appointment" key={id}>
                <td>{`${element.title}`}</td>
                <td>{`${element.contact}`}</td>
                <td>{`${element.date}`}</td>
                <td>{`${element.time}`}</td>
                <td>
                  <button
                    onClick={handleDelete}
                    value={`${element.title}#${element.contact}#${element.date}#${element.time}`}
                    style={{
                      backgroundColor: 'red',
                      border: 'solid 1px',
                    }}
                  >
                    Del
                  </button>
                </td>
              </tbody>
            );
          })}
        </table>
      </section>
    </div>
  );
};
