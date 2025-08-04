import { select, Store } from '@ngrx/store';
import { CartService } from './../../../../State/Cart/cart.service';
import { Component } from '@angular/core';
import { CartItemComponent } from "../../../shared/components/cart-item/cart-item.component";
import { CommonModule } from '@angular/common';
import {MatDividerModule} from '@angular/material/divider';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { AppState } from '../../../../Models/AppState';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CartItemComponent, CommonModule, MatDividerModule, MatButtonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  cart= [1,1,1];
  cartItems:any
  constructor(private router:Router,
    private CartService:CartService,
    private store: Store<AppState>){

  }

  ngOnInit(){
    console.log("Hello")
    this.CartService.getCart()

    this.store.pipe(select(store=>store.cart)).subscribe((cart)=>
             {
               this.cartItems=cart.cartItems
               console.log("cart store ", cart.cartItems)
             });
  }

  navigateToCheckout(){
    this.router.navigate(["checkout"])
  }
}
