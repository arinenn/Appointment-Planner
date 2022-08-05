import React from 'react';

export const ContactForm = ({
  name,
  setName,
  phoneNumber,
  setPhoneNumber,
  email,
  setEmail,
  handleSubmit,
}) => {
  const handleChangeName = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };
  const handleChangePhoneNumber = (e) => {
    e.preventDefault();
    setPhoneNumber(e.target.value);
  };
  const handleChangeEmail = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={handleChangeName}
        required
      ></input>
      <input
        type="text"
        placeholder="Phone Number 800-555-5555"
        value={phoneNumber}
        onChange={handleChangePhoneNumber}
        pattern="^[2-9]\d{2}-\d{3}-\d{4}$"
        required
      ></input>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={handleChangeEmail}
        required
      ></input>
      <input
        type="submit"
        style={{ backgroundColor: 'green' }}
        value="Save Contact"
      ></input>
    </form>
  );
};
