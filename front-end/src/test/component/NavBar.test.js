import React from 'react';
import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import NavBar from '../../component/NavBar';

function renderWithRouter(
  ui,
  { route = '/', history = createMemoryHistory({ initialEntries: [route] }) } = {},
) {
  return {
    ...render(<Router history={history}>{ui}</Router>),
    history,
  };
}

describe('Verifica requisitos projeto', () => {
  test('data-test-id quando está no cliente', () => {
    const { getByTestId } = renderWithRouter(<NavBar type="cliente" />);

    const linkProduct = getByTestId('side-menu-item-products');
    const linkMyPerfil = getByTestId('side-menu-item-my-profile');
    const linkMyOrders = getByTestId('side-menu-item-my-orders');
    const linkLogout = getByTestId('side-menu-item-logout');

    expect(linkProduct).toBeInTheDocument();
    expect(linkMyPerfil).toBeInTheDocument();
    expect(linkMyOrders).toBeInTheDocument();
    expect(linkLogout).toBeInTheDocument();
  });

  test('data-test-id quando está no Admin', () => {
    const { getByTestId } = renderWithRouter(<NavBar type="admin" />);

    const linkMyPerfil = getByTestId('side-menu-item-profile');
    const linkMyOrders = getByTestId('side-menu-item-orders');
    const linkLogout = getByTestId('side-menu-item-logout');

    expect(linkMyPerfil).toBeInTheDocument();
    expect(linkMyOrders).toBeInTheDocument();
    expect(linkLogout).toBeInTheDocument();
  });
});
