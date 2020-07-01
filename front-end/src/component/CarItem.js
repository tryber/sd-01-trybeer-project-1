import React, { useContext } from 'react';
import { addItemInCarBuyer } from '../service/CarBuyer';
import { TrybeerContext } from '../context';
import InputQTD from '../component/InputQTD';
import '../styles/CardProduct.css'

function CarItem({ index, attributes }) {
  const { id, name, price, qtd } = attributes;
  const { saveCarBuyer, carBuyer } = useContext(TrybeerContext);
  return (
    <div className="CarItem">
      <label>
      </label>
      Quantidade: <InputQTD dataTest={`${index}-product-qtd-input`} qtd={qtd} callback={(value) => saveCarBuyer(addItemInCarBuyer(carBuyer, { id, name, price, qtd: Number(value) }))} />
      <h2 data-testid={`${index}-product-name`} className="product-name">Nome: {name}</h2>
      <h2 className="product-price" data-testid={`${index}-product-total-value`}>{`R$ ${(price * qtd).toFixed(2).toLocaleString('pt-BR')}`}</h2>
      <input type="button" className="btn-qtd" value="Remover" data-testid={`${index}-btn-remove-product`} onClick={() => saveCarBuyer(addItemInCarBuyer(carBuyer, { id, name, price, qtd: 0 }))} />
    </div>
  );
}

export default CarItem;
