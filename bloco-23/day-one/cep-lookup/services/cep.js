const cepModel = require('../model/cep');

const findAdressByCep = async (searchedCep) => {
  const CEP_REGEX = /\d{5}-\d{3}/;
  if (!CEP_REGEX.test(searchedCep)) {
    return {
      error: {
        code: 'invalidData',
        message: 'CEP inválido' } };
  }
  const cep = await cepModel.getAdressByCep(searchedCep);
  if (!cep) {
    return {
      error: {
        code: 'notFound',
        message: 'CEP não encontrado' } };
  }
  return cep;
};

module.exports = {
  findAdressByCep,
};

/* const [allCeps] = cepModel.getAllCeps();
const foundCep = allCeps.find((item) => item.cep === cep);
if (!foundCep) {
  return null;
}
return foundCep; */