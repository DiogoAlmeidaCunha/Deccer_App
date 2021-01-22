import { Component, OnInit } from '@angular/core';

import { faRing } from '@fortawesome/free-solid-svg-icons';

import { faPager } from '@fortawesome/free-solid-svg-icons';

import { faKaaba } from '@fortawesome/free-solid-svg-icons';

import { faBezierCurve } from '@fortawesome/free-solid-svg-icons';

import { faCircle } from '@fortawesome/free-solid-svg-icons';

import { faLifeRing } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-canalizacoes',
  templateUrl: './canalizacoes.component.html',
  styleUrls: ['./canalizacoes.component.css']
})
export class CanalizacoesComponent implements OnInit {

  faRing = faRing;
  faPager = faPager;
  faKaaba = faKaaba;

  faBezierCurve = faBezierCurve;
  faCircle = faCircle;
  faLifeRing = faLifeRing;

  constructor() { }

  ngOnInit(): void {
  }

}
