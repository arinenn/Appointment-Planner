import React from 'react';
import { ContactPicker } from './../contactPicker/ContactPicker';

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit,
}) => {
  const handleChangeTitle = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };
  const handleChangeDate = (e) => {
    e.preventDefault();
    setDate(e.target.value);
  };
  const handleChangeTime = (e) => {
    e.preventDefault();
    setTime(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={handleChangeTitle}
        required
      ></input>
      <input
        type="date"
        value={date}
        onChange={handleChangeDate}
        required
      ></input>
      <input
        type="time"
        value={time}
        onChange={handleChangeTime}
        required
      ></input>
      <ContactPicker contacts={contacts} setContact={setContact} />
      <input
        type="submit"
        style={{ backgroundColor: 'green' }}
        value="Save Appointment"
      ></input>
    </form>
  );
};
