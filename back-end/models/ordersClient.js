const { connectionPromise } = require('../services/connectionPromise');
const tokenValid = require('../services/validJWT');

const createProductOrder = async (idOrder, orders) => {
  const resultOrder = await orders.map(({ id_product: idProduct, quantity }) => {
    const query = `call createProductOrder("${idOrder.id_order}", "${idProduct}", "${quantity}")`;
    return connectionPromise(query);
  });
  return resultOrder;
};

const createOrder = async (token, address, addressNumber, orders) => {
  const { id_user: idUser } = tokenValid(token);
  const query = `call createOrder("${idUser}", "${address}", "${addressNumber}")`;
  const result = await connectionPromise(query);
  return createProductOrder(result[0], orders);
};

const getListOrderClient = async (token) => {
  const { id_user: idUser } = tokenValid(token);
  const query = `call getAllDataOrderUser(${idUser})`;
  const data = await connectionPromise(query);
  return data;
};

const getOrderPriceTotal = async (id) => {
  const queryFunction = `SELECT priceOrderTotal("${id}") AS priceTotal`;
  return connectionPromise(queryFunction);
};

const getOrderClient = async (token, id) => {
  const { id_user: idUser } = tokenValid(token);
  const query = `call getProductsInOrder("${id}", "${idUser}")`;
  const data = await connectionPromise(query);

  if (data.length === 0) return false;
  const { priceTotal } = await getOrderPriceTotal(id);
  data.push({ priceTotal });
  console.log(data[0].price)

  return data;
};

module.exports = {
  createOrder,
  getListOrderClient,
  getOrderClient,
};
