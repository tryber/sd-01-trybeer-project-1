const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

const { login, registerUser, listProducts } = require('./routes');
const { adminProfile, createOrder } = require('./routes');
const { invalidLogin, databaseErrorHandling } = require('../rescue/rescues');
const { validLoginMiddleware } = require('../middlewares/loginValid');
const { validRegisterMiddleware } = require('../middlewares/register');
const { userValidMiddleware } = require('../middlewares/userValid');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.resolve(__dirname, '..', 'public')));

const apiTrybeer = express.Router();

apiTrybeer.post('/register', validRegisterMiddleware, registerUser.register);
apiTrybeer.post('/login', validLoginMiddleware, invalidLogin(login.login));
apiTrybeer.get('/products', userValidMiddleware, databaseErrorHandling(listProducts.listProducts));
apiTrybeer.get('/admin/profile', userValidMiddleware, databaseErrorHandling(adminProfile.adminProfile));
apiTrybeer.post('/checkout', userValidMiddleware, databaseErrorHandling(createOrder.createOrder));

app.use(apiTrybeer);

app.use('*', (_req, res) => res.status(404).json({ message: 'Page not found' }));

module.exports = app;
