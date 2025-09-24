// src/app/app.routes.ts
import { Routes } from '@angular/router';
// import { ProductFormComponent } from './product-form/product-form.component';
// import { ProductListComponent } from './product-list/product-list.component';

export const routes: Routes = [
//   { path: 'form', component: ProductFormComponent },
//   { path: 'list', component: ProductListComponent },
  { path: '', redirectTo: 'list', pathMatch: 'full' }
];
