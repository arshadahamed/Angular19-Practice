import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { EmployeeComponent } from './employee/employee.component';

export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component:AboutComponent},
  {path: 'contact', component:ContactComponent},
  {path: 'services', component:ServicesComponent},
  {path:'employee/:empName', component:EmployeeComponent},
];
