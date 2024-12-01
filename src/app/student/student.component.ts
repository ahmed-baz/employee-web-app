import {Component} from '@angular/core';
import {Student} from '../model/student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {

  constructor() {
  }

  private _student: Student = new Student();

  changeName(): void {
    this._student.firstName = "Ahmed";
    this._student.lastName = "Baz"
  }

  increaseAge(): void {
    this._student.age++
  }

  decreaseAge(): void {
    this._student.age--
  }

  changeFirstName(name: string): void {
    this._student.firstName = name;
  }

  changeLastName(name: string): void {
    this._student.lastName = name;
  }


  get student(): Student {
    return this._student;
  }

  adult(): boolean {
    return this._student.age > 18
  }

  iskid(): boolean {
    return this._student.age < 12
  }
}
