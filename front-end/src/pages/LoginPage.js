import React, { useState } from 'react';
import Forms from '../component/Forms';
import { Redirect } from 'react-router-dom';
import { elementsLogin } from './modelForm.js';
import { fetchApi } from '../service/serviceFetch';
import ReportComponent from '../component/ReportComponent';

async function handleSubmit(event, setMessageRequest) {
  event.preventDefault();
  const {email, password } = event.target;
  const body = {
    email: email.value,
    password: password.value,
  };
  const data = await fetchApi({
    endpoint: 'http://localhost:3001/login',
    method: 'POST',
    body,
  });
  console.log(data)
  setMessageRequest(data.message);
}

function LoginPage() {
  const [messageRequest, setMessageRequest] = useState();
  const [shouldRedirect, setShouldRedirect] = useState(false);
  if()
  if (shouldRedirect) return <Redirect to="/login" />
  return (
    <div className="elementsRegister">
      {!messageRequest || <ReportComponent message={{ messageRequest, setMessageRequest }} callback={(value) => setShouldRedirect(value)} />}
      <Forms elements={elementsLogin} handleSubmit={(e) => handleSubmit(e, setMessageRequest)} />
    </div>
  );
}

export default LoginPage;
