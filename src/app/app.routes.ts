import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { EmployeeComponent } from './employee/employee.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { Child2Component } from './child2/child2.component';
import { ProductsComponent } from './products/products.component';
import { ShirtsComponent } from './shirts/shirts.component';
import { PantsComponent } from './pants/pants.component';
import { ShoesComponent } from './shoes/shoes.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';

export const routes: Routes = [
  // {path: '', component: AppComponent}, // Default route
  {path: '', redirectTo:'/home', pathMatch:'full'}, // Default route
  {path: 'home', component: HomeComponent},
  {path: 'about', component:AboutComponent},
  {path: 'contact', component:ContactComponent},
  {path: 'services', component:ServicesComponent},
  {path: 'products', component:ProductsComponent,
    children:[
      {path:'', redirectTo:'shirts', pathMatch:'full'}, // Redirect to shirts if no child route is specified
      {path: 'shirts', component: ShirtsComponent},
      {path: 'pants', component: PantsComponent},
      {path: 'shoes', component:ShoesComponent}
    ]
  },
  {path:'employee', component:EmployeeComponent}, // Route with a parameter Dynamic Routes
  {path: 'parent', component:ParentComponent,
    children:[
    {path: 'child1', component: ChildComponent},
    {path: 'child2', component: Child2Component},
    ],
  },
  {path:'employee-detail', component:EmployeeDetailComponent}, // Route to EmployeeDetailComponent
  {path:'**', component:PageNotFoundComponent}, // Wildcard route for a 404 page
];
