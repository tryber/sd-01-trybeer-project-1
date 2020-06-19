const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

const { login } = require('./routes');
const apiTrybeer = express.Router();
app.use(bodyParser.json());

apiTrybeer.post('/login', login.login);

app.use(express.static(path.resolve(__dirname, '..', 'public')));

app.use(apiTrybeer);

app.use('*', (req, res) => res.status(404).json({ message: 'Page not found' }));

module.exports = app;
