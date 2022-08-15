import React, { Component } from 'react';
import InputField from './InputField';

export default class Experience extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      isBeingEdited: false,
      company: '',
      position: '',
      tasks: '',
      dateFrom: '2022-08-15',
      dateTo: '2022-08-15',
    };
  }

  renderOnEdit() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <InputField
          name="company"
          type="text"
          hint="Company name..."
          value={this.state.company}
          onValueChange={this.handleChange}
        />

        <InputField
          name="position"
          type="text"
          hint="Position Title..."
          value={this.state.position}
          onValueChange={this.handleChange}
        />

        <InputField
          name="tasks"
          type="text"
          hint="Tasks..."
          value={this.state.tasks}
          onValueChange={this.handleChange}
        />

        <InputField
          name="dateFrom"
          type="date"
          hint="Start Date..."
          value={this.state.dateFrom}
          onValueChange={this.handleChange}
        />

        <InputField
          name="dateTo"
          type="date"
          hint="End Date..."
          value={this.state.dateTo}
          onValueChange={this.handleChange}
        />

        <div className="form__submit">
          <button type="submit" className="form__button">
            Add Exprience Informations
          </button>
        </div>
      </form>
    );
  }

  renderOnView() {
    return (
      <div>
        <div>{this.state.company}</div>
        <div>{this.state.position}</div>
        <div>{this.state.tasks}</div>
        <div>{this.state.dateFrom}</div>
        <div>{this.state.dateTo}</div>
        <div>
          <button onClick={this.handleEdit}>Edit</button>
        </div>
      </div>
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
