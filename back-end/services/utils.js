function isEmailValid(email = '') {
  const regex = /^(([^<>()\[\]\\.,;:\s@']+(\.[^<>()\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(String(email).toLowerCase());
};

function isPasswordValid(password = '') {
  const regex = /^[0-9]+$/;
  return regex.test(password) && password.length >= 6;
};

module.exports = {
  isEmailValid,
  isPasswordValid
};
