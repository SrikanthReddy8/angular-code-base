import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Auth } from '../../core/auth';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  constructor(public auth: Auth) {}
  logout() {
    this.auth.logout();
  }
}
