import React, { useState, useEffect } from 'react';

const filterFieldsInvalid = (inputs) => {
  const invalidValues = Object.entries(inputs).filter((field) => field[1] === false);
  return Object.values(invalidValues).map((key) => key[0]);
}

const submitValues = ({ email, setIsValid }) => {
  const inputs = {};
  inputs.email = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(email);
  const validate = filterFieldsInvalid(inputs);
  if (validate.length > 0) return setIsValid({ status: false, invalid: validate });
  return setIsValid({ status: true, invalid: [] });
}

function FormLogin({ getValues }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [isValid, setIsValid] = useState({ status: false, invalid: [] });
  useEffect(() => {
    if (isValid.status) {
      getValues({ email, password });
      setIsValid({ status: false, invalid: [] });
    }
  }, [isValid.status]);
  return (
    <div className="Forms">
      <label htmlFor="email">Email:</label><input id="email" type="email" data-testid="signup-email" onChange={e => setEmail(e.target.value)} /><br />
      <label htmlFor="password">Senha:</label><input id="password" type="password" data-testid="signup-password" onChange={e => setPassword(e.target.value)} /><br />
      <input type="button" value="Entrar" data-testid="signup-btn" onClick={() => submitValues({ email, password, setIsValid })} />
      {isValid.status || isValid.invalid.length === 0 || <div><h3 data-testid="">{isValid.invalid.reduce((acc, field) => `${acc} ${field}`, 'Campos Inválidos:')}</h3></div>}
    </div>
  );
}

export default FormLogin;
