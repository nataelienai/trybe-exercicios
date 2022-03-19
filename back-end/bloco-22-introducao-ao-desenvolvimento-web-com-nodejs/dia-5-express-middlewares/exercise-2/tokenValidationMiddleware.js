function hasOnlyLettersAndNumbers(string) {
  const validationRegex = /^[A-Z0-9]+$/i;
  return validationRegex.test(string);
}

function isTokenValid(token) {
  return token && token.length === 12 && hasOnlyLettersAndNumbers(token);
}

function tokenValidationMiddleware(req, res, next) {
  const token = req.headers.authorization;

  if (!isTokenValid(token)) {
    return res.status(401).json({ message: 'invalid token' });
  }
  next();
}

module.exports = tokenValidationMiddleware;
