import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) {}

  addEmployee(data : any) {
      return this.http.post('https://hotel-services-83kt.onrender.com/hotels',data);

  }
  getEmployees() {
    return this.http.get('https://hotel-services-83kt.onrender.com/hotels');
}
  deleteEmployee(id:any) {
  return this.http.delete(`https://hotel-services-83kt.onrender.com/hotels/${id}`);
}
  updateEmployee(id:any,data:any) {
  return this.http.put(`https://hotel-services-83kt.onrender.com/hotels/${id}`,data);
}
}


// local  http://localhost:8080
//for live git https://hotel-services-83kt.onrender.com