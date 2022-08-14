import React, { Component } from 'react';

export default class InputField extends Component {
  constructor(props) {
    super(props);

    this.handleValueChange = this.handleValueChange.bind(this);
  }

  handleValueChange(e) {
    this.props.onChange(e);
  }

  render() {
    let { name, type, hint, value } = this.props;
    return (
      <div className="form__field">
        <label htmlFor={name}>{name}</label>
        <input
          onChange={this.handleValueChange}
          type={type}
          id={name}
          name={name}
          value={value}
          placeholder={hint}
        />
      </div>
    );
  }
}
