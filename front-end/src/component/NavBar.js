import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';

const logout = (callback) => {
  console.log('FUNCTION clearDATA')
  callback(true)
}

const linksCliente = (setOut) => (
  <div className="NavBar">
    <Link to="/products" data-testid="side-menu-item-products">Produtos</Link>
    <Link to="/orders" data-testid="side-menu-item-my-orders">Meus pedidos</Link>
    <Link to="/profile" data-testid="side-menu-item-my-profile">Meu Perfil</Link>
    <input type="button" data-testid="side-menu-item-logout" value="Sair" onClick={() => logout(setOut)} />
  </div>
);

function NavBar({ type }) {
  const [out, setOut] = useState(false);
  if (out) return <Redirect to="/login" />
  if (type === 'cliente') return linksCliente(setOut);
  return (
    <div className="NavBar">
      <Link to="/admin/orders" data-testid="side-menu-item-orders">Pedidos</Link>
      <Link to="/admin/profile" data-testid="side-menu-item-profile">Perfil</Link>
      <input type="button" data-testid="side-menu-item-logout" value="Sair" onClick={() => logout(setOut)} />
    </div>
  );
}

export default NavBar;
