export class Student {

  private _firstName: string = 'John';
  private _lastName: string = 'Doe';
  private _age: number = 15;
  private _imageUrl: string = "/student.jpg";

  getFullName(): string {
    return this._firstName + ' ' + this._lastName;
  }


  set firstName(value: string) {
    this._firstName = value;
  }

  set lastName(value: string) {
    this._lastName = value;
  }

  set age(value: number) {
    this._age = value;
  }

  get firstName(): string {
    return this._firstName;
  }

  get lastName(): string {
    return this._lastName;
  }

  get age(): number {
    return this._age;
  }


  get imageUrl(): string {
    return this._imageUrl;
  }

  set imageUrl(value: string) {
    this._imageUrl = value;
  }
}
