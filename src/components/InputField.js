import React, { Component } from 'react';

export default class InputField extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { name, type, value } = this.props;
    return (
      <div className="form__field">
        <label htmlFor={name}>{name}</label>
        <input type={type} id={name} name={name} placeholder={value} />
      </div>
    );
  }
}
