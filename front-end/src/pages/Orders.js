import React, { useContext, useEffect } from 'react';
import Headers from '../component/Header';
import { TrybeerContext } from '../context';
import { Redirect } from 'react-router-dom';
import CardOrder from '../component/CardOrder';
import '../styles/Orders.css';
import { getUser } from '../service';

function Orders({ location: { pathname } }) {
  const { user, orders, isFetching, fetchContext, isError } = useContext(TrybeerContext);
  useEffect(() => {
    fetchContext('orders');
  }, [user]);
  if (isError) return <Redirect to="/" />
  if (!getUser()) return <Redirect to="/" />
  return (
    <div className="Orders">
      <Headers path={`${pathname}`} />
      {!isFetching || <h2>Loading</h2>}
      {(!orders.message && orders.length > 0 && !isFetching) &&
        <div className="list-orders">
          {orders.map((order, index) => <CardOrder key={order.id_order} index={index} attributes={order} />)}
        </div>
      }
      {orders && orders.message &&
        <h2 className="message-orders">Nenhum Pedido encontrado.</h2>
      }
    </div>
  );
}

export default Orders;
