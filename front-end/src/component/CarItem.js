import React, { useContext } from 'react';
import { addItemInCarBuyer } from '../service/CarBuyer';
import { TrybeerContext } from '../context';
import '../styles/CardProduct.css'

function CarItem({ index, attributes }) {
  const { id, name, price, qtd } = attributes;
  const { saveCarBuyer, carBuyer } = useContext(TrybeerContext);
  return (
    <div className="CarItem">
      <input type="number" className="input-qtd" min="0" value={qtd} data-testid={`${index}-product-qtd`} onChange={(e) => saveCarBuyer(addItemInCarBuyer(carBuyer, { id, name, price, qtd: Number(e.target.value) }))} />
      <h2 data-testid={`${index}-product-name`} className="product-name">{name}</h2>
      <h2 className="product-price" data-testid={`${index}-product-total-value`}>{`R$ ${(price * qtd).toFixed(2).toLocaleString('pt-BR')}`}</h2>
      <input type="button" className="btn-qtd" value="X" data-testid={`${index}-product-plus`} onClick={() => saveCarBuyer(addItemInCarBuyer(carBuyer, { id, name, price, qtd: 0 }))} />
    </div>
  );
}

export default CarItem;
