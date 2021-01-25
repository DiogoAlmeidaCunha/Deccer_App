import { Component, OnInit } from '@angular/core';

import { faPaintRoller } from '@fortawesome/free-solid-svg-icons';

import { faHammer } from '@fortawesome/free-solid-svg-icons';

import { faKaaba } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-exteriores',
  templateUrl: './exteriores.component.html',
  styleUrls: ['./exteriores.component.css']
})
export class ExterioresComponent implements OnInit {

  faPaintRoller = faPaintRoller;
  faHammer = faHammer;
  faKaaba = faKaaba;
  
  images = [ " ../../../../assets/slide1.jpg" , " ../../../../assets/slide2.jpg" , "../../../../assets/slide3.jpg " ] ;

  
  constructor() { }

  ngOnInit(): void {
  }

}
