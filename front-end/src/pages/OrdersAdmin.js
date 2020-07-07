import React, { useEffect, useState } from 'react';
import { getUser } from '../service/index';
import NavBar from '../component/NavBar';
import CardOrdersAdmin from '../component/cardOrdersAdmin';
import '../styles/loader.css';
import '../styles/OrderUniqueAdmin.css';

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

  if (isFetching) {
    return <section className="container">
      <NavBar />
      <h1 className="loader"></h1>
    </section>;
  }

  return (
    <section className="OrderUniqueAdmin">
      <NavBar />
      <section className="statusOrder">
        {ordersAdmin && ordersAdmin.map((result, index) => <CardOrdersAdmin orders={result} index={index} key={index} />)}
      </section>
    </section>
  );
}

export default Orders;
