const { connectionPromise } = require('../services/distributor');

const registerUserDB = async (name, email, ecryptedPassword, role) => {
  const query = `call createUser("${name}", "${email}", "${ecryptedPassword}", "${role}")`;
  const data = await connectionPromise(query);
  return data;
};

const verifyEmail = async (email) => {
  const query = `SELECT email FROM users WHERE email = "${email}"`;
  const data = await connectionPromise(query);
  
  if (data.email === email) return true;
}

module.exports = {
  registerUserDB,
  verifyEmail,
};
