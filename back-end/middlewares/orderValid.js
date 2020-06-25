const { isNameValid: isAddressValid } = require('../services/utils');
const { isPasswordValid: isAddressNumberValid } = require('../services/utils');

async function validOrderMiddleware(req, res, next) {
  const { address, addressNumber } = req.body;
  if (!isAddressValid(address) || !isAddressNumberValid(addressNumber))
    return res.status(400).json({ message: 'Invalid Fields' });

  next();
}

module.exports = {
  validOrderMiddleware,
};
