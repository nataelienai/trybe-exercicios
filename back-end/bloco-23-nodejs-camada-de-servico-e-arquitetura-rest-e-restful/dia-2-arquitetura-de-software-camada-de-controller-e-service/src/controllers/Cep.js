const Cep = require('../services/Cep');

const getDetails = async (req, res, next) => {
  const { cep } = req.params;
  const { error, data } = await Cep.getDetails(cep);

  if (error) return next(error);
  res.status(200).json(data);
};

const create = async (req, res, next) => {
  const { cep, logradouro, bairro, localidade, uf } = req.body;
  const { error, data } = await Cep.create({ cep, logradouro, bairro, localidade, uf });
  
  if (error) return next(error);
  res.status(201).json(data);
};

module.exports = {
  getDetails,
  create,
};
