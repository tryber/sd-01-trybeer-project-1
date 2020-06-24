import React, { useContext, useEffect, useState } from 'react';
import Headers from '../component/Header';
import { TrybeerContext } from '../context';
import { fetchApi } from '../service/serviceFetch';
import { clearUser } from '../service/index';
import CardProduct from '../component/CardProduct';
import '../styles/CardProduct.css';
import { Redirect } from 'react-router-dom';


const requestProduct = (user) => ({
  endpoint: 'http://localhost:3001/products',
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    authorization: user.token,
  }
})

function Products({ location: { pathname } }) {
  const { user, products, setProducts } = useContext(TrybeerContext);
  const [isFetching, setIsFetching] = useState(false)
  const [isError, setIsError] = useState(false)
  useEffect(() => {
    if (!isFetching && user) {
      setIsFetching(true);
      fetchApi(requestProduct(user)).then((res) => {
        if (res.error) {
          clearUser();
          return setIsError(true);
        }
        setProducts(res);
        setIsFetching(false);
      })
    }
  }, [user]);

  if (isError) return <Redirect to="/" />

  return (
    <div className="Products">
      <Headers path={`${pathname}`} />
      {products.length !== 0 || <h2>Loading</h2>}
      {products.length > 0 &&
        <div className="list-products">
          {products.map((product, index) => <CardProduct key={product.id_product} index={index} attributes={product} />)}
        </div>
      }
    </div>
  );
}

export default Products;
