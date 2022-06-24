const { create } = require('domain');

const fs = require('fs').promises;

function readFile (filePath) {
  fs.readFile(filePath, 'utf8')
    .then((data) => JSON.parse(data).forEach((element) => console.log(`${element.id} - ${element.name}`)))
    .catch((erro) => {
        console.log(`Ocorreu um erro ao ler o arquivo. Erro: ${erro.message}`);
        process.exit(1);
    })
}

function searchById (id) {
  fs.readFile('./simpsons.json', "utf8")
    .then((data) => {
        const result = JSON.parse(data).find((element) => Number(element.id) === id);
        if (!result) {
            throw new Error ('Id não encontrado');
        }
        console.log(result);
    })
}

 async function changeFile (id1, id2) {
  const simpsonsArray = await JSON.parse( await fs.readFile('./simpsons.json', "utf8"))
  const simpsonsFilteredArray = simpsonsArray.filter((element) => {
    return Number(element.id) !== id1 && Number(element.id) !== id2 
  });
  await fs.writeFile('./simpsons.json', JSON.stringify(simpsonsFilteredArray));  
}

async function main () {
  changeFile(10,6)
  const resultadoMudanca = await fs.readFile('./simpsons.json', "utf8");
  console.log(resultadoMudanca)
}

async function createNewFile () {
  const simpsonsOriginalFile = await JSON.parse( await fs.readFile('./simpsons.json', "utf8"));
  const newContent = simpsonsOriginalFile.filter((element) => {
    return 1 <= Number(element.id) && Number(element.id) <= 4  
  })
  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(newContent));

}

async function addNelson () {
  const simpsonsFamilyFile = await JSON.parse( await fs.readFile('./simpsonsFamily.json', "utf-8"));
  const addNelsonArray = simpsonsFamilyFile.push({id: '11', name: 'Nelson Muntz'});
  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamilyFile))
}

async function addMaggie () {
  const simpsonsFamilyFile = await JSON.parse( await fs.readFile('./simpsonsFamily.json', "utf-8"));
  const newMember = {id: '11', name: 'Maggie Simpson'}
  simpsonsFamilyFile.splice(4, 1, newMember);
  
  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamilyFile))
}

addMaggie ();
// addNelson();
 // createNewFile();
// main();
//readFile('./simpsons.json');
//searchById(27);
