import React from 'react';
import Headers from '../component/Header';
import { Redirect } from 'react-router-dom';
import '../styles/Orders.css';
import { getUser } from '../service';
import useAxios from 'axios-hooks';


function OneOrder({ match }) {
  const { params: { id }, url } = match;
  const [{ data, loading, error }, refetch] = useAxios({
    url: `http://localhost:3001/orders/${id}`,
    method: 'GET',
    headers: { authorization: getUser().token, }
  })
  console.log(data)
  if (error) return <Redirect to="/" />
  if (!getUser()) return <Redirect to="/" />
  return (
    <div className="Orders">
      <Headers id={id}/>
      {!loading || <h2>Loading</h2>}
      {loading || 
        <div className="list-orders">
          <h2>{data.dataPurchase.id_order}</h2><h3>{data.dataPurchase.date}</h3>
          {data.dataProducts.map((item, index) => (
          <div>
            <h2>{item.name_product}</h2>
            <h2>{item.price}</h2>
            <h2>{item.quantity}</h2>
            <h2>{item.total}</h2>
          </div>
          ))}
          <h2>{`Preço total: ${data.dataPurchase.priceTotal}`}</h2>
        </div>
      }
    </div>
  );
}

export default OneOrder;
