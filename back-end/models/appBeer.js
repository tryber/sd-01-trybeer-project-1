const conn = require('./connectionModel');
const createTokenJWT = require('../services/JWT');

const loginUser = async (email, password) => {
  const query = `call getUser("${email}", "${password}")`;
  return new Promise((resolve, reject) => {
    conn.query(query, (err, result) => {
      if (err) return reject(err);

      let userData = result[0];
      if (!userData) return resolve(null);

      const token = createTokenJWT(userData[0]);
      const { email, name, role } = userData[0];

      return resolve({ name, email, token, role });
    });
  });
}

module.exports = {
  loginUser,
};
