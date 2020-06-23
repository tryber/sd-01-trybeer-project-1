const path = require('path');
const jwt = require('jsonwebtoken');

const { errorReadingJWT } = require('../rescue/rescues');

const enviromentVariable = path.resolve(__dirname, '..', '..', '.env');

require('dotenv').config({ path: enviromentVariable });

const tokenValid = (token) => {
  const payload = jwt.verify(token, process.env.SECRET_KEY_JWT);
  return payload;
};

const userValidMiddleware = errorReadingJWT((req, res, next) => {
  const token = req.headers.authorization;

  if (!token) return res.status(401).json({ message: 'Access denied' });
  const { role } = tokenValid(token);

  const validRole = (req.originalUrl).substring(1, 6);

  if (role === 'client' && validRole === 'admin')
    return res.status(401).json({ message: 'User Unauthorized' });

  if (role === 'admin' && validRole !== 'admin')
    return res.status(401).json({ message: 'User Unauthorized' });

  next();
});

module.exports = {
  tokenValid,
  userValidMiddleware,
};
