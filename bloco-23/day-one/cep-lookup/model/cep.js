const connection = require('./connection');

const cepFormat = (cep) => {
  const CEP_REGEX = /\d{5}-\d{3}/;
  if (CEP_REGEX.test(cep)) return cep;
  return cep.replace(/(\d{5})(\d{3})/, '$1-$2');
};

const getNewCep = ({ cep, logradouro, bairro, localidade, uf }) => ({
  cep: cepFormat(cep),
  logradouro,
  bairro,
  localidade,
  uf,
});

const getAllCeps = async () => {
  const query = 'SELECT * FROM cep_lookup.ceps;';
  const [ceps] = await connection.query(query);
  return ceps.map(getNewCep);
};

const getAdressByCep = async (cepToSearch) => {
  const treatedCep = cepToSearch.replace('-', ''); // no banco os ceps estão sem traços
  const query = 'SELECT * FROM cep_lookup.ceps WHERE cep = ?;';
  const response = await connection.query(query, [treatedCep])
    .then(([data]) => (data.length ? data[0] : null));

  if (!response) return null;
  return getNewCep(response);
  };

module.exports = {
  getAllCeps,
  getAdressByCep,
};