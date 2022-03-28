module.exports = (err, _req, res, _next) => {
  const statusByErrorCode = {
    invalidData: 400,
    notFound: 404,
    alreadyExists: 409,
  };

  const status = statusByErrorCode[err.code] || 500;

  if (status === 500) {
    return res.status(status).json(err.message);
  }

  res.status(status).json({ error: err });
};
