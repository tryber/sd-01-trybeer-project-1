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

const getTotalCar = car => car.reduce((acc, product) => acc + (product.qtd * product.price), 0);

exports.addItemInCarBuyer = (ObjCarBuyer, objProduct) => {
  const { list } = ObjCarBuyer;
  const { qtd, id } = objProduct;
  const getItem = list.find(product => product.id === id);
  if (!getItem) {
    list.push(objProduct);
    return { list, total: getTotalCar(list) }
  }
  getItem.qtd = qtd;
  return { list, total: getTotalCar(list) }
}
