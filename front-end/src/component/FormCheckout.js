import React, { useState, useEffect } from 'react';

const filterFieldsInvalid = (inputs) => {
  const invalidValues = Object.entries(inputs).filter((field) => field[1] === false);
  return Object.values(invalidValues).map((key) => key[0]);
}

const submitValues = ({ address, addressNumber, setIsValid }) => {
  const inputs = {};
  console.log(address.length > 0)
  inputs.address = address.length > 0;
  inputs.addressNumber = /^[0-9]{1,20}$/.test(addressNumber);
  const validate = filterFieldsInvalid(inputs);
  if (validate.length > 0) return setIsValid({ status: false, invalid: validate });
  return setIsValid({ status: true, invalid: [] });
}

function FormCheckout({ getValues, valid }) {
  const [address, setAddress] = useState();
  const [addressNumber, setAddressNumber] = useState();
  const [isValid, setIsValid] = useState({ status: false, invalid: [] });
  useEffect(() => {
    if (isValid.status) {
      getValues({ address, addressNumber });
      setIsValid({ status: false, invalid: [] });
    }
  }, [isValid.status]);
  return (
    <div className="Forms">
      <h2>Endereço</h2>
      <label htmlFor="street">Rua:</label><input id="street" type="text" data-testid="checkout-street-input" onChange={e => setAddress(e.target.value)} /><br />
      <label htmlFor="password">Senha:</label><input id="password" type="text" data-testid="checkout-house-number-input" onChange={e => setAddressNumber(e.target.value)} /><br />
      <input type="button" disabled={valid} value="Finalizar Pedido" data-testid="checkout-finish-btn" onClick={() => submitValues({ address, addressNumber, setIsValid })} />
      {isValid.status || isValid.invalid.length === 0 || <div><h3 data-testid="">{isValid.invalid.reduce((acc, field) => `${acc} ${field}`, 'Campos Inválidos:')}</h3></div>}
    </div>
  );
}

export default FormCheckout;
