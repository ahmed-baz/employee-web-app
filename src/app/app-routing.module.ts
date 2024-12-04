import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StudentComponent} from './school/pages/student/student.component';
import {EmployeeComponent} from './employee/pages/employee/employee.component';

const routes: Routes = [
  {
    path: '',
    component: StudentComponent
  },
  {
    path: 'students',
    component: StudentComponent
  },
  {
    path: 'employees',
    component: EmployeeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
