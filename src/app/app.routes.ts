// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './Home/home.component';
import { ListComponent } from './list/list.component';
import { FormContactComponent } from './form-contact/form-contact.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';


export const routes: Routes = [
   { path: 'Home', component: HomeComponent },
   { path: 'list', component: ListComponent },
   { path: 'form', component: FormContactComponent },
   { path: 'product/:id', component: ProductDetailComponent },
  { path: '', redirectTo: 'Home', pathMatch: 'full' }
];
