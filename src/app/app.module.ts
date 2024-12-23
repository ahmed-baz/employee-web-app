import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {StudentComponent} from './school/pages/student/student.component';
import {FormsModule} from "@angular/forms";
import {EmployeeComponent} from './employee/pages/employee/employee.component';
import {TaskComponent} from './school/pages/task/task.component';
import {MaxLengthPipe} from './school/pipes/max-length.pipe';
import {HttpClient, provideHttpClient} from '@angular/common/http';
import {EmployeeDetailsComponent} from './employee/cmoponents/employee-details/employee-details.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    EmployeeComponent,
    TaskComponent,
    MaxLengthPipe,
    EmployeeDetailsComponent,
    PageNotFoundComponent,
    SpinnerComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    HttpClient,
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
