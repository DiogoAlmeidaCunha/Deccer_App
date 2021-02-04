import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel-navigation',
  templateUrl: './carousel-navigation.component.html',
  styleUrls: ['./carousel-navigation.component.css'],
  providers: [NgbCarouselConfig]
})
export class CarouselNavigationComponent implements OnInit {

 
  
  images = ['../../assets/bg_1.JPG',
    'https://vistapointe.net/images/architecture-2.jpg', 
  'https://images7.alphacoders.com/927/927657.jpg'
  ];

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 7000;
    config.wrap = true;
    config.keyboard = true;
    config.pauseOnHover = true;
  }

  ngOnInit(): void {
  }

}
