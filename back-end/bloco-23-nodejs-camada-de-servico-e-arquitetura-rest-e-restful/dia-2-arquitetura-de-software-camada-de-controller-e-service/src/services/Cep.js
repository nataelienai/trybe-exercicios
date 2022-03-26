const Cep = require('../models/Cep');

const isValid = (cep) => {
  const cepRegex = /\d{5}-?\d{3}/;
  return cepRegex.test(cep);
};

const getDetails = async (cep) => {
  if (!isValid(cep)) {
    return { error: { code: 'invalidData', message: 'CEP inválido' } };
  }
  const cepDetails = await Cep.getDetails(cep);
  if (!cepDetails) {
    return { error: { code: 'notFound', message: 'CEP não encontrado' } };
  }
  return { data: cepDetails };
};

module.exports = {
  getDetails,
};
