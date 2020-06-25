const registerLogin = require('../models/userRegisterLogin');
const { encrypt } = require('../services/crypto');

exports.register = async (req, res) => {
  const { name, email, password, role } = req.body;
  const ecryptedPassword = encrypt(password);
  await registerLogin.registerUserDB(name, email, ecryptedPassword, role);

  res.status(200).json({ message: 'Registered successfully.' });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const login = await registerLogin.loginUser(email, password);
  
  if (!login) return res.status(400).json({ message: 'Invalid Fields' });

  res.status(200).json(login);
};
