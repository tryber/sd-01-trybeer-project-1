import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';
import { fetchApi, requestWithToken } from '../service/serviceFetch';
import { clearUser } from '../service/index';
import { saveCar, getCar } from '../service/CarBuyer';

const TrybeerContext = createContext();

const TrybeerProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState();
  const [isError, setIsError] = useState(false);
  const [isFetching, setIsFetching] = useState(false)
  const [carBuyer, setCarBuyer] = useState({ list: [], total: 0, });
  const fetchProducts = () => {
    if (!isFetching && user) {
      setIsFetching(true);
      fetchApi(requestWithToken(user)).then((res) => {
        if (res.error) {
          clearUser();
          setUser();
          return setIsError(true);
        }
        setProducts(res);
        setIsFetching(false);
      })
    }
  }
  const verifyCarBuyer = () => (getCar()) ? setCarBuyer(getCar()) : setCarBuyer({ list: [], total: 0, });
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
