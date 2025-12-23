import { Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  isLoggedIn = signal<boolean>(this.hasToken());
  constructor(private router: Router) {}
  login() {
    localStorage.setItem('auth_token', 'fake_jwt_token');
    this.isLoggedIn.set(true);
    this.router.navigate(['/home/dashboard']);
  }
  logout() {
    localStorage.removeItem('auth_token');
    this.isLoggedIn.set(false);
    this.router.navigate(['/login']);
  }
  hasToken(): boolean {
    return !!localStorage.getItem('auth_token');
  }
}
