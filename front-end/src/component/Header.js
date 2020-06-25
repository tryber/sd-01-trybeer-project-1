import React, { useState, useContext, useEffect } from 'react';
import NavBar from './NavBar';
import { getTitle, getUser } from '../service';
import {verifyCarBuyer} from '../service/CarBuyer'
import { Redirect } from 'react-router-dom';
import { TrybeerContext } from '../context';
import '../styles/Header.css';

function Header({ path, id }) {
  const [displayNav, setDisplayNav] = useState(false);
  const { setUser, setCarBuyer } = useContext(TrybeerContext);
  useEffect(() => {
    const dataUser = getUser();
    if (!dataUser) return <Redirect to="/" />;
    verifyCarBuyer(setCarBuyer);
    setUser(dataUser)
  }, [])

  return (
    <div className="Header">
      <input type="button" data-testid="top-hamburguer" value="N" onClick={() => setDisplayNav(!displayNav)} />
      <h2 data-testid="top-title" >{getTitle(path, id)}</h2>
      {displayNav && <NavBar type="cliente" />}
    </div>
  );
}

export default Header;
