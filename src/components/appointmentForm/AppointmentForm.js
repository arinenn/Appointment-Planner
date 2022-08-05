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
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString('en-US')
      .split('/');
    return `${year}-${month.padStart(2, '0')}-${day.padStart(
      2,
      '0'
    )}`;
  };

  const handleChangeTitle = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };
  const handleChangeDate = (e) => {
    e.preventDefault();
    setDate(getTodayString(e.target.value));
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
        placeholder="Date"
        value={date}
        onChange={handleChangeDate}
        required
      ></input>
      <input
        type="time"
        placeholder="Time"
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
