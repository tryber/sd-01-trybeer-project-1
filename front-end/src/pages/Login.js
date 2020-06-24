import React, { useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { fetchApi } from '../service/serviceFetch';
import { getUser, saveUser } from '../service/index';
import ReportComponent from '../component/ReportComponent';
import FormLogin from '../component/FormLogin';

async function handleSubmit(obj, setMessageRequest, setShouldRedirect) {
  const { email, password } = obj;
  const body = {
    email,
    password,
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
const redirectPage = (role) => {
  const endpoint = (role === 'admin') ? "/admin/orders" : "/products";
  return <Redirect to={endpoint} />
}

function Login() {
  const [messageRequest, setMessageRequest] = useState();
  const [shouldRedirect, setShouldRedirect] = useState(false);
  if (getUser()) return redirectPage(getUser().role);
  if (shouldRedirect) return <Redirect to="/login" />;
  return (
    <div className="elementsRegister">
      {!messageRequest || <ReportComponent message={{ messageRequest, setMessageRequest }} callback={(value) => setShouldRedirect(value)} />}
      <FormLogin getValues={(obj) => { handleSubmit(obj, setMessageRequest, setShouldRedirect) }} />
      <Link to="/register" data-testid="no-account-btn">Quero me cadastrar</Link>
    </div>
  );
}

export default Login;
