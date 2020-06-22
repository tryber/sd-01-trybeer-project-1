const baseName = {
  name: 'Fulando de Tal',
};

const baseEmail = {
  email: 'teste@teste.com',
};

const basePassword = {
  password: '0102030405',
};

const baseRole = {
  role: 'client',
}

const invalidName = { name: 'Rogério Carlos', ...baseEmail, ...basePassword, ...baseRole };

const invalidEmail = { ...baseName, email: 'teste.com', ...basePassword, ...baseRole };

const invalidPassword = { ...baseName, ...baseEmail, password: 'abc123', ...baseRole };

const invalidRole = { ...baseName, ...baseEmail, ...basePassword, role: 'xablau' };

const validRegister = { ...baseName, ...baseEmail, ...basePassword, ...baseRole }

module.exports = {
  invalidName,
  invalidEmail,
  invalidPassword,
  invalidRole,
  validRegister,
};
