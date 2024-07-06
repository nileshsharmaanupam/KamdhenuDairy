import { Routes } from '@angular/router';
import {CustomerSummaryComponent} from './customer-summary/customer-summary.component';
import {CustomerDetailsComponent} from './customer-details/customer-details.component';
import {AddSaleComponent} from './add-sale/add-sale.component'

export const routes: Routes = [
    { path: '', component: CustomerSummaryComponent },
    { path: 'customer/:id', component: CustomerDetailsComponent },
    { path: 'addsale', component: AddSaleComponent }
];
