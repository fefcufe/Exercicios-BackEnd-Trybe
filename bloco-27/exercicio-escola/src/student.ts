// - matrícula
// - nome
// - 4 notas de prova
// - 2 notas de trabalho

import Person from './person';

export default class Student extends Person {
  private _enrollment: string;
  private _examsGrades: number[] = [];
  private _worksGrades: number[] = [];

  constructor(name: string, birthDate: Date) {
    super(name, birthDate);
    this._enrollment = this.generateEnrollment();
  }

  get enrollment(): string {
    return this._enrollment;
  }

  set enrollment(value: string) {
    this._enrollment = value;
  }

  get examsGrades(): number[] {
    return this._examsGrades;
  }

  set examsGrades(value: number[]) {
    this.validateExamsGrades(value);
    this._examsGrades = value;
  }

  get worksGrades(): number[] {
    return this._worksGrades;
  }

  set worksGrades(value: number[]) {
    this.validateWorksGrades(value);
    this._worksGrades = value;
  }

  sumGrades(): number {
    return [...this.examsGrades, ...this.worksGrades]
      .reduce((previousNote, note) => {
        const nextNote = note + previousNote;

        return nextNote;
      }, 0);
  }

  sumAverageGrade(): number {
    const sumGrades = this.sumGrades();
    const divider = this.examsGrades.length + this.worksGrades.length;

    return Math.round(sumGrades / divider);
  }

  generateEnrollment() : string {
    const random = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');
    if (random.length > 16) {
      throw new Error('Matrícula não pode ter mais do que 16 caracteres');
    }
    return `STU${random}`;
  }

  private validateExamsGrades(exams: number[]) : void {
    if (exams.length > 4) {
      throw new Error('Estudante pode ter no máximo 4 notas de exames');
    }
  }

  private validateWorksGrades(works : number[]) : void {
    if (works.length > 2) {
      throw new Error('Estudante pode ter no máximo 2 notas de trabalhos');
    }
  }
}