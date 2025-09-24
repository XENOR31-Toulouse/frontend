// src/app/app.component.ts
import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';  // ⬅️ import this

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, RouterModule],   // ⬅️ add RouterModule
  template: `
    <app-navbar></app-navbar>
    <div style="padding: 1rem;">
      <router-outlet></router-outlet>
    </div>
  `,
})
export class AppComponent {}

