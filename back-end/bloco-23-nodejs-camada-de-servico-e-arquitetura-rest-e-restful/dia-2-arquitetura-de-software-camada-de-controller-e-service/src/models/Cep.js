const connection = require('./connection');

const getDetails = async (cep) => {
  const [cepDetails] = await connection.execute('SELECT * FROM ceps WHERE cep = ?', [cep]);

  if (cepDetails.length === 0) return null;
  return cepDetails[0];
};

const create = async ({ cep, logradouro, bairro, localidade, uf }) => {
  await connection.execute(
    'INSERT INTO ceps (cep, logradouro, bairro, localidade, uf) VALUES (?, ?, ?, ?, ?)',
    [cep, logradouro, bairro, localidade, uf],
  );
  return { cep, logradouro, bairro, localidade, uf };
};

module.exports = {
  getDetails,
  create,
};
