import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';
import { fetchApi, requestWithToken } from '../service/serviceFetch';
import { clearUser } from '../service/index';
import { saveCar } from '../service/CarBuyer';

const TrybeerContext = createContext();

const resetUser = (setIsError, setUser) => {
  clearUser();
  setUser();
  return setIsError(true);
}

const TrybeerProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState();
  const [isError, setIsError] = useState(false);
  const [isFetching, setIsFetching] = useState(false)
  const [carBuyer, setCarBuyer] = useState({ list: [], total: 0, });
  const [profileAdmin, setProfileAdmin] = useState();
  const [orders, setOrders] = useState([]);
  
  const typeSetContext = (value, type) => {
    const obj = {
      products: setProducts(value),
      orders: setOrders(value),
    };
    return obj[type];
  }

  const fetchContext = async (endpoint, method = 'GET', body) => {
    if (isFetching || !user) return
    setIsFetching(true);
    const res = await fetchApi(requestWithToken(user, endpoint, method, body));
    if (res.error) return resetUser(setIsError, setUser);
    typeSetContext(res, endpoint);
    setIsFetching(false);
  }
  const saveCarBuyer = (obj) => {
    saveCar(obj);
    setCarBuyer(obj);
  }
  const context = {
    carBuyer,
    user,
    saveCarBuyer,
    setUser,
    products,
    setProducts,
    isFetching,
    fetchContext,
    isError,
    setIsError,
    setCarBuyer,
    orders,
    setOrders,
  };

  return (
    <TrybeerContext.Provider value={context}>
      {children}
    </TrybeerContext.Provider>
  );
};

export { TrybeerContext, TrybeerProvider as Provider };

TrybeerProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
