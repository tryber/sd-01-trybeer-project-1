const appBeer = require('../models/appBeer');

exports.login = async (req, res) => {
  const { email, password } = req.body;

  const login = await appBeer.loginUser(email, password);

  res.status(200).send(login);
};
