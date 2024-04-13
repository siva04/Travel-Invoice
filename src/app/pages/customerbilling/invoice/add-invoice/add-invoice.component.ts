import { CUSTOM_ELEMENTS_SCHEMA, Component , OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';

import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { provideNativeDateAdapter } from '@angular/material/core';
import { SelectControlComponent } from '../../../../components/select-control/select-control.component';

@Component({
  selector: 'app-add-invoice',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,MatFormFieldModule,MatInputModule, MatButtonModule, MatDialogModule, MatSelectModule, MatDatepickerModule, SelectControlComponent],
  templateUrl: './add-invoice.component.html',
  styleUrl: './add-invoice.component.scss',
  providers: [provideNativeDateAdapter()],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AddInvoiceComponent {

   customers: any[] = [
    {name: 'Company No.1', id: 'A'},
    {name: 'Company No.2', id: 'B'},
    {name: 'Company No.3', id: 'C'},
    {name: 'Company No.4', id: 'D'},
    {name: 'Company No.5', id: 'E'},
    {name: 'Company No.6', id: 'F'},
    {name: 'Company No.7', id: 'G'},
  ];
  constructor(public dialoge: MatDialogRef<AddInvoiceComponent>){}

  form:any = FormGroup;
  file:any='';


  ngOnInit() {
    this.form = new FormGroup({
      totalAmount: new FormControl({value:'', disabled: true}),
      customerName: new FormControl(''),
      customerAdress: new FormControl(''),
      customerEmail: new FormControl(''),
      customerPhoneno: new FormControl(''),
      customerGstno : new FormControl(''),  
    });
  }

  fileupload(e:any){
    this.file = e.target.files[0]
  }

  onSubmit(){
    console.log(this.form.value)
    alert('dsf');
  }
}
