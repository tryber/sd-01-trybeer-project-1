const express = require('express');

const path = require('path');

const app = express();

const { login } = require('./routes');

const apiTrybeer = express.Router();

apiTrybeer.get('/login', login.login);

app.use(express.static(path.resolve(__dirname, '..', 'public')));

app.use(apiTrybeer);

module.exports = app;
