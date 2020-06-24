const appBeer = require('../models/appBeer');

exports.adminProfile = async (req, res) => {
  const token = req.headers.authorization;
  const login = await appBeer.getProfileAdmin(token);

  res.status(200).json(login);
};
