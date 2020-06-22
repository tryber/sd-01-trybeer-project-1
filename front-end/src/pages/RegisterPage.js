import React from 'react';
import { Provider } from './context/index';
import Forms from './component/Forms.js';
import { elementsRegister } from './modelFormRegister.js';
import { fetchApi } from '../service/serviceFetch';

async function handleSubmit(event) {
  event.preventDefault();
  const { name, email, password, checkbox } = event.target;
  const body = {
    name: name.value,
    email: email.value,
    password: password.value,
    role: checkbox.checked ? 'admin' : 'client',
  }
  const data = await fetchApi({
    endpoint: 'http://localhost:3001/register',
    method: 'POST',
    body,
  })
  console.log(data);
}

function Register() {
  return (
    <Provider>
      <div className="elementsRegister">
        <Forms elements={elementsRegister} handleSubmit={(e) => handleSubmit(e)} />
      </div>
    </Provider>
  );
}

export default Register;
