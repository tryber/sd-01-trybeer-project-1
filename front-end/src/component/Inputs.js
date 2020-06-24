import React from 'react';

const simpleInput = ({ type, pattern, dataTestId, name, placeholder = "", className = "default", label }, saveData) => {
  return (
    <div>
      {label && <label htmlFor={name} >{label}</label>}
      <input
        data-testid={dataTestId}
        id={name}
        type={type} name={name} placeholder={placeholder}
        onChange={(e) => saveData(e.target.value)}
        className={className} pattern={pattern}
      />
    </div>
  );
}

const checkboxInput = ({ name, label, dataTestId }, saveData) => {
  return (
    <div>
      <input type="checkbox" id={name} name={name} onClick={(e) => saveData(e.target.checked)} data-testid={dataTestId} />
      <label htmlFor={name}>{label}</label>
    </div>
  )
}

const submitInput = ({ name, value, dataTestId }, submit) => {
  return (
    <div>
      <input type="button" value={value} id={name} name={name} data-testid={dataTestId} onClick={submit} />
    </div>
  )
}

function inputs({ attributes, submit, saveValues }) {
  const getInput = {
    text: simpleInput(attributes, saveValues),
    password: simpleInput(attributes, saveValues),
    email: simpleInput(attributes, saveValues),
    checkbox: checkboxInput(attributes, saveValues),
    button: submitInput(attributes, submit)
  }
  return getInput[attributes.type];
}

export default inputs;
