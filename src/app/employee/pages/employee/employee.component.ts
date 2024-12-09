import {Component, OnInit} from '@angular/core';
import {Employee} from '../../model/employee';
import {EmployeeService} from '../../service/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit {

  private _employees: Employee[] = [];
  errorMessage: string | undefined = '';
  isLoading: boolean = false;
  isVisible: boolean = false;

  constructor(
    private employeeService: EmployeeService) {
  }

  ngOnInit(): void {
    this.findAllEmployees()
  }

  get employees(): Employee[] {
    return this._employees;
  }

  findAllEmployees() {
    this.employeeService
      .findAll()
      .subscribe({
        next: (res) => {
          if (200 == res.statusCode) {
            this._employees = res.data as Employee[];
          } else {
            this.errorMessage = res.message
          }
        },
        error: (error) => {
          this.errorMessage = error
        }
      })
  }

  deleteEmployee(id: number | undefined) {
    this.isLoading = true
    this.employeeService
      .delete(id!)
      .subscribe({
        next: (res) => {
          if (200 != res.statusCode) {
            this.errorMessage = res.message
            this.isVisible = true;
            this.showMessage()
          }
        },
        error: (error) => {
          this.errorMessage = error
          this.isVisible = true;
          this.showMessage()
        },
        complete: () => {
          this.isLoading = false
          this.isVisible = false
          this.findAllEmployees()
        }
      })
  }

  showMessage(): void {
    setTimeout(() => {
      this.isVisible = false;
    }, 2000);
  }

}
