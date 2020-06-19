const utils = require('../services/utils');
const { verifyEmail } = require('../models/appBeer');

function isNameValid(name = '') {
  const regex = /^[a-zA-Z\s]*$/;
  return regex.test(name) && name.length >= 12;
}

function isRoleValid(role = '') {
  const roleOptions = ['admin', 'client'];

  return roleOptions.includes(role);
}

async function validRegisterMiddleware(req, res, next) {

  const { name, email, password, role } = req.body;
  if (
    !isNameValid(name)
    || !utils.isEmailValid(email)
    || !utils.isPasswordValid(password)
    || !isRoleValid(role)
  ) return res.status(400).json({ message: 'Invalid Fields' });

  if (await verifyEmail(email)) return res.status(400).json({ message: 'The email already registered' });

  next();
}

module.exports = { validRegisterMiddleware };
