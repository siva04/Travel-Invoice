import { Component , OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';

import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-dialoguec',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,MatFormFieldModule,MatInputModule, MatButtonModule, MatDialogModule],
  templateUrl: './dialoguec.component.html',
  styleUrl: './dialoguec.component.scss'
})


export class DialoguecComponent implements OnInit {
  
  constructor(public dialoge: MatDialogRef<DialoguecComponent>){}

  form:any = FormGroup;
  file:any='';


  ngOnInit() {
    this.form = new FormGroup({
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
