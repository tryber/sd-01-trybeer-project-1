const { connectionPromise } = require('../services/connectionPromise');
const { verifyPassword } = require('../services/utils');
const createTokenJWT = require('../services/createJWT');

const loginUser = async (emailUser, passwordUser) => {
  const query = `call getUser("${emailUser}")`;
  const userData = await connectionPromise(query);

  if (userData.length === 0) return false;

  const { password, email, name, role } = userData[0];
  if (!verifyPassword(passwordUser, password)) return false;

  const token = createTokenJWT(userData[0]);
  return ({ name, email, token, role });
}

const registerUserDB = async (name, email, ecryptedPassword, role) => {
  const query = `call createUser("${name}", "${email}", "${ecryptedPassword}", "${role}")`;
  const data = await connectionPromise(query);
  return data;
};

const verifyEmail = async (email) => {
  const query = `SELECT email FROM users WHERE email = "${email}"`;
  const data = await connectionPromise(query);

  if (data.email === email) return true;
};

module.exports = {
  loginUser,
  registerUserDB,
  verifyEmail,
};
