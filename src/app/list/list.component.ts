import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductService, Product } from '../services/product.service';
import { ProductFilterComponent } from '../product-filter/product-filter.component';

@Component({
  selector: 'list-pc',
  standalone: true,
  imports: [CommonModule, RouterModule, ProductFilterComponent],
  templateUrl: './list.component.html',
})
export class ListComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
      this.filteredProducts = data;
    });
  }

  onPriceFilter(filter: { min: number; max: number }) {
    this.filteredProducts = this.products.filter(
      (p) => {
        const priceNumber = Number(p.price.replace(/[^0-9]/g, '')); // remove € and parse
        return priceNumber >= filter.min && priceNumber <= filter.max;
      }
    );
  }
}
