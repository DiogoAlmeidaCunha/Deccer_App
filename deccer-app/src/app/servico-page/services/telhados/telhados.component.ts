import { Component, OnInit } from '@angular/core';

import { faRing } from '@fortawesome/free-solid-svg-icons';

import { faPager } from '@fortawesome/free-solid-svg-icons';

import { faKaaba } from '@fortawesome/free-solid-svg-icons';

import { faSquare } from '@fortawesome/free-solid-svg-icons';

import { faWrench } from '@fortawesome/free-solid-svg-icons';

import { faLifeRing } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-funilarias',
  templateUrl: './telhados.component.html',
  styleUrls: ['./telhados.component.css']
})
export class TelhadosComponent implements OnInit {

  faRing = faRing;
  faPager = faPager;
  faKaaba = faKaaba;

  faSquare = faSquare;
  faWrench = faWrench;
  faLifeRing = faLifeRing;

  images = [ " ../../../../assets/tel1.jpg" , 
  " ../../../../assets/tel2.jpg" , 
  "../../../../assets/tel3.jpg " , 
  "../../../../assets/tel4.JPG " ] ;

  
  constructor() { }

  ngOnInit(): void {
  }

}
