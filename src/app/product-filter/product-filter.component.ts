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
  @Output() filterChanged = new EventEmitter<{
    min: number;
    max: number;
    cpuBrands: string[];
  }>();

  minPrice: number = 0;
  maxPrice: number = 5000;

  cpuBrands: { [key: string]: boolean } = {
    AMD: false,
    Intel: false,
  };

  // Emit filter whenever a value changes
  emitFilter() {
    const selectedBrands = Object.keys(this.cpuBrands).filter(
      (brand) => this.cpuBrands[brand]
    );
    this.filterChanged.emit({
      min: this.minPrice,
      max: this.maxPrice,
      cpuBrands: selectedBrands,
    });
  }
}
