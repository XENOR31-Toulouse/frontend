// src/app/app.component.ts
import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';  // ⬅️ import this
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, RouterModule, FooterComponent],   // ⬅️ add FooterComponent
  template: `
    <app-navbar></app-navbar>
    <div style="padding: 1rem;">
      <router-outlet></router-outlet>
    </div>
    <app-footer></app-footer>
  `,
})
export class AppComponent {}

