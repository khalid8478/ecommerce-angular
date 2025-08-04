import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HomeComponent } from "./components/home/home.component";
import { FeatureComponent } from "./components/feature.component";
import { HomeProductCardComponent } from "./components/home/home-product-card/home-product-card.component";
import { MainCarouselComponent } from "./components/home/main-carousel/main-carousel.component";
import { ProductSliderComponent } from "./components/home/product-slider/product-slider.component";
import { ProductsComponent } from "./components/products/products.component";
import { MatButtonModule } from "@angular/material/button";
import { MatMenuModule } from "@angular/material/menu";
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from "@angular/forms";
import { MatDividerModule } from "@angular/material/divider";





@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    FeatureComponent,
    HomeComponent,
    MainCarouselComponent,
    ProductSliderComponent,
    HomeProductCardComponent,
    ProductsComponent,
    MatButtonModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDividerModule
  ],
  exports:[
    HomeComponent,
    ProductsComponent
  ]
})
export class FeatureModule { }
