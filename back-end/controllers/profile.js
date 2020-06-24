const jwt = require('jsonwebtoken');
const tokenValid = require('../services/decryptJwt');

exports.profile = async (req, res) => {
  const token = req.headers.authorization;
  const unencryptedToken = tokenValid(token);
  console.log(unencryptedToken.email);
  res.status(200).json({ message: "Olá!" });
};
