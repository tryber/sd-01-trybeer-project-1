import React, { useState, useContext, useEffect } from 'react';
import Headers from '../component/Header';
import { TrybeerContext } from '../context';
import { fetchApi } from '../service/serviceFetch';
import ReportComponent from '../component/ReportComponent';
import { getUser } from '../service';
import '../styles/Checkout.css';
import ListCar from '../component/ListCar';
import FormCheckout from '../component/FormCheckout';

async function handleSubmit(obj, setMessageRequest, orders) {
  const { address, addressNumber } = obj;
  const body = {
    address,
    addressNumber,
    orders
  };
  const data = await fetchApi({
    endpoint: 'http://localhost:3001/checkout',
    method: 'POST',
    body,
    headers: {
      'Content-Type': 'application/json',
      authorization: getUser().token,
    }
  });
  setMessageRequest((data.message));
}

function Checkout() {
  const { carBuyer } = useContext(TrybeerContext);
  const [messageRequest, setMessageRequest] = useState();
  console.log(carBuyer.list.length)
  return (
    <div className="Checkout">
      <Headers path="/profile" />
      <div className="body-checkout">
        {!carBuyer || carBuyer.list.length === 0 || <ListCar car={carBuyer} />}
        {!carBuyer || carBuyer.list.length === 0 && <h2>Carrinho vazio</h2>}
        <FormCheckout getValues={(obj) => { handleSubmit(obj, setMessageRequest, carBuyer.list) }} valid={carBuyer.list.length === 0} />
        {!messageRequest || <ReportComponent message={{ messageRequest, setMessageRequest }} />}
      </div>
    </div>
  );
}

export default Checkout;
