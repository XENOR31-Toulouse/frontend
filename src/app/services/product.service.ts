// src/app/services/product.service.ts
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  price: string;
  cpu: string;
  cpu_brand: string;
  gpu: string;
  gpu_brand: string;
  ram: string;
  ram_size: string;
  storage: string;
  storage_size: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private http = inject(HttpClient); // Angular 19+ inject() style
  private baseUrl = 'http://localhost:8080'; // your Spring Boot backend URL

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/pcs`);

  }
}
