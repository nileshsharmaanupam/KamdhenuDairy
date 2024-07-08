import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from './ICustomer';
import { cust } from './CustomerDatasource';
import { Transaction } from './ITransaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  //private apiUrl = 'https://api.example.com/customers'; // Replace with your API URL
  //https://localhost:7191/api/customer?name=Nilesh&email=SwaggerTest&PhoneNum=123
  private appURL = "https://localhost:7191/api/transaction"; 

  constructor(private http: HttpClient) {}

  addTransaction(quantity: number, product: string, custId: number): Observable<any> {

    const body = { quantity, product, custId };
    console.log(body);
    return this.http.post<any>(this.appURL, body);
  }

  getTransactionByCustomerId(custId: number): Observable<Transaction[]> {
    return this.http.get<any>(this.appURL+"?custId="+custId);
  }
}
