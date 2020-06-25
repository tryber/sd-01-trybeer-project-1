const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

const { login, register, profileClient, listProducts } = require('./routes');
const { adminProfile, createOrder, getOrdersClient, ordersAdmin } = require('./routes');
const { invalidLogin, databaseErrorHandling } = require('../rescue/rescues');
const { updateNameMiddleware, userValidMiddleware } = require('../middlewares/index');
const { validRegisterMiddleware, validLoginMiddleware } = require('../middlewares/index');
const { validOrderMiddleware } = require('../middlewares/index');

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
apiTrybeer.post('/checkout', userValidMiddleware, validOrderMiddleware, databaseErrorHandling(createOrder));
apiTrybeer.get('/orders', userValidMiddleware, databaseErrorHandling(getOrdersClient));
apiTrybeer.get('/admin/orders', userValidMiddleware, databaseErrorHandling(ordersAdmin));

app.use(apiTrybeer);

app.use('*', (_req, res) => res.status(404).json({ message: 'Page not found' }));

module.exports = app;
