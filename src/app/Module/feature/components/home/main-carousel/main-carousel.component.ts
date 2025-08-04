import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { homeCarouselData } from '../../../../../../Data/mainCarouselData';

export interface carouselInt {
            name: string,
            id: string,
            imageSrc: string,
            imageAlt: string,
          }

@Component({
  selector: 'app-main-carousel',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './main-carousel.component.html',
  styleUrls: ['./main-carousel.component.scss']
})
export class MainCarouselComponent implements OnInit {

  carouselData :any[] =[]
  currentSlide = 0;

  ngOnInit() {
    this.carouselData = homeCarouselData.categories[0].featured;
     // Auto slide every 3 seconds
  setInterval(() => {
    this.nextSlide();
    }, 3000);
  }

  

  // Go to the next slide
  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.carouselData.length;
  }

  // Go to the previous slide
  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.carouselData.length) % this.carouselData.length;
  }
}
