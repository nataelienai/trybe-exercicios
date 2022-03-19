function routeNotFoundMiddleware(req, res) {
  return res.status(404).json({ message: 'Opsss, route not found!' });
}

module.exports = routeNotFoundMiddleware;
