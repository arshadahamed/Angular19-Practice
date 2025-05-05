import { Component } from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee',
  imports: [RouterLink,],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
  id: string = '';
  name: string = '';

  constructor(private route: ActivatedRoute) {
     const params = this.route.snapshot.params;
      this.id = params['id'];
      this.name = params['name'];
      console.log('Emp_Id: ${this.id}, Emp_Name: ${this.name}');
  }
  employees = [
    { empId: 1, empName: 'John', empDept: 'Software Engineer' },
    { empId: 2, empName: 'Jane Smith', empDept: 'Project Manager' },
    { empId: 3, empName: 'Alice Johnson', empDept: 'UX Designer' },
    { empId: 4, empName: 'Bob Brown', empDept: 'Data Analyst' }
  ];
}
