import React, { Component } from 'react';

export default class General extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section className="section">
        <form className="form">
          <div className="form__field">
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              placeholder="Enter your name..."
              id="name"
            ></input>
          </div>

          <div className="form__field">
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              placeholder="Enter your mail..."
              id="email"
            ></input>
          </div>

          <div className="form__field">
            <label htmlFor="phone">Phone Number: </label>
            <input
              type="tel"
              placeholder="Enter your phone number..."
              id="phone"
            ></input>
          </div>

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
