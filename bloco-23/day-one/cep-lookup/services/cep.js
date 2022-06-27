const cepModel = require('../model/cep');

const cepValidation = (cep) => {
    const CEP_REGEX = /\d{5}-\d{3}/;
    return CEP_REGEX.test(cep);
};

const findSpecificCep = (cep) => {
    const allCeps = cepModel.getAllCeps();
    const foundCep = allCeps.find((item) => item.cep === cep);
    if (!foundCep) {
        throw { error: 'Not found!'};
    }
    return foundCep;
};

module.exports = {
    cepValidation,
}