import { CartService } from './../../../../State/Cart/cart.service';
import { ProductService } from './../../../../State/Product/product.service';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { ProductReviewCardComponent } from "./product-review-card/product-review-card.component";
import { CommonModule } from '@angular/common';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { ProductCardComponent } from "../../../shared/components/product-card/product-card.component";
import { StarRatingComponent } from "../../../shared/components/star-rating/star-rating.component";
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { AppState } from '../../../../Models/AppState';


@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [MatRadioModule, FormsModule, MatButtonModule, ProductReviewCardComponent, CommonModule, MatProgressBarModule, ProductCardComponent, StarRatingComponent],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {

  selectedSize:any;
  reviews = [1, 1, 1];
  reletedProducts:any;
  product: any;
  productId: any;

  constructor(private router: Router,
    private productservice: ProductService,
    private CartService:CartService,
    private store : Store<AppState>,
    private activatedRoute:ActivatedRoute
  
  ){

  }

  ngOnInit(){
   const id = this.activatedRoute.snapshot.paramMap.get("id");

  if (id) {
    this.productservice.findProductById(id);
  } else {
    console.error("❌ Product ID not found in URL route");
  }
  this.productId=id
  this.store.pipe(select(store=>store.product)).subscribe((product)=>
         {
           this.product=product?.product
           console.log("store data ", product.product)
         });


  }


  handleAddToCart(){
    console.log("Selected Size",this.selectedSize)
    const data = {size:this.selectedSize, productId:this.productId}
    this.CartService.addItemToCart(data)
    this.CartService.getCart()
    this.router.navigate(['cart'])
  }
}
