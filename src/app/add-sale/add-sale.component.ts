import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { debounceTime, switchMap, filter } from 'rxjs/operators';

import { get } from 'http';
import { cust } from '../CustomerDatasource';
import { Transaction } from '../Interface/ITransaction';
import { Router } from '@angular/router';
import { TransactionService } from '../Services/transaction.service';
import { CustomerService } from '../Services/customer.service';
import { CommonModule } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { Customer } from '../Interface/ICustomer';

@Component({
  selector: 'app-add-sale',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatSelectModule,
    CommonModule,
    MatAutocompleteModule,
  ],
  templateUrl: './add-sale.component.html',
  styleUrl: './add-sale.component.css',
})
export class AddSaleComponent implements OnInit {
  handleCustomerNameOnChange($event: Event) {
    console.log($event);
  }
  saleForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private transactionService: TransactionService,
    private customerService: CustomerService
  ) {
    this.saleForm = this.fb.group({
      customerId: ['', Validators.required],
      customerName: ['', Validators.required],
      saleDate: [new Date().getDate(), Validators.required],
      quantity: ['', [Validators.required, Validators.min(0)]],
      session: ['', Validators.required],
      product: ['', Validators.required],
    });
  }

  customerName: string[] = [];
  productType = ['Milk', 'Ghee', 'Curd', 'Paneer'];
  sessionType = ['Morning', 'Evening'];

  ngOnInit(): void {
    this.saleForm
      .get('customerName')
      ?.valueChanges.pipe(
        debounceTime(1), // Wait for the user to stop typing for 300ms
        filter((value) => !!value && value.trim().length > 0),
        switchMap((value) => this.customerService.getCustomerByPartName(value))
      )
      .subscribe((customerName: Customer[]) => {
        this.customerName = customerName.map((ele) => ele.id + '-' + ele.name);
        console.log(this.customerName);
      });

    // this.saleForm.get('customerName')?.valueChanges.subscribe((value) => {
    //   console.log('Name control value changed:', value);
    // });
  }

  onSubmit(): void {
    // const formData = this.saleForm.value;
    // console.log(formData);
    // this.addTransaction(formData.customerId)
    if (this.saleForm.valid) {
      const formData = this.saleForm.value;
      // Process the form data, e.g., send it to a service to add the sale
      console.log(formData);
      this.addTransaction(
        formData.quantity,
        formData.product,
        formData.customerId
      );
      // Reset the form after submission
      this.saleForm.reset();
    } else {
      // Handle form validation errors
      // Mark all fields as touched to display validation messages
      this.saleForm.markAllAsTouched();
    }
  }

  onSelectCustomer(customerName: string): void {
    // Update the form with the selected name and its ID
    console.log('select function is printing');
    console.log(customerName);
    console.log(customerName.split('-')[0]);
    var getRequestCustId = Number(customerName.split('-')[0]);

    this.saleForm.patchValue({
      customerId: getRequestCustId,
    });
  }

  addTransaction(quantity: number, product: string, custId: number): void {
    console.log(cust[custId]);
    this.transactionService.addTransaction(quantity, product, custId).subscribe(
      (response) => {
        console.log('Sale added successfully', response);
        this.saleForm.reset();
      },
      (error) => {
        console.error('Error adding Sale', error);
      }
    );
    console.log('View Detail: redirecting');
    this.router.navigate(['/customer', custId]);
    console.log('routing complete');
  }
}
