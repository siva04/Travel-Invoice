import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { CustomerComponent } from './customer/customer.component';
import { InvoiceComponent } from './invoice/invoice.component';


@Component({
  selector: 'app-customerbilling',
  standalone: true,
  imports: [MatTabsModule,CustomerComponent,InvoiceComponent],
  templateUrl: './customerbilling.component.html',
  styleUrl: './customerbilling.component.scss'
})
export class CustomerbillingComponent {

}
