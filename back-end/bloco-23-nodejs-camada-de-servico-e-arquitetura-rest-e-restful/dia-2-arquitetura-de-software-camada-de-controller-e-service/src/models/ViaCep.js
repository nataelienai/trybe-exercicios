const axios = require('axios').default;

const lookup = async (cep) => {
  try {
    const { data } = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    if (data.erro) return null;
    return data;
  } catch {
    return null;
  }
};

module.exports = {
  lookup,
};
