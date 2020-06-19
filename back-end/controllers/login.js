const appBeer = require('../models/appBeer');

exports.login = async (req, res) => {
  const { email, password } = req.body;

  const login = await appBeer.loginUser(email, password);

  if (!login) return res.status(400).json({ message: 'Email or password invalid' });
  res.status(200).send(login);
}
