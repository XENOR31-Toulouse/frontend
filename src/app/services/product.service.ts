// src/app/services/product.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  price: string;
  cpu: string;
  cpu_brand: string;
  gpu: string;
  ram: string;
  storage: string;

}

@Injectable({
  providedIn: 'root' // makes it available app-wide
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Gaming Beast 5000',
        description: 'High-end gaming PC with the latest GPU and CPU.',
        image: 'assets/images/pc1.jpg',
        price: '€1999',
        cpu: 'Intel i9-13900K',
        cpu_brand: 'Intel',
        gpu: 'NVIDIA RTX 4090',
        ram: '32GB DDR5',
        storage: '1TB NVMe SSD'
    },
    {
        id: 2,
        name: 'Workstation Pro X',
        description: 'Powerful workstation for professionals and creators.',
        image: 'assets/images/pc2.jpg',
        price: '€2499',
        cpu: 'AMD Ryzen 9 7950X',
        cpu_brand: 'AMD',
        gpu: 'NVIDIA RTX 4080',
        ram: '64GB DDR5',   
        storage: '2TB NVMe SSD + 4TB HDD'
    },
    {
        id: 3,
        name: 'Budget Gamer 300',
        description: 'Affordable gaming PC for casual gamers.',
        image: 'assets/images/pc3.jpg',
        price: '€899',
        cpu: 'Intel i5-12400F',
        cpu_brand: 'Intel',
        gpu: 'NVIDIA RTX 3060',
        ram: '16GB DDR4',
        storage: '512GB NVMe SSD'
    },
  ];

  constructor() {}

  // Return products as Observable (future-proof for API integration)
  getProducts(): Observable<Product[]> {
    return of(this.products);
  }
}
