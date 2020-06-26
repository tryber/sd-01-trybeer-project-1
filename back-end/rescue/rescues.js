exports.invalidLogin = fn => async (req, res, next) => {
  try {
    await fn(req, res, next);
  } catch (err) {
    res.status(400).json({ message: 'Invalid Fields', error: err.message, trace:err.trace });
  }
};

exports.databaseErrorHandling = fn => async (req, res, next) => {
  try {
    await fn(req, res, next);
  } catch (err) {
    res.status(500).json({ message: 'Internal Server Error', error: err.message, trace:err.trace });
  }
};

exports.errorReadingJWT = fn => async (req, res, next) => {
  try {
    await fn(req, res, next);
  } catch (err) {
    res.status(422).json({ message: 'Unprocessable Entity', error: err.message, trace:err.trace });
  }
};
