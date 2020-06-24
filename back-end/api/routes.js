const registerUser = require('../controllers/register');
const login = require('../controllers/login');
const listProducts = require('../controllers/listProducts');
const adminProfile = require('../controllers/adminProfile');
const createOrder = require('../controllers/createOrder');

module.exports = {
  registerUser,
  login,
  listProducts,
  adminProfile,
  createOrder,
};
