import React, { useState } from 'react';
import { InputField } from './InputField';

function General(props) {
  const [isBeingEdited, setIsBeingEdited] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const changeEditStatus = () => {
    setIsBeingEdited(true);
  };

  const changeName = (e) => {
    setName(e.target.value);
  };

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };

  const changePhone = (e) => {
    setPhone(e.target.value);
  };

  const renderOnView = () => {
    return (
      <section>
        <div>{name}</div>
        <div>{email}</div>
        <div>{phone}</div>
        <div>
          <button onClick={changeEditStatus}>Edit</button>
        </div>
      </section>
    );
  };

  const renderOnEdit = () => {
    return (
      <form className="form" onSubmit={handleSubmit}>
        <InputField
          name="name"
          type="text"
          hint="Your potato here.."
          value={name}
          onValueChange={changeName}
        />
        <InputField
          name="email"
          type="email"
          hint="Enter your mail here..."
          value={email}
          onValueChange={changeEmail}
        />
        <InputField
          name="phone"
          type="tel"
          hint="Entre your phone number..."
          value={phone}
          onValueChange={changePhone}
        />

        <div className="form__submit">
          <button type="submit" className="form__button">
            Add General Informations
          </button>
        </div>
      </form>
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsBeingEdited((previousValue) => !previousValue);
  };

  return (
    <section className="section">
      {isBeingEdited ? renderOnEdit() : renderOnView()}
    </section>
  );
}

export { General };
