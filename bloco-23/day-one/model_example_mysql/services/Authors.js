// adicionando a camada de service, o código desse arquivo deve fazer todo o tratamento dos dados que são obtidos nas funções de ../models/Authors.js ;
// assim, em ../models/Authors.js só ficarão as funções relacionadas diretamente com o db, e aqui ficará concentrado o código para tratamento de dados
// e para as diferentes validações necessárias;
const Author = require('../models/Authors'); // importar a camada de models em service

const getAll = async () => {
  const data = await Author.getAllAuthors;
  if (!data) {
      throw {error: 'No data found'};
  }
  return data; 
}
// a funcao getFullName é uma funcao de tratamento de dados
const getFullName = ({id, firstName, middleName, lastName}) => { // coloca o parametro já desconstruido
    const fullName = [firstName, middleName, lastName]
      .filter(Boolean) // boolean é uma função que, se recebe um parâmetro representado por undefined ou uma string vazia, ele retorna false; Caso contrario, retorna true; Utilizado dentro de um filter, essa função nos retornara somente os elementos que tiverem algum valor;
      .join(' '); // junta todos os elementos numa string separado por espaços ' '; 
      return {
          id,
          firstName,
          middleName,
          lastName,
          fullName,
      }; // retorna as informações do autor + o nome completo
  }

  // validação de novos autores
  const isNameValid = (firstName, middleName, lastName) => {
    if (!firstName || typeof firstName !== 'string') return false;
	if (!lastName || typeof lastName !== 'string') return false;
	if (middleName && typeof middleName !== 'string') return false;

	return true;
  }

  module.exports = {
      getAll,
  }