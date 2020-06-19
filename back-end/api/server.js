const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

const { login } = require('./routes');
const { invalidLogin } = require('../rescue/rescues');
const { validLoginMiddleware } = require('../middlewares/loginValid');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, '..', 'public')));

const apiTrybeer = express.Router();

apiTrybeer.post('/login', validLoginMiddleware, invalidLogin(login.login));

app.use(apiTrybeer);

app.use('*', (_req, res) => res.status(404).json({ message: 'Page not found' }));

module.exports = app;
