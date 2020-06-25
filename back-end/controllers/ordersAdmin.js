const { getAllDataOrder } = require('../models/ordersAdmin');

exports.ordersAdmin = async (_req, res) => {
  const orders = await getAllDataOrder();
  res.status(200).json(orders);
};
