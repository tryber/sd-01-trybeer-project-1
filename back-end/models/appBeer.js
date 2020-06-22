const { connectionPromise } = require('../services/connectionPromise');
const { verifyPassword } = require('../services/utils');
const createTokenJWT = require('../services/createJWT');

async function loginUser(emailUser, passwordUser) {
  const query = `call getUser("${emailUser}")`;
  const userData = await connectionPromise(query);

  if (userData.length === 0) return false;

  const { password, email, name, role } = userData[0];
  if (!verifyPassword(passwordUser, password)) return false;

  const token = createTokenJWT(userData[0]);
  return ({ name, email, token, role });
}

module.exports = {
  loginUser,
};
