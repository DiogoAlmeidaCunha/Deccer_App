import { Component, OnInit } from '@angular/core';
//import { CarouselNavigation} from '../carousel-navigation/carousel-navigation.component'

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit {

  //attr = ['s1','s2','s3'];

  constructor() { }

  ngOnInit(): void {
  } 

  openInstagram(name){

    if(name=="af"){
      window.open("https://www.af-reabilitacao.com/");

    } else if(name=="jun"){
      window.open("https://www.instagram.com/aventur.desporto/");

    }
  }
}
