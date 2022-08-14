import React, { Component } from 'react';
import InputField from './InputField';

export default class General extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section className="section">
        <form className="form">
          <InputField name="name" type="text" value="Your potato here.." />
          <InputField
            name="email"
            type="email"
            value="Enter your mail here..."
          />
          <InputField
            name="phone"
            type="tel"
            value="Entre your phone number..."
          />

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
