// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './Home/home.component';
import { ListComponent } from './list/list.component';
import { FormContactComponent } from './form-contact/form-contact.component';


export const routes: Routes = [
   { path: 'Home', component: HomeComponent },
   { path: 'list', component: ListComponent },
   { path: 'form', component: FormContactComponent },
  { path: '', redirectTo: 'Home', pathMatch: 'full' }
];
