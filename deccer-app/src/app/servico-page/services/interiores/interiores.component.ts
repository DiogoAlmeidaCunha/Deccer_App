import { faPaintRoller } from '@fortawesome/free-solid-svg-icons';

import { faHammer } from '@fortawesome/free-solid-svg-icons';

import { faKaaba } from '@fortawesome/free-solid-svg-icons';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interiores',
  templateUrl: './interiores.component.html',
  styleUrls: ['./interiores.component.css']
})
export class InterioresComponent implements OnInit {

  faPaintRoller = faPaintRoller;
  faHammer = faHammer;
  faKaaba = faKaaba;
  
  images = [ " ../../../../assets/slide1.jpg" , " ../../../../assets/slide2.jpg" , "../../../../assets/slide3.jpg " ] ;


  constructor() { }

  ngOnInit(): void {
  }

}
