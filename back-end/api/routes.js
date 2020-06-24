const registerUser = require('../controllers/register');
const login = require('../controllers/login');
const profile = require('../controllers/profile');
const listProducts = require('../controllers/listProducts');
const adminProfile = require('../controllers/adminProfile');

module.exports = {
  registerUser,
  login,
  profile,
  listProducts,
  adminProfile,
};
