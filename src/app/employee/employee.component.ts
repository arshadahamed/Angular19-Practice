import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-employee',
  imports: [RouterLink,],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
  employees = [
    { empId: 1, empName: 'John', empDept: 'Software Engineer' },
    { empId: 2, empName: 'Jane Smith', empDept: 'Project Manager' },
    { empId: 3, empName: 'Alice Johnson', empDept: 'UX Designer' },
    { empId: 4, empName: 'Bob Brown', empDept: 'Data Analyst' }
  ];
}
