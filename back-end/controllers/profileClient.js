const tokenValid = require('../services/decryptJwt');
const profileClient = require('../models/profileClient');

exports.profileClient = async (req, res) => {
  const { name } = req.body;
  const token = req.headers.authorization;
  const unencryptedToken = tokenValid(token);

  const updatedUser = await profileClient.getUser(unencryptedToken.email, name);

  return res.status(200).json(updatedUser);
};
