const { isEmailValid, isPasswordValid } = require('../services/utils');

function isNameValid(name = '') {
  const regex = /^[a-zA-Z\s]*$/;
  return regex.test(name) && name.length >= 12;
}

function isRoleValid(role = '') {
  const roleOptions = ['admin', 'client'];

  return roleOptions.includes(role);
}

function validRegisterMiddleware(req, res, next) {
  const { name, email, password, role } = req.body;
  if (
    !isNameValid(name)
    || !isEmailValid(email)
    || !isPasswordValid(password)
    || !isRoleValid(role)
  ) return res.status(400).json({ message: 'Invalid Fields' });

  next();
}

module.exports = { validRegisterMiddleware };
