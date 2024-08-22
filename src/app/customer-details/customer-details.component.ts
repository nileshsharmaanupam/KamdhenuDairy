import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';

import { Customer } from '../Interface/ICustomer'
import { Transaction } from '../Interface/ITransaction'

import { cust } from './../CustomerDatasource'
import { TransactionService } from '../Services/transaction.service';
import { CustomerService } from '../Services/customer.service';
import { response } from 'express';
import { error } from 'console';



const ELEMENT_DATA: Customer[] = cust;



@Component({
  selector: 'app-customer-details',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: './customer-details.component.html',
  styleUrl: './customer-details.component.css'
})
export class CustomerDetailsComponent implements OnInit {
  customer: Customer | undefined;
  transaction: Transaction| undefined;

  displayedColumns: string[] =
    ['id', 'Product', 'dateOfPurcahse', 'session', 'quantity', 'amount'];
  dataSource = new MatTableDataSource<Transaction>();

  constructor(private route: ActivatedRoute, private transactionService: TransactionService ,private customerService: CustomerService) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    //this.customer = ELEMENT_DATA.find(customer => customer.id === id);
    
    this.customerService.getCustomerById(id).subscribe(
      value => {
        this.customer = value;
      }
    );
    
    this.transactionService.getTransactionByCustomerId(id)
     .subscribe(
      
      value => {
        this.dataSource.data= value;
        console.log(value);
      }
    )
    if (this.customer) {
     // this.dataSource.data = this.customer.transactions;
    }

  }



}
