const { encrypt } = require('../services/crypto');
const { connectionPromise } = require('../services/distributor');

exports.register = async (req, res) => {
  const { name, email, password, role } = req.body;

  const ecryptedPassword = encrypt(password);

  const query = `call createUser("${name}", "${email}", "${ecryptedPassword}", "${role}")`;
  const userData = await connectionPromise(query);

  if (userData) return res.status(200).json({ message: 'Registered successfully.' });
}
