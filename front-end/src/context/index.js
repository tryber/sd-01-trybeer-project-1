import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';

const TrybeerContext = createContext();

const TrybeerProvider = ({ children }) => {
  // const [data, setData] = useState({ Reddit: [], time:getDate(), isFinished: false });
  // const [type, setType] = useState('frontend');
  // const [error, setError] = useState(false);
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState();
  const [carBuyer, setCarBuyer] = useState({
    list: [],
    total: 0,
  });

  const context = {
    carBuyer,
    user,
    setCarBuyer,
    setUser,
    products,
    setProducts,
  };
  console.log(carBuyer)
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
