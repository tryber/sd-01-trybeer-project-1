const express = require('express');

const bodyParser = require('body-parser');

const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const { registerUser } = require('./routes');

const { validRegisterMiddleware } = require('../middlewares/register');

const apiTrybeer = express.Router();

apiTrybeer.post('/register', validRegisterMiddleware, registerUser.register);

app.use(express.static(path.resolve(__dirname, '..', 'public')));

app.use(apiTrybeer);

module.exports = app;
