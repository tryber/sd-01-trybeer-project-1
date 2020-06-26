import React from 'react';
import { Link } from 'react-router-dom';

function CardOrder({ index, attributes }) {
  const { id_order: idOrder, total, date } = attributes;
  console.log(attributes)
  return (
    <div className="CardOrder">
      <Link to={`/order/${idOrder}`}>
        <h2 className="order-id" data-testid={`${index}-order-number`}>{`Pedido: ${idOrder}`}</h2>
        <h3 className="order-price" data-testid={`${index}-order-total-value`}>{`${total.toFixed(2).toLocaleString('pt-BR')}`}</h3>
        <h3 data-testid={`${index}order-date`} className="order-data">{date}</h3>
      </Link>
    </div>
  );
}

export default CardOrder;
