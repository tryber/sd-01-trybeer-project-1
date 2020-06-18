import React, { useState } from 'react';
import NavBar from './NavBar';
import { getTitle } from '../service';

function Header({ path, id }) {
  const [displayNav, setDisplayNav] = useState(false);
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
