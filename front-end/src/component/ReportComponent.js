import React from 'react';
const verifyStatusMessage = (message) => {
  const obj = {
    'Invalid Fields': 'failure',
    'The email already registered': 'failure',
    'Registered successfully.': 'success',
  }
  return obj[message];
}

function ReportComponent({ message, callback }) {
  const { messageRequest, setMessageRequest } = message;
  setTimeout(() => {
    if (verifyStatusMessage(messageRequest) === 'failure') return setMessageRequest();
    callback(true);
  }, 3000);
  return (
    <div className="ReportComponent">
      <h2 data-testid="message-report" className={verifyStatusMessage(messageRequest)}>{messageRequest}</h2>
      {verifyStatusMessage(messageRequest) === 'success' && <h3>Redirecionando para pagina de login</h3>}
    </div>
  );
}

export default ReportComponent;
