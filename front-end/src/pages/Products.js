import React, { useContext } from 'react';
import Headers from '../component/Header';
import { TrybeerContext } from '../context';


function Products() {
  const path = "products"
  const { user } = useContext(TrybeerContext);
  console.log(user,'Product')
  return (
    <div className="Products">
      <Headers path={path} />
    </div>
  );
}

export default Products;
