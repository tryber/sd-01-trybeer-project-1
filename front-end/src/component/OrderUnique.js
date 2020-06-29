import React from 'react';

const statusOrder = (status) => {
  if (status === 0) return 'Pendente';
  return 'Entregue';
}

const OrderUnique = (props) => {
  if (props.data.message) return 'Pedido não registrado';

  const { dataProducts, dataPurchase } = props.data;
  const { id_order: idOrder, name, priceTotal, status } = dataPurchase[0];

  return (
    <div>
      <h1>Pedido {idOrder} - {statusOrder(status)}</h1>
      <h3>Cliente: {name}</h3>
      <ul>
        {dataProducts.map(({ name_product, price, quantity }) =>
          <li key={name_product}>{quantity} - {name_product} R${price.toFixed(2).toLocaleString('pt-BR')}</li>)}
      </ul>
      <section>Status: {status}</section>
      <section>Total: R$ {priceTotal.toFixed(2).toLocaleString('pt-BR')}</section>
    </div>
  )
}

export default OrderUnique;
