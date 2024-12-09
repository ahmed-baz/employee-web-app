import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {EmployeeService} from '../../service/employee.service';
import {Employee} from '../../model/employee';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.css'
})
export class EmployeeDetailsComponent implements OnInit {

  id: number = 0;
  employee?: Employee;
  private errorMessage: string | undefined = '';

  constructor(
    private router: Router,
    private employeeService: EmployeeService,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.getEmployeeDetails()
  }

  getEmployeeDetails() {
    this.employeeService
      .find(this.id)
      .subscribe({
        next: (res) => {
          if (200 == res.statusCode) {
            this.employee = res.data as Employee;
          } else {
            this.errorMessage = res.message
          }
        },
        error: (error) => {
          console.log(error)
          this.errorMessage = error
        }
      })
  }

  back() {
    this.router.navigate(['/employees']);
  }
}
