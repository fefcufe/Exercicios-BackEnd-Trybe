const connection = require('./connection');

const getAllCeps = async () => {
    const query = 'SELECT * FROM cep_lookup.ceps;';
    const [ceps] = await connection.query(query);
    console.log(ceps);
    return ceps;
};

module.exports = {
    getAllCeps,
}