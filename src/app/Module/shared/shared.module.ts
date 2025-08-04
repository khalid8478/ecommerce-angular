import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavContentComponent } from './components/navbar/nav-content/nav-content.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { StarRatingComponent } from './components/star-rating/star-rating.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { AddressCardComponent } from './components/address-card/address-card.component';
import { OrderTrackerComponent } from './components/order-tracker/order-tracker.component';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
  ],
  imports: [
     CommonModule,
    MatButtonModule,
    MatIconModule,
    NavbarComponent,         // ✅ standalone component হলে imports-এ রাখতে হবে
    FooterComponent,
    NavContentComponent,
    StarRatingComponent,
    CartItemComponent,
    AddressCardComponent,
    OrderTrackerComponent,
    MatDialogModule
  ],
  exports:[
    NavbarComponent,
    FooterComponent,
    

  ]
})
export class SharedModule { }
