const express = require('express');
require('dotenv').config();
const app = express();

const booksRouter = require('./Routes/booksRoutes');
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/books', booksRouter);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));