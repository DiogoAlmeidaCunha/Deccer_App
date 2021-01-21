import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servico-page',
  templateUrl: './servico-page.component.html',
  styleUrls: ['./servico-page.component.css']
})
export class ServicoPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

  btnClick= function () {
    this.router.navigateByUrl('/orcamento');
};

}
