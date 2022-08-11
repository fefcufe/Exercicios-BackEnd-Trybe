export default class Person {
  private _name: string;
  private _birthDate: Date;

  constructor(name: string, birthDate: Date) {
    this.validateBirthDate(birthDate);
    if (this.validateName(name)) {
      this._name = name;
    } else {
      throw new Error('O nome deve conter no mínimo 3 caracteres.');
    }
    this._name = name;
    this._birthDate = birthDate; 
  }

  get name() : string {
    return this._name;
  }

  set name(value: string) {
    if (this.validateName(value)) {
      this._name = value;
    } else {
      throw new Error('O nome deve conter no mínimo 3 caracteres.');
    }
  }

  get birthDate() : Date {
    return this._birthDate;
  }
 
  set birthDate(value: Date) {
    this.validateBirthDate(value);
    this._birthDate = value;
  }

  private validateBirthDate(value: Date) : void {
    if (value.getTime() > new Date().getTime()) {
      throw new Error('A data não pode ultrapassar a data atual');
    } if (this.calculateAge(value) > 120) {
      throw new Error('A pessoa não pode possuir mais de 120 anos!');
    }
  }

  private calculateAge(value: Date) : number {
    return new Date().getFullYear() - value.getFullYear();
  }

  private validateName(value: string) : boolean {
    if (value.length >= 3) {
      return true;
    } 
    return false;
  }
}
