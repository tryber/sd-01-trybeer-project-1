import React from 'react';
const verifyStatusMessage = (message) => {
  const obj = {
    'Invalid Fields': 'stay',
    'The email already registered': 'stay',
    'Registered successfully.': 'redirect',
    'Update Success': 'stay',
    'Atualizado com sucesso': 'stay',
    'Invalid name':'stay',
  }
  return obj[message];
}

function ReportComponent({ message, callback }) {
  const { messageRequest, setMessageRequest } = message;
  setTimeout(() => {
    console.log(messageRequest)
    if (verifyStatusMessage(messageRequest) === 'stay') return setMessageRequest();
    if(callback) callback(true);
  }, 3000);
  return (
    <div className="ReportComponent">
      <h2 data-testid="message-report" className={verifyStatusMessage(messageRequest)}>{messageRequest+''}</h2>
      {verifyStatusMessage(messageRequest) === 'redirect' && <h3>Redirecionando para pagina de login</h3>}
    </div>
  );
}

export default ReportComponent;
