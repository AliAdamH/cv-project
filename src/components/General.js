import React, { Component } from 'react';
import InputField from './InputField';

export default class General extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      isBeingEdited: false,
      name: '',
      email: '',
      phone: '',
    };
  }

  handleChange(e) {
    console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  }

  renderOnView() {
    return (
      <section>
        <div>{this.state.name}</div>
        <div>{this.state.email}</div>
        <div>{this.state.phone}</div>
        <div>
          <button onClick={this.handleEdit}>Edit</button>
        </div>
      </section>
    );
  }

  renderOnEdit() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <InputField
          name="name"
          type="text"
          hint="Your potato here.."
          value={this.state.name || ''}
          onValueChange={this.handleChange}
        />
        <InputField
          name="email"
          type="email"
          hint="Enter your mail here..."
          value={this.state.email || ''}
          onValueChange={this.handleChange}
        />
        <InputField
          name="phone"
          type="tel"
          hint="Entre your phone number..."
          value={this.state.phone || ''}
          onValueChange={this.handleChange}
        />

        <div className="form__submit">
          <button type="submit" className="form__button">
            Add General Informations
          </button>
        </div>
      </form>
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ isBeingEdited: !this.state.isBeingEdited });
  }

  handleEdit() {
    this.setState({ isBeingEdited: true });
  }

  render() {
    const toRender = this.state.isBeingEdited
      ? this.renderOnEdit()
      : this.renderOnView();
    return <section className="section">{toRender}</section>;
  }
}
