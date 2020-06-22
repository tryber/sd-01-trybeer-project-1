import React, { useState } from 'react';
import Forms from '../component/Forms';
import { Redirect, Link } from 'react-router-dom';
import { elementsLogin } from './modelForm.js';
import { fetchApi } from '../service/serviceFetch';
import { getUser, saveUser } from '../service/index';
import ReportComponent from '../component/ReportComponent';

async function handleSubmit(event, setMessageRequest, setShouldRedirect) {
  event.preventDefault();
  const { email, password } = event.target;
  const body = {
    email: email.value,
    password: password.value,
  };
  const data = await fetchApi({
    endpoint: 'http://localhost:3001/login',
    method: 'POST',
    body,
  });
  if (data.message) return setMessageRequest(data.message);
  saveUser(data);
  setShouldRedirect(true);
}

function Login() {
  const [messageRequest, setMessageRequest] = useState();
  const [shouldRedirect, setShouldRedirect] = useState(false);
  if (getUser() && getUser().role === 'admin') return <Redirect to="/admin/orders" />;
  if (getUser() && getUser().role === 'client') return <Redirect to="/products" />;
  if (shouldRedirect) return <Redirect to="/login" />;
  return (
    <div className="elementsRegister">
      {!messageRequest || <ReportComponent message={{ messageRequest, setMessageRequest }} callback={() => setMessageRequest('')} />}
      <Forms elements={elementsLogin} handleSubmit={(e) => handleSubmit(e, setMessageRequest, setShouldRedirect)} />
      <Link to="/register">Ainda não tenho conta</Link>
    </div>
  );
}

export default Login;
