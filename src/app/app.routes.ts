import { Routes } from '@angular/router';
import { CustomerSummaryComponent } from './customer-summary/customer-summary.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { AddSaleComponent } from './add-sale/add-sale.component'
import { HomePageComponent } from './home-page/home-page.component'
import { AddCustomerComponent } from './add-customer/add-customer.component'

export const routes: Routes = [
    { path: '', component: HomePageComponent },
    //{ path: '**', component: HomePageComponent },
    { path: 'homepage', component: HomePageComponent },
    { path: 'customersummary', component: CustomerSummaryComponent },
    { path: 'customer/:id', component: CustomerDetailsComponent },
    { path: 'addsale', component: AddSaleComponent },
    { path: 'addcustomer', component: AddCustomerComponent}
];
