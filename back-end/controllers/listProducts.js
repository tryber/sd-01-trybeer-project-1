const appBeer = require('../models/appBeer');

exports.listProducts = async (_req, res) => {
  const login = await appBeer.getListProduct();

  res.status(200).json(login);
};
