const registerUser = require('../controllers/register');
const login = require('../controllers/login');
const profile = require('../controllers/profile');
const listProducts = require('../controllers/listProducts');

module.exports = {
  registerUser,
  login,
  profile,
  listProducts,
};
