const { decrypt } = require('./crypto');

function isEmailValid(email = '') {
  const regex = /^(([^<>()\[\]\\.,;:\s@']+(\.[^<>()\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email.toLowerCase());
}

function isPasswordValid(password = '') {
  const regex = /(^[0-9]{6,})+$/;
  return regex.test(password);
}

function verifyPassword(passwordUser, password) {
  return passwordUser === (decrypt(password));
}

module.exports = {
  isEmailValid,
  isPasswordValid,
  verifyPassword,
};
