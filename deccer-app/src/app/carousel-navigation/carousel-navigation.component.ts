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

  //images = [700, 533, 807, 124].map((n) => `https://picsum.photos/id/${n}/900/500`);

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 5000;
    config.wrap = true;
    config.keyboard = true;
    config.pauseOnHover = true;
  }

  ngOnInit(): void {
  }

}
