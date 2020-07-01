import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';
import { clearUser } from '../service/index';
import { saveCar } from '../service/CarBuyer';

const TrybeerContext = createContext();

const resetUser = (setIsError, setUser) => {
  clearUser();
  setUser();
  return setIsError(true);
}

const TrybeerProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [carBuyer, setCarBuyer] = useState({ list: [], total: 0, });

  const saveCarBuyer = (obj) => {
    saveCar(obj);
    setCarBuyer(obj);
  }
  const context = {
    carBuyer,
    user,
    saveCarBuyer,
    setUser,
    setCarBuyer,
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
