const res = require('express/lib/response');
const cepServices = require('../services/cep');
const getCepByNumber = (req, res) => {
    const { cep } = req.params;
    if (cepServices.cepValidation(cep)) {
        
        return res.status(200).json({ 
            cep,
            logradouro: "Praça da Sé",
            bairro: "Sé",
            localidade: "São Paulo",
            uf: "SP",
        })
    }
}

module.exports = {
    getCepByNumber,
}