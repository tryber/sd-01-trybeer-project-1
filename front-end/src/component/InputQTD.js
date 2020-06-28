import React from 'react';

const InputQTD = ({ index, callback, qtd }) => (
  <input type="number" className="input-qtd" min="0" value={qtd} data-testid={`${index}-product-qtd`} onChange={(e) => callback(e.target.value)} />
);

export default InputQTD;
