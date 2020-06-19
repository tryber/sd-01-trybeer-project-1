const jwt = require('jsonwebtoken');
const path = require('path');

const enviromentVariable = path.resolve(__dirname, '..', '..', '.env');
require('dotenv').config({ path: enviromentVariable });

const createTokenJWT = ({ ...userData }) => {
  const jwtConfig = {
    expiresIn: '3d',
    algorithm: 'HS256',
  };

  const token = jwt.sign(userData, process.env.JWT_SECRET, jwtConfig);
  return token;
}

module.exports = createTokenJWT;
