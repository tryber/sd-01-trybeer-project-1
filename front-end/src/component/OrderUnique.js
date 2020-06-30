import React from 'react';

const statusOrder = (status) => {
  if (status === 0) return 'Pendente';
  return 'Entregue';
}

const orderProducts = (dataProducts) => (
  <ul>
    {dataProducts.map(({ name_product, price, quantity }, index) =>
      <li key={name_product}>
        <span data-testid={`${index}-product-qtd`}>
          {quantity}
        </span>
        <span data-testid={`${index}-product-name`}>
          - {name_product} R$
        </span>
        <span data-testid={`${index}-product-total-value`}>
          {` ${price.toFixed(2).toLocaleString('pt-BR')}`}
        </span>
      </li>)
    }
  </ul>
)

const OrderUnique = (props) => {
  if (props.data.message) return 'Pedido não registrado';

  const { dataProducts, dataPurchase } = props.data;
  const { id_order: idOrder, name, priceTotal, status } = dataPurchase[0];

  return (
    <div>
      <h1 data-testid="order-number" data-testid="order-status">
        <span data-testid="order-number">Pedido {idOrder}</span>
        <span data-testid="order-status"> - {statusOrder(status)}</span>
      </h1>
      <h3>Cliente: {name}</h3>
      {orderProducts(dataProducts)}
      <section data-testid="order-total-value">
        Total: R$ {priceTotal.toFixed(2).toLocaleString('pt-BR')}
      </section>
    </div>
  )
}

export default OrderUnique;
