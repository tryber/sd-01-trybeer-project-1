const registerUser = require('../controllers/register');
const login = require('../controllers/login');
const listProducts = require('../controllers/listProducts');
const adminProfile = require('../controllers/adminProfile');

module.exports = {
  registerUser,
  login,
  listProducts,
  adminProfile,
};
