const tokenValid = require('../services/decryptJwt');
const appBeer = require('../models/appBeer');

exports.profile = async (req, res) => {
  const { name } = req.body;
  const token = req.headers.authorization;
  const unencryptedToken = tokenValid(token);

  const updatedUser = await appBeer.getUser(unencryptedToken.email, name);

  return res.status(200).json(updatedUser);
};
