import React, { Component } from 'react';
import General from './General';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <div className="container__title">CV Application</div>
        <General />
      </div>
    );
  }
}
