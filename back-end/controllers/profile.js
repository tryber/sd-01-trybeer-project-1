const tokenValid = require('../services/decryptJwt');
const appBeer = require('../models/appBeer');

exports.profile = async (req, res) => {
  const { name } = req.body;
  const token = req.headers.authorization;
  const unencryptedToken = tokenValid(token);

  const user = await appBeer.getUser(unencryptedToken.email);
  await appBeer.updateUserName(user, name);

  return res.status(200).json({ message: 'Name has been successfully changed' });
};
