exports.invalidLogin = fn => async (req, res, next) => {
  try {
    await fn(req, res, next);
  } catch (err) {
    res.status(400).json({ message: 'Invalid Fields', error: err.message });
  }
};

exports.listProductsError = fn => async (req, res, next) => {
  try {
    await fn(req, res, next);
  } catch (err) {
    res.status(500).json({ message: 'Internal Server Error', error: err.message });
  }
}
