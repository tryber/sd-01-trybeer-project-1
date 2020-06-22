import React, { useContext } from 'react';
import { addItemInCarBuyer } from '../service/index';
import { TrybeerContext } from '../context';


function CardProduct({ index, attributes }) {
  const { price, name, img, id } = attributes;
  const { setCarBuyer, carBuyer } = useContext(TrybeerContext);
  const infoProductCar = carBuyer.list.find(product => product.id === id);
  const qtd = (infoProductCar) ? infoProductCar.qtd : 0;

  return (
    <div className="CardProduct">
      <h3 data-testid={`${index}-product-price`}>{`R$ ${price.toLocaleString('pt-BR')}`}</h3>
      <img data-testid={`${index}-product-img`} src={img} alt={`Product ${name}`} />
      <h2 data-testid={`${index}-product-name`}>{name}</h2>
      <div>
        <input type="button" value="-" data-testid={`${index}-product-minus`} onClick={() => setCarBuyer(addItemInCarBuyer(carBuyer, { id, name, price, qtd: qtd - 1 }))} />
        <input type="number" value={qtd} data-testid={`${index}-product-qtd`} onChange={(e) => setCarBuyer(addItemInCarBuyer(carBuyer, { id, name, price, qtd: Number(e.target.value) }))} />
        <input type="button" value="+" data-testid={`${index}-product-plus`} onClick={() => setCarBuyer(addItemInCarBuyer(carBuyer, { id, name, price, qtd: qtd + 1 }))} />
      </div>
    </div>
  );
}

export default CardProduct;
