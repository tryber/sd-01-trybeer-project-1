import React from 'react';

function CardOrders({ orders }) {
  const { Total, address, address_number, data, id_order, status } = orders;

  console.log(id_order);

  return (
    <div>
      <p data-testid={`${id_order}-order-number`}> Pedido {id_order}</p>
      <p data-testid={`${id_order}-order-address`}>Endereço: {address}, {address_number}</p>
      <p>Data de Compra: {data}</p>
      <p>Status: {status === 0 ? 'Pendente' : 'Entregue' }</p>
      <p data-testid={`${id_order}-order-total-value`}>Total: R${Total}</p>
    </div>
  );
};

export default CardOrders;
