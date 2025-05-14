import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private employees =[
    { id: 1, name: 'John Doe',  department: 'IT', location: 'Kandy', phone: '0771234567'},
    { id: 2, name: 'Jane Smith', department: 'Management', location: 'Colombo', phone: '0777654321'},
    { id: 3, name: 'Sam Wilson', department: 'Design', location: 'Galle', phone: '0779876543'},
    { id: 4, name: 'Chris Evans',department: 'Analytics', location: 'Matara', phone: '0774567890'},
  ];
  getEmployees() {
    return this.employees;
  }
  getEmployeeById(id: number) {
    return this.employees.find((emp) => emp.id === id);
  }
}
