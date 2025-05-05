import { Component } from '@angular/core';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {

  // constructor(private route: ActivatedRoute) {
  //   //  const params = this.route.snapshot.params;
  //   //   this.id = params['id'];
  //   //   this.name = params['name'];
  //   //   console.log('Emp_Id: ${this.id}, Emp_Name: ${this.name}');
  //   this.route.queryParams.subscribe(params => {
  //     this.empId = params['empId'];
  //     this.empName = params['empName'];
  //     console.log(params);
  //   });
  // }

  constructor(private router: Router) {}

  navigateToDetail(empId: number, empName: string) {
    this.router.navigate(['/employee-detail'], {
      queryParams: { empId: empId, empName: empName }
    });
  }

  employees = [
    { empId: 1, empName: 'John', empDept: 'Software Engineer' },
    { empId: 2, empName: 'Jane Smith', empDept: 'Project Manager' },
    { empId: 3, empName: 'Alice Johnson', empDept: 'UX Designer' },
    { empId: 4, empName: 'Bob Brown', empDept: 'Data Analyst' }
  ];
}
