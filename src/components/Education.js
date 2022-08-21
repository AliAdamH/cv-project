import React, { useState } from 'react';
import { InputField } from './InputField';

function Education(props) {
  const [isBeingEdited, setIsBeingEdited] = useState(false);
  const [school, setSchool] = useState('');
  const [degreeTitle, setDegreeTitle] = useState('');
  const [graduationDate, setGraduationDate] = useState('2022-08-15');

  const changeEditStatus = () => {
    setIsBeingEdited((previvousState) => !previvousState);
  };

  const changeSchool = (e) => {
    setSchool(e.target.value);
  };

  const changeDegreeTitle = (e) => {
    setDegreeTitle(e.target.value);
  };

  const changeGraduationDate = (e) => {
    setGraduationDate(e.target.value);
  };

  const renderOnView = () => {
    return (
      <section>
        <div>{school}</div>
        <div>{degreeTitle}</div>
        <div>{graduationDate}</div>
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
          name="school"
          type="text"
          hint="Enter the name of the school..."
          value={school}
          onValueChange={changeSchool}
        />

        <InputField
          name="degreeTitle"
          type="text"
          hint="Enter the title of the degree"
          value={degreeTitle}
          onValueChange={changeDegreeTitle}
        />

        <InputField
          name="graduationDate"
          type="date"
          hint="Enter the date of graduation"
          value={graduationDate}
          onValueChange={changeGraduationDate}
        />

        <div className="form__submit">
          <button type="submit" className="form__button">
            Add Education Informations.
          </button>
        </div>
      </form>
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsBeingEdited(false);
  };

  return (
    <section className="section">
      {isBeingEdited ? renderOnEdit() : renderOnView()}
    </section>
  );
}

export { Education };
