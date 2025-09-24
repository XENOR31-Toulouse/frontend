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
  gpu_brand: string;
  ram: string;
  ram_size: string;
  storage: string;
  storage_size: string;

}

@Injectable({
  providedIn: 'root' // makes it available app-wide
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
        name: 'Gaming Beast 3000',
        description: 'High-end gaming PC with the latest GPU and CPU.',
        image: 'assets/images/gaming-beast-3000.jpg',
        price: '$2500',
        cpu: 'Intel Core i9-13900K',
        cpu_brand: 'Intel',
        gpu: 'NVIDIA GeForce RTX 4090',
        gpu_brand: 'NVIDIA',
        ram: 'Corsair Vengeance RGB Pro',
        ram_size: '32GB',
        storage: 'Samsung 980 Pro NVMe SSD',
        storage_size: '1TB',
    },
    {
      id: 2,
        name: 'Workstation Pro X',
        description: 'Powerful workstation for professionals and creators.',
        image: 'assets/images/workstation-pro-x.jpg',
        price: '$3000',
        cpu: 'AMD Ryzen 9 7950X',
        cpu_brand: 'AMD',
        gpu: 'NVIDIA Quadro RTX 5000',
        gpu_brand: 'NVIDIA',
        ram: 'G.Skill Trident Z Royal',
        ram_size: '64GB',
        storage: 'Western Digital Black SN850X NVMe SSD',
        storage_size: '2TB',
    },
    {
        id: 3,
        name: 'Budget Gamer 2024',
        description: 'Affordable gaming PC for entry-level gamers.',
        image: 'assets/images/budget-gamer-2024.jpg',
        price: '$800',
        cpu: 'AMD Ryzen 5 5600X',
        cpu_brand: 'AMD',
        gpu: 'NVIDIA GeForce GTX 1660 Super',
        gpu_brand: 'NVIDIA',
        ram: 'Crucial Ballistix',
        ram_size: '16GB',
        storage: 'Crucial P2 NVMe SSD',
        storage_size: '512GB',
    },

  ];

  constructor() {}

  // Return products as Observable (future-proof for API integration)
  getProducts(): Observable<Product[]> {
    return of(this.products);
  }
}
