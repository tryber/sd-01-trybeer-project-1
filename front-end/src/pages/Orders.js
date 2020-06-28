import React from 'react';
import Headers from '../component/Header';
import useAxios from 'axios-hooks';
import { Redirect } from 'react-router-dom';
import CardOrder from '../component/CardOrder';
import '../styles/Orders.css';
import { getUser, verifyUser } from '../service';

function Orders({ location: { pathname } }) {
  const user = getUser();
  const [{ data, loading, error }] = useAxios({
    url: `http://localhost:3001/orders`,
    method: 'GET',
    headers: { authorization: verifyUser(user), }
  })
  if (!getUser()) return <Redirect to="/" />
  if (error || (data && data.message)) return <Redirect to="/" />
  return (
    <div className="Orders">
      <Headers path={`${pathname}`} />
      {!loading || <h2>Loading</h2>}
      {loading ||
        <div className="list-orders">
          {data.map((order, index) => <CardOrder key={`order-${order.id_order}`} index={index} att={order} />)}
        </div>
      }
      {data && data.message &&
        <h2 className="message-orders">Nenhum pedido encontrado.</h2>
      }
    </div>
  );
}

export default Orders;
