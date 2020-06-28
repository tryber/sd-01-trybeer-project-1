import React from 'react';
import CarItem from './CarItem';

function ListCar({ car }) {
  return (
    <div className="ListCar">
      <h2>Produtos</h2>
      {
        car.list.map((item, index) => (
          <CarItem key={`car-${index}`} index={index} attributes={item} />
        ))
      }
      <h2>{Number(car.total).toFixed(2).toLocaleString('pt-BR')}</h2>
    </div>
  );
}

export default ListCar;
