const jwt = require('jsonwebtoken');
const tokenValid = require('../services/decryptJwt');
const appBeer = require('../models/appBeer');

exports.profile = async (req, res) => {
  const token = req.headers.authorization;
  const unencryptedToken = tokenValid(token);

  console.log(unencryptedToken);

  const user = await appBeer.getUser(unencryptedToken.email);

  console.log('usuario', user);
  
  res.status(200).json({ message: "Olá!" });
};
