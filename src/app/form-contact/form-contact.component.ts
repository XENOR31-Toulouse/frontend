// src/app/form-contact/form-contact.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-form-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './form-contact.component.html',
})
export class FormContactComponent {
  name: string = '';
  email: string = '';
  message: string = '';
  submitted: boolean = false;

  submitForm() {
    // For now, just log the values and show a simple message
    console.log('Form submitted', { name: this.name, email: this.email, message: this.message });
    this.submitted = true;

    // Reset the form (optional)
    this.name = '';
    this.email = '';
    this.message = '';
  }
}
