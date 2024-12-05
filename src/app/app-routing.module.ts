import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StudentComponent} from './school/pages/student/student.component';
import {EmployeeComponent} from './employee/pages/employee/employee.component';
import {TaskComponent} from './school/pages/task/task.component';

const routes: Routes = [
  {
    path: '',
    component: TaskComponent
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
