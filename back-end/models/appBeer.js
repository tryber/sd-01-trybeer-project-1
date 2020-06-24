const { connectionPromise } = require('../services/connectionPromise');
const { verifyPassword } = require('../services/utils');
const createTokenJWT = require('../services/createJWT');
const tokenValid = require('../services/validJWT');

const loginUser = async (emailUser, passwordUser) => {
  const query = `call getUser("${emailUser}")`;
  const userData = await connectionPromise(query);

  if (userData.length === 0) return false;

  const { password, email, name, role, id_user } = userData[0];
  if (!verifyPassword(passwordUser, password)) return false;

  const token = createTokenJWT({ email, name, role, id_user });
  return ({ name, email, token, role });
};

const registerUserDB = async (name, email, ecryptedPassword, role) => {
  const query = `call createUser("${name}", "${email}", "${ecryptedPassword}", "${role}")`;
  const data = await connectionPromise(query);
  return data;
};

const getEmail = async (email) => {
  const query = `SELECT email FROM users WHERE email = "${email}"`;
  const data = await connectionPromise(query);
  return data;
};

const getListProduct = async () => {
  const query = 'call getListProducts()';
  const data = await connectionPromise(query);
  return data;
};

const getProfileAdmin = async (token) => {
  const { email } = tokenValid(token);
  const query = `SELECT name, email FROM users WHERE email = "${email}"`;
  const data = await connectionPromise(query);
  return data;
};

const createProductOrder = async (idOrder, orders) => {
  const resultOrder = await orders.map(({ id_product: idProduct, quantity }) => {
    const query = `call createProductOrder("${idOrder.id_order}", "${idProduct}", "${quantity}")`;
    return connectionPromise(query);
  });
  return resultOrder;
};

const createOrder = async (token, address, addressNumber, orders) => {
  const { id_user: idUser } = tokenValid(token);
  const query = `call createOrder("${idUser}", "${address}", "${addressNumber}")`;
  const result = await connectionPromise(query);
  return createProductOrder(result[0], orders);
};

const updateUserName = async (user, nameUser) => {
  const idUser = user[0].id_user;
  const query = `call updateUser("${idUser}", "${nameUser}")`;
  const data = await connectionPromise(query);

  const { email, name, role, id_user } = data[0];

  const token = createTokenJWT({ email, name, role, id_user });

  return ({ name, email, token, role });
};

const getUser = async (email, name) => {
  const query = `call getUser("${email}")`;
  const data = await connectionPromise(query);

  return updateUserName(data, name);
};

module.exports = {
  loginUser,
  registerUserDB,
  getEmail,
  getListProduct,
  getUser,
  getProfileAdmin,
  createOrder,
  updateUserName,
};
