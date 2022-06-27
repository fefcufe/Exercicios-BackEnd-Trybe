// arquivo para manipular dados da tabela Books

const connection = require('./connection');

const getAllBooks = async () => {
    const [books] = await connection.query(
        'SELECT id, title, author_id FROM model_example.books;' 
    );

    return books.map(({ id, title, author_id}) => ({
        id,
        title,
        authorID: author_id,
    }));
}

const getBooksByAuthorId = async (authorId) => {
    const query = 'SELECT * FROM model_example.books WHERE author_id=?;'; // onde tem "?" na query é substituido pelo parametro depois da virgula no método query
    const [book] = await connection.query(query, [authorId]);

    return book.map(({ id, title, author_id}) => ({
        id,
        title,
        authorID: author_id,
    }));
};

const getBookById = async (bookId) => {
    const query = 'SELECT id, title FROM model_example.books WHERE id = ?;';
    const [book] = await connection.query(query, [bookId]);
    
    if (book.length === 0) return null;

    return book.map(({ id, title }) => ({
        id,
        title
    }))[0];
}
module.exports = {
    getAllBooks,
    getBooksByAuthorId,
    getBookById,
}