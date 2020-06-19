function isNameValid(name = '') {
  const regex = /^[a-zA-Z\s]*$/;
  return regex.test(name) && name.length >= 12;
}

function isEmailValid(email = '') {
  const regex = /^(([^<>()\[\]\\.,;:\s@']+(\.[^<>()\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(String(email).toLowerCase());
}

function isPasswordValid(password = '') {
  const regex = /^[0-9]+$/;
  return regex.test(password) && password.length >= 6;
}

function isRoleValid(role = '') {
  const roleOptions = ['admin', 'client'];

  return roleOptions.includes(role);
}

function validRegisterMiddleware(req, res, next) {
  const { name, email, password, role } = req.body;
  console.log(password.length);
  if (!isNameValid(name) || !isEmailValid(email) || !isPasswordValid(password) || !isRoleValid(role))
    return res.status(400).json({ message: 'Invalid Fields' });

  next();
}

module.exports = { validRegisterMiddleware };
