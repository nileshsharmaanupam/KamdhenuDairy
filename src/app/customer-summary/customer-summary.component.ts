import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';

import { cust } from './../CustomerDatasource'
import { Customer } from './../ICustomer'

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CustomerService } from '../customer.service';



const ELEMENT_DATA: Customer[] = cust;


@Component({
  selector: 'app-customer-summary',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './customer-summary.component.html',
  styleUrl: './customer-summary.component.css'
})
export class CustomerSummaryComponent {
  displayedColumns: string[] =
    ['id', 'name', 'email', 'phoneNum', 'joinDate', 'lastInvoiceDate', 'quantityBought', 'actions'];
  
  dataSource = 
  this.customerService.getCustomer().subscribe(cust => cust as Customer[])


  constructor(private router: Router, private customerService : CustomerService) { }

  editCustomer(customer: Customer): void {
    console.log('Edit customer:', customer);
    // Implement your edit logic here
  }

  

  viewDetailOfCustomer(customer: Customer): void {
    console.log('View Detail: ', customer);
    this.router.navigate(['/customer', customer.id]);
  }

}
