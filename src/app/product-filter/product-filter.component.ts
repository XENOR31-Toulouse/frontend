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
    gpuBrands: string[];
  }>();

  minPrice: number = 0;
  maxPrice: number = 5000;

  cpuBrands: { [key: string]: boolean } = {
    AMD: false,
    Intel: false,
  };

  gpuBrands: { [key: string]: boolean } = {
    NVIDIA: false,
    AMD: false,
    Intel: false,
  };

  // Emit filter whenever a value changes
  emitFilter() {
    const selectedCpuBrands = Object.keys(this.cpuBrands).filter(
      (brand) => this.cpuBrands[brand]
    );
    const selectedGpuBrands = Object.keys(this.gpuBrands).filter(
      (brand) => this.gpuBrands[brand]
    );
    this.filterChanged.emit({
      min: this.minPrice,
      max: this.maxPrice,
      cpuBrands: selectedCpuBrands,
      gpuBrands: selectedGpuBrands,
    });
  }
}
