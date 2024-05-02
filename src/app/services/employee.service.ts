import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) {}

    addEmployee(data : any) {
      return this.http.post('http://localhost:3000/employee',data);

  }
  getEmployees() {
    return this.http.get('http://localhost:3000/employee');
}
deleteEmployee(id:any) {
  return this.http.delete(`http://localhost:3000/employee/${id}`);
}
updateEmployee(id:any,data:any) {
  return this.http.put(`http://localhost:3000/employee/${id}`,data);
}
}
