const Cep = require('../models/Cep');
const ViaCep = require('../models/ViaCep');
const Joi = require('joi');

const isValid = (cep) => {
  const cepRegex = /^\d{5}-?\d{3}$/;
  return cepRegex.test(cep);
};

const validateDetails = (cepDetails) => {
  const schema = Joi.object({
    cep: Joi.string().not().empty().required(),
    logradouro: Joi.string().not().empty().required(),
    bairro: Joi.string().not().empty().required(),
    localidade: Joi.string().not().empty().required(),
    uf: Joi.string().not().empty().required(),
  });

  return schema.validate(cepDetails);
};

const exists = async (cep) => {
  const cepDetails = await Cep.getDetails(cep);
  return Boolean(cepDetails);
};

const removeDashFromCep = (cep) => cep.replace('-', '');

const formatCep = (cep) => cep.replace(/(\d{5})(\d{3})/, '$1-$2');

const removeDashFromCepInDetails = ({ cep, logradouro, bairro, localidade, uf }) => ({
  cep: removeDashFromCep(cep),
  logradouro,
  bairro,
  localidade,
  uf
});

const formatCepInDetails = ({ cep, logradouro, bairro, localidade, uf }) => ({
  cep: formatCep(cep),
  logradouro,
  bairro,
  localidade,
  uf
});

const getDetails = async (cep) => {
  if (!isValid(cep)) {
    return { error: { code: 'invalidData', message: 'CEP inválido' } };
  }

  const unformattedCep = removeDashFromCep(cep);
  const cepDetails = await Cep.getDetails(unformattedCep);
  if (cepDetails) return { data: formatCepInDetails(cepDetails) };

  const cepDetailsFromViaCep = await ViaCep.lookup(unformattedCep);
  if (!cepDetailsFromViaCep) {
    return { error: { code: 'notFound', message: 'CEP não encontrado' } };
  }
  
  const createdCepDetails = await Cep.create(removeDashFromCepInDetails(cepDetailsFromViaCep));
  return { data: formatCepInDetails(createdCepDetails) };
};

const create = async (cepDetails) => {
  const { error } = validateDetails(cepDetails);

  if (error) {
    return { error: { code: 'invalidData', message: error.details[0].message } };
  }
  if (!isValid(cepDetails.cep)) {
    return { error: { code: 'invalidData', message: 'CEP inválido' } };
  }

  const unformattedCepDetails = removeDashFromCepInDetails(cepDetails);
  const cepExists = await exists(unformattedCepDetails.cep);

  if (cepExists) {
    return { error: { code: 'alreadyExists', message: 'CEP já existente' } };
  }

  const createdCepDetails = await Cep.create(unformattedCepDetails);
  return { data: formatCepInDetails(createdCepDetails) };
};

module.exports = {
  getDetails,
  create,
};
