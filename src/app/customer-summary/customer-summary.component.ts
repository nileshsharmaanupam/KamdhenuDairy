import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';

import { cust } from './../CustomerDatasource'
import { Customer } from './../ICustomer'

// export interface Customer {
//   id: number;
//   name: string;
//   email: string;
//   phoneNum: number;
//   joinDate : Date;
//   lastInvoiceDate: Date;
//   quantityBought: number; 
// }

const ELEMENT_DATA: Customer[] = cust;
// [
//   {
//     id: 1,
//     name: 'John Doe',
//     email: 'john.doe@example.com',
//     phoneNum: 0,
//     joinDate : new Date('2024-07-06'),
//     lastInvoiceDate:new Date('2024-07-06'),
//     quantityBought:10
//   },
//   {
//     id: 2,
//     name: 'John Doe',
//     email: 'john.doe@example.com',
//     phoneNum: 0,
//     joinDate : new Date('2024-07-06'),
//     lastInvoiceDate:new Date('2024-07-06'),
//     quantityBought:10
//   },{
//     id: 3,
//     name: 'Jane Smith',
//     email: 'Jane.Smith@example.com',
//     phoneNum: 0,
//     joinDate : new Date('2024-07-06'),
//     lastInvoiceDate:new Date('2024-07-06'),
//     quantityBought:10
//   },
//   {
//     id: 4,
//     name: 'John Do3',
//     email: 'john.do3@example.com',
//     phoneNum: 0,
//     joinDate : new Date('202407-06'),
//     lastInvoiceDate:new Date('2024-07-06'),
//     quantityBought:10
//   }
// ];

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
  dataSource = ELEMENT_DATA;

  constructor(private router: Router) { }

  editCustomer(customer: Customer): void {
    console.log('Edit customer:', customer);
    // Implement your edit logic here
  }

  viewDetailOfCustomer(customer: Customer): void {
    console.log('View Detail: ', customer);
    this.router.navigate(['/customer', customer.id]);
  }

}
