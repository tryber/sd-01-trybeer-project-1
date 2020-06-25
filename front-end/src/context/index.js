import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';
import { fetchApi, requestWithToken } from '../service/serviceFetch'
import { clearUser } from '../service/index'

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

  const context = {
    carBuyer,
    user,
    setCarBuyer,
    setUser,
    products,
    setProducts,
    isFetching,
    fetchProducts,
    isError,
    setIsError
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
