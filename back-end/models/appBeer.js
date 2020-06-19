const createTokenJWT = require('../services/JWT');
const { connectionPromise } = require('../services/distributor');

async function loginUser(emailUser, passwordUser) {
  const query = `call getUser("${emailUser}", "${passwordUser}")`;
  const userData = await connectionPromise(query);

  const token = createTokenJWT(userData[0]);
  const { email, name, role } = userData[0];
  return ({ name, email, token, role });
};

module.exports = {
  loginUser,
};
