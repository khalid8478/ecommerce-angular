import { CartService } from './../../../../State/Cart/cart.service';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [MatIconModule, CommonModule],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss'
})
export class CartItemComponent {

  @Input() cartItem:any;
  @Input() showButton:any;

  constructor(private cartService : CartService) {

  }


  updateCartItem(num: number) {
  console.log("num", num);
  this.cartService.updateCartItem({
    cartItemId:this.cartItem.id,
     data: {quantity: num + this.cartItem.quantity}
    });
}

  removeCartItem(){
    console.log("removeCartItem")
    this.cartService.removeCartItem(this.cartItem.id)
  }
}
