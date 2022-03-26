const connection = require('./connection');

const getDetails = async (cep) => {
  const [cepDetails] = await connection.execute('SELECT * FROM ceps WHERE cep = ?', [cep]);

  if (cepDetails.length === 0) return null;
  return cepDetails[0];
};

module.exports = {
  getDetails,
};
