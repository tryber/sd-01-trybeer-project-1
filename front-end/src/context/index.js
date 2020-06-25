
import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';
import { fetchApi, requestWithToken } from '../service/serviceFetch';
import { clearUser } from '../service/index';
import { saveCar, getCar } from '../service/CarBuyer';

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

  const fetchProducts = async () => {
    if (isFetching || !user) return
    setIsFetching(true);
    const res = await fetchApi(requestWithToken(user));
    if (res.error) return resetUser(setIsError, setUser);
    setProducts(res);
    setIsFetching(false);
  }
  const verifyCarBuyer = () => {
    const car = getCar();
    if (car) return setCarBuyer(car);
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
    fetchProducts,
    isError,
    setIsError,
    verifyCarBuyer
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
