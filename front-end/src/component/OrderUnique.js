import React from 'react';

const OrderUnique = (props) => {
  const { dataProducts, dataPurchase } = props.data;

  return (
    <div>
      {dataProducts.map(products => <ul><li key={products.name_product}>{products.name_product}</li></ul>)}
      <section>Status: {dataPurchase[0].status}</section>
    </div>
  )
}

export default OrderUnique;
