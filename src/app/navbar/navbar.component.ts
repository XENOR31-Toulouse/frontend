import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],  // ✅ needed for routerLink
  template: `
    <nav style="padding: 1rem; background-color: #1976d2; color: white;">
      <a routerLink="/" style="margin-right: 1rem; color: white; text-decoration: none;">Home</a>
      <!-- <a routerLink="/form" style="margin-right: 1rem; color: white; text-decoration: none;">Add Product</a>
      <a routerLink="/list" style="color: white; text-decoration: none;">Product List</a>
      <a routerLink="/Test" style="margin-left: 1rem; color: white; text-decoration: none;">Test</a> -->
    </nav>
  `
})
export class NavbarComponent {}