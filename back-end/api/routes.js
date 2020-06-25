const { login, register } = require('../controllers/registerLogin');
const { profileClient } = require('../controllers/profileClient');
const { listProducts } = require('../controllers/products');
const { adminProfile } = require('../controllers/profileAdmin');
const { createOrder, getOrdersClient } = require('../controllers/ordersClient');

module.exports = {
  register,
  login,
  profileClient,
  listProducts,
  adminProfile,
  createOrder,
  getOrdersClient,
};
