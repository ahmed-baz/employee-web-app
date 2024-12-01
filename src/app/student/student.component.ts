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

  changeFirstName(name: string): void {
    this._student.firstName = name;
  }

  changeLastName(name: string): void {
    this._student.lastName = name;
  }


  get student(): Student {
    return this._student;
  }
}
