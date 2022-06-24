// arquivo de rotas/express 

const express = require('express');
const { get } = require('express/lib/response');
const Author = require('./models/author'); // importa model da tabela Author
const Books = require('./models/book');
const app = express(); // inicializa o express em app 

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Ouvindo na porta ${PORT}`);
});

app.get('/authors', async (_req, res) => {
    try {
        const authors = await Author.getAllAuthors();
        res.status(200).json(authors);
    } catch(e) {
        return res.status(400).json({ message: e});
    }
    
});

// essa rota pode retornar todos os livros ou somente os livros que contenham o authorId fornecido na query
app.get('/books', async (req, res) => {
    try {
        const { authorID }= req.query;
        if (!authorID) {
            const allBooks = await Books.getAllBooks();
            return res.status(200).json(allBooks);
        }
        const someBooks = await Books.getBooksById(authorID);
        return res.status(200).json(someBooks);

        // mais enxuto:
/*         const books = (authorID) ? 
          await Books.getBooksById(authorID) :  se for true
          await await Books.getAllBooks();      se for false
        return res.status(200).json.apply(books); */
    } 
    catch(e) {
        return res.status(400).json({ message: e});
    }
})

// jeito "antigo" de fazer um endpoint e buscar por id
app.get('/books/search', async (req, res) => {
    try {
      const { id } = req.query;
      const books = await Books.getAllBooks();
      const book = books.find((item) => item.id === Number(id));
      return res.status(200).json(book);
    } catch(e) {
        return res.status(400).json({ message: e});
    }
});

app.get('/authors/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const author = await Author.getAuthorById(id);
        (author) ? res.status(200).json(author) : res.status(404).json({ message: 'Author not found!' });
    } catch(e) {
        return res.status(400).json({ message: e});
    }
});