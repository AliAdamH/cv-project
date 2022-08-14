import React, { Component } from 'react';
import InputField from './InputField';

export default class Experience extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="section">
        <form className="form">
          <InputField name="company" type="text" value="Company name..." />
          <InputField name="position" type="text" value="Position Title..." />
          <InputField name="tasks" type="text" value="Tasks..." />
          <InputField name="dateFrom" type="date" value="Start Date..." />
          <InputField name="dateTo" type="date" value="End Date..." />
          <div className="form__submit">
            <button type="submit" className="form__button">
              Add General Informations
            </button>
          </div>
        </form>
      </section>
    );
  }
}
