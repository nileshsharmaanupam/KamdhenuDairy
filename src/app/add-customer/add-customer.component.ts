import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-add-customer',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, ReactiveFormsModule, MatSelectModule],
  templateUrl: './add-customer.component.html',
  styleUrl: './add-customer.component.css'
})
export class AddCustomerComponent {
  customerForm: FormGroup;

  constructor(private fb: FormBuilder,private http: HttpClient,private customerService: CustomerService) {
    this.customerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phoneNumber: ['', Validators.required]
    });
  };

 

  onSubmit(): void {
    if (this.customerForm.valid) {
      const { name, email, phoneNumber } = this.customerForm.value;
      this.customerService.addCustomer(name, email, phoneNumber).subscribe(
        response => {
          console.log('Customer added successfully', response);
          this.customerForm.reset();
        },
        error => {
          console.error('Error adding customer', error);
        }
      );
    } else {
      this.customerForm.markAllAsTouched();
    }
  }

}
