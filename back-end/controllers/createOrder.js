const appBeer = require('../models/appBeer');

exports.createOrder = async (req, res) => {
  const token = req.headers.authorization;
  const { address, addressNumber, orders } = req.body;
  const order = await appBeer.createOrder(token, address, addressNumber, orders);

  // if (!order) return res.status(400).json({ message: 'Order is failed' });

  res.status(200).json({ message: 'Order successfully placed' });
};
