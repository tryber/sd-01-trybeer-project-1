exports.getTitle = (path, idExist) => {
  if (idExist) return 'Detalhes de Pedido';
  const titles = {
    orders: 'Meus Pedidos',
    profile: 'Meu perfil',
    checkout: 'Finalizar',
    products: 'Trybeer',
  };
  return titles[path];
};
