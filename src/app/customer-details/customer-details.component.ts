import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatTableModule,MatTableDataSource } from '@angular/material/table';

import {Customer} from './../ICustomer'
import {Transaction} from './../ITransaction'

import {cust} from './../CustomerDatasource'



const ELEMENT_DATA: Customer[] = cust;



@Component({
  selector: 'app-customer-details',
  standalone: true,
  imports: [CommonModule,MatTableModule],
  templateUrl: './customer-details.component.html',
  styleUrl: './customer-details.component.css'
})
export class CustomerDetailsComponent  implements OnInit {
  customer: Customer | undefined;
  
  displayedColumns: string[] = 
  ['id', 'Product', 'dateOfPurcahse','session','quantity','amount'];
  dataSource = new MatTableDataSource<Transaction>();
  
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.customer = ELEMENT_DATA.find(customer => customer.id === id);
    if (this.customer){
      this.dataSource.data = this.customer.transactions;
    }
    
  }

 
  
}
