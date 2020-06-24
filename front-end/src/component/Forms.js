import React, { useState } from 'react';
import Inputs from './Inputs';

const validateField = (field) => {
  const { value, pattern } = field[1];
  if (value === '') return [field[0], 'false'];
  if (pattern && !value.match(pattern)) return [field[0], false];
  return [field[1], true];
}

function Forms({ elements, className = "default", getValues }) {
  const [values, setValue] = useState({});
  const [isValid, setIsValid] = useState({ data: [], valid: false });
  const changeValue = ({ name, value, pattern }) => {
    setValue({ ...values, [name]: { value, pattern } })
  }

  const submitValues = () => {
    const InValid = Object.entries(values).reduce((acc, input) => {
      return [...acc, validateField(input)];
    }, [])
    if (InValid.every(value => value[1] === true)) return setIsValid({ data: values, valid: true });
    return setIsValid({ data: values, valid: false });
  }
  if (isValid.valid) {
    console.log('rodou')
    return getValues(values)
  };
  return (
    <div className="Forms">
      <form data-testid="form" className={className}>
        {elements.map((element, index) => <Inputs key={index} attributes={element} saveValues={(value) => changeValue(value)} submit={() => submitValues()} />)}
      </form>
      {isValid.valid || Object.keys(isValid.data).length === 0 ||
        <div>
          <h3>Campos inválidos</h3>
          {Object.keys(isValid.data).map(key => <h3>{key}</h3>)}
        </div>
      }
    </div>
  );
}

export default Forms;
