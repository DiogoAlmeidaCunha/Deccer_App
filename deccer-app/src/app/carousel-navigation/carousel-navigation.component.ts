import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel-navigation',
  templateUrl: './carousel-navigation.component.html',
  styleUrls: ['./carousel-navigation.component.css'],
  providers: [NgbCarouselConfig]
})
export class CarouselNavigationComponent implements OnInit {

  img1 = 'file:///C:/Users/DiogoCunha/Documents/GitHub/Deccer_App/deccer-app/src/images/bg1.jpg';
  img2 =  "C:\Users\DiogoCunha\Documents\GitHub\Deccer_App\deccer-app\src\images\bg1.jpg";
  img3 = "C:\Users\DiogoCunha\Documents\GitHub\Deccer_App\deccer-app\src\images\bg1.jpg";
  IMG = [this.img1,this.img2,this.img3];
  
  images = ['https://wallpaperaccess.com/full/528462.jpg', 
  'https://vistapointe.net/images/architecture-2.jpg',
  'https://images4.alphacoders.com/833/833515.jpg'];

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
