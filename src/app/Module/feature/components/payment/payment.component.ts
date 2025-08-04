import { OrderService } from './../../../../State/Order/order.service';
import { Component } from '@angular/core';
import { AddressCardComponent } from "../../../shared/components/address-card/address-card.component";
import { CartItemComponent } from "../../../shared/components/cart-item/cart-item.component";
import { MatDividerModule } from '@angular/material/divider';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { AppState } from '../../../../Models/AppState';
import { select, Store } from '@ngrx/store';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [AddressCardComponent, CartItemComponent, MatDividerModule, CommonModule],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.scss'
})
export class PaymentComponent {
  products=[1,1,1]
  order: any
  address: any

  constructor (private activatedRoute:ActivatedRoute,
    private OrderService: OrderService,
    private store: Store<AppState>

  ){

  }
  ngOnInit() {
    let id = this.activatedRoute.snapshot.queryParamMap.get("order_id")
    console.log("id", id)
    if(id) {
      this.OrderService.getOrderById(id);
    }
    this.store.pipe(select(store=>store.order)).subscribe((order)=>{
      this.order=order.oreder
    })

  }
}
