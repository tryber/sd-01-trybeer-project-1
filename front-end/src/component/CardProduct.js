import React, { useContext } from 'react';
import { addItemInCarBuyer } from '../service/CarBuyer';
import { TrybeerContext } from '../context';
import '../styles/CardProduct.css'


function CardProduct({ index, attributes }) {
  const { price, name_product: name, image, id_product: id } = attributes;
  const { saveCarBuyer, carBuyer } = useContext(TrybeerContext);
  const infoProductCar = carBuyer.list.find(product => product.id === id);
  const qtd = (infoProductCar) ? infoProductCar.qtd : 0;
  return (
    <div className="CardProduct">
      <h3 data-testid={`${index}-product-price`}>{`R$ ${price.toLocaleString('pt-BR')}`}</h3>
      <div className="img-product">
        <img data-testid={`${index}-product-img`} src={image} alt={`Product ${name}`} />
      </div>
      <h2 data-testid={`${index}-product-name`} className="product-name">{name}</h2>
      <div className="div-qtd">
        <input type="button" value="-" disabled={qtd === 0} data-testid={`${index}-product-minus`} onClick={() => saveCarBuyer(addItemInCarBuyer(carBuyer, { id, name, price, qtd: qtd - 1 }))} />
        <input type="number" min="0" value={qtd} data-testid={`${index}-product-qtd`} onChange={(e) => saveCarBuyer(addItemInCarBuyer(carBuyer, { id, name, price, qtd: Number(e.target.value) }))} />
        <input type="button" value="+" data-testid={`${index}-product-plus`} onClick={() => saveCarBuyer(addItemInCarBuyer(carBuyer, { id, name, price, qtd: qtd + 1 }))} />
      </div>
    </div>
  );
}

export default CardProduct;
