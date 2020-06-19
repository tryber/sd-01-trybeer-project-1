const appBeer = require('../models/appBeer');
const { encrypt } = require('../services/crypto');

exports.register = async (req, res) => {
  const { name, email, password, role } = req.body;
  const ecryptedPassword = encrypt(password);
  const userData = await appBeer.registerUserDB(name, email, ecryptedPassword, role);

  if (userData) return res.status(200).json({ message: 'Registered successfully.' });
};
