import React from 'react';

const simpleInput = ({ type, pattern, dataTestId, name, placeholder = "", className = "default", label, isRequired = true}) => {
  return (
    <div>
      {label && <label htmlFor={name} >{label}</label>}
      <input
        data-testid={dataTestId}
        id={name}
        required={isRequired} type={type} name={name} placeholder={placeholder}
        className={className} pattern={pattern}
      />
    </div>
  );
}

const checkboxInput = ({ name, label, dataTestId }) => {
  return (
    <div>
      <input type="checkbox" id={name} name={name} data-testid={dataTestId} />
      <label htmlFor={name}>{label}</label>
    </div>
  )
}

const submitInput = ({ name, value, dataTestId }) => {
  return (
    <div>
      <input type="submit" value={value} id={name} name={name} data-testid={dataTestId} />
    </div>
  )
}

function inputs({ attributes }) {
  const getInput = {
    text: simpleInput(attributes),
    password: simpleInput(attributes),
    email: simpleInput(attributes),
    checkbox: checkboxInput(attributes),
    submit: submitInput(attributes)
  }
  return getInput[attributes.type];
}

export default inputs;
