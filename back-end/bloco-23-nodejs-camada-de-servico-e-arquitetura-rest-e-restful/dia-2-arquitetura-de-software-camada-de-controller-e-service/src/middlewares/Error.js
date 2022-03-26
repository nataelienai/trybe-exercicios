module.exports = (err, _req, res, _next) => {
  const statusByErrorCode = {
    invalidData: 400,
    notFound: 404,
  };

  const status = statusByErrorCode[err.code] || 500;

  if (status === 500) {
    return res.status(status).end();
  }

  res.status(status).json({ error: err });
};
