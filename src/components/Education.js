import React, { Component } from 'react';
import InputField from './InputField';

export default class Education extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      isBeingEdited: false,
      school: '',
      degreeTitle: '',
      graduationDate: '2022-08-15',
    };
  }

  renderOnView() {
    return (
      <section>
        <div>{this.state.school}</div>
        <div>{this.state.degreeTitle}</div>
        <div>{this.state.graduationDate}</div>
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
          name="school"
          type="text"
          hint="Enter the name of the school..."
          value={this.state.school || ''}
          onValueChange={this.handleChange}
        />

        <InputField
          name="degreeTitle"
          type="text"
          hint="Enter the title of the degree"
          value={this.state.degreeTitle || ''}
          onValueChange={this.handleChange}
        />

        <InputField
          name="graduationDate"
          type="date"
          hint="Enter the date of graduation"
          value={this.state.graduationDate}
          onValueChange={this.handleChange}
        />

        <div className="form__submit">
          <button type="submit" className="form__button">
            Add Education Informations.
          </button>
        </div>
      </form>
    );
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
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
