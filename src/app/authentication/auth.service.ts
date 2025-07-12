import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn: boolean = false;

  login(email: string, password: string): boolean {
    // Simulate a login check
    if (email !== '' && password !== '') {
      this.isLoggedIn = true;
      return true;
    }
    return false;
  }

  isLoggedInUser(): boolean {
    return this.isLoggedIn;
  }

}
