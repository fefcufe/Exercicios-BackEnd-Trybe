
const servicesAuthors = require('../services/Authors');

const getAll = async (_req, res) => {
    try {
        const authors = await servicesAuthors.getAll();
        res.status(200).json(authors);
    } catch(e) {
        return res.status(400).json({ message: e});
    }
    
};

module.exports = {
    getAll,
}