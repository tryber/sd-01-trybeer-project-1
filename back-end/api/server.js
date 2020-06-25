const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

const { login, register, profileClient, listProducts } = require('./routes');
const { adminProfile, createOrder, getOrdersClient } = require('./routes');
const { invalidLogin, databaseErrorHandling } = require('../rescue/rescues');
const { validLoginMiddleware } = require('../middlewares/loginValid');
const { validRegisterMiddleware } = require('../middlewares/register');
const { userValidMiddleware } = require('../middlewares/userValid');
const { updateNameMiddleware } = require('../middlewares/profile');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.resolve(__dirname, '..', 'public')));

const apiTrybeer = express.Router();

apiTrybeer.post('/register', validRegisterMiddleware, register);
apiTrybeer.post('/login', validLoginMiddleware, invalidLogin(login));
apiTrybeer.post('/profile', userValidMiddleware, updateNameMiddleware, profileClient);
apiTrybeer.get('/products', userValidMiddleware, databaseErrorHandling(listProducts));
apiTrybeer.get('/admin/profile', userValidMiddleware, databaseErrorHandling(adminProfile));
apiTrybeer.post('/checkout', userValidMiddleware, databaseErrorHandling(createOrder));
apiTrybeer.get('/orders', userValidMiddleware, databaseErrorHandling(getOrdersClient));

app.use(apiTrybeer);

app.use('*', (_req, res) => res.status(404).json({ message: 'Page not found' }));

module.exports = app;
