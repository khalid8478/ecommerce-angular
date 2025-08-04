import { CartService } from './State/Cart/cart.service';
import { Component } from '@angular/core';
import { FeatureModule } from './Module/feature/feature.module';
import { SharedModule } from './Module/shared/shared.module';
import { ProductsComponent } from "./Module/feature/components/products/products.component";
import { Router, RouterModule } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Store, select } from '@ngrx/store';
import { AppState } from './Models/AppState';
import { UserService } from './State/User/user.service';



@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'] // ✅ ঠিক করা হয়েছে
  ,
  imports: [
    FeatureModule,
    SharedModule,
    RouterModule
]
  
  
})

export class AppComponent {
  title = 'ecommerce-angular';

  constructor(private router:Router,
    private dialog : MatDialog,
    private userService:UserService,
    private cartService: CartService,
    private store: Store<AppState>){
  
    }
    ngOnInit(){
      if(localStorage.getItem("jwt"))
      {
        this.userService.getUserProfile()
        this.cartService.getCart()
      }
  
        this.store.pipe(select ((store) => store.auth)).subscribe((user)=>{
          this.userService.getUserProfile()
          this.cartService.getCart()
          console.log("store", user)
          
        })
    }
}


