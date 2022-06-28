const rescue = require('express-rescue');
const cepServices = require('../services/cep');

const getAddressByCep = rescue(async (req, res, next) => {
  const { cep } = req.params;
  const address = await cepServices.findAdressByCep(cep);

  if (address.error) {
    return next(address.error);
  }

  return res.status(200).json(address);
});

module.exports = {
  getAddressByCep,
};