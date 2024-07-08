import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from './ICustomer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  //private apiUrl = 'https://api.example.com/customers'; // Replace with your API URL
  //https://localhost:7191/api/customer?name=Nilesh&email=SwaggerTest&PhoneNum=123
  private appURL = "https://localhost:7191/api/customer"; 

  constructor(private http: HttpClient) {}

  addCustomer(name: string, email: string, PhoneNum: string): Observable<any> {

    const body = { name, email, PhoneNum };
    console.log(body);
    return this.http.post<any>(this.appURL, body);
  }

  getCustomer(): Observable<any> {
    return this.http.get<any>(this.appURL);
  }
}
