const createTokenJWT = require('../services/JWT');
const { connectionPromise } = require('../services/distributor');
const { verifyPassword } = require('../services/utils');

async function loginUser(emailUser, passwordUser) {
  const query = `call getUser("${emailUser}")`;
  const userData = await connectionPromise(query);

  const { password, email, name, role } = userData[0];
  if (verifyPassword(passwordUser, password)) return false;

  const token = createTokenJWT(userData[0]);
  return ({ name, email, token, role });
}

module.exports = {
  loginUser,
};
