const appBeer = require('../models/appBeer');
const { encrypt } = require('../services/crypto');

exports.register = async (req, res) => {
  const { name, email, password, role } = req.body;
  const ecryptedPassword = encrypt(password);
  await appBeer.registerUserDB(name, email, ecryptedPassword, role);

  res.status(200).json({ message: 'Registered successfully.' });
};
