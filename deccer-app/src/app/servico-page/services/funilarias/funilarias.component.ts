import { Component, OnInit } from '@angular/core';

import { faRing } from '@fortawesome/free-solid-svg-icons';

import { faPager } from '@fortawesome/free-solid-svg-icons';

import { faKaaba } from '@fortawesome/free-solid-svg-icons';

import { faSquare } from '@fortawesome/free-solid-svg-icons';

import { faWrench } from '@fortawesome/free-solid-svg-icons';

import { faLifeRing } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-funilarias',
  templateUrl: './funilarias.component.html',
  styleUrls: ['./funilarias.component.css']
})
export class FunilariasComponent implements OnInit {

  faRing = faRing;
  faPager = faPager;
  faKaaba = faKaaba;

  faSquare = faSquare;
  faWrench = faWrench;
  faLifeRing = faLifeRing;

  constructor() { }

  ngOnInit(): void {
  }

}
