const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

const { login, registerUser, listProducts } = require('./routes');
const { invalidLogin, listProductsError } = require('../rescue/rescues');
const { validLoginMiddleware } = require('../middlewares/loginValid');
const { validRegisterMiddleware } = require('../middlewares/register');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.resolve(__dirname, '..', 'public')));

const apiTrybeer = express.Router();

apiTrybeer.post('/register', validRegisterMiddleware, registerUser.register);
apiTrybeer.post('/login', validLoginMiddleware, invalidLogin(login.login));
apiTrybeer.get('/products', listProductsError(listProducts.listProducts));

app.use(apiTrybeer);

app.use('*', (_req, res) => res.status(404).json({ message: 'Page not found' }));

module.exports = app;
