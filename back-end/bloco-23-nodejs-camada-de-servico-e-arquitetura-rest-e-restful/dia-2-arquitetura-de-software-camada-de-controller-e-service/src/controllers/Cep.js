const Cep = require('../services/Cep');

const getDetails = async (req, res, next) => {
  const { cep } = req.params;
  const { error, data } = await Cep.getDetails(cep);

  if (error) return next(error);
  res.status(200).json(data);
};

module.exports = {
  getDetails,
};
