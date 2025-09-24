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

  onFilterChanged(filter: { min: number; max: number; cpuBrands: string[] }) {
    this.filteredProducts = this.products.filter((p) => {
      const priceNumber = Number(p.price.replace(/[^0-9]/g, ''));
      const priceOk = priceNumber >= filter.min && priceNumber <= filter.max;

      const cpuOk =
        filter.cpuBrands.length === 0 || // no brand selected = allow all
        filter.cpuBrands.includes(p.cpu_brand);

      return priceOk && cpuOk;
    });
  }
}
