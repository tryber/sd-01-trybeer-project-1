import React from 'react';
import Inputs from './Inputs';

function Forms({ elements, className = "default", handleSubmit }) {
  return (
    <div className="Forms">
      <form className={className} onSubmit={handleSubmit}>
        {elements.map((element,index) => <Inputs key={index} attributes={element} />)}
      </form>
    </div>
  );
}

export default Forms;
