import React, { useState } from 'react';
import General from './General';
import Education from './Education';
import Experience from './Experience';

function App(props) {
  return (
    <div className="container">
      <div className="container__title">CV Application</div>
      <General />
      <Education />
      <Experience />
    </div>
  );
}

export { App };
