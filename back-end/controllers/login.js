const appBeer = require('../models/appBeer');
const { encrypt } = require('../services/crypto');

exports.login = async (req, res) => {
  const { email, password } = req.body;

  const login = await appBeer.loginUser(email, password);

  if (!login) return res.status(400).json({ message: 'Invalid Fields' });

  res.status(200).json(login);
};
