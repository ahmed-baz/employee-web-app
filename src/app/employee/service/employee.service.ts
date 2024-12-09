import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppResponse} from '../model/AppResponse';
import {Employee} from '../model/employee';
import {environment} from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient: HttpClient) {
  }

  public create(employee: Employee) {
    return this.httpClient.post<AppResponse<Employee>>(`${environment.emp_url}`, employee);
  }

  public findAll() {
    return this.httpClient.get<AppResponse<Employee[]>>(`${environment.emp_url}`);
  }

  public find(id: number) {
    return this.httpClient.get<AppResponse<Employee>>(`${environment.emp_url}/${id}`);
  }


  public update(id: number, employee: Employee) {
    return this.httpClient.put<AppResponse<Employee>>(`${environment.emp_url}/${id}`, employee);
  }

  public delete(id: number) {
    return this.httpClient.delete<AppResponse<void>>(`${environment.emp_url}/${id}`);
  }

}
