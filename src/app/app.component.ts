import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { CustomerSummaryComponent } from './customer-summary/customer-summary.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: 
  [
    RouterLink, 
    RouterLinkActive,
    RouterOutlet,
    HeaderComponent,
    CustomerSummaryComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'kamdhenu-dairy';
}
