const { isUsernameValid, isPasswordValid, isEmailValid } = require('./util');

function registerValidationMiddleware(req, res, next) {
  const { username, email, password } = req.body;
  if (!isUsernameValid(username) || !isPasswordValid(password) || !isEmailValid(email)) {
    return res.status(400).json({ message: 'invalid data' });
  }
  next();
}

module.exports = registerValidationMiddleware;
