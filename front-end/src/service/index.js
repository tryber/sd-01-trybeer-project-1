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

exports.saveUser = (user) => {
  const itemJson = JSON.stringify(user);
  localStorage.setItem('user', itemJson);
}

exports.clearUser = () => {
  localStorage.removeItem('user');
}

