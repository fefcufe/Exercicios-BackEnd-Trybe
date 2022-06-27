const express = require('express');
const bodyParser = require('body-parser');
const cepController = require('./controllers/cep');
const { append } = require('express/lib/response');
const res = require('express/lib/response');
const app = express(); 

app.use(bodyParser.json());

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Estou ouvindo na porta ${PORT}...`);
});

app.get('/ping', (_req, res) => {
    return res.status(200).json({ message: 'pong!'});
});

app.get('/cep/:cep', cepController.getCepByNumber);