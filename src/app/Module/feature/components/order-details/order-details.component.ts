import { Component } from '@angular/core';
import { AddressCardComponent } from "../../../shared/components/address-card/address-card.component";
import { OrderCardComponent } from "../order/order-card/order-card.component";
import { CommonModule } from '@angular/common';
import { OrderTrackerComponent } from "../../../shared/components/order-tracker/order-tracker.component";

@Component({
  selector: 'app-order-details',
  standalone: true,
  imports: [AddressCardComponent, OrderCardComponent, CommonModule, OrderTrackerComponent],
  templateUrl: './order-details.component.html',
  styleUrl: './order-details.component.scss'
})
export class OrderDetailsComponent {
  orders=[1,1,1]
  steps=[
    {id:0,title:"PLACED", isCompleted:false},
    {id:1,title:"CONFIRM", isCompleted:false},
    {id:2,title:"SHIPPED", isCompleted:false},
    {id:3,title:"DELIVERED", isCompleted:false}
  ]
}
