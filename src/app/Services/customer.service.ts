import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../Interface/ICustomer';
import { Console } from 'console';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  //private apiUrl = 'https://api.example.com/customers'; // Replace with your API URL
  //https://localhost:7191/api/customer?name=Nilesh&email=SwaggerTest&PhoneNum=123
  private appURL = 'http://localhost:5007/api/customer';

  constructor(private http: HttpClient) {}

  addCustomer(name: string, email: string, PhoneNum: string): Observable<any> {
    const body = { name, email, PhoneNum };
    console.log(body);
    return this.http.post<any>(this.appURL, body);
  }

  getCustomer(): Observable<any> {
    return this.http.get<any>(this.appURL);
  }

  getCustomerById(custId: number): Observable<any> {
    return this.http.get<any>(this.appURL + '/' + custId);
  }

  getCustomerByPartName(custPartName: string): Observable<any> {
    console.log('Service is printing this ');
    console.log(custPartName);

    return this.http.get<any>(this.appURL + '/customerName/' + custPartName);
  }
}
