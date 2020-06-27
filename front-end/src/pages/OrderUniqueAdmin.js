import React, { useState, useEffect } from 'react';
import { getUser } from '../service';
import useAxios from 'axios-hooks'
import NavBar from '../component/NavBar';
import OrderUnique from '../component/OrderUnique';

const updateStatus = (method, endpoint) => {
  return {
    url: `http://localhost:3001/admin/orders/${endpoint}`,
    method,
    headers: {
      'Content-Type': 'application/json',
      authorization: getUser().token
    }
  }
}

const fetchUpdate = (lastCharacter) => {
  fetch(updateStatus(`http://localhost:3001/admin/orders/${lastCharacter}`, {
    method: 'PUT', headers: {
      'Content-Type': 'application/json',
      authorization: getUser().token
    },
  }))
}

function OrderUniqueAdmin({ location: { pathname } }) {
  const [put, setPut] = useState(0);
  const newArray = pathname.split('');
  const lastCharacter = newArray[newArray.length - 1];

  const [{ data, loading, error }, refetch] = useAxios(updateStatus('GET', lastCharacter));

  useEffect(() => {
    if (data) fetchUpdate(lastCharacter)
  }, [put])

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!</p>
  console.log('free', data)

  return (
    <div>
      {/* <NavBar /> */}
      <button onClick={() => setPut(put + 1)}>refetch</button>
      <OrderUnique data={data} />
    </div>
  )
}

export default OrderUniqueAdmin;
