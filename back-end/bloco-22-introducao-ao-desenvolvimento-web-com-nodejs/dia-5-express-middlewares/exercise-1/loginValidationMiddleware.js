const { isPasswordValid, isEmailValid } = require('./util');

function loginValidationMiddleware(req, res, next) {
  const { email, password } = req.body;
  if (!isEmailValid(email) || !isPasswordValid(password)) {
    return res.status(400).json({ message: 'email or password is incorrect' });
  }
  next();
}

module.exports = loginValidationMiddleware;
