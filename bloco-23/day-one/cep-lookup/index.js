// const process = require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
// const rescue = require('express-rescue');
const cepController = require('./controllers/cep');
const errorMiddleware = require('./middlewares/errorMiddleware');

const app = express(); 

app.use(bodyParser.json());

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Estou ouvindo na porta ${PORT}...`);
});

app.get('/ping', (_req, res) => res.status(200).json({ message: 'pong!' }));

app.get('/cep/:cep', cepController.getAddressByCep);

app.use(errorMiddleware);