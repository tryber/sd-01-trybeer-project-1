const invalidLogin = fn => async (req, res, next) => {
  try {
    await fn(req, res, next);
  } catch (err) {
    res.status(400).json({ message: 'Invalid Fields', error: err.message });
  }
};

module.exports = {
  invalidLogin,
};
