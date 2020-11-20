import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-orcamento-page',
  templateUrl: './orcamento-page.component.html',
  styleUrls: ['./orcamento-page.component.css']
})
export class OrcamentoPageComponent implements OnInit {

  faCoffee = faCoffee;

  
  constructor() { }

  ngOnInit(): void {
  }

}
