const { connectionPromise } = require('../services/connectionPromise');

const getAllDataOrder = async () => {
  const query = 'call getAllDataOrder()';
  const data = await connectionPromise(query);

  return data;
};

module.exports = { getAllDataOrder };
