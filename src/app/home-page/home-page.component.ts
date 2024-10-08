import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {Router} from '@angular/router'

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  constructor(private router: Router){}
  OnAddSaleClick(){
    this.router.navigate(['/addsale']);
  }
  OnViewCustomerClick(){
    this.router.navigate(['/customersummary']);
  }
  OnAddCustomerClick(){
    
    this.router.navigate(['/addcustomer']);
  }
}
