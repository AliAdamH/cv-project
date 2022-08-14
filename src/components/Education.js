import React, { Component } from 'react';
import InputField from './InputField';

export default class Education extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="section">
        <form className="form">
          <InputField
            name="school"
            type="text"
            value="Enter the name of the school"
          />

          <InputField
            name="title"
            type="text"
            value="Enter the title of the degree"
          />

          <InputField
            name="studyDate"
            type="date"
            value="Enter the date of graduation"
          />

          <div className="form__button">
            <button type="submit" className="form__button">
              Add General Informations
            </button>
          </div>
        </form>
      </section>
    );
  }
}
