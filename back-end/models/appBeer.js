const { connectionPromise } = require('../services/distributor');

const registerUserDB = async (name, email, ecryptedPassword, role) => {
  const query = `call createUser("${name}", "${email}", "${ecryptedPassword}", "${role}")`;
  const data = await connectionPromise(query);
  return data;
};

module.exports = {
  registerUserDB,
};
