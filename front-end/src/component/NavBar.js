import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { clearUser } from '../service';
import '../styles/NavBar.css';

const logout = (callback) => {
  clearUser();
  callback(true);
};

const linksCliente = (setOut) => (
  <div className="NavBar">
    <div className="links">
      <Link to="/products" data-testid="side-menu-item-products">Produtos</Link>
      <Link to="/orders" data-testid="side-menu-item-my-orders">Meus pedidos</Link>
      <Link to="/profile" data-testid="side-menu-item-my-profile">Meu Perfil</Link>
    </div>
    <input className="checkout" type="button" data-testid="side-menu-item-logout" value="Sair" onClick={() => logout(setOut)} />
  </div>
);

function NavBar({ type }) {
  const [out, setOut] = useState(false);
  if (out) return <Redirect to="/login" />
  if (type === 'cliente') return linksCliente(setOut);
  return (
    <div className="NavBar admin">
      <h2>Trybeer</h2>
      <div className="links">
        <Link to="/admin/orders" data-testid="side-menu-item-orders">Pedidos</Link>
        <Link to="/admin/profile" data-testid="side-menu-item-profile">Perfil</Link>
      </div>
      <input className="checkout" type="button" data-testid="side-menu-item-logout" value="Sair" onClick={() => logout(setOut)} />
    </div>
  );
}

export default NavBar;
