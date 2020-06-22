import React from 'react';
import Inputs from './Inputs';

const elementsDefault = [
  {
    type:"email",
    name:"email",
    label:"Email:",
    dataTestId:"email",
    isRequired:true,
  },
  {
    type:"password",
    name:"password",
    label:"Senha:",
    dataTestId:"password",
    isRequired:true,
    pattern:"^[0-9]{6,20}$"
  },
  {
    label:"checkbox",
    type:"checkbox",
    name:"teste3",
  },
  {
    type:"submit",
    value:"Entrar",
  }
]



function Forms({ elements=elementsDefault, className = "default", handleSubmit }) {
  return (
    <div className="Forms">
      <form className={className} onSubmit={e => handleSubmit(e)}>
        {elements.map(element => <Inputs attributes={element} />)}
      </form>
    </div>
  );
}

export default Forms;
