import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-filter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-filter.component.html',
})
export class ProductFilterComponent {
  @Output() priceFilter = new EventEmitter<{ min: number; max: number }>();

  minPrice: number = 0;
  maxPrice: number = 5000;



  applyFilter() {
    this.priceFilter.emit({ min: this.minPrice, max: this.maxPrice });
  }
}
