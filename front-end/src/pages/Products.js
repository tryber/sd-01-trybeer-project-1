import React, { useContext, useEffect } from 'react';
import Headers from '../component/Header';
import { TrybeerContext } from '../context';
import CardProduct from '../component/CardProduct';
import '../styles/CardProduct.css';
import { Redirect } from 'react-router-dom';

function Products({ location: { pathname } }) {
  const { user, products, isFetching, fetchProducts, isError } = useContext(TrybeerContext);
  useEffect(() => {
    fetchProducts();
  }, [user]);

  if (isError) return <Redirect to="/" />

  return (
    <div className="Products">
      <Headers path={`${pathname}`} />
      {!isFetching || <h2>Loading</h2>}
      {(products.length > 0 && !isFetching) &&
        <div className="list-products">
          {products.map((product, index) => <CardProduct key={product.id_product} index={index} attributes={product} />)}
        </div>
      }
    </div>
  );
}

export default Products;
