const getTotalCar = car => car.reduce((acc, product) => acc + (product.qtd * product.price), 0);

const removeProduct = (car, id) => {
  return car.filter(product => product.id !== id);
}

exports.addItemInCarBuyer = (ObjCarBuyer, objProduct) => {
  const { list } = ObjCarBuyer;
  const { qtd, id } = objProduct;
  if (qtd <= 0) {
    const updatedCar = removeProduct(list, id);
    return { list: updatedCar, total: getTotalCar(updatedCar) }
  }
  const getItem = list.find(product => product.id === id);
  if (!getItem) {
    list.push(objProduct);
    return { list, total: getTotalCar(list) }
  }
  getItem.qtd = qtd;
  return { list, total: getTotalCar(list) }
}

exports.saveCar = (car) => {
  const itemJson = JSON.stringify(car);
  localStorage.setItem('car', itemJson);
}

exports.clearCar = () => {
  localStorage.removeItem('user');
}
