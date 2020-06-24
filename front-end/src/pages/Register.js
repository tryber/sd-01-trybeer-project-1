import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { fetchApi } from '../service/serviceFetch';
import ReportComponent from '../component/ReportComponent';
import FormRegister from '../component/FormRegister';

async function handleSubmit(obj, setMessageRequest) {
  const { name, email, password, role } = obj;
  const body = {
    name,
    email,
    password,
    role: role ? 'admin' : 'client',
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
      <FormRegister getValues={(obj) => { handleSubmit(obj, setMessageRequest) }} />
    </div>
  );
}

export default Register;
