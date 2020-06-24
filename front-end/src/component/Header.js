import React, { useState, useContext, useEffect } from 'react';
import NavBar from './NavBar';
import { getTitle, getUser } from '../service';
import { Redirect } from 'react-router-dom';
import { TrybeerContext } from '../context';

function Header({ path, id }) {
  const [displayNav, setDisplayNav] = useState(false);
  const { setUser } = useContext(TrybeerContext);
  useEffect(() => {
    const dataUser = getUser();
    console.log(dataUser)
    if (!dataUser) return <Redirect to="/" />;
    setUser(dataUser)
  }, [])

  return (
    <div className="Header">
      <div>
        <input type="button" data-testid="top-hamburguer" onClick={() => setDisplayNav(!displayNav)} />
        <h2 data-testid="top-title" >{getTitle(path, id)}</h2>
      </div>
      {displayNav && <NavBar type="cliente" />}
    </div>
  );
}

export default Header;
