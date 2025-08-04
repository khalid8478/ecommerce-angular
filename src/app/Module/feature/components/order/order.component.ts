import { Component } from '@angular/core';
import { OrderCardComponent } from "./order-card/order-card.component";
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [OrderCardComponent, CommonModule, MatCheckboxModule],
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss'
})
export class OrderComponent {

  orderFilter=[
    {value:"on_the-way", label:"On The Way"},
    {value:"delivered", label:"Delivered"},
    {value:"cancelled", label:"Cancelled"},
    {value:"returned", label:"Returned"},
  ]
  orders=[[1,1],[1,1]]

  constructor(private router:Router){
  
    }

  navigateToOrderDetails=(id:Number)=>{
    this.router.navigate([`/order/${id}`])
  }

}
