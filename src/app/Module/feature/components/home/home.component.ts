import { Component } from '@angular/core';
import { MainCarouselComponent } from "./main-carousel/main-carousel.component";
import { ProductSliderComponent } from './product-slider/product-slider.component';
import { gounsPage1 } from '../../../../../Data/Gouns/gounsPage1';
import { menJeans } from '../../../../../Data/Men/men_jeans';
import { mensKurta } from '../../../../../Data/Men/mensKurta';
import { mensShoes } from '../../../../../Data/mensShoes';
import { lenghaCholiPage1 } from '../../../../../Data/Women/lenghaCholiPage1';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MainCarouselComponent, ProductSliderComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  menJeans: any;
  womenGouns: any;
  lenghaCholiPage1: any;
  mensKurta: any;
  mensShoes: any;

  ngOnInit() {
    this.menJeans = menJeans.slice(0, 5);
    this.womenGouns = gounsPage1.slice(0, 5);
    this.lenghaCholiPage1 = lenghaCholiPage1.slice(0, 5);
    this.mensKurta = mensKurta.slice(0,5)
    this.mensShoes = mensShoes.slice(0, 5);
  }
}
