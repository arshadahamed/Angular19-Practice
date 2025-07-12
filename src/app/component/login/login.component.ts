import { Component, } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../authentication/auth.service'; // Adjust the import path as necessary

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email:string = '';
  password:string = '';

  constructor(private router:Router, private auth:AuthService) {}

  isLogin():void {
    const checkLogin = this.auth.login(this.email, this.
      password);

      if(checkLogin) {
        this.router.navigate(['/admin']); // Navigate to admin page on successful login
      }else{
        alert('Invalid credentials, please try again.'); // Alert for invalid login
      }
  }
}
