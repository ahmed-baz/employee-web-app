import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StudentComponent} from './school/pages/student/student.component';
import {EmployeeComponent} from './employee/pages/employee/employee.component';
import {TaskComponent} from './school/pages/task/task.component';
import {EmployeeDetailsComponent} from './employee/cmoponents/employee-details/employee-details.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeeComponent
  },
  {
    path: 'employees/:id',
    component: EmployeeDetailsComponent
  },
  {
    path: 'students',
    component: StudentComponent
  },
  {
    path: 'employees',
    component: EmployeeComponent
  },
  {
    path: 'tasks',
    component: TaskComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
