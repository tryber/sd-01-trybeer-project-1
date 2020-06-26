import React from 'react';

function CardOrders({ orders }) {
  const { Total, address, address_number, data, id_order, status } = orders;

  return (
    <div>
      <p>Total: {Total}</p>
      <p>Endereço: {address}</p>
      <p>Número: {address_number}</p>
      <p>Data de Compra: {data}</p>
      <p>Pedido {id_order}</p>
      <p>Status: {status === 0 ? 'Pendente' : 'Entregue' }</p>
    </div>
  )
}

export default CardOrders;
