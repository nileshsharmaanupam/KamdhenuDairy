import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';

import { get } from 'http';
import { cust } from '../CustomerDatasource';
import { Transaction } from '../ITransaction'
import { Router } from '@angular/router';
import { TransactionService } from '../transaction.service';



@Component({
  selector: 'app-add-sale',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, ReactiveFormsModule, MatSelectModule],
  templateUrl: './add-sale.component.html',
  styleUrl: './add-sale.component.css'
})
export class AddSaleComponent implements OnInit {
  saleForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private transactionService: TransactionService) {
    this.saleForm = this.fb.group({
      customerId: ['', Validators.required],
      customerName: ['', Validators.required],
      saleDate: [new Date().getDate(), Validators.required],
      quantity: ['', [Validators.required, Validators.min(0)]],
      session: ['', Validators.required],
      product: ['', Validators.required]
    });
  }


  customerName = cust;
  productType = ['Milk', 'Ghee', 'Curd', 'Paneer'];
  sessionType = ['Morning', 'Evening'];




  ngOnInit(): void {
  }

  onSubmit(): void {
    // const formData = this.saleForm.value;
    // console.log(formData);
    // this.addTransaction(formData.customerId)
    if (this.saleForm.valid) {
      const formData = this.saleForm.value;
      // Process the form data, e.g., send it to a service to add the sale
      console.log(formData);
      this.addTransaction(formData.quantity,formData.product,formData.customerId)
      // Reset the form after submission
      this.saleForm.reset();
    } else {
      // Handle form validation errors
      // Mark all fields as touched to display validation messages
      this.saleForm.markAllAsTouched();
    }
  }

  addTransaction(quantity: number, product:string , custId: number): void {
    
    
    console.log(cust[custId]);
    this.transactionService.addTransaction(quantity,product,custId).subscribe(
      response => {
        console.log('Sale added successfully', response);
        this.saleForm.reset();
      },
      error => {
        console.error('Error adding Sale', error);
      });
    console.log('View Detail: redirecting');
    this.router.navigate(['/customer', custId]);
    console.log('routing complete')
  }
}
