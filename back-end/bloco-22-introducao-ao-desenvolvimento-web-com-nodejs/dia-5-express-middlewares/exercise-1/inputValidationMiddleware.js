function isUsernameValid(username) {
  return Boolean(username && username.length > 3);
}

function isPasswordValid(password) {
  return Boolean(password && password.length >= 4 && password.length <= 8
    && !isNaN(password));
}

function isEmailValid(email) {
  const emailRegex = /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i;
  return emailRegex.test(email);
}

function inputValidationMiddleware(req, res, next) {
  const { username, email, password } = req.body;
  if (!isUsernameValid(username) || !isPasswordValid(password) || !isEmailValid(email)) {
    return res.status(400).json({ message: 'invalid data' });
  }
  next();
}

module.exports = inputValidationMiddleware;
