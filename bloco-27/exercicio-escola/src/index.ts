import Person from './person';
import Student from './student';

const pessoa1 = new Person('Fernanda', new Date('1992/07/13'));

const pessoa2 = new Person('Ana', new Date('1990/01/01'));

const estudante1 = new Student('Patricia', new Date('1975/03/15'));

estudante1.worksGrades = [8.5, 6.2];
console.log(pessoa1);
console.log(pessoa2);
console.log(estudante1);