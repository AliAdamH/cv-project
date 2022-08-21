import React, { useState } from 'react';

function InputField({ name, type, hint, value, onValueChange }) {
  function handleValueChange(e) {
    onValueChange(e);
  }

  return (
    <div className="form__field">
      <label htmlFor={name}>{name}</label>
      <input
        onChange={handleValueChange}
        type={type}
        id={name}
        name={name}
        value={value}
        placeholder={hint}
      />
    </div>
  );
}

export { InputField };
