// src/app/list/list.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  price: string;
}

@Component({
  selector: 'list-pc',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './list.component.html',
})
export class ListComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'Gaming Beast 5000',
      description: 'Intel i7, RTX 4080, 32GB RAM',
      image: 'assets/pc1.jpg',
      price: '€2,499'
    },
    {
      id: 2,
      name: 'Pro Workstation',
      description: 'AMD Ryzen 9, RTX 4070, 64GB RAM',
      image: 'assets/pc2.jpg',
      price: '€3,199'
    },
    {
      id: 3,
      name: 'Budget Gamer',
      description: 'Intel i5, GTX 1660, 16GB RAM',
      image: 'assets/pc3.jpg',
      price: '€999'
    }
  ];
}
