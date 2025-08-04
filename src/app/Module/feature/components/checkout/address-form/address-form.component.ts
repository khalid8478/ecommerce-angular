import { Component } from '@angular/core';
import { MatDivider, MatDividerModule } from '@angular/material/divider';
import { AddressCardComponent } from "../../../../shared/components/address-card/address-card.component";
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { OrderService } from '../../../../../State/Order/order.service';

@Component({
  selector: 'app-address-form',
  standalone: true,
  imports: [MatDividerModule, AddressCardComponent, CommonModule, MatButtonModule, ReactiveFormsModule, MatFormFieldModule,
    MatInputModule,],
  templateUrl: './address-form.component.html',
  styleUrl: './address-form.component.scss'
})
export class AddressFormComponent {

  addresses=[1,1,1];
  myForm:FormGroup=this.formBuilder.group({
    firstName: ["", Validators.required],
    lastName:["",Validators.required],
    streetAddress: ["", Validators.required],
    city:["",Validators.required],
    state:["",Validators.required],
    zipCode:["",Validators.required],
    mobile:["",Validators.required]
  })


  constructor(private formBuilder:FormBuilder, private orderService : OrderService){

  }
  handleCreateOrder(item:any){

  }

  handleSubmit=()=>{
    const formValue=this.myForm.value
    this.orderService.createOrder({formValue})
    console.log("form data", formValue)
  }
}
