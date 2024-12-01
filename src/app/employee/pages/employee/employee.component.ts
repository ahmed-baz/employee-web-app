import {Component, OnInit} from '@angular/core';
import {Employee} from '../../model/employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit {

  private _employees: Employee[] = [];

  ngOnInit(): void {
    this._employees.push(new Employee(1, 'John', 'Doe', 'john@example.com', 1000, new Date()));
    this._employees.push(new Employee(2, 'Ahmed', 'Ali', 'ahmed@example.com', 1500, new Date()));
    this._employees.push(new Employee(2, 'Hassan', 'Ahmed', 'hassan@example.com', 2000, new Date()));
  }


  get employees(): Employee[] {
    return this._employees;
  }
}
