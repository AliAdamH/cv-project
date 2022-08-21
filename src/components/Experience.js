import React, { useState } from 'react';
import InputField from './InputField';

function Experience() {
  const [isBeingEdited, setIsBeingEdited] = useState(false);
  const [company, setCompany] = useState('');
  const [position, setPosition] = useState('');
  const [tasks, setTasks] = useState('');
  const [dateFrom, setDateFrom] = useState('2022-08-15');
  const [dateTo, setDateTo] = useState('2022-08-15');

  const changeEditStatus = () => {
    setIsBeingEdited(true);
  };

  const changeCompany = (e) => {
    setCompany(e.target.value);
  };

  const changePosition = (e) => {
    setPosition(e.target.value);
  };

  const changeTasks = (e) => {
    setTasks(e.target.value);
  };

  const changeDateFrom = (e) => {
    setDateFrom(e.target.value);
  };

  const changeDateTo = (e) => {
    setDateTo(e.target.value);
  };

  const renderOnEdit = () => {
    return (
      <form className="form" onSubmit={handleSubmit}>
        <InputField
          name="company"
          type="text"
          hint="Company name..."
          value={company}
          onValueChange={changeCompany}
        />

        <InputField
          name="position"
          type="text"
          hint="Position Title..."
          value={position}
          onValueChange={changePosition}
        />

        <InputField
          name="tasks"
          type="text"
          hint="Tasks..."
          value={tasks}
          onValueChange={changeTasks}
        />

        <InputField
          name="dateFrom"
          type="date"
          hint="Start Date..."
          value={dateFrom}
          onValueChange={changeDateFrom}
        />

        <InputField
          name="dateTo"
          type="date"
          hint="End Date..."
          value={dateTo}
          onValueChange={changeDateTo}
        />

        <div className="form__submit">
          <button type="submit" className="form__button">
            Add Exprience Informations
          </button>
        </div>
      </form>
    );
  };

  const renderOnView = () => {
    return (
      <div>
        <div>{company}</div>
        <div>{position}</div>
        <div>{tasks}</div>
        <div>{dateFrom}</div>
        <div>{dateTo}</div>
        <div>
          <button onClick={changeEditStatus}>Edit</button>
        </div>
      </div>
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

export { Experience };
