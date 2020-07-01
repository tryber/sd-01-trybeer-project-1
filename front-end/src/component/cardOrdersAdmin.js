import React from 'react';
import '../styles/CardOrder.css'

function CardOrders({ index, orders }) {
  const { Total, address, address_number, data, id_order, status } = orders;

  return (
    <section className="card">
      <p data-testid={`${index}-order-number`}> Pedido {id_order}</p>
      <p data-testid={`${index}-order-address`}>Endereço: {address}, {address_number}</p>
      <p> Data de Compra: {data}</p>
      <p> Status: {status === 0 ? 'Pendente' : 'Entregue'}</p>
      <p data-testid={`${index}-order-total-value`}>Total: R${Total}</p>
    </section>
  );
};

export default CardOrders;
