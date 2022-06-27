// arquivo que manipula e acessa dados relacionados à entidade/TABELA Authors do DB;
const connection = require('./connection');


const serialize = (authorData) => ({
    id: authorData.id,
    firstName: authorData.first_name,
    middleName: authorData.middle_name,
    lastName: authorData.last_name,
});

// a funcao serialize trata os dados recebidos do db; na tabela os dados geralmente estarão em snake_case, mas para uso em código o ideal é camelCase; 


// método para obter todos os autores 
const getAllAuthors = async () => {
    const [authors] = await connection.query(
        'SELECT id, first_name, middle_name, last_name FROM model_example.authors'
    );
    // o método query/execute nos retorna uma promise que, quando resolvida, retorna um array da seguinte forma: [rows, fields]; o fields por enquanto não veremos sobre, mas os resultados dos valores (linhas) dessa coluna que estamos buscando, encontra-se em rows, que também é uma lista. Dessa forma, usaremos a desconstrução semelhante àquela que usamos com objetos ( { authors } = objetoPai) ), só que como trata-se de uma lista que contém outras listas ficaria entre colchetes: [authors] = listaPai. Assim, estamos só acessando a lista que representa rows dentro da resposta do método query;  
    return authors.map(serialize); 
}

// método para obter autor passando a id
const getAuthorById = async (id) => {
    const query = `
      SELECT id, first_name, middle_name, last_name 
      FROM model_example.authors 
      WHERE id = ?
    `;
  
    const [authorData] = await connection.query(query, [id]);
  
    if (authorData.length === 0) return null;
    const { firstName, middleName, lastName } = authorData.map(serialize)[0];
    return ({
        id,
        firstName,
        middleName,
        lastName,
    });
  }; 

  // método para inserir autores 
  
  const createAuthor = async (firstName, middleName, lastName) => 
    await connection.query(`INSERT INTO model_example.authors (first_name, middle_name, last_name)
     VALUES (?,?,?)`, [firstName, middleName, lastName]);

  // ou serialize(author)[0]
 // não esquecer de colocar o index do elemento que deve ser retornado, ainda que seja uma lista de um elemento só  
 

module.exports = {
    getAllAuthors,
    serialize,
    getAuthorById,
    createAuthor,
};