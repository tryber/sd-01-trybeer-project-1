import React, { useState } from 'react';
import Forms from '../component/Forms';
import { Redirect } from 'react-router-dom';
import { elementsRegister } from './modelForm.js';
import { fetchApi } from '../service/serviceFetch';
import ReportComponent from '../component/ReportComponent';

async function handleSubmit(event, setMessageRequest) {
  event.preventDefault();
  const { name, email, password, checkbox } = event.target;
  const body = {
    name: name.value,
    email: email.value,
    password: password.value,
    role: checkbox.checked ? 'admin' : 'client',
  };
  const data = await fetchApi({
    endpoint: 'http://localhost:3001/register',
    method: 'POST',
    body,
  });
  setMessageRequest(data.message);
}

function Register() {
  const [messageRequest, setMessageRequest] = useState();
  const [shouldRedirect, setShouldRedirect] = useState(false);
  if (shouldRedirect) return <Redirect to="/login" />
  return (
    <div className="elementsRegister">
      {!messageRequest || <ReportComponent message={{ messageRequest, setMessageRequest }} callback={(value) => setShouldRedirect(value)} />}
      <Forms elements={elementsRegister} handleSubmit={(e) => handleSubmit(e, setMessageRequest)} />
    </div>
  );
}

export default Register;
