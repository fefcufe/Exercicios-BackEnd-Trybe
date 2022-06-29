const cepServices = require('../services/cep');

const getAddressByCep = async (req, res, next) => {
  try {
    const { cep } = req.params;
    const address = await cepServices.findAdressByCep(cep);
    return res.status(200).json(address);
  } catch (e) {
    return next(e);
  }
};

module.exports = {
  getAddressByCep,
};