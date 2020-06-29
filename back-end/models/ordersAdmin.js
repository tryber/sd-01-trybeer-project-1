const { connectionPromise } = require('../services/connectionPromise');
const { formatDate } = require('../services/utils');

const getAllDataOrder = async () => {
  const query = 'call getAllDataOrder()';
  const result = await connectionPromise(query);
  const dateModify = result.map(({ data }) => ({ date: formatDate(data) }));
  console.log(dateModify);
  return result;
};

const getOrderPriceTotal = async (id) => {
  const queryFunction = `call getStatusOneOrder("${id}")`;
  return connectionPromise(queryFunction);
};

const getOrderAdmin = async (id) => {
  const query = `call getUniqueOrderAdmin("${id}")`;
  const dataProducts = await connectionPromise(query);

  if (dataProducts.length === 0) return false;
  const result = await getOrderPriceTotal(id);
  return { dataProducts, dataPurchase: result };
};

const updateStatus = async (id, status) => {
  let newStatus = 0;

  if (status === newStatus) newStatus = 1;
  const query = `call updateStatusOrder("${id}", "${newStatus}")`;
  return connectionPromise(query);
};

const putStatusOrder = async (id) => {
  const query = `SELECT status FROM orders WHERE id_order = ${id}`;
  const { status } = await connectionPromise(query);
  return updateStatus(id, status);
};

module.exports = {
  getAllDataOrder,
  getOrderAdmin,
  putStatusOrder,
};
