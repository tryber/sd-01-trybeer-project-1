import React, { useEffect, useState } from 'react';
import { getUser } from '../service/index';
import CardOrdersAdmin from '../component/cardOrdersAdmin';

function HeaderAuthorization() {
  const token = getUser().token;
  return {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token
    },
  }
}

const getOrders = async () => {
  const url = 'http://localhost:3001/admin/orders';

  const response = await fetch(url, HeaderAuthorization());
  const data = await response.json();
  return data;
}

function Orders() {
  const [ordersAdmin, setOrdersAdmin] = useState();
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    if (!isFetching && !ordersAdmin) {
      setIsFetching(true);
      getOrders().then(result => {
        setOrdersAdmin(result);
        setIsFetching(false);
      });
    }
  }, [isFetching]);

  if (isFetching) return <h1>Loading...</h1>;

  return (
    <div>
      {ordersAdmin && ordersAdmin.map((result, index) => <CardOrdersAdmin orders={result} key={index} />)}
    </div>
  );
}

export default Orders;
