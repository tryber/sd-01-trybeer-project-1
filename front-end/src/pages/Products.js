import React, { useContext, useEffect, useState } from 'react';
import Headers from '../component/Header';
import { TrybeerContext } from '../context';
import CardProduct from '../component/CardProduct';
import '../styles/CardProduct.css';
import { Redirect } from 'react-router-dom';

function Products({ location: { pathname } }) {
  const { user, products, isFetching, fetchProducts, isError, carBuyer } = useContext(TrybeerContext);
  const [done, setDone] = useState(false);
  useEffect(() => {
    fetchProducts();
  }, [user]);

  if (isError) return <Redirect to="/" />
  if (done) return <Redirect to="/checkout" />
  return (
    <div className="Products">
      <Headers path={`${pathname}`} />
      {!isFetching || <h2>Loading</h2>}
      {(products.length > 0 && !isFetching) &&
        <div className="list-products">
          {products.map((product, index) => <CardProduct key={product.id_product} index={index} attributes={product} />)}
          <button type="button" className="btn-checkout" data-testid="checkout-bottom-btn"
            disabled={carBuyer.total === 0} onClick={() => setDone(true)}
          >
            Ver carrinho<span data-testid="checkout-bottom-btn-value">{`R$ ${carBuyer.total}`}</span>
          </button>
        </div>
      }
    </div>
  );
}

export default Products;
